"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function HomeServiceV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeServiceV1;
  return (
    <section className="rt-service-v1 rt-section-top-md" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="rt-service-v1-main-wrapper rt-position-relative">
          <div className="rt-service-v1-sticky-wrap">
            <div className="w-layout-hflex rt-service-v1-sticky-block">
              <div className="rt-service-v1-image-wrapper">
                <div className="rt-service-v1-image-wrap rt-service-v1-image-wrap-back">
                  <div className="rt-service-v1-image-2">
                    <Image
                      src={content.homeServiceImage2Image}
                      alt={content.homeServiceImage2Alt}
                      className="rt-radius-v2"
                      width={1008}
                      height={1106}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-service-v1-image rt-service-v1-image-4">
                    <Image
                      src={content.homeServiceImage4Image}
                      alt={content.homeServiceImage4Alt}
                      className="rt-radius-v2"
                      width={1008}
                      height={1106}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-service-v1-image rt-service-v1-image-6">
                    <Image
                      src={content.homeServiceImage6Image}
                      alt={content.homeServiceImage6Alt}
                      className="rt-radius-v2"
                      width={1008}
                      height={1106}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                </div>
                <div className="rt-service-v1-image-wrap">
                  <div className="rt-service-v1-image-1">
                    <Image
                      src={content.homeServiceImage1Image}
                      alt={content.homeServiceImage1Alt}
                      className="rt-radius-v2"
                      width={1008}
                      height={1106}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-service-v1-image rt-service-v1-image-3">
                    <Image
                      src={content.homeServiceImage3Image}
                      alt={content.homeServiceImage3Alt}
                      className="rt-radius-v2"
                      width={1008}
                      height={1106}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-service-v1-image rt-service-v1-image-5">
                    <Image
                      src={content.homeServiceImage5Image}
                      alt={content.homeServiceImage5Alt}
                      className="rt-radius-v2"
                      width={1008}
                      height={1106}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rt-service-v1-content-wrapper">
            <div
              id="w-node-ea7c2b3c-a30e-6b57-7c61-44db619d9e5e-103a0cfb"
              className="w-layout-hflex rt-service-v1-title-wrap"
            >
              <div className="rt-service-v1-title-block rt-block-1">
                <div className="rt-service-v1-subtitle">
                  <div className="rt-sub-text">{content.eyebrow}</div>
                </div>
                <div
                  service-large-text="animated"
                  className="rt-large-text-v3 rt-highilight-text"
                >
                  {content.creative}
                </div>
              </div>
              <div className="w-layout-vflex rt-service-v1-title-block rt-block-2">
                <div
                  service-large-text="animated"
                  className="rt-large-text-v3 rt-highilight-text"
                >
                  {content.services}
                </div>
                <div className="rt-service-v1-text rt-grid-wrap-3">
                  <p className="rt-text-top-gap-v1 rt-bottom-no-gap">
                    {content.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-service-v1-content-list">
              <div data-value-blur="" className="rt-service-v1-content-block">
                <h3 className="rt-top-no-gap">{content.heading}</h3>
                <p className="rt-text-top-gap-v1">{content.description2}</p>
                <div className="w-layout-vflex rt-service-v1-list-block">
                  <div className="w-layout-hflex rt-service-v1-list">
                    <div className="rt-no-shrink">
                      <Image
                        src={content.portfolioListIconImage}
                        alt={content.portfolioListIconAlt}
                        width={20}
                        height={21}
                        sizes="20px"
                      />
                    </div>
                    <div className="rt-text-grey">
                      {content.brandStrategyAndPositioning}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
                    <div className="rt-no-shrink">
                      <Image
                        src={content.portfolioListIconImage}
                        alt={content.portfolioListIconAlt}
                        width={20}
                        height={21}
                        sizes="20px"
                      />
                    </div>
                    <div className="rt-text-grey">
                      {content.logoAndVisualIdentityCreation}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
                    <div className="rt-no-shrink">
                      <Image
                        src={content.portfolioListIconImage}
                        alt={content.portfolioListIconAlt}
                        width={20}
                        height={21}
                        sizes="20px"
                      />
                    </div>
                    <div className="rt-text-grey">
                      {content.brandMessagingAndToneDevelopment}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
                    <div className="rt-no-shrink">
                      <Image
                        src={content.portfolioListIconImage}
                        alt={content.portfolioListIconAlt}
                        width={20}
                        height={21}
                        sizes="20px"
                      />
                    </div>
                    <div className="rt-text-grey">
                      {content.identitySystemsAndBrandGuidelines}
                    </div>
                  </div>
                </div>
                <div className="w-layout-hflex rt-service-v1-tag-block">
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.logoDesign}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.brandIdentity}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.visualLanguage}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-service-v1-content-list">
              <div data-value-blur="" className="rt-service-v1-content-block">
                <h3 className="rt-top-no-gap">{content.heading2}</h3>
                <p className="rt-text-top-gap-v1">{content.description3}</p>
                <div className="w-layout-vflex rt-service-v1-list-block">
                  <div className="w-layout-hflex rt-service-v1-list">
                    <div className="rt-no-shrink">
                      <Image
                        src={content.portfolioListIconImage}
                        alt={content.portfolioListIconAlt}
                        width={20}
                        height={21}
                        sizes="20px"
                      />
                    </div>
                    <div className="rt-text-grey">
                      {content.customWebsiteDevelopment}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
                    <div className="rt-no-shrink">
                      <Image
                        src={content.portfolioListIconImage}
                        alt={content.portfolioListIconAlt}
                        width={20}
                        height={21}
                        sizes="20px"
                      />
                    </div>
                    <div className="rt-text-grey">
                      {content.responsiveFrontendImplementation}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
                    <div className="rt-no-shrink">
                      <Image
                        src={content.portfolioListIconImage}
                        alt={content.portfolioListIconAlt}
                        width={20}
                        height={21}
                        sizes="20px"
                      />
                    </div>
                    <div className="rt-text-grey">
                      {content.cmsIntegrationAndManagement}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
                    <div className="rt-no-shrink">
                      <Image
                        src={content.portfolioListIconImage}
                        alt={content.portfolioListIconAlt}
                        width={20}
                        height={21}
                        sizes="20px"
                      />
                    </div>
                    <div className="rt-text-grey">
                      {content.performanceOptimizationAndTesting}
                    </div>
                  </div>
                </div>
                <div className="w-layout-hflex rt-service-v1-tag-block">
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.customSites}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.development}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.cmsSolutions}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-service-v1-content-list">
              <div data-value-blur="" className="rt-service-v1-content-block">
                <h3 className="rt-top-no-gap">{content.heading3}</h3>
                <p>{content.description4}</p>
                <div className="w-layout-vflex rt-service-v1-list-block rt-text-top-gap-v1">
                  <div className="w-layout-hflex rt-service-v1-list">
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
                      {content.userInterfaceDesignSystems}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
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
                      {content.userExperiencePlanning}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
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
                      {content.responsiveLayoutsAndPrototypes}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
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
                      {content.accessibilityFocusedDesignSolutions}
                    </div>
                  </div>
                </div>
                <div className="w-layout-hflex rt-service-v1-tag-block">
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.uiDesign}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.uxStrategy}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.wireframes}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-service-v1-content-list">
              <div data-value-blur="" className="rt-service-v1-content-block">
                <h3 className="rt-top-no-gap">{content.heading4}</h3>
                <p>{content.description5}</p>
                <div className="w-layout-vflex rt-service-v1-list-block">
                  <div className="w-layout-hflex rt-service-v1-list">
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
                      {content.digitalMarketingStrategy}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
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
                      {content.searchEngineOptimization}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
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
                      {content.contentAndSocialCampaigns}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-service-v1-list">
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
                      {content.analyticsAndPerformanceTracking}
                    </div>
                  </div>
                </div>
                <div className="w-layout-hflex rt-service-v1-tag-block">
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.seo}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.contentMarketing}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                      {content.socialMedia}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_4d18d73d-7817-ac5a-36c2-6ff4b63a9151-103a0cfb"
              className="w-layout-vflex rt-service-v1-bottom-content"
            >
              <div className="w-layout-hflex rt-service-v1-bottom-wrapper">
                <div className="w-layout-vflex rt-service-v1-bottom-block rt-grid-wrap-2">
                  <div>
                    <div
                      data-counter="200+"
                      className="rt-text-style-h2 rt-highilight-text"
                    >
                      {content.value200}
                    </div>
                    <div className="rt-sub-text rt-highilight-text rt-text-top-gap-v1">
                      {content.projectsCompleted}
                    </div>
                  </div>
                  <div>
                    <div
                      data-counter="98%"
                      className="rt-text-style-h2 rt-highilight-text"
                    >
                      {content.value98}
                    </div>
                    <div className="rt-sub-text rt-highilight-text rt-text-top-gap-v1">
                      {content.clientSatisfaction}
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_809aea92-fdc6-9682-9e05-6f31bf1e071f-103a0cfb"
                  className="w-layout-vflex rt-service-v1-bottom-block rt-block-1 rt-grid-wrap-2"
                >
                  <div>
                    <div
                      data-counter="450+"
                      className="rt-text-style-h2 rt-highilight-text"
                    >
                      {content.value450}
                    </div>
                    <div className="rt-sub-text rt-highilight-text rt-text-top-gap-v1">
                      {content.consultingEngagements}
                    </div>
                  </div>
                  <div>
                    <div
                      data-counter="35"
                      className="rt-text-style-h2 rt-highilight-text"
                    >
                      {content.value35}
                    </div>
                    <div className="rt-sub-text rt-highilight-text rt-text-top-gap-v1">
                      {content.industriesServed}
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
