
import type { LucideIcon } from "lucide-react";
import { Plane, Megaphone, Zap, BrainCircuit, Mail, PenTool, Briefcase, Share2, KeyRound, Gavel, Cog, Building, Globe, Heart, BookOpen, Layers, Search } from 'lucide-react';

export interface Venture {
  logo: LucideIcon;
  name: string;
  description: string;
  status: string;
  link: string;
}

export const ventures: Venture[] = [
  {
    logo: Layers,
    name: "Neup.Suite",
    description: "All your business tools, one powerful platform.",
    status: "Building",
    link: "/suite",
  },
  {
    logo: Plane,
    name: "Tourio",
    description: "The operating system for travel and tour operators in Nepal.",
    status: "Live",
    link: "/tourio",
  },
  {
    logo: Megaphone,
    name: "Neup Marketing",
    description: "A modern marketing agency for the new generation of brands.",
    status: "Live",
    link: "/marketing",
  },
    {
    logo: Globe,
    name: "Neup.Site",
    description: "Build stunning websites in minutes—no coding needed.",
    status: "Building",
    link: "/site",
  },
  {
    logo: Search,
    name: "Neup.Search",
    description: "Find what matters, instantly. Fast, private, and accurate search.",
    status: "Building",
    link: "/search",
  },
  {
    logo: Mail,
    name: "Neup Mail",
    description: "A privacy-focused email service that respects its users.",
    status: "Beta",
    link: "/mail",
  },
  {
    logo: PenTool,
    name: "Neup Design",
    description: "A product and brand design studio for ambitious companies.",
    status: "Live",
    link: "/design",
  },
  {
    logo: Briefcase,
    name: "Neup Jobs",
    description: "A talent gateway for builders to join the Neup ecosystem.",
    status: "Live",
    link: "/jobs",
  },
  {
    logo: Cog,
    name: "Neup.Works",
    description: "Nepal’s marketplace for talent & projects.",
    status: "Building",
    link: "/works",
  },
  {
    logo: Building,
    name: "Neup.Estate",
    description: "Nepal’s most trusted real estate platform.",
    status: "Building",
    link: "/estate",
  },
   {
    logo: Heart,
    name: "Neup.Heritage",
    description: "Preserve your family story, one generation at a time.",
    status: "Building",
    link: "/heritage",
  },
  {
    logo: Share2,
    name: "Neup Socials",
    description: "The distribution engine for the Neup ecosystem.",
    status: "Building",
    link: "/socials",
  },
  {
    logo: KeyRound,
    name: "NeupID",
    description: "Unified identity across the Neup ecosystem.",
    status: "Building",
    link: "/neupid",
  },
   {
    logo: Gavel,
    name: "Neup.Legis",
    description: "Making laws & regulations clear, structured, and searchable.",
    status: "Building",
    link: "/legis",
  },
  {
    logo: BookOpen,
    name: "Neup.Ledger",
    description: "Smart, secure, and transparent accounting for your business.",
    status: "Building",
    link: "/ledger",
  },
  {
    logo: Briefcase,
    name: "Neup.HR",
    description: "Simplify HR, Empower Your Team.",
    status: "Building",
    link: "/hr",
  },
  {
    logo: Zap,
    name: "Katalyst",
    description: "AI-powered tools to accelerate digital content creation.",
    status: "Building",
    link: "#",
  },
  {
    logo: BrainCircuit,
    name: "Project Synapse",
    description: "Connecting disparate digital systems into a cohesive ecosystem.",
    status: "Alpha",
    link: "#",
  },
];
