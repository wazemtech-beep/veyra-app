"use client";
import { useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
export default function PortfolioOneInnerHeroV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.portfolioOneInnerHeroV1;
  return (
    <section className="rt-inner-hero-v1 rt-section-bottom-sm" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="rt-grid-wrap-7 rt-margin-auto">
          <div className="w-layout-hflex rt-hero-v3-text-wrap">
            <h1 inner-hero="top-text" className="rt-no-gap">
              {content.title}
            </h1>
            <div
              inner-hero="highlighted"
              className="rt-stylish-font rt-text-grey"
            >
              {content.work}
            </div>
          </div>
          <div className="w-layout-hflex rt-hero-v2-text-image-wrap">
            <div
              inner-hero="title-two"
              className="rt-large-text-v2 rt-highilight-text"
            >
              {content.showcase}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
