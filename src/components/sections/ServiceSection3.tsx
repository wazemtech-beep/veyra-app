"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function ServiceSection3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.serviceSection3;
  return (
    <section className="rt-section-bottom-md" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-vflex rt-grid-wrap-8 rt-margin-auto rt-text-center rt-flex-center-center">
          <div className="rt-sub-text">{content.eyebrow}</div>
          <h2 data-value-blur="">
            {content.heading}
            <span className="rt-highilight-text">{content.services}</span>
            {content.heading2}
          </h2>
          <p {...{ text: "apear" }} className="rt-bottom-no-gap">
            {content.description}
          </p>
        </div>
        <div className="w-layout-vflex rt-service-v5-block-wrap rt-flex-center-center rt-wrap-top-gap-v1">
          <div className="w-layout-hflex rt-service-v5-block rt-service-v5-block-div-1">
            <div className="rt-service-v5-block-div rt-service-v5-block-div-left">
              <Image
                src={content.homeServiceImage2Image}
                alt={content.homeServiceImage2Alt}
                width={504}
                height={553}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
            <div className="w-layout-vflex rt-service-v5-block-div rt-service-v5-block-div-right">
              <h3 data-value-blur="" className="rt-top-no-gap rt-text-white">
                {content.heading3}
              </h3>
              <p
                {...{ text: "apear" }}
                className="rt-text-top-gap-v1 rt-text-white"
              >
                {content.description2}
              </p>
              <div className="w-layout-vflex rt-service-v1-list-block">
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-service-v1-list"
                >
                  <div className="rt-no-shrink">
                    <Image
                      src={content.servicePointsTickImage}
                      alt={content.servicePointsTickAlt}
                      width={20}
                      height={21}
                      sizes="20px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.brandStrategyAndPositioning}
                  </div>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-service-v1-list"
                >
                  <div className="rt-no-shrink">
                    <Image
                      src={content.servicePointsTickImage}
                      alt={content.servicePointsTickAlt}
                      width={20}
                      height={21}
                      sizes="20px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.logoAndVisualIdentityCreation}
                  </div>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-service-v1-list"
                >
                  <div className="rt-no-shrink">
                    <Image
                      src={content.servicePointsTickImage}
                      alt={content.servicePointsTickAlt}
                      width={20}
                      height={21}
                      sizes="20px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.brandMessagingAndToneDevelopment}
                  </div>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-service-v1-list"
                >
                  <div className="rt-no-shrink">
                    <Image
                      src={content.servicePointsTickImage}
                      alt={content.servicePointsTickAlt}
                      width={20}
                      height={21}
                      sizes="20px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.identitySystemsAndBrandGuidelines}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex rt-service-v1-tag-block">
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.logoDesign}
                  </div>
                </div>
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.brandIdentity}
                  </div>
                </div>
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.visualLanguage}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-service-v5-block rt-service-v5-block-div-2">
            <div className="rt-service-v5-block-div rt-service-v5-block-div-left">
              <Image
                src={content.homeServiceImage3Image}
                alt={content.homeServiceImage3Alt}
                width={504}
                height={553}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
            <div className="w-layout-vflex rt-service-v5-block-div rt-service-v5-block-div-right">
              <h3 data-value-blur="" className="rt-top-no-gap rt-text-white">
                {content.heading4}
              </h3>
              <p
                {...{ text: "apear" }}
                className="rt-text-top-gap-v1 rt-text-white rt-bottom-no-gap"
              >
                {content.description3}
              </p>
              <div className="w-layout-vflex rt-service-v1-list-block">
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-service-v1-list"
                >
                  <div className="rt-no-shrink">
                    <Image
                      src={content.servicePointsTickImage}
                      alt={content.servicePointsTickAlt}
                      width={20}
                      height={21}
                      sizes="20px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.customWebsiteDevelopment}
                  </div>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-service-v1-list"
                >
                  <div className="rt-no-shrink">
                    <Image
                      src={content.servicePointsTickImage}
                      alt={content.servicePointsTickAlt}
                      width={20}
                      height={21}
                      sizes="20px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.responsiveFrontendImplementation}
                  </div>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-service-v1-list"
                >
                  <div className="rt-no-shrink">
                    <Image
                      src={content.servicePointsTickImage}
                      alt={content.servicePointsTickAlt}
                      width={20}
                      height={21}
                      sizes="20px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.cmsIntegrationAndManagement}
                  </div>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-service-v1-list"
                >
                  <div className="rt-no-shrink">
                    <Image
                      src={content.servicePointsTickImage}
                      alt={content.servicePointsTickAlt}
                      width={20}
                      height={21}
                      sizes="20px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.performanceOptimizationAndTesting}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex rt-service-v1-tag-block">
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.customSites}
                  </div>
                </div>
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.development}
                  </div>
                </div>
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.cmsSolutions}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-service-v5-block rt-service-v5-block-div-3">
            <div className="rt-service-v5-block-div rt-service-v5-block-div-left">
              <Image
                src={content.homeServiceImage4Image}
                alt={content.homeServiceImage4Alt}
                width={504}
                height={553}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
            <div className="w-layout-vflex rt-service-v5-block-div rt-service-v5-block-div-right">
              <h3 data-value-blur="" className="rt-top-no-gap">
                {content.heading5}
              </h3>
              <p {...{ text: "apear" }} className="rt-text-top-gap-v1">
                {content.description3}
              </p>
              <div className="w-layout-vflex rt-service-v1-list-block">
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
                    {content.userInterfaceDesignSystems}
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
                    {content.userExperiencePlanning}
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
                    {content.responsiveLayoutsAndPrototypes}
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
                    {content.accessibilityFocusedDesignSolutions}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex rt-service-v1-tag-block">
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.uiDesign}
                  </div>
                </div>
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.uxStrategy}
                  </div>
                </div>
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.wireframes}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-service-v5-block rt-service-v5-block-div-4">
            <div className="rt-service-v5-block-div rt-service-v5-block-div-left">
              <Image
                src={content.homeServiceImage5Image}
                alt={content.homeServiceImage5Alt}
                width={504}
                height={553}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
            <div className="w-layout-vflex rt-service-v5-block-div rt-service-v5-block-div-right">
              <h3 data-value-blur="" className="rt-top-no-gap">
                {content.heading6}
              </h3>
              <p {...{ text: "apear" }} className="rt-text-top-gap-v1">
                {content.description4}
              </p>
              <div className="w-layout-vflex rt-service-v1-list-block">
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
                  <div>{content.digitalMarketingStrategy}</div>
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
                  <div>{content.searchEngineOptimization}</div>
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
                  <div>{content.contentAndSocialCampaigns}</div>
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
                  <div>{content.analyticsAndPerformanceTracking}</div>
                </div>
              </div>
              <div className="w-layout-hflex rt-service-v1-tag-block">
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.seo}
                  </div>
                </div>
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.contentMarketing}
                  </div>
                </div>
                <div data-value-blur="" className="rt-service-v1-tag">
                  <div className="rt-small-text rt-uppercase-text">
                    {content.socialMedia}
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
