"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function AboutSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutSection1;
  return (
    <section className="rt-section-bottom-sm" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-flex-top-space-between-v3">
          <div
            hero-bottom="text-wrap"
            className="w-layout-vflex rt-growth-v1-subtitle-wrapper"
          >
            <div className="rt-sub-text">{content.eyebrow}</div>
            <div {...{ rotation: "loop" }} className="rt-hero-circle-icon-wrap">
              <Image
                src={content.heroRoundButtonImage}
                alt={content.heroRoundButtonAlt}
                width={179}
                height={175}
                sizes="179px"
              />
            </div>
          </div>
          <div role="group" className="rt-grid-wrap-8">
            <h2 hero-bottom="text-wrap" className="rt-top-no-gap">
              {content.heading}
              <span className="rt-highilight-text">
                {content.meaningfulBrands}
              </span>
              {content.heading2}
            </h2>
            <div className="rt-grid-wrap-5 rt-overflow-hidden">
              <p {...{ text: "apear" }} className="rt-bottom-no-gap">
                {content.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
