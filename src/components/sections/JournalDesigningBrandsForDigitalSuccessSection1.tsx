"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function JournalDesigningBrandsForDigitalSuccessSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content =
    siteConfig.sections.journalDesigningBrandsForDigitalSuccessSection1;
  return (
    <div
      className="w-layout-blockcontainer rt-container-v1 w-container"
      ref={sectionRef}
    >
      <div className="w-layout-vflex rt-grid-wrap-6">
        <div className="rt-overflow-hidden">
          <h2 data-value-blur="" className="rt-no-gap rt-mobile-text-center">
            {content.heading}
            <span className="rt-highilight-text">{content.insights}</span>
            {content.heading2}
          </h2>
        </div>
      </div>
      <div className="w-layout-grid rt-4-column-card-grid rt-wrap-top-gap-v1">
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div
                {...{ "data-scroll": "fade-up" }}
                blog-card="one"
                className="w-layout-vflex rt-blog-v1-wrap"
              >
                <div className="rt-blog-v1-image-v1 rt-overflow-hidden rt-radius-v2 rt-position-relative">
                  <Image
                    alt={content.Alt}
                    src={content.portfolioSmall002Image}
                    blog-image="scale"
                    width={563}
                    height={677}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                  <a
                    href={content.viewHref}
                    className="rt-blog-v1-wrap-overlay w-inline-block"
                  >
                    <div className="w-layout-vflex rt-blog-v1-wrap-view-button">
                      <div className="rt-sub-text rt-uppercase-text">
                        {content.view}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-layout-vflex rt-blog-v1-title-wrap">
                  <div
                    blog-one="text-hover"
                    className="rt-sub-text rt-blog-v1-subtext"
                  >
                    {content.june242026}
                  </div>
                  <a
                    aria-label={content.blogPostAriaLabel}
                    blog-one="text-hover"
                    href={content.viewHref}
                    className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                  >
                    {content.theFutureOfMinimalistDesign}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div
                {...{ "data-scroll": "fade-up" }}
                blog-card="one"
                className="w-layout-vflex rt-blog-v1-wrap"
              >
                <div className="rt-blog-v1-image-v4 rt-overflow-hidden rt-radius-v2 rt-position-relative">
                  <Image
                    alt={content.Alt}
                    src={content.portfolioSmall001Image}
                    blog-image="scale"
                    width={563}
                    height={677}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                  <a
                    href={content.viewHref2}
                    className="rt-blog-v1-wrap-overlay w-inline-block"
                  >
                    <div className="w-layout-vflex rt-blog-v1-wrap-view-button">
                      <div className="rt-sub-text rt-uppercase-text">
                        {content.view}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-layout-vflex rt-blog-v1-title-wrap">
                  <div
                    blog-one="text-hover"
                    className="rt-sub-text rt-blog-v1-subtext"
                  >
                    {content.june262026}
                  </div>
                  <a
                    aria-label={content.blogPostAriaLabel}
                    blog-one="text-hover"
                    href={content.viewHref2}
                    className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                  >
                    {content.uiUxTrendsForModernExperiences}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div
                {...{ "data-scroll": "fade-up" }}
                blog-card="one"
                className="w-layout-vflex rt-blog-v1-wrap"
              >
                <div className="rt-blog-v1-image-v1 rt-overflow-hidden rt-radius-v2 rt-position-relative">
                  <Image
                    alt={content.Alt}
                    src={content.blogMedium7Image}
                    blog-image="scale"
                    width={563}
                    height={677}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                  <a
                    href={content.viewHref3}
                    className="rt-blog-v1-wrap-overlay w-inline-block"
                  >
                    <div className="w-layout-vflex rt-blog-v1-wrap-view-button">
                      <div className="rt-sub-text rt-uppercase-text">
                        {content.view}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-layout-vflex rt-blog-v1-title-wrap">
                  <div
                    blog-one="text-hover"
                    className="rt-sub-text rt-blog-v1-subtext"
                  >
                    {content.july82026}
                  </div>
                  <a
                    aria-label={content.blogPostAriaLabel}
                    blog-one="text-hover"
                    href={content.viewHref3}
                    className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                  >
                    {content.designingExperiencesForLastingGrowth}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div
                {...{ "data-scroll": "fade-up" }}
                blog-card="one"
                className="w-layout-vflex rt-blog-v1-wrap"
              >
                <div className="rt-blog-v1-image-v4 rt-overflow-hidden rt-radius-v2 rt-position-relative">
                  <Image
                    alt={content.Alt}
                    src={content.blogMedium06Image}
                    blog-image="scale"
                    width={563}
                    height={677}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                  <Link
                    href={content.viewHref4}
                    className="rt-blog-v1-wrap-overlay w-inline-block w--current"
                  >
                    <div className="w-layout-vflex rt-blog-v1-wrap-view-button">
                      <div className="rt-sub-text rt-uppercase-text">
                        {content.view}
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="w-layout-vflex rt-blog-v1-title-wrap">
                  <div
                    blog-one="text-hover"
                    className="rt-sub-text rt-blog-v1-subtext"
                  >
                    {content.july72026}
                  </div>
                  <Link
                    aria-label={content.blogPostAriaLabel}
                    blog-one="text-hover"
                    href={content.viewHref4}
                    className="rt-text-style-h6 rt-blog-v1-image-v1-title w--current"
                  >
                    {content.designingBrandsForDigitalSuccess}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
