"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeSection2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeSection2;
  return (
    <section className="rt-section-top-lg" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-flex-top-space-between-v3">
          <div className="w-layout-vflex rt-grid-wrap-3">
            <div className="rt-sub-text">{content.eyebrow}</div>
          </div>
          <div role="group" className="rt-grid-wrap-8">
            <h2 data-value-blur="" className="rt-top-no-gap">
              {content.heading}
              <span className="rt-highilight-text">
                {content.meaningfulBrands}
              </span>
              {content.heading2}
            </h2>
            <div className="rt-grid-wrap-5">
              <p data-value-blur="" className="rt-bottom-no-gap">
                {content.description}
              </p>
            </div>
          </div>
        </div>
        <div
          portfolio-v3="card-wrapper"
          className="w-layout-vflex rt-grid-wrap-8 rt-margin-auto rt-portfolio-v3-wrap rt-portfolio-v1-top-gap-v1"
        >
          <div className="rt-portfolio-apearance-wrap rt-position-relative rt-overflow-hidden">
            <div
              data-poster-url="/assets/a97d13ba9b-6a3a2ec973fc5efc103a0d0d-6a5605d3fe9ce5f1e74ed322_Firefly-generate-a-motion-video-by-this-image-557484_poster.0000000.jpg"
              data-video-urls="/assets/c8243a8a71-6a3a2ec973fc5efc103a0d0d-6a5605d3fe9ce5f1e74ed322_Firefly-generate-a-motion-video-by-this-image-557484_mp4.mp4,/assets/613d7a7e41-6a3a2ec973fc5efc103a0d0d-6a5605d3fe9ce5f1e74ed322_Firefly-generate-a-motion-video-by-this-image-557484_webm.webm"
              data-autoplay="true"
              data-loop="true"
              className="rt-full-width rt-radius-v2 rt-overflow-hidden rt-full-height w-background-video w-background-video-atom"
            >
              <video
                id="48dd7be8-0b79-57b3-b779-5d123d105ae9-video"
                autoPlay={true}
                loop={true}
                style={{
                  backgroundImage:
                    'url("/assets/a97d13ba9b-6a3a2ec973fc5efc103a0d0d-6a5605d3fe9ce5f1e74ed322_Firefly-generate-a-motion-video-by-this-image-557484_poster.0000000.jpg")',
                }}
                muted={true}
                playsInline={true}
                data-object-fit="cover"
              >
                <source src={content.mp4Image} />
                <source src={content.webmImage} />
              </video>
              <div aria-live="polite">
                <button
                  type="button"
                  data-w-bg-video-control="true"
                  aria-controls="48dd7be8-0b79-57b3-b779-5d123d105ae9-video"
                  className="w-backgroundvideo-backgroundvideoplaypausebutton rt-video-control-button w-background-video--control"
                >
                  <span>
                    <Image
                      src={content.pauseVideoImage}
                      alt={content.pauseVideoAlt}
                      width={22}
                      height={21}
                      sizes="22px"
                    />
                  </span>
                  <span hidden={true}>
                    <Image
                      alt={content.playVideoAlt}
                      src={content.playVideoImage}
                      width={15}
                      height={20}
                      sizes="15px"
                    />
                  </span>
                </button>
              </div>
            </div>
            <div
              circle-mask="image-scale"
              className="rt-portfolio-circle-apear-mask"
            >
              <Image
                src={content.portfolioCircleMaskImage}
                alt={content.portfolioCircleMaskAlt}
                width={2826}
                height={2056}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
          <div className="rt-full-width w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <a
                  portfolio-two="card"
                  href={content.value2025buildingBoldDigitalBrandIdentitHref}
                  className="rt-portfolio-card-v2 rt-position-relative rt-radius-v2 rt-overflow-hidden w-inline-block"
                >
                  <Image
                    src={content.portfolioMedium02Image}
                    portfolio-three="image-zoom"
                    alt={content.Alt}
                    width={2384}
                    height={1724}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                  <div className="w-layout-vflex rt-portfolio-card-v2-overlay">
                    <div
                      portfolio-two="content-wrap"
                      className="w-layout-hflex rt-flex-center-space-between rt-full-width"
                    >
                      <h3 className="rt-text-white rt-no-gap">
                        {content.heading3}
                      </h3>
                      <div
                        aria-label={content.portfolioTitleAriaLabel}
                        className="rt-grid-wrap-4"
                      >
                        <h3 className="rt-text-white rt-no-gap">
                          {content.heading4}
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="rt-full-width w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <a
                  portfolio-two="card"
                  href={content.value2025innovativeDesignLastingImpactHref}
                  className="rt-portfolio-card-v2 rt-position-relative rt-radius-v2 rt-overflow-hidden w-inline-block"
                >
                  <Image
                    src={content.portfolioMedium05Image}
                    portfolio-three="image-zoom"
                    alt={content.Alt}
                    width={2384}
                    height={1724}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                  <div className="w-layout-vflex rt-portfolio-card-v2-overlay">
                    <div
                      portfolio-two="content-wrap"
                      className="w-layout-hflex rt-flex-center-space-between rt-full-width"
                    >
                      <h3 className="rt-text-white rt-no-gap">
                        {content.heading3}
                      </h3>
                      <div className="rt-grid-wrap-4">
                        <h3
                          aria-label={content.portfolioTitleAriaLabel}
                          className="rt-text-white rt-no-gap"
                        >
                          {content.heading5}
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="rt-full-width w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <Link
                  portfolio-two="card"
                  href={content.value2025creativeThinkingDeliveredDailyHref}
                  className="rt-portfolio-card-v2 rt-position-relative rt-radius-v2 rt-overflow-hidden w-inline-block"
                >
                  <Image
                    src={content.portfolioMedium01Image}
                    portfolio-three="image-zoom"
                    alt={content.Alt}
                    width={2384}
                    height={1724}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                  <div className="w-layout-vflex rt-portfolio-card-v2-overlay">
                    <div
                      portfolio-two="content-wrap"
                      className="w-layout-hflex rt-flex-center-space-between rt-full-width"
                    >
                      <h3 className="rt-text-white rt-no-gap">
                        {content.heading3}
                      </h3>
                      <div className="rt-grid-wrap-4">
                        <h3
                          aria-label={content.portfolioTitleAriaLabel}
                          className="rt-text-white rt-no-gap"
                        >
                          {content.heading6}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-vflex rt-service-v1-bottom-text-wrap rt-flex-center-center">
          <div className="rt-grid-wrap-5 rt-margin-auto rt-text-center">
            <p>{content.description2}</p>
          </div>
          <Link
            {...{ "data-scroll": "pop-up" }}
            {...{ rotation: "loop" }}
            href={content.Href}
            className="rt-text-top-gap-v1 w-inline-block"
          >
            <Image
              src={content.heroRoundButtonImage}
              alt={content.heroRoundButtonAlt}
              width={179}
              height={175}
              sizes="179px"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
