"use client";
import { useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
export default function ContactSection2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.contactSection2;
  return (
    <section className="rt-section-bottom-lg" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-flex-top-space-between rt-faq-v1-flex-wrapper">
          <div className="rt-grid-wrap-5 rt-sticky-wrap">
            <div className="rt-sub-text">{content.eyebrow}</div>
            <h2 data-value-blur="" className="rt-bottom-no-gap">
              {content.heading}
              <span className="rt-highilight-text">{content.before}</span>
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
      </div>
    </section>
  );
}
