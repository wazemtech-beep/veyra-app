"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { journalAnimation } from "@/hooks/pages/journalAnimation";
import { mountBrisifyInteractions } from "@/hooks/brisify/interactions";

import Navbar from "@/components/layout/Navbar";
import JournalInnerHeroV1 from "@/components/sections/JournalInnerHeroV1";
import JournalBlogHero from "@/components/sections/JournalBlogHero";
import Footer from "@/components/layout/Footer";
export default function JournalView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, journalAnimation, mountBrisifyInteractions);
  return (
    <div ref={rootRef} className="brisify-site">
      <Navbar />
      <main>
        <JournalInnerHeroV1 />
        <JournalBlogHero />
      </main>
      <Footer />
    </div>
  );
}
