"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function HomeAboutV5() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeAboutV5;
  return (
    <section className="rt-about-v5" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 rt-full-height w-container">
        <div className="w-layout-hflex rt-flex-top-space-between-v2 rt-full-height">
          <div className="rt-about-v5-content-wrap rt-grid-wrap-5">
            <div className="rt-sub-text w-variant-a55ef6ae-5a71-6df9-fd80-5c0a14b4bb91">
              {content.ourProcess}
            </div>
            <div className="rt-overflow-hidden">
              <h2 data-value-blur="" className="rt-text-white">
                {content.heading}
                <span className="rt-highilight-text-v2">{content.process}</span>
                {content.heading2}
              </h2>
            </div>
            <p {...{ text: "apear" }} className="rt-text-white">
              {content.description}
            </p>
          </div>
          <div className="rt-grid-wrap-6 rt-about-v5-icon-box-grid">
            <div className="w-layout-grid rt-2-column-card-grid rt-full-height rt-about-v5-iconbox-grid-no-gap">
              <div className="w-layout-vflex rt-about-v5-icon-box-list-1 rt-position-relative">
                <div
                  about-card="main"
                  className="w-layout-vflex rt-about-v5-card rt-card-1"
                >
                  <div className="w-layout-hflex rt-about-v5-icon-number-wrap">
                    <div>
                      <Image
                        alt={content.Alt}
                        src={content.homeAboutIcon1Image}
                        width={72}
                        height={72}
                        sizes="72px"
                      />
                    </div>
                    <div className="rt-text-white">{content.value01}</div>
                  </div>
                  <div className="w-layout-vflex rt-service-v4-card-content-wrap">
                    <div className="rt-text-style-h5 rt-text-white">
                      {content.discoverAndDefine}
                    </div>
                    <div className="rt-bottom-no-gap rt-text-white">
                      {
                        content.weLearnAboutYourBusinessAudienceGoalsAndChallengesToUncoverOpport
                      }
                    </div>
                  </div>
                </div>
                <div
                  about-card="main"
                  className="w-layout-vflex rt-about-v5-card"
                >
                  <div className="w-layout-hflex rt-about-v5-icon-number-wrap">
                    <div>
                      <Image
                        alt={content.Alt}
                        src={content.homeAboutIcon2Image}
                        width={72}
                        height={72}
                        sizes="72px"
                      />
                    </div>
                    <div className="rt-text-white">{content.value02}</div>
                  </div>
                  <div className="w-layout-vflex rt-service-v4-card-content-wrap">
                    <div className="rt-text-style-h5 rt-text-white">
                      {content.strategyAndConcept}
                    </div>
                    <div className="rt-bottom-no-gap rt-text-white">
                      {
                        content.ourTeamDevelopsATailoredRoadmapDefiningCreativeDirectionUserExper
                      }
                    </div>
                  </div>
                </div>
                <div
                  about-box="border"
                  className="rt-about-v5-border rt-border-1"
                ></div>
                <div
                  about-box="border"
                  className="rt-about-v5-border rt-border-2"
                ></div>
              </div>
              <div className="w-layout-vflex rt-about-v5-icon-box-list-2">
                <div
                  about-card="main"
                  className="w-layout-vflex rt-about-v5-card"
                >
                  <div className="w-layout-hflex rt-about-v5-icon-number-wrap">
                    <div>
                      <Image
                        alt={content.Alt}
                        src={content.homeAboutIcon3Image}
                        width={72}
                        height={72}
                        sizes="72px"
                      />
                    </div>
                    <div className="rt-text-white">{content.value03}</div>
                  </div>
                  <div className="w-layout-vflex rt-service-v4-card-content-wrap">
                    <div className="rt-text-style-h5 rt-text-white">
                      {content.designAndDevelop}
                    </div>
                    <div className="rt-bottom-no-gap rt-text-white">
                      {
                        content.fromBrandingAndDesignToDevelopmentAndContentProductionWeTransform
                      }
                    </div>
                  </div>
                </div>
                <div
                  about-card="main"
                  className="w-layout-vflex rt-about-v5-card rt-card-2"
                >
                  <div className="w-layout-hflex rt-about-v5-icon-number-wrap">
                    <div>
                      <Image
                        alt={content.Alt}
                        src={content.homeAboutIcon4Image}
                        width={72}
                        height={72}
                        sizes="72px"
                      />
                    </div>
                    <div className="rt-text-white">{content.value04}</div>
                  </div>
                  <div className="w-layout-vflex rt-service-v4-card-content-wrap">
                    <div className="rt-text-style-h5 rt-text-white">
                      {content.launchAndOptimize}
                    </div>
                    <div className="rt-bottom-no-gap rt-light-text">
                      {
                        content.weRefineTestAndImproveEveryDetailToMaximizePerformanceEnhanceUser
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
