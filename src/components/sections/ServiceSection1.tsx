"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function ServiceSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.serviceSection1;
  return (
    <section ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-flex-center-space-between rt-overflow-hidden">
          <div hero-bottom="text-wrap" className="rt-grid-wrap-5">
            <div className="rt-sub-text">{content.eyebrow}</div>
            <h2>
              {content.heading}
              <span className="rt-highilight-text">{content.process}</span>
              {content.heading2}
            </h2>
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
                    {content.description}
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
                    {content.description2}
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
                    {content.description3}
                  </p>
                </div>
              </div>
              <div className="rt-service-v3-line"></div>
            </div>
          </div>
          <div className="rt-grid-wrap-6 rt-stretch-verticle">
            <div
              image-apear="wrapper"
              className="rt-image-wrap rt-radius-v2 rt-overflow-hidden"
            >
              <Image
                image-apear="image"
                alt={content.serviceServiceBlockImageAlt}
                src={content.serviceServiceBlockImageImage}
                className="rt-image-effect"
                width={300}
                height={284}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
              <div className="rt-image-overlay"></div>
            </div>
          </div>
        </div>
        <div className="rt-process-v1-counter-grid-wrap rt-wrap-top-gap-v1 rt-position-relative">
          <div className="w-layout-grid rt-process-v1-counter-grid rt-grid-wrap-10 rt-margin-auto">
            <div className="w-layout-hflex rt-process-v1-counter-block">
              <div
                {...{ "data-scroll": "pop-up" }}
                className="w-layout-vflex rt-process-v1-counter-wrap rt-text-center rt-flex-center-center"
              >
                <h2
                  data-counter="150+"
                  className="rt-no-gap rt-highilight-text"
                >
                  {content.heading3}
                </h2>
                <div className="rt-sub-text w-variant-fd79039b-7570-bcd9-2d1d-14fd3a310d5e">
                  {content.projectsCompleted}
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-process-v1-counter-block">
              <div
                {...{ "data-scroll": "pop-up" }}
                className="w-layout-vflex rt-process-v1-counter-wrap rt-text-center rt-flex-center-center"
              >
                <h2 data-counter="98%" className="rt-no-gap rt-highilight-text">
                  {content.heading4}
                </h2>
                <div className="rt-sub-text w-variant-fd79039b-7570-bcd9-2d1d-14fd3a310d5e">
                  {content.clientSatisfaction}
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-process-v1-counter-block">
              <div
                {...{ "data-scroll": "pop-up" }}
                className="w-layout-vflex rt-process-v1-counter-wrap rt-text-center rt-flex-center-center"
              >
                <h2
                  data-counter="450+"
                  className="rt-no-gap rt-highilight-text"
                >
                  {content.heading5}
                </h2>
                <div className="rt-sub-text w-variant-fd79039b-7570-bcd9-2d1d-14fd3a310d5e">
                  {content.consultingEngagements}
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-process-v1-counter-block">
              <div
                {...{ "data-scroll": "pop-up" }}
                className="w-layout-vflex rt-process-v1-counter-wrap rt-text-center rt-flex-center-center"
              >
                <h2 data-counter="35" className="rt-no-gap rt-highilight-text">
                  {content.heading6}
                </h2>
                <div className="rt-sub-text w-variant-fd79039b-7570-bcd9-2d1d-14fd3a310d5e">
                  {content.industriesServed}
                </div>
              </div>
            </div>
          </div>
          <div
            border-line="horizental"
            className="rt-award-v1-list-border rt-counter-line"
          ></div>
        </div>
      </div>
    </section>
  );
}
