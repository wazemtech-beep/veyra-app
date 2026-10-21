"use client";
import { useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
export default function AboutSection2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutSection2;
  return (
    <section ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
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
                  {content.heading}
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
                  {content.heading2}
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
                  {content.heading3}
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
                  {content.heading4}
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
