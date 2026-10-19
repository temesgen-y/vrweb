#!/usr/bin/env node
/**
 * Works around a Next.js static-export bug on Windows: segment prefetch files
 * are named from Windows paths, so `__next.features.__PAGE__.txt` is written as
 * `__next.features/__PAGE__.txt` and the client's prefetch requests 404.
 * This flattens any such folders. It is a no-op on Linux/macOS builds.
 */
import { readdir, rename, rm, stat } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const OUT = new URL("../out", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

async function filesIn(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((e) => (e.isDirectory() ? filesIn(join(dir, e.name)) : [join(dir, e.name)])),
  );
  return nested.flat();
}

let moved = 0;
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (!entry.isDirectory() || entry.name === "_next") continue;
    if (entry.name.startsWith("__next.")) {
      for (const file of await filesIn(full)) {
        const flat = `${entry.name}.${relative(full, file).split(sep).join(".")}`;
        await rename(file, join(dir, flat));
        moved++;
      }
      await rm(full, { recursive: true });
    } else {
      await walk(full);
    }
  }
}

if (await stat(OUT).catch(() => null)) {
  await walk(OUT);
  if (moved) console.log(`fix-export-segments: flattened ${moved} segment file(s)`);
}
