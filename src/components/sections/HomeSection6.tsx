"use client";
import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeSection6() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeSection6;
  return (
    <section className="rt-section-top-lg" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-flex-top-space-between rt-faq-v1-flex-wrapper">
          <div className="rt-grid-wrap-4 rt-sticky-wrap">
            <div className="rt-sub-text">{content.eyebrow}</div>
            <h2 data-value-blur="" className="rt-bottom-no-gap">
              {content.heading}
              <span className="rt-highilight-text">{content.know}</span>
              {content.heading2}
            </h2>
          </div>
          <div className="rt-grid-wrap-6">
            <div className="w-layout-vflex rt-faq-v1-wrapper rt-overflow-hidden">
              {content.questions.map((item, index) => (
                <div faq-wrap="block" className={item.className} key={index}>
                  <div className="w-layout-hflex rt-faq-v1-top-wrap">
                    <div className="rt-sub-text">{item.label}</div>
                    <div className="rt-faq-v1-icon">
                      <div
                        {...{ faq: "icon-one" }}
                        className="rt-faq-minus"
                      ></div>
                      <div className="rt-faq-plus"></div>
                    </div>
                  </div>
                  <div className="rt-faq-v1-bottom-wrap">
                    <div className="rt-faq-v1-content rt-grid-wrap-4">
                      <p className="rt-bottom-no-gap">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          {...{ "data-scroll": "pop-up" }}
          className="w-layout-hflex rt-faq-cta-block rt-flex-center-space-between rt-wrap-top-gap-v1"
        >
          <div className="rt-grid-wrap-4">
            <div
              title={content.apearanceTitle}
              className="rt-text-style-h6 rt-text-white"
            >
              {content.notSureWhereToBeginYourProject}
            </div>
            <div className="rt-grid-wrap-4 rt-text-top-gap-v1">
              <p
                {...{ text: "apear" }}
                className="rt-light-text rt-bottom-no-gap"
              >
                {content.description7}
              </p>
            </div>
          </div>
          <div className="rt-inline-flex rt-flex-center-center">
            <Link
              href={content.scheduleAConsultationScheduleAConsuHref}
              {...{ button: "hover-wrap" }}
              className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
            >
              <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                <div
                  button-one="text"
                  className="rt-button-text w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1 rt-button-text-v1"
                >
                  {content.scheduleAConsultation}
                </div>
                <div
                  button-one="text"
                  className="rt-button-text w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1 rt-button-text-v2"
                >
                  {content.scheduleAConsultation}
                </div>
              </div>
              <div className="rt-button-v1-border w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1">
                <div className="rt-button-v1-border-overlay w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
