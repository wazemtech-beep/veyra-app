"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function ServiceCtaV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.serviceCtaV2;
  return (
    <section className="rt-cta-v2" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div
          cta-card="block"
          className="rt-cta-v2-block rt-position-relative rt-overflow-hidden rt-radius-v2"
        >
          <div while-data-scroll="image-move" className="rt-cta-v2-wrap">
            <Image
              alt={content.cta2BgImageAlt}
              src={content.cta2BgImageImage}
              cta-image="main"
              while-data-scroll="image-movement"
              className="rt-scroll-move-v1-image"
              width={1476}
              height={500}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
            <div cta-overlay="top" className="rt-cta-v2-image-overlay"></div>
          </div>
          <div className="w-layout-vflex rt-grid-wrap-7 rt-margin-auto rt-z-index-1">
            <div
              cta-content="wrap"
              className="w-layout-vflex rt-flex-center-center rt-text-center"
            >
              <div className="rt-sub-text w-variant-a55ef6ae-5a71-6df9-fd80-5c0a14b4bb91">
                {content.letSBuildSomethingExceptional}
              </div>
              <h2 cta-title="top" className="rt-text-white">
                {content.heading}
                <span className="rt-highilight-text-v2">{content.vision}</span>
                {content.heading2}
              </h2>
              <div className="rt-grid-wrap-6 rt-text-bottom-gap-v1 rt-overflow-hidden">
                <p cta-text="apear" className="rt-light-text">
                  {content.description}
                </p>
              </div>
              <div cta-button="wrapper">
                <Link
                  href={content.startYourProjectstartYourProjectHref}
                  {...{ button: "hover-wrap" }}
                  className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
                >
                  <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                    <div
                      button-one="text"
                      className="rt-button-text w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1 rt-button-text-v1"
                    >
                      {content.startYourProject}
                    </div>
                    <div
                      button-one="text"
                      className="rt-button-text w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1 rt-button-text-v2"
                    >
                      {content.startYourProject}
                    </div>
                  </div>
                  <div className="rt-button-v1-border w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1">
                    <div className="rt-button-v1-border-overlay w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
