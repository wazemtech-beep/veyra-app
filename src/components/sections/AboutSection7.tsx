"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function AboutSection7() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutSection7;
  return (
    <section
      className="rt-section-top-md rt-section-bottom-sm"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-flex-center-space-between">
          <div className="rt-grid-wrap-5">
            <div className="rt-sub-text">{content.eyebrow}</div>
            <h2 data-value-blur="">
              {content.heading}
              <span className="rt-highilight-text">{content.ideas}</span>
              {content.heading2}
            </h2>
            <div className="rt-text-bottom-gap-v1">
              <p {...{ text: "apear" }} className="rt-bottom-no-gap">
                {content.description}
              </p>
            </div>
            <div className="w-layout-vflex rt-service-v1-list-block rt-text-top-gap-v1 rt-text-bottom-gap-v1">
              <div
                data-value-blur=""
                className="w-layout-hflex rt-service-v1-list"
              >
                <div className="rt-no-shrink">
                  <Image
                    src={content.portfolioListIconImage}
                    alt={content.portfolioListIconAlt}
                    width={20}
                    height={21}
                    sizes="20px"
                  />
                </div>
                <div className="rt-dark-text">
                  {content.wireframingAndPrototyping}
                </div>
              </div>
              <div
                data-value-blur=""
                className="w-layout-hflex rt-service-v1-list"
              >
                <div className="rt-no-shrink">
                  <Image
                    src={content.portfolioListIconImage}
                    alt={content.portfolioListIconAlt}
                    width={20}
                    height={21}
                    sizes="20px"
                  />
                </div>
                <div className="rt-dark-text">
                  {content.userInterfaceDesignForWebAndMobileApps}
                </div>
              </div>
              <div
                data-value-blur=""
                className="w-layout-hflex rt-service-v1-list"
              >
                <div className="rt-no-shrink">
                  <Image
                    src={content.portfolioListIconImage}
                    alt={content.portfolioListIconAlt}
                    width={20}
                    height={21}
                    sizes="20px"
                  />
                </div>
                <div className="rt-dark-text">
                  {content.usabilityTestingAndUserFeedbackAnalysis}
                </div>
              </div>
              <div
                data-value-blur=""
                className="w-layout-hflex rt-service-v1-list"
              >
                <div className="rt-no-shrink">
                  <Image
                    src={content.portfolioListIconImage}
                    alt={content.portfolioListIconAlt}
                    width={20}
                    height={21}
                    sizes="20px"
                  />
                </div>
                <div className="rt-dark-text">
                  {content.interactionDesignAndMicroAnimations}
                </div>
              </div>
            </div>
            <div {...{ "data-scroll": "fade-in" }} className="w-layout-hflex">
              <Link
                href={content.startYourJourneystartYourJourneyHref}
                {...{ button: "hover-wrap" }}
                className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
              >
                <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                  <div
                    button-one="text"
                    className="rt-button-text rt-button-text-v1"
                  >
                    {content.startYourJourney}
                  </div>
                  <div
                    button-one="text"
                    className="rt-button-text rt-button-text-v2"
                  >
                    {content.startYourJourney}
                  </div>
                </div>
                <div className="rt-button-v1-border">
                  <div className="rt-button-v1-border-overlay"></div>
                </div>
              </Link>
            </div>
          </div>
          <div className="rt-grid-wrap-6 rt-stretch-verticle">
            <div
              image-apear="wrapper"
              className="rt-image-wrap rt-radius-v2 rt-overflow-hidden"
            >
              <Image
                image-apear="image"
                alt={content.journeyImageAlt}
                src={content.journeyImageImage}
                className="rt-image-effect"
                width={300}
                height={351}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
              <div className="rt-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
