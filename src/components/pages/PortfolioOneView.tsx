"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { portfolioOneAnimation } from "@/hooks/pages/portfolioOneAnimation";
import { mountBrisifyInteractions } from "@/hooks/brisify/interactions";

import Navbar from "@/components/layout/Navbar";
import PortfolioOneInnerHeroV1 from "@/components/sections/PortfolioOneInnerHeroV1";
import PortfolioOneSection1 from "@/components/sections/PortfolioOneSection1";
import PortfolioOneSection2 from "@/components/sections/PortfolioOneSection2";
import Footer from "@/components/layout/Footer";
export default function PortfolioOneView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, portfolioOneAnimation, mountBrisifyInteractions);
  return (
    <div ref={rootRef} className="brisify-site">
      <Navbar />
      <main>
        <PortfolioOneInnerHeroV1 />
        <PortfolioOneSection1 />
        <PortfolioOneSection2 />
      </main>
      <Footer />
    </div>
  );
}
