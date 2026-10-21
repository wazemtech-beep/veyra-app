"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function PortfolioCreativeThinkingDeliveredDailySection2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content =
    siteConfig.sections.portfolioCreativeThinkingDeliveredDailySection2;
  return (
    <section
      className="rt-section-top-md rt-section-bottom-md"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-vflex rt-grid-wrap-9 rt-margin-auto rt-text-center rt-flex-center-center">
          <div className="rt-sub-text">{content.eyebrow}</div>
          <h2 data-value-blur="">
            {content.heading}
            <span className="rt-highilight-text">{content.creative}</span>
            {content.heading2}
          </h2>
          <div className="rt-grid-wrap-8">
            <p {...{ text: "apear" }} className="rt-bottom-no-gap">
              {content.description}
            </p>
          </div>
        </div>
        <div
          about-card-box="wrapper"
          className="w-layout-grid rt-4-column-card-grid rt-wrap-top-gap-v1"
        >
          {content.items.map((item, index) => (
            <div
              about-card={item.aboutCard}
              className="w-layout-vflex rt-about-v6-card rt-portfolio-v6-card"
              key={index}
            >
              <div className="rt-icon-responsive">
                <Image
                  alt={content.Alt}
                  src={item.image}
                  width={72}
                  height={72}
                  sizes="72px"
                />
              </div>
              <div className="w-layout-vflex rt-service-v4-card-content-wrap">
                <div className="rt-text-style-h6">{item.title}</div>
                <div className="rt-bottom-no-gap">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
