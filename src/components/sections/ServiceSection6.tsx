"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function ServiceSection6() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.serviceSection6;
  return (
    <section
      className="rt-section-top-sm w-variant-89573588-3cb7-a7a0-99ec-0e8e4b7ded49"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div data-animate="text" className="rt-clients-v3-grid">
          <div
            id="w-node-dd6c67ac-72e3-b6d9-0e4f-1adec5c2e3cd-c5c2e3ca"
            className="w-layout-vflex rt-client-title-wrap"
          >
            <div className="rt-sub-text">{content.eyebrow}</div>
            <div
              data-value-blur=""
              role="group"
              className="rt-text-style-h3 rt-text-top-gap-v1"
            >
              {content.trustedByAmbitious}
              <span className="rt-highilight-text">{content.brands}</span>
            </div>
          </div>
          <div
            {...{ "data-scroll": "pop-up" }}
            id="w-node-dd6c67ac-72e3-b6d9-0e4f-1adec5c2e3d3-c5c2e3ca"
            className="w-layout-hflex rt-client-cell rt-logo-hover rt-position-relative"
          >
            <div className="rt-overflow-hidden rt-position-relative">
              <div className="rt-client-logo rt-logo-dark">
                <Image
                  src={content.clientLogo01DarkImage}
                  alt={content.Alt}
                  width={323}
                  height={83}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="rt-client-logo rt-logo-light">
                <Image
                  src={content.clientLogo01LightImage}
                  alt={content.Alt}
                  width={323}
                  height={83}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
          </div>
          <div
            {...{ "data-scroll": "pop-up" }}
            className="w-layout-hflex rt-client-cell rt-logo-hover rt-position-relative"
          >
            <div className="rt-overflow-hidden rt-position-relative">
              <div className="rt-client-logo rt-logo-dark">
                <Image
                  src={content.clientLogo02DarkImage}
                  alt={content.Alt}
                  width={169}
                  height={36}
                  sizes="169px"
                />
              </div>
              <div className="rt-client-logo rt-logo-light">
                <Image
                  src={content.clientLogo02LightImage}
                  alt={content.Alt}
                  width={169}
                  height={36}
                  sizes="169px"
                />
              </div>
            </div>
          </div>
          <div
            {...{ "data-scroll": "pop-up" }}
            className="w-layout-hflex rt-client-cell rt-logo-hover rt-position-relative"
          >
            <div className="rt-overflow-hidden rt-position-relative">
              <div className="rt-client-logo rt-logo-dark">
                <Image
                  src={content.clientLogo03DarkImage}
                  alt={content.Alt}
                  width={246}
                  height={91}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="rt-client-logo rt-logo-light">
                <Image
                  src={content.clientLogo03LightImage}
                  alt={content.Alt}
                  width={246}
                  height={91}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
          </div>
          <div
            {...{ "data-scroll": "pop-up" }}
            className="w-layout-hflex rt-client-cell rt-logo-hover rt-position-relative"
          >
            <div className="rt-overflow-hidden rt-position-relative">
              <div className="rt-client-logo rt-logo-dark">
                <Image
                  src={content.clientLogo07DarkImage}
                  alt={content.Alt}
                  width={312}
                  height={66}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="rt-client-logo rt-logo-light">
                <Image
                  src={content.clientLogo04LightImage}
                  alt={content.Alt}
                  width={156}
                  height={33}
                  sizes="156px"
                />
              </div>
            </div>
          </div>
          <div
            {...{ "data-scroll": "pop-up" }}
            className="w-layout-hflex rt-client-cell rt-logo-hover rt-position-relative"
          >
            <div className="rt-overflow-hidden rt-position-relative">
              <div className="rt-client-logo rt-logo-dark">
                <Image
                  src={content.clientLogo05DarkImage}
                  alt={content.Alt}
                  width={256}
                  height={59}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="rt-client-logo rt-logo-light">
                <Image
                  src={content.clientLogo05LightImage}
                  alt={content.Alt}
                  width={128}
                  height={30}
                  sizes="128px"
                />
              </div>
            </div>
          </div>
          <div
            {...{ "data-scroll": "pop-up" }}
            className="w-layout-hflex rt-client-cell rt-logo-hover rt-position-relative"
          >
            <div className="rt-overflow-hidden rt-position-relative">
              <div className="rt-client-logo rt-logo-dark">
                <Image
                  src={content.clientLogo06DarkImage}
                  alt={content.Alt}
                  width={246}
                  height={75}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="rt-client-logo rt-logo-light">
                <Image
                  src={content.clientLogo06LightImage}
                  alt={content.Alt}
                  width={123}
                  height={38}
                  sizes="123px"
                />
              </div>
            </div>
          </div>
          <div
            {...{ "data-scroll": "pop-up" }}
            className="w-layout-hflex rt-client-cell rt-logo-hover rt-position-relative"
          >
            <div className="rt-overflow-hidden rt-position-relative">
              <div className="rt-client-logo rt-logo-dark">
                <Image
                  src={content.clientLogo07DarkImage2}
                  alt={content.Alt}
                  width={329}
                  height={50}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="rt-client-logo rt-logo-light">
                <Image
                  src={content.clientLogo08LightImage}
                  alt={content.Alt}
                  width={329}
                  height={50}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
