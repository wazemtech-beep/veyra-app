"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function ServiceSection4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.serviceSection4;
  return (
    <section className="rt-section-top-md" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div>
          <div className="rt-sub-text">{content.eyebrow}</div>
          <h2 data-value-blur="" className="rt-bottom-no-gap">
            {content.heading}
          </h2>
        </div>
      </div>
      <div
        {...{ "data-scroll": "fade-up" }}
        className="w-layout-hflex rt-wrap-top-gap-v1 rt-overflow-hidden"
      >
        <div
          marquee-pause=""
          {...{ train: "" }}
          className="w-layout-hflex rt-portfolio-card-v1-marque-train"
        >
          <div className="rt-no-shrink w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <a
                  portfolio-two="hover-wrapper"
                  href={content.livePreviewlivePreviewlivePreviewliHref}
                  className="rt-portfolio-v3-card rt-radius-v2 rt-overflow-hidden w-inline-block"
                >
                  <div className="rt-portfolio-v3-image-wrap rt-position-relative">
                    <Image
                      src={content.portfolioSmall032Image}
                      alt={content.Alt}
                      width={1772}
                      height={1724}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                    <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                      <div
                        {...{ train: "" }}
                        className="w-layout-hflex rt-portfolio-v2-marque-wrap"
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
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="rt-no-shrink w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <a
                  portfolio-two="hover-wrapper"
                  href={content.livePreviewlivePreviewlivePreviewHref}
                  className="rt-portfolio-v3-card rt-radius-v2 rt-overflow-hidden w-inline-block"
                >
                  <div className="rt-portfolio-v3-image-wrap rt-position-relative rt-full-height">
                    <Image
                      src={content.portfolioImageImage}
                      alt={content.portfolioImageAlt}
                      width={1772}
                      height={1724}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                    <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                      <div
                        {...{ train: "" }}
                        className="w-layout-hflex rt-portfolio-v2-marque-wrap"
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
                </a>
              </div>
            </div>
          </div>
          <div className="rt-no-shrink w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <a
                  portfolio-two="hover-wrapper"
                  href={content.livePreviewlivePreviewlivePreviewHref2}
                  className="rt-portfolio-v3-card rt-radius-v2 rt-overflow-hidden w-inline-block"
                >
                  <div className="rt-portfolio-v3-image-wrap rt-position-relative rt-full-height">
                    <Image
                      src={content.portfolioSmall05Image}
                      alt={content.Alt}
                      width={1776}
                      height={1724}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                    <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                      <div
                        {...{ train: "" }}
                        className="w-layout-hflex rt-portfolio-v2-marque-wrap"
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
                </a>
              </div>
            </div>
          </div>
          <div className="rt-no-shrink w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <a
                  portfolio-two="hover-wrapper"
                  href={content.livePreviewlivePreviewlivePreviewHref3}
                  className="rt-portfolio-v3-card rt-radius-v2 rt-overflow-hidden w-inline-block"
                >
                  <div className="rt-portfolio-v3-image-wrap rt-position-relative rt-full-height">
                    <Image
                      src={content.portfolioSmall02Image}
                      alt={content.Alt}
                      width={1776}
                      height={1724}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                    <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                      <div
                        {...{ train: "" }}
                        className="w-layout-hflex rt-portfolio-v2-marque-wrap"
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
                </a>
              </div>
            </div>
          </div>
          <div className="rt-no-shrink w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <Link
                  portfolio-two="hover-wrapper"
                  href={content.livePreviewlivePreviewlivePreviewHref4}
                  className="rt-portfolio-v3-card rt-radius-v2 rt-overflow-hidden w-inline-block"
                >
                  <div className="rt-portfolio-v3-image-wrap rt-position-relative rt-full-height">
                    <Image
                      src={content.portfolioSmall01Image}
                      alt={content.Alt}
                      width={1776}
                      height={1724}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                    <div className="w-layout-hflex rt-portfolio-v1-overlay rt-flex-center-center rt-overflow-hidden">
                      <div
                        {...{ train: "" }}
                        className="w-layout-hflex rt-portfolio-v2-marque-wrap"
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
