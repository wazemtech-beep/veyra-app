"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { serviceAnimation } from "@/hooks/pages/serviceAnimation";
import { mountBrisifyInteractions } from "@/hooks/brisify/interactions";

import Navbar from "@/components/layout/Navbar";
import ServiceInnerHeroV1 from "@/components/sections/ServiceInnerHeroV1";
import ServiceSection1 from "@/components/sections/ServiceSection1";
import ServiceSection2 from "@/components/sections/ServiceSection2";
import ServiceSection3 from "@/components/sections/ServiceSection3";
import ServiceCtaV2 from "@/components/sections/ServiceCtaV2";
import ServiceSection4 from "@/components/sections/ServiceSection4";
import ServiceSection5 from "@/components/sections/ServiceSection5";
import ServiceSection6 from "@/components/sections/ServiceSection6";
import Footer from "@/components/layout/Footer";
export default function ServiceView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, serviceAnimation, mountBrisifyInteractions);
  return (
    <div ref={rootRef} className="brisify-site">
      <Navbar />
      <main>
        <ServiceInnerHeroV1 />
        <ServiceSection1 />
        <ServiceSection2 />
        <ServiceSection3 />
        <ServiceCtaV2 />
        <ServiceSection4 />
        <ServiceSection5 />
        <ServiceSection6 />
      </main>
      <Footer />
    </div>
  );
}
