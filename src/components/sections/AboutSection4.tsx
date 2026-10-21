"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function AboutSection4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutSection4;
  return (
    <section className="rt-section-top-sm" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 rt-overflow-hidden w-container">
        <div className="w-layout-vflex rt-grid-wrap-7 rt-flex-center-center rt-margin-auto rt-text-center">
          <div className="rt-sub-text">{content.eyebrow}</div>
          <h2 data-value-blur="">{content.heading}</h2>
          <div className="rt-overflow-hidden">
            <p {...{ text: "apear" }} className="rt-bottom-no-gap">
              {content.description}
            </p>
          </div>
        </div>
        <div className="w-layout-grid rt-4-column-card-grid rt-wrap-top-gap-v1">
          {content.items.map((item, index) => (
            <div
              team-card="apear"
              className="w-layout-vflex rt-team-v1-card"
              key={index}
            >
              <div className="rt-team-v1-card-top-wrap rt-position-relative">
                <div className={item.className}>
                  <Image
                    alt={item.alt}
                    src={item.image}
                    className="rt-team-v1-card-image"
                    width={250}
                    height={305}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="w-layout-hflex rt-team-v1-card-social-wrap">
                  <a
                    team-social="icon-wrap"
                    href={content.value8881234567Href}
                    className="rt-team-v1-card-number-wrap w-inline-block"
                  >
                    <div team-social="number" className="rt-dark-text">
                      {content.value8881234567}
                    </div>
                  </a>
                  <div team-plus="social" className="rt-team-v1-card-icon-wrap">
                    <div className="rt-team-v1-card-icon">
                      <Image
                        src={content.teamPhoneIconImage}
                        alt={content.teamPhoneIconAlt}
                        width={25}
                        height={25}
                        sizes="25px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-team-v1-card-text-wrap">
                <div className="rt-text-style-h6">{item.title}</div>
                <div className="rt-dark-text">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="rt-grid-wrap-8 rt-margin-auto rt-wrap-top-gap-v1">
          <div
            {...{ "data-scroll": "pop-up" }}
            className="rt-team-v1-bottom-tag rt-radius-v2"
          >
            <div className="rt-body-text-bold rt-dark-text rt-text-underline rt-text-center">
              {
                content.buildingImpactfulDigitalExperiencesThatHelpAmbitiousBrandsGrowFas
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
