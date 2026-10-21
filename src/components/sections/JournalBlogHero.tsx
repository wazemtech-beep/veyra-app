"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function JournalBlogHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.journalBlogHero;
  return (
    <section id="Blog-hero" className="rt-section-bottom-lg" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div
          data-current="Tab 1"
          data-easing="ease"
          data-duration-in="300"
          data-duration-out="100"
          className="w-tabs"
        >
          <div inner-hero="text-wrap" className="rt-blog-tab-wrap w-tab-menu">
            <a className="rt-service-v1-tag-v2 w-inline-block w-tab-link w--current">
              <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                {content.all}
              </div>
            </a>
            <a className="rt-service-v1-tag-v2 w-inline-block w-tab-link">
              <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                {content.uiUxDesign}
              </div>
            </a>
            <a className="rt-service-v1-tag-v2 w-inline-block w-tab-link">
              <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                {content.brandIdentity}
              </div>
            </a>
            <a className="rt-service-v1-tag-v2 w-inline-block w-tab-link">
              <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                {content.visualLanguage}
              </div>
            </a>
            <a className="rt-service-v1-tag-v2 w-inline-block w-tab-link">
              <div className="rt-text-color-inherit rt-small-text rt-uppercase-text">
                {content.marketStrategy}
              </div>
            </a>
          </div>
          <div className="rt-wrap-top-gap-v2 w-tab-content">
            <div inner-hero="text-wrap" className="w-tab-pane w--tab-active">
              <div className="w-layout-grid rt-4-column-card-grid">
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
                            aria-label={content.blogLinkAriaLabel}
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
                            src={content.blogMedium3Image}
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
                            {content.june302026}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={content.viewHref3}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {content.buildingLoyalBrandConnections}
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
                            src={content.blogMedium5Image}
                            blog-image="scale"
                            width={563}
                            height={677}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <a
                            href={content.viewHref4}
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
                            {content.july62026}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={content.viewHref4}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {content.theEvolutionOfCreativeBranding}
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
                            src={content.blogMedium009Image}
                            blog-image="scale"
                            width={563}
                            height={677}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <a
                            href={content.viewHref5}
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
                            {content.july62026}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={content.viewHref5}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {content.strategiesForSustainableGrowth}
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
                            href={content.viewHref6}
                            className="rt-blog-v1-wrap-overlay w-inline-block"
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
                            href={content.viewHref6}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {content.designingBrandsForDigitalSuccess}
                          </Link>
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
                            href={content.viewHref7}
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
                            href={content.viewHref7}
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
                            src={content.blogMedium08Image}
                            blog-image="scale"
                            width={563}
                            height={677}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <a
                            href={content.viewHref8}
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
                            {content.july202026}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={content.viewHref8}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {content.creativeBrandGrowthStrategies}
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
                            src={content.blogMedium09Image}
                            blog-image="scale"
                            width={563}
                            height={677}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <a
                            href={content.viewHref9}
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
                            {content.july202026}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={content.viewHref9}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {content.designingBetterBusinessWebsites}
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
                            src={content.portfolioSmall10Image}
                            blog-image="scale"
                            width={563}
                            height={677}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <a
                            href={content.viewHref10}
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
                            {content.july212026}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={content.viewHref10}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {content.strategiesThatDriveGrowth}
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
                            src={content.portfolioSmall11Image}
                            blog-image="scale"
                            width={563}
                            height={677}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <a
                            href={content.viewHref11}
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
                            {content.july212026}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={content.viewHref11}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {content.insightsForDigitalExcellence}
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
                            src={content.portfolioSmall12Image}
                            blog-image="scale"
                            width={563}
                            height={677}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <a
                            href={content.viewHref12}
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
                            {content.july232026}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={content.viewHref12}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {content.storytellingInModernBranding}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-tab-pane">
              <div className="rt-wrap-top-gap-v1 w-dyn-list">
                <div role="list" className="rt-4-column-card-grid w-dyn-items">
                  {content.items.map((item, index) => (
                    <div role="listitem" className="w-dyn-item" key={index}>
                      <div
                        {...{ "data-scroll": "fade-up" }}
                        blog-card="one"
                        className="w-layout-vflex rt-blog-v1-wrap"
                      >
                        <div className="rt-blog-v1-image-v1 rt-overflow-hidden rt-radius-v2 rt-position-relative">
                          <Image
                            alt={content.Alt}
                            src={item.image}
                            blog-image="scale"
                            width={563}
                            height={677}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <a
                            href={item.href}
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
                            {item.label}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={item.href2}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {item.title}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div role="listitem" className="w-dyn-item">
                    <div
                      {...{ "data-scroll": "fade-up" }}
                      blog-card="one"
                      className="w-layout-vflex rt-blog-v1-wrap"
                    >
                      <div className="rt-blog-v1-image-v1 rt-overflow-hidden rt-radius-v2 rt-position-relative">
                        <Image
                          alt={content.Alt}
                          src={content.blogMedium06Image}
                          blog-image="scale"
                          width={563}
                          height={677}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                        <Link
                          href={content.viewHref6}
                          className="rt-blog-v1-wrap-overlay w-inline-block"
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
                          href={content.viewHref6}
                          className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                        >
                          {content.designingBrandsForDigitalSuccess}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div
                      {...{ "data-scroll": "fade-up" }}
                      blog-card="one"
                      className="w-layout-vflex rt-blog-v1-wrap"
                    >
                      <div className="rt-blog-v1-image-v1 rt-overflow-hidden rt-radius-v2 rt-position-relative">
                        <Image
                          alt={content.Alt}
                          src={content.portfolioSmall10Image}
                          blog-image="scale"
                          width={563}
                          height={677}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                        <a
                          href={content.viewHref10}
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
                          {content.july212026}
                        </div>
                        <a
                          aria-label={content.blogPostAriaLabel}
                          blog-one="text-hover"
                          href={content.viewHref10}
                          className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                        >
                          {content.strategiesThatDriveGrowth}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-tab-pane">
              <div className="rt-wrap-top-gap-v1 w-dyn-list">
                <div role="list" className="rt-4-column-card-grid w-dyn-items">
                  {content.items2.map((item, index) => (
                    <div role="listitem" className="w-dyn-item" key={index}>
                      <div
                        {...{ "data-scroll": "fade-up" }}
                        blog-card="one"
                        className="w-layout-vflex rt-blog-v1-wrap"
                      >
                        <div className="rt-blog-v1-image-v1 rt-overflow-hidden rt-radius-v2 rt-position-relative">
                          <Image
                            alt={content.Alt}
                            src={item.image}
                            blog-image="scale"
                            width={563}
                            height={677}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <a
                            href={item.href}
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
                            {item.label}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={item.href2}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {item.title}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-tab-pane">
              <div className="rt-wrap-top-gap-v1 w-dyn-list">
                <div role="list" className="rt-4-column-card-grid w-dyn-items">
                  {content.items3.map((item, index) => (
                    <div role="listitem" className="w-dyn-item" key={index}>
                      <div
                        {...{ "data-scroll": "fade-up" }}
                        blog-card="one"
                        className="w-layout-vflex rt-blog-v1-wrap"
                      >
                        <div className="rt-blog-v1-image-v1 rt-overflow-hidden rt-radius-v2 rt-position-relative">
                          <Image
                            alt={content.Alt}
                            src={item.image}
                            blog-image="scale"
                            width={563}
                            height={677}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <a
                            href={item.href}
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
                            {item.label}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={item.href2}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {item.title}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-tab-pane">
              <div className="rt-wrap-top-gap-v1 w-dyn-list">
                <div role="list" className="rt-4-column-card-grid w-dyn-items">
                  {content.items4.map((item, index) => (
                    <div role="listitem" className="w-dyn-item" key={index}>
                      <div
                        {...{ "data-scroll": "fade-up" }}
                        blog-card="one"
                        className="w-layout-vflex rt-blog-v1-wrap"
                      >
                        <div className="rt-blog-v1-image-v1 rt-overflow-hidden rt-radius-v2 rt-position-relative">
                          <Image
                            alt={content.Alt}
                            src={item.image}
                            blog-image="scale"
                            width={563}
                            height={677}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                          <a
                            href={item.href}
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
                            {item.label}
                          </div>
                          <a
                            aria-label={content.blogPostAriaLabel}
                            blog-one="text-hover"
                            href={item.href2}
                            className="rt-text-style-h6 rt-blog-v1-image-v1-title"
                          >
                            {item.title}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
