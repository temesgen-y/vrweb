import { Briefcase, CircleDot, MessageCircleQuestion, Sparkles, Users, Video, type LucideIcon } from "lucide-react";

/**
 * Availability of each capability.
 *
 * - "live":            available to all users today
 * - "beta":            available to a limited group / early access
 * - "in-development":  being built; not yet available
 *
 * Verity has not publicly launched, so every feature is marked
 * "in-development". Update each entry as capabilities ship — the badges on the
 * landing page read from here.
 */
export type FeatureStatus = "live" | "beta" | "in-development";

export const featureStatusLabel: Record<FeatureStatus, string> = {
  live: "Live",
  beta: "Beta",
  "in-development": "In development",
};

export type Feature = {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  status: FeatureStatus;
};

/** Shown in the landing page capability grid. */
export const featuredFeatures: Feature[] = [
  {
    id: "smart-feed",
    title: "Smart Social Feed",
    icon: Sparkles,
    summary: "A feed organised by intent: Learn, Debate, Entertain, Build, Sell, and Inspire.",
    status: "in-development",
  },
  {
    id: "ask-expert",
    title: "Ask an Expert",
    icon: MessageCircleQuestion,
    summary: "Privately ask verified experts your questions and get advice you can trust.",
    status: "in-development",
  },
  {
    id: "consultation",
    title: "Expert Consultation",
    icon: Video,
    summary: "Book scheduled text, voice, or video consultations with professionals.",
    status: "in-development",
  },
  {
    id: "trust-ring",
    title: "Trust Ring",
    icon: CircleDot,
    summary: "A reputation system built on meaningful engagement and endorsements — not follower counts.",
    status: "in-development",
  },
  {
    id: "communities",
    title: "Communities",
    icon: Users,
    summary: "Build and join communities around shared interests, professions, and goals.",
    status: "in-development",
  },
  {
    id: "careers",
    title: "Career & Opportunity Matching",
    icon: Briefcase,
    summary: "Get connected with career and professional opportunities that fit your skills.",
    status: "in-development",
  },
];
