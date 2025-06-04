import { CoverageData } from "@/components/coverage/content";
import { TCoverageSection } from "@/components/coverage/section";
import { Globe } from "lucide-react";

export const CoverageInfo: Record<string, CoverageData> = {
  "Auto Language Detection": {
    icon: <Globe size={24} color="#030303" />,
    title: "We Support English Translation for 20+ Languages",
    text: "Seamlessly handle calls where speakers switch between multiple languages such as English, Mandarin, and Japanese",
  },
  "AI + Human Accuracy": {
    icon: <Globe size={24} color="#030303" />,
    title: "We Support English Translation for 20+ Languages",

    text: "Leading translation enhanced by finance-fluent editors for terminology precision",
  },
  "Same-Day Delivery": {
    icon: <Globe size={24} color="#030303" />,
    title: "We Support English Translation for 20+ Languages",
    text: "Multi-lingual transcripts in hours, not weeks",
  },
};

export const HumanCoverage: TCoverageSection = {
  list: [
    "<1% editor acceptance rate",
    "Self-correcting AI workflow",
    "Multi-pass verification system",
    "Proprietary editing platform",
  ],
  image: {
    url: "human.png",
    width: 358,
    height: 363,
  },
};

export const DeliveryCoverage: TCoverageSection = {
  list: [
    "Under 4-hour human-perfect delivery",
    "Real-time language detection",
    "Dedicated editorial teams per client",
    "Proprietary workflow optimization",
    "Concurrent processing at scale"
  ],
  image: {
    url: "delivery.png",
    width: 434,
    height: 367,
  },
};
