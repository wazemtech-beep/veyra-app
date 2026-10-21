"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { contactAnimation } from "@/hooks/pages/contactAnimation";
import { mountBrisifyInteractions } from "@/hooks/brisify/interactions";

import Navbar from "@/components/layout/Navbar";
import ContactInnerHeroV1 from "@/components/sections/ContactInnerHeroV1";
import ContactSection1 from "@/components/sections/ContactSection1";
import ContactSection2 from "@/components/sections/ContactSection2";
import Footer from "@/components/layout/Footer";
export default function ContactView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, contactAnimation, mountBrisifyInteractions);
  return (
    <div ref={rootRef} className="brisify-site">
      <Navbar />
      <main>
        <ContactInnerHeroV1 />
        <ContactSection1 />
        <ContactSection2 />
      </main>
      <Footer />
    </div>
  );
}
