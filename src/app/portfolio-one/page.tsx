import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import PortfolioOneView from "@/components/pages/PortfolioOneView";
export const metadata: Metadata = siteConfig.metadata["/portfolio-one"];
export default function Page() {
  return <PortfolioOneView />;
}
