import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import PortfolioCreativeThinkingDeliveredDailyView from "@/components/pages/PortfolioCreativeThinkingDeliveredDailyView";
export const metadata: Metadata =
  siteConfig.metadata["/portfolio/creative-thinking-delivered-daily"];
export default function Page() {
  return <PortfolioCreativeThinkingDeliveredDailyView />;
}
