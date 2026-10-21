"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { aboutAnimation } from "@/hooks/pages/aboutAnimation";
import { mountBrisifyInteractions } from "@/hooks/brisify/interactions";

import Navbar from "@/components/layout/Navbar";
import AboutInnerHeroV1 from "@/components/sections/AboutInnerHeroV1";
import AboutSection1 from "@/components/sections/AboutSection1";
import AboutServiceV2 from "@/components/sections/AboutServiceV2";
import AboutSection2 from "@/components/sections/AboutSection2";
import AboutSection3 from "@/components/sections/AboutSection3";
import AboutMissionV1 from "@/components/sections/AboutMissionV1";
import AboutSection4 from "@/components/sections/AboutSection4";
import AboutSection5 from "@/components/sections/AboutSection5";
import AboutCtaV2 from "@/components/sections/AboutCtaV2";
import AboutSection6 from "@/components/sections/AboutSection6";
import AboutSection7 from "@/components/sections/AboutSection7";
import Footer from "@/components/layout/Footer";
export default function AboutView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, aboutAnimation, mountBrisifyInteractions);
  return (
    <div ref={rootRef} className="brisify-site">
      <Navbar />
      <main>
        <AboutInnerHeroV1 />
        <AboutSection1 />
        <AboutServiceV2 />
        <AboutSection2 />
        <AboutSection3 />
        <div className="rt-mission-v1-main-wrap">
          <AboutMissionV1 />
        </div>
        <AboutSection4 />
        <AboutSection5 />
        <AboutCtaV2 />
        <AboutSection6 />
        <AboutSection7 />
      </main>
      <Footer />
    </div>
  );
}
