import BuildingIcon from "@/components/icons/buildingIcon";
import GlobeIcon from "@/components/icons/globeIcon";
import PublishIcon from "@/components/icons/publishIcon";
import { Service } from "@/types/service";

export const serviceList: Service[] = [
  {
    id: 1,
    icon: <BuildingIcon />,
    title: "Building & Owning Libraries",
    text: "Create and license transcripts in-house — stop paying third parties for restricted data you can’t resell.",
  },
  {
    id: 2,
    icon: <PublishIcon />,
    title: "Publishing at Volume & Speed",
    text: "Deliver thousands of finance-grade transcripts in hours, not days; traditional AI-only tools miss critical context.",
  },
  {
    id: 3,
    icon: <GlobeIcon />,
    title: "Maximizing Your Multilingual Coverage",
    text: "Cover Japanese, Spanish, and more without hiring and coordinating hundreds of specialised editors.",
  },
];
