"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function PortfolioCreativeThinkingDeliveredDailySection3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content =
    siteConfig.sections.portfolioCreativeThinkingDeliveredDailySection3;
  return (
    <section className="rt-section-bottom-md" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-flex-center-space-between">
          <div className="rt-grid-wrap-6 rt-stretch-verticle">
            <div
              image-apear="wrapper"
              className="rt-image-wrap rt-radius-v2 rt-overflow-hidden"
            >
              <Image
                image-apear="image"
                alt={content.Alt}
                src={content.portfolioCounterImageImage}
                className="rt-image-effect"
                width={300}
                height={291}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
              <div className="rt-image-overlay"></div>
            </div>
          </div>
          <div className="rt-grid-wrap-5">
            <div className="rt-sub-text">{content.eyebrow}</div>
            <div className="rt-overflow-hidden">
              <h2 data-value-blur="">
                {content.heading}
                <span className="rt-highilight-text">{content.business}</span>
                {content.heading2}
              </h2>
            </div>
            <div className="rt-text-bottom-gap-v1 rt-grid-wrap-4">
              <p {...{ text: "apear" }} className="rt-bottom-no-gap">
                {content.description}
              </p>
            </div>
            <div className="w-layout-grid rt-portfolio-counter-grid rt-wrap-top-gap-v2">
              <div
                {...{ "data-scroll": "pop-up" }}
                className="w-layout-vflex rt-portfolio-counter-wrap"
              >
                <div data-counter="150+" className="rt-text-style-h4">
                  {content.value150}
                </div>
                <div>{content.projectsCompleted}</div>
              </div>
              <div
                {...{ "data-scroll": "pop-up" }}
                className="w-layout-vflex rt-portfolio-counter-wrap"
              >
                <div data-counter="35" className="rt-text-style-h4">
                  {content.value35}
                </div>
                <div>{content.industriesServed}</div>
              </div>
              <div
                {...{ "data-scroll": "pop-up" }}
                className="w-layout-vflex rt-portfolio-counter-wrap"
              >
                <div data-counter="98%" className="rt-text-style-h4">
                  {content.value98}
                </div>
                <div>{content.clientSatisfactionScore}</div>
              </div>
              <div
                {...{ "data-scroll": "pop-up" }}
                className="w-layout-vflex rt-portfolio-counter-wrap"
              >
                <div data-counter="450+" className="rt-text-style-h4">
                  {content.value450}
                </div>
                <div>{content.consultingEngagements}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
