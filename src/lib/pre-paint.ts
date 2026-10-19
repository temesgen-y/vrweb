/**
 * Storage key and the inline script that runs in <head> before first paint.
 * Kept in a plain module (not "use client") so the server layout can import
 * the script as a string.
 */

export const THEME_STORAGE_KEY = "verity-theme";

const themeScript = `var t=localStorage.getItem("${THEME_STORAGE_KEY}");document.documentElement.classList.toggle("dark",t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches));`;

export const prePaintScript = `try{${themeScript}}catch(e){}`;
