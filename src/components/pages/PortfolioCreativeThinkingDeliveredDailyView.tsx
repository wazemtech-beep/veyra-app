"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { portfolioCreativeThinkingDeliveredDailyAnimation } from "@/hooks/pages/portfolioCreativeThinkingDeliveredDailyAnimation";
import { mountBrisifyInteractions } from "@/hooks/brisify/interactions";

import Navbar from "@/components/layout/Navbar";
import PortfolioCreativeThinkingDeliveredDailyInnerHeroV1 from "@/components/sections/PortfolioCreativeThinkingDeliveredDailyInnerHeroV1";
import PortfolioCreativeThinkingDeliveredDailySection1 from "@/components/sections/PortfolioCreativeThinkingDeliveredDailySection1";
import PortfolioCreativeThinkingDeliveredDailySection2 from "@/components/sections/PortfolioCreativeThinkingDeliveredDailySection2";
import PortfolioCreativeThinkingDeliveredDailySection3 from "@/components/sections/PortfolioCreativeThinkingDeliveredDailySection3";
import PortfolioCreativeThinkingDeliveredDailySection4 from "@/components/sections/PortfolioCreativeThinkingDeliveredDailySection4";
import Footer from "@/components/layout/Footer";
export default function PortfolioCreativeThinkingDeliveredDailyView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(
    rootRef,
    portfolioCreativeThinkingDeliveredDailyAnimation,
    mountBrisifyInteractions,
  );
  return (
    <div ref={rootRef} className="brisify-site">
      <Navbar />
      <main>
        <PortfolioCreativeThinkingDeliveredDailyInnerHeroV1 />
        <PortfolioCreativeThinkingDeliveredDailySection1 />
        <PortfolioCreativeThinkingDeliveredDailySection2 />
        <PortfolioCreativeThinkingDeliveredDailySection3 />
        <PortfolioCreativeThinkingDeliveredDailySection4 />
      </main>
      <Footer />
    </div>
  );
}
