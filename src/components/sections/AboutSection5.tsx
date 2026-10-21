"use client";
import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function AboutSection5() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutSection5;
  return (
    <section
      className="rt-section-top-md rt-section-bottom-md"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-flex-top-space-between-v3">
          <div className="w-layout-vflex rt-grid-wrap-3">
            <div className="rt-sub-text">{content.eyebrow}</div>
          </div>
          <div role="group" className="rt-grid-wrap-7">
            <h2 data-value-blur="" className="rt-top-no-gap">
              {content.heading}
              <span className="rt-highilight-text">{content.strategy}</span>
              {content.heading2}
            </h2>
            <div className="rt-overflow-hidden">
              <p {...{ text: "apear" }} className="rt-bottom-no-gap">
                {content.description}
              </p>
            </div>
            <div className="w-layout-hflex rt-text-top-gap-v1">
              <Link
                href={content.seeOurProcessseeOurProcessHref}
                {...{ button: "hover-wrap" }}
                className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
              >
                <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                  <div
                    button-one="text"
                    className="rt-button-text rt-button-text-v1"
                  >
                    {content.seeOurProcess}
                  </div>
                  <div
                    button-one="text"
                    className="rt-button-text rt-button-text-v2"
                  >
                    {content.seeOurProcess}
                  </div>
                </div>
                <div className="rt-button-v1-border">
                  <div className="rt-button-v1-border-overlay"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
