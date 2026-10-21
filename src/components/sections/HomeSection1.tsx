"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function HomeSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeSection1;
  return (
    <section className="rt-section-top-sm" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-vflex rt-grid-wrap-8 rt-margin-auto rt-text-center rt-flex-center-center">
          <div className="rt-sub-text">{content.eyebrow}</div>
          <h2 data-value-blur="" className="rt-bottom-no-gap">
            {content.heading}
            <span className="rt-highilight-text">{content.strategic}</span>
            {content.heading2}
          </h2>
        </div>
        <div about-one-card="card-wrapper" className="rt-full-vh-section">
          <div className="w-layout-grid rt-3-column-card-grid rt-wrap-top-gap-v1 rt-sticky-wrap">
            <div>
              <div className="w-layout-hflex rt-about-v1-card rt-radius-v2">
                <div className="rt-about-v1-card-block-v1 rt-position-relative">
                  <div {...{ "data-scroll": "pop-up" }}>
                    <Image
                      src={content.homeAboutDashboardImage}
                      alt={content.homeAboutDashboardAlt}
                      className="rt-radius-v1"
                      width={285}
                      height={166}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div
                    left-right="move-loop-v1"
                    className="rt-about-v1-card-block-v1-card rt-v2 rt-radius-v1"
                  >
                    <Image
                      src={content.homeAboutDashboard1Image}
                      alt={content.homeAboutDashboard1Alt}
                      className="rt-radius-v1"
                      width={249}
                      height={57}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div
                    right-left="move-loop"
                    className="rt-about-v1-card-block-v1-card rt-radius-v1"
                  >
                    <Image
                      src={content.homeAboutDashboard2Image}
                      alt={content.homeAboutDashboard2Alt}
                      className="rt-radius-v1"
                      width={249}
                      height={57}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-about-v1-card-content-wrap rt-text-center">
                <div
                  data-value-blur=""
                  role="group"
                  className="rt-text-style-h5"
                >
                  {content.discoveryAndResearch}
                </div>
                <p
                  role="group"
                  {...{ text: "apear" }}
                  className="rt-bottom-no-gap"
                >
                  {content.description}
                </p>
              </div>
            </div>
            <div about-one-card="card-middle">
              <div className="w-layout-hflex rt-about-v1-card rt-card-2 rt-radius-v2">
                <div className="w-layout-hflex rt-about-v1-card-block-v2 rt-position-relative">
                  <div
                    {...{ "data-scroll": "fade-in" }}
                    className="rt-about-v1-card-block-v2-phone"
                  >
                    <Image
                      src={content.homeAboutRefinePhoneImage}
                      alt={content.homeAboutRefinePhoneAlt}
                      className="rt-radius-v1"
                      width={178}
                      height={245}
                      sizes="178px"
                    />
                  </div>
                  <div className="rt-about-v1-card-block-v2-block-1">
                    <div left-right="move-loop-v1" className="rt-z-index-1">
                      <Image
                        src={content.homeAboutRefineDashboard3Image}
                        alt={content.homeAboutRefineDashboard3Alt}
                        className="rt-radius-v1"
                        width={249}
                        height={57}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                    <div
                      rotate-icon="loop"
                      className="rt-about-v1-card-block-v2-wheel"
                    >
                      <Image
                        src={content.homeAboutRefineWheelImage}
                        alt={content.homeAboutRefineWheelAlt}
                        width={86}
                        height={86}
                        sizes="86px"
                      />
                    </div>
                  </div>
                  <div className="rt-about-v1-card-block-v2-block-2">
                    <div right-left="move-loop" className="rt-z-index-1">
                      <Image
                        src={content.homeAboutRefineDashboard4Image}
                        alt={content.homeAboutRefineDashboard4Alt}
                        className="rt-radius-v1"
                        width={249}
                        height={57}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                    <div
                      scale-icon="loop"
                      className="rt-about-v1-card-block-v2-circle"
                    >
                      <Image
                        src={content.homeAboutRefineCircleImage}
                        alt={content.homeAboutRefineCircleAlt}
                        width={68}
                        height={68}
                        sizes="68px"
                      />
                    </div>
                  </div>
                  <div
                    float-icon-one="loop-one"
                    className="rt-about-v1-card-block-v2-author-1"
                  >
                    <Image
                      src={content.homeAboutRefineAuthor1Image}
                      alt={content.homeAboutRefineAuthor1Alt}
                      width={71}
                      height={71}
                      sizes="71px"
                    />
                  </div>
                  <div
                    float-icon-two="loop-two"
                    className="rt-about-v1-card-block-v2-author-1 rt-author-4"
                  >
                    <Image
                      src={content.homeAboutRefineAuthor5Image}
                      alt={content.homeAboutRefineAuthor5Alt}
                      width={71}
                      height={71}
                      sizes="71px"
                    />
                  </div>
                  <div className="rt-about-v1-card-block-v2-author-1 rt-author-2">
                    <Image
                      src={content.homeAboutRefineAuthor2Image}
                      alt={content.homeAboutRefineAuthor2Alt}
                      width={71}
                      height={71}
                      sizes="71px"
                    />
                  </div>
                  <div
                    float-icon-one="loop-one"
                    className="rt-about-v1-card-block-v2-author-1 rt-author-3"
                  >
                    <Image
                      src={content.homeAboutRefineAuthor4Image}
                      alt={content.homeAboutRefineAuthor4Alt}
                      width={70}
                      height={70}
                      sizes="70px"
                    />
                  </div>
                  <div
                    float-icon-two="loop-two"
                    className="rt-about-v1-card-block-v2-author-2"
                  >
                    <Image
                      src={content.homeAboutRefineAuthor3Image}
                      alt={content.homeAboutRefineAuthor3Alt}
                      width={86}
                      height={86}
                      sizes="86px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-about-v1-card-content-wrap rt-text-center">
                <div
                  data-value-blur=""
                  role="group"
                  className="rt-text-style-h5"
                >
                  {content.designAndRefine}
                </div>
                <p
                  role="group"
                  {...{ text: "apear" }}
                  className="rt-bottom-no-gap"
                >
                  {content.description2}
                </p>
              </div>
            </div>
            <div about-one-card="card-last">
              <div className="w-layout-hflex rt-about-v1-card rt-radius-v2">
                <div className="rt-about-v1-card-block-v3 rt-position-relative">
                  <div
                    {...{ "data-scroll": "pop-up" }}
                    className="rt-z-index-1"
                  >
                    <Image
                      src={content.homeAboutGrowDashboardImage}
                      alt={content.homeAboutGrowDashboardAlt}
                      width={285}
                      height={166}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div
                    right-left="move-loop"
                    className="rt-about-v1-card-block-v1-card rt-card-1 rt-radius-v1"
                  >
                    <Image
                      src={content.homeAboutGrowDashboard1Image}
                      alt={content.homeAboutGrowDashboard1Alt}
                      className="rt-radius-v1"
                      width={249}
                      height={57}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div
                    top-bottom="move-loop"
                    className="rt-about-v1-card-block-v3-author"
                  >
                    <Image
                      src={content.homeAboutGrowAuthorImage}
                      alt={content.homeAboutGrowAuthorAlt}
                      className="rt-radius-v1"
                      width={249}
                      height={57}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div
                    scale-icon="loop"
                    className="rt-about-v1-card-block-v3-chart"
                  >
                    <Image
                      src={content.homeAboutGrowDashboard2Image}
                      alt={content.homeAboutGrowDashboard2Alt}
                      className="rt-radius-v1"
                      width={249}
                      height={57}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-about-v1-card-content-wrap rt-text-center">
                <div
                  data-value-blur=""
                  role="group"
                  className="rt-text-style-h5"
                >
                  {content.launchAndGrow}
                </div>
                <p
                  role="group"
                  {...{ text: "apear" }}
                  className="rt-bottom-no-gap"
                >
                  {content.description3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
