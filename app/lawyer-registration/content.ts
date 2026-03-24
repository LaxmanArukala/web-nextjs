import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  CheckCircle2,
  Globe2,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export const WIZARD_STEPS = ["Account", "Practice", "Go live"] as const;

export type SidePanelBullet = { Icon: LucideIcon; text: string };

export type SidePanelCopy = {
  eyebrow: string;
  title: string;
  lede: string;
  bullets: SidePanelBullet[];
};

export const SIDE_PANELS: SidePanelCopy[] = [
  {
    eyebrow: "LegalHub for advocates",
    title: "Be found by clients who need you",
    lede:
      "LegalHub is a modern legal marketplace: people search by city and practice area, read verified profiles, and reach out when they are ready. Your account is the first step toward a live, searchable presence.",
    bullets: [
      { Icon: Users, text: "Appear alongside peers in a directory built for trust and clarity." },
      { Icon: Globe2, text: "One place for your credentials—no scattered PDFs or phone tags." },
      { Icon: ShieldCheck, text: "We emphasize verified enrollment and transparent contact paths." },
    ],
  },
  {
    eyebrow: "Your practice story",
    title: "Turn credentials into a profile that converts",
    lede:
      "Clients compare specialization, experience, and location in seconds. The details you add here power how LegalHub matches you to the right inquiries and helps you stand out in your region.",
    bullets: [
      { Icon: Briefcase, text: "Bar enrollment and practice areas help us route serious leads." },
      { Icon: TrendingUp, text: "Experience and city help clients feel confident before they call." },
      { Icon: Sparkles, text: "Later you can add media, fees, and availability from your dashboard." },
    ],
  },
  {
    eyebrow: "Almost there",
    title: "Publish once—stay discoverable 24/7",
    lede:
      "When you create your profile, your information becomes part of LegalHub’s search and recommendation experience. You can update your bio anytime; this step is your public debut on the platform.",
    bullets: [
      { Icon: CheckCircle2, text: "Review everything once—then you’re live for clients to find." },
      { Icon: Scale, text: "Terms keep the community professional for lawyers and clients alike." },
      { Icon: Sparkles, text: "Questions later? Our team and in-app help are here for you." },
    ],
  },
];

export const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    bgcolor: "rgba(255,255,255,0.92)",
    transition: "box-shadow 0.2s ease, border-color 0.2s ease",
    "&:hover fieldset": { borderColor: "primary.light" },
    "&.Mui-focused fieldset": { borderWidth: 2 },
  },
} as const;
