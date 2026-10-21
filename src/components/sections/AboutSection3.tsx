"use client";
import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function AboutSection3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutSection3;
  return (
    <section
      className="rt-section-top-sm rt-section-bottom-lg rt-overflow-hidden"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-flex-center-space-between">
          <div className="rt-grid-wrap-5">
            <div className="rt-sub-text">{content.eyebrow}</div>
            <div className="rt-overflow-hidden">
              <h3 data-value-blur="">
                {content.heading}
                <span className="rt-highilight-text">{content.process}</span>
                {content.heading2}
              </h3>
            </div>
            <div className="rt-text-bottom-gap-v1 rt-overflow-hidden">
              <p {...{ text: "apear" }} className="rt-bottom-no-gap">
                {content.description}
              </p>
            </div>
            <div {...{ "data-scroll": "fade-up" }} className="w-layout-hflex">
              <Link
                href={content.letSTalkletSTalkHref}
                {...{ button: "hover-wrap" }}
                className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
              >
                <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                  <div
                    button-one="text"
                    className="rt-button-text rt-button-text-v1"
                  >
                    {content.letSTalk}
                  </div>
                  <div
                    button-one="text"
                    className="rt-button-text rt-button-text-v2"
                  >
                    {content.letSTalk}
                  </div>
                </div>
                <div className="rt-button-v1-border">
                  <div className="rt-button-v1-border-overlay"></div>
                </div>
              </Link>
            </div>
          </div>
          <div className="rt-grid-wrap-5">
            <div className="w-layout-vflex rt-service-v3-content-block rt-position-relative rt-wrap-top-gap-v1">
              <div className="w-layout-hflex rt-service-v3-list rt-z-index-1">
                <div className="w-layout-vflex rt-service-v3-icon-wrap rt-flex-center-center rt-no-shrink">
                  <div className="rt-sub-text">{content.eyebrow2}</div>
                </div>
                <div
                  service-icon-content="one-list"
                  className="w-layout-vflex rt-service-v3-list-content"
                >
                  <div className="rt-text-style-h6">
                    {content.discoveryAndResearch}
                  </div>
                  <p className="rt-bottom-no-gap rt-dark-text">
                    {content.description2}
                  </p>
                </div>
              </div>
              <div className="w-layout-hflex rt-service-v3-list rt-z-index-1">
                <div className="w-layout-vflex rt-service-v3-icon-wrap rt-flex-center-center rt-no-shrink rt-z-index-1">
                  <div className="rt-sub-text">{content.eyebrow3}</div>
                </div>
                <div
                  service-icon-content="two-list"
                  className="w-layout-vflex rt-service-v3-list-content"
                >
                  <div className="rt-text-style-h6">
                    {content.strategyAndPlanning}
                  </div>
                  <p className="rt-bottom-no-gap rt-dark-text">
                    {content.description3}
                  </p>
                </div>
              </div>
              <div className="w-layout-hflex rt-service-v3-list rt-z-index-1">
                <div className="w-layout-vflex rt-service-v3-icon-wrap rt-flex-center-center rt-no-shrink rt-z-index-1">
                  <div className="rt-sub-text">{content.eyebrow4}</div>
                </div>
                <div
                  service-icon-content="three-list"
                  className="w-layout-vflex rt-service-v3-list-content"
                >
                  <div className="rt-text-style-h6">
                    {content.developmentAndExecution}
                  </div>
                  <p className="rt-bottom-no-gap rt-dark-text">
                    {content.description4}
                  </p>
                </div>
              </div>
              <div className="rt-service-v3-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
