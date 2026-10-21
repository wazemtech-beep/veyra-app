"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { page404Animation } from "@/hooks/pages/page404Animation";
import { mountBrisifyInteractions } from "@/hooks/brisify/interactions";

import Navbar from "@/components/layout/Navbar";
import Page404UtilityPageWrap from "@/components/sections/Page404UtilityPageWrap";
import Footer from "@/components/layout/Footer";
export default function Page404View() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(rootRef, page404Animation, mountBrisifyInteractions);
  return (
    <div ref={rootRef} className="brisify-site">
      <Navbar />
      <Page404UtilityPageWrap />
      <Footer />
    </div>
  );
}
