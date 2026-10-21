"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function PortfolioCreativeThinkingDeliveredDailySection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content =
    siteConfig.sections.portfolioCreativeThinkingDeliveredDailySection1;
  return (
    <section ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div
          inner-hero="text-wrap"
          className="rt-portfolio-image-wrap rt-radius-v2 rt-overflow-hidden"
        >
          <Image
            src={content.portfolioMedium01Image}
            while-data-scroll="image-movement"
            alt={content.Alt}
            className="rt-scroll-move-v1-image"
            width={2384}
            height={1724}
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
          />
          <div className="w-layout-vflex rt-portfolio-image-overlay">
            <div className="rt-sub-text w-variant-a55ef6ae-5a71-6df9-fd80-5c0a14b4bb91">
              {content.value2012}
            </div>
            <div>
              <div className="rt-grid-wrap-6 rt-margin-auto">
                <h2
                  title-top="apearance"
                  className="rt-text-white rt-text-center rt-bottom-no-gap"
                >
                  {content.heading}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-hflex rt-flex-top-space-between-v2 rt-grid-wrap-11 rt-margin-auto rt-blog-details-wrap-top-gap">
          <div className="rt-grid-wrap-4 rt-sticky-wrap">
            <div className="w-layout-vflex rt-portfolio-sidebar rt-text-bottom-gap-v1">
              <div className="rt-text-style-h5 rt-highilight-text">
                {content.projectInformation}
              </div>
              <div className="w-layout-vflex rt-portfolio-list-wrap">
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-portfolio-list"
                >
                  <div className="w-layout-hflex rt-portfolio-list-left">
                    <div className="rt-portfolio-list-dot"></div>
                    <div>{content.client}</div>
                  </div>
                  <div className="rt-grid-wrap-2">
                    <div>{content.studioNine}</div>
                  </div>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-portfolio-list"
                >
                  <div className="w-layout-hflex rt-portfolio-list-left">
                    <div className="rt-portfolio-list-dot rt-no-shrink"></div>
                    <div>{content.industry}</div>
                  </div>
                  <div className="rt-grid-wrap-2">
                    <div>{content.agency}</div>
                  </div>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-portfolio-list"
                >
                  <div className="w-layout-hflex rt-portfolio-list-left">
                    <div className="rt-portfolio-list-dot rt-no-shrink"></div>
                    <div>{content.timeline}</div>
                  </div>
                  <div className="rt-grid-wrap-2">
                    <div>{content.value8Weeks}</div>
                  </div>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-portfolio-list"
                >
                  <div className="w-layout-hflex rt-portfolio-list-left">
                    <div className="rt-portfolio-list-dot rt-no-shrink"></div>
                    <div>{content.services}</div>
                  </div>
                  <div className="rt-grid-wrap-2">
                    <div>{content.creativeDirectionWebDesign}</div>
                  </div>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-portfolio-list"
                >
                  <div className="w-layout-hflex rt-portfolio-list-left">
                    <div className="rt-portfolio-list-dot rt-no-shrink"></div>
                    <div>{content.platform}</div>
                  </div>
                  <div className="rt-grid-wrap-2">
                    <div>{content.modernCms}</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-value-blur=""
              className="w-layout-vflex rt-portfolio-sidebar"
            >
              <div className="rt-text-style-h5 rt-highilight-text">
                {content.projectOverview}
              </div>
              <div className="w-layout-vflex">
                <p className="rt-bottom-no-gap">{content.description}</p>
              </div>
            </div>
          </div>
          <div className="rt-grid-wrap-6">
            <div className="rt-portfolio-details w-richtext">
              <h3>{content.heading2}</h3>
              <p>{content.description2}</p>
              <h4>{content.heading3}</h4>
              <p>{content.description3}</p>
              <ul role="list">
                <li>{content.mappedUserJourneysForBetterUsability}</li>
                <li>{content.clarifiedMessagingWithStrategicStorytelling}</li>
                <li>{content.improvedAccessibilityAcrossEveryInterface}</li>
                <li>{content.prioritizedCustomerFocusedDesignDecisions}</li>
              </ul>
              <h5>{content.heading4}</h5>
              <p>{content.description4}</p>
              <ul role="list">
                <li>{content.builtStructuredLayoutsWithBalancedSpacing}</li>
                <li>{content.introducedExpressiveTypographyForClarity}</li>
                <li>{content.designedEngagingInteractionsAcrossInterfaces}</li>
                <li>{content.unifiedBrandingWithCohesiveVisualElements}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-layout-grid grid rt-blog-details-wrap-top-gap">
          <div>
            <div
              image-apear="wrapper"
              className="rt-image-wrap rt-radius-v2 rt-overflow-hidden"
            >
              <Image
                image-apear="image"
                alt={content.Alt}
                src={content.portfolioDetails1Image}
                className="rt-image-effect"
                width={300}
                height={250}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
              <div className="rt-image-overlay"></div>
            </div>
          </div>
          <div>
            <div
              image-apear="wrapper"
              className="rt-image-wrap rt-radius-v2 rt-overflow-hidden"
            >
              <Image
                image-apear="image"
                alt={content.Alt}
                src={content.portfolioDetails2Image}
                className="rt-image-effect"
                width={300}
                height={250}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
              <div className="rt-image-overlay"></div>
            </div>
          </div>
          <div id="w-node-_3982b9c2-0234-c1cf-8869-c28475bac1ff-103a0d07">
            <div
              image-apear="wrapper"
              className="rt-image-wrap rt-radius-v2 rt-overflow-hidden"
            >
              <Image
                image-apear="image"
                alt={content.Alt}
                src={content.portfolioDetails3Image}
                className="rt-image-effect"
                width={300}
                height={123}
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
