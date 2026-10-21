"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function PortfolioOneSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.portfolioOneSection1;
  return (
    <section className="rt-section-bottom-md" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-vflex rt-portfolio-v1-main-wrapper">
          <div className="rt-full-width">
            <div inner-hero="text-wrap" className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a
                    portfolio-two="hover-wrapper"
                    href={content.buildingBoldDigitalBrandIdentitieswHref}
                    className="rt-full-width rt-event-pointer w-inline-block"
                  >
                    <div className="w-layout-hflex rt-portfolio-v1-contant-wrap rt-radius-v2">
                      <div className="rt-overflow-hidden">
                        <div className="rt-text-style-h6">
                          {content.buildingBoldDigitalBrandIdentities}
                        </div>
                      </div>
                      <div className="rt-sub-text">{content.eyebrow}</div>
                    </div>
                    <div className="rt-portfolio-v1-image-wrap rt-position-relative">
                      <Image
                        src={content.portfolioMedium02Image}
                        alt={content.Alt}
                        width={2384}
                        height={1724}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                      <div className="w-layout-hflex rt-portfolio-v1-overlay-blur"></div>
                      <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                        <div
                          portfolio-two="image"
                          className="rt-portfolio-v1-logo rt-portfolio-v2-image rt-position-relative"
                        >
                          <Image
                            src={content.portfolioMedium02Image}
                            alt={content.Alt}
                            width={2384}
                            height={1724}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <div
                            portfolio-two-marque="train"
                            className="w-layout-hflex rt-portfolio-v2-marque-wrap rt-portfolio-v1-marque-wrap"
                          >
                            <div
                              {...{ train: "" }}
                              className="w-layout-hflex rt-portfolio-v1-marque-train"
                            >
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-flex-top-space-between rt-full-width">
            <div {...{ "data-scroll": "fade-up" }} className="rt-grid-wrap-6">
              <div className="rt-full-height w-dyn-list">
                <div role="list" className="rt-full-height w-dyn-items">
                  <div role="listitem" className="rt-full-height w-dyn-item">
                    <a
                      portfolio-two="hover-wrapper"
                      href={content.purposeDrivenDigitalDesigngrowthlivHref}
                      className="rt-full-width rt-full-height w-inline-block"
                    >
                      <div className="w-layout-hflex rt-portfolio-v1-contant-wrap rt-radius-v2">
                        <div className="rt-overflow-hidden">
                          <div className="rt-text-style-h6">
                            {content.purposeDrivenDigitalDesign}
                          </div>
                        </div>
                        <div className="rt-sub-text">{content.eyebrow2}</div>
                      </div>
                      <div className="rt-portfolio-v1-image-wrap rt-position-relative">
                        <Image
                          src={content.portfolioMedium032Image}
                          alt={content.Alt}
                          width={2384}
                          height={1724}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                        <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                          <div
                            portfolio-two="image"
                            className="rt-portfolio-v1-logo rt-portfolio-v2-image rt-position-relative"
                          >
                            <Image
                              src={content.portfolioMedium032Image}
                              alt={content.Alt}
                              width={2384}
                              height={1724}
                              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                            />
                            <div
                              portfolio-two-marque="train"
                              className="w-layout-hflex rt-portfolio-v2-marque-wrap rt-portfolio-v1-marque-wrap"
                            >
                              <div
                                {...{ train: "" }}
                                className="w-layout-hflex rt-portfolio-v1-marque-train"
                              >
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-hflex rt-portfolio-v1-overlay-blur"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div {...{ "data-scroll": "fade-up" }} className="rt-grid-wrap-6">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <Link
                      portfolio-two="hover-wrapper"
                      href={content.creativeThinkingDeliveredDailytransHref}
                      className="rt-full-width w-inline-block"
                    >
                      <div className="w-layout-hflex rt-portfolio-v1-contant-wrap rt-radius-v2">
                        <div className="rt-overflow-hidden">
                          <div className="rt-text-style-h6">
                            {content.creativeThinkingDeliveredDaily}
                          </div>
                        </div>
                        <div className="rt-sub-text">{content.eyebrow3}</div>
                      </div>
                      <div className="rt-portfolio-v1-image-wrap rt-position-relative">
                        <Image
                          src={content.portfolioMedium01Image}
                          alt={content.Alt}
                          width={2384}
                          height={1724}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                        <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                          <div
                            portfolio-two="image"
                            className="rt-portfolio-v1-logo rt-portfolio-v2-image rt-position-relative"
                          >
                            <Image
                              src={content.portfolioMedium01Image}
                              alt={content.Alt}
                              width={2384}
                              height={1724}
                              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                            />
                            <div
                              portfolio-two-marque="train"
                              className="w-layout-hflex rt-portfolio-v2-marque-wrap rt-portfolio-v1-marque-wrap"
                            >
                              <div
                                {...{ train: "" }}
                                className="w-layout-hflex rt-portfolio-v1-marque-train"
                              >
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-hflex rt-portfolio-v1-overlay-blur"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-flex-top-space-between rt-full-width">
            <div {...{ "data-scroll": "fade-up" }} className="rt-grid-wrap-6">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a
                      portfolio-two="hover-wrapper"
                      href={content.buildingBoldDigitalBrandsgrowthliveHref}
                      className="rt-full-width w-inline-block"
                    >
                      <div className="w-layout-hflex rt-portfolio-v1-contant-wrap rt-radius-v2">
                        <div className="rt-overflow-hidden">
                          <div className="rt-text-style-h6">
                            {content.buildingBoldDigitalBrands}
                          </div>
                        </div>
                        <div className="rt-sub-text">{content.eyebrow2}</div>
                      </div>
                      <div className="rt-portfolio-v1-image-wrap rt-position-relative rt-full-height">
                        <Image
                          src={content.portfolioMedium06Image}
                          alt={content.Alt}
                          width={2384}
                          height={1724}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                        <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                          <div
                            portfolio-two="image"
                            className="rt-portfolio-v1-logo rt-portfolio-v2-image rt-position-relative"
                          >
                            <Image
                              src={content.portfolioMedium06Image}
                              alt={content.Alt}
                              width={2384}
                              height={1724}
                              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                            />
                            <div
                              portfolio-two-marque="train"
                              className="w-layout-hflex rt-portfolio-v2-marque-wrap rt-portfolio-v1-marque-wrap"
                            >
                              <div
                                {...{ train: "" }}
                                className="w-layout-hflex rt-portfolio-v1-marque-train"
                              >
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-hflex rt-portfolio-v1-overlay-blur"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div {...{ "data-scroll": "fade-up" }} className="rt-grid-wrap-6">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a
                      portfolio-two="hover-wrapper"
                      href={content.whereVisionTakesShapeinnovationliveHref}
                      className="rt-full-width w-inline-block"
                    >
                      <div className="w-layout-hflex rt-portfolio-v1-contant-wrap rt-radius-v2">
                        <div className="rt-overflow-hidden">
                          <div className="rt-text-style-h6">
                            {content.whereVisionTakesShape}
                          </div>
                        </div>
                        <div className="rt-sub-text">{content.eyebrow4}</div>
                      </div>
                      <div className="rt-portfolio-v1-image-wrap rt-position-relative">
                        <Image
                          src={content.portfolioImageImage}
                          alt={content.portfolioImageAlt}
                          width={2384}
                          height={1724}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                        <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                          <div
                            portfolio-two="image"
                            className="rt-portfolio-v1-logo rt-portfolio-v2-image rt-position-relative"
                          >
                            <Image
                              src={content.portfolioImageImage}
                              alt={content.portfolioImageAlt}
                              width={2384}
                              height={1724}
                              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                            />
                            <div
                              portfolio-two-marque="train"
                              className="w-layout-hflex rt-portfolio-v2-marque-wrap rt-portfolio-v1-marque-wrap"
                            >
                              <div
                                {...{ train: "" }}
                                className="w-layout-hflex rt-portfolio-v1-marque-train"
                              >
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-hflex rt-portfolio-v1-overlay-blur"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div {...{ "data-scroll": "fade-up" }} className="rt-full-width">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a
                    portfolio-two="hover-wrapper"
                    href={content.innovativeDesignLastingImpactdesignHref}
                    className="rt-full-width w-inline-block"
                  >
                    <div className="w-layout-hflex rt-portfolio-v1-contant-wrap rt-radius-v2">
                      <div className="rt-overflow-hidden">
                        <div className="rt-text-style-h6">
                          {content.innovativeDesignLastingImpact}
                        </div>
                      </div>
                      <div className="rt-sub-text">{content.eyebrow5}</div>
                    </div>
                    <div className="rt-portfolio-v1-image-wrap rt-position-relative">
                      <Image
                        src={content.portfolioMedium05Image}
                        alt={content.Alt}
                        width={2384}
                        height={1724}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                      <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                        <div
                          portfolio-two="image"
                          className="rt-portfolio-v1-logo rt-portfolio-v2-image rt-position-relative"
                        >
                          <Image
                            src={content.portfolioMedium05Image}
                            alt={content.Alt}
                            width={2384}
                            height={1724}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <div
                            portfolio-two-marque="train"
                            className="w-layout-hflex rt-portfolio-v2-marque-wrap rt-portfolio-v1-marque-wrap"
                          >
                            <div
                              {...{ train: "" }}
                              className="w-layout-hflex rt-portfolio-v1-marque-train"
                            >
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                              <div className="rt-button-text rt-no-shrink">
                                {content.livePreview}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-hflex rt-portfolio-v1-overlay-blur"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-flex-top-space-between rt-full-width">
            <div {...{ "data-scroll": "fade-up" }} className="rt-grid-wrap-6">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a
                      portfolio-two="hover-wrapper"
                      href={content.strategyMeetsCreativeInnovationdesiHref}
                      className="rt-full-width w-inline-block"
                    >
                      <div className="w-layout-hflex rt-portfolio-v1-contant-wrap rt-radius-v2">
                        <div className="rt-overflow-hidden">
                          <div className="rt-text-style-h6">
                            {content.strategyMeetsCreativeInnovation}
                          </div>
                        </div>
                        <div className="rt-sub-text">{content.eyebrow5}</div>
                      </div>
                      <div className="rt-portfolio-v1-image-wrap rt-position-relative">
                        <Image
                          src={content.portfolioMedium07Image}
                          alt={content.Alt}
                          width={2384}
                          height={1724}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                        <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                          <div
                            portfolio-two="image"
                            className="rt-portfolio-v1-logo rt-portfolio-v2-image rt-position-relative"
                          >
                            <Image
                              src={content.portfolioMedium07Image}
                              alt={content.Alt}
                              width={2384}
                              height={1724}
                              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                            />
                            <div
                              portfolio-two-marque="train"
                              className="w-layout-hflex rt-portfolio-v2-marque-wrap rt-portfolio-v1-marque-wrap"
                            >
                              <div
                                {...{ train: "" }}
                                className="w-layout-hflex rt-portfolio-v1-marque-train"
                              >
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-hflex rt-portfolio-v1-overlay-blur"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div {...{ "data-scroll": "fade-up" }} className="rt-grid-wrap-6">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a
                      portfolio-two="hover-wrapper"
                      href={content.craftingFutureDigitalExperiencesinnHref}
                      className="rt-full-width w-inline-block"
                    >
                      <div className="w-layout-hflex rt-portfolio-v1-contant-wrap rt-radius-v2">
                        <div className="rt-overflow-hidden">
                          <div className="rt-text-style-h6">
                            {content.craftingFutureDigitalExperiences}
                          </div>
                        </div>
                        <div className="rt-sub-text">{content.eyebrow4}</div>
                      </div>
                      <div className="rt-portfolio-v1-image-wrap rt-position-relative">
                        <Image
                          src={content.portfolioMedium08Image}
                          alt={content.Alt}
                          width={2384}
                          height={1724}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                        <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                          <div
                            portfolio-two="image"
                            className="rt-portfolio-v1-logo rt-portfolio-v2-image rt-position-relative"
                          >
                            <Image
                              src={content.portfolioMedium08Image}
                              alt={content.Alt}
                              width={2384}
                              height={1724}
                              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                            />
                            <div
                              portfolio-two-marque="train"
                              className="w-layout-hflex rt-portfolio-v2-marque-wrap rt-portfolio-v1-marque-wrap"
                            >
                              <div
                                {...{ train: "" }}
                                className="w-layout-hflex rt-portfolio-v1-marque-train"
                              >
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                                <div className="rt-button-text rt-no-shrink">
                                  {content.livePreview}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-hflex rt-portfolio-v1-overlay-blur"></div>
                      </div>
                    </a>
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
