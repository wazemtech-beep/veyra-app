"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { homeAnimation } from "@/hooks/pages/homeAnimation";
import { mountBrisifyInteractions } from "@/hooks/brisify/interactions";

import Navbar from "@/components/layout/Navbar";
import HomeHeroOne from "@/components/sections/HomeHeroOne";
import HomeSection1 from "@/components/sections/HomeSection1";
import HomeSection2 from "@/components/sections/HomeSection2";
import HomeServiceV1 from "@/components/sections/HomeServiceV1";
import HomeAboutV5 from "@/components/sections/HomeAboutV5";
import HomeSection3 from "@/components/sections/HomeSection3";
import HomeSection4 from "@/components/sections/HomeSection4";
import HomeSection5 from "@/components/sections/HomeSection5";
import HomeCtaV2 from "@/components/sections/HomeCtaV2";
import HomeSection6 from "@/components/sections/HomeSection6";
import HomeSection7 from "@/components/sections/HomeSection7";
import Footer from "@/components/layout/Footer";
export default function HomeView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, homeAnimation, mountBrisifyInteractions);
  return (
    <div ref={rootRef} className="brisify-site">
      <Navbar />
      <main>
        <HomeHeroOne />
        <HomeSection1 />
        <HomeSection2 />
        <HomeServiceV1 />
        <HomeAboutV5 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <div>
          <HomeCtaV2 />
          <div className="div-block">
            <HomeSection6 />
          </div>
        </div>
        <main className="rt-section-bottom-md rt-section-top-md">
          <HomeSection7 />
        </main>
      </main>
      <Footer />
    </div>
  );
}
