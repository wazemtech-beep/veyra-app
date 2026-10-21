"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.footer;
  return (
    <section className="rt-footer-v1 rt-position-relative" ref={sectionRef}>
      <div className="rt-footer-v1-wrapper rt-margin-auto">
        <div className="w-layout-blockcontainer rt-container-v1 w-container">
          <div className="rt-footer-v1-wrap">
            <div className="w-layout-hflex rt-flex-top-space-between">
              <div className="rt-grid-wrap-5">
                <div className="rt-sub-text w-variant-a55ef6ae-5a71-6df9-fd80-5c0a14b4bb91">
                  {content.creativeDigitalAgency}
                </div>
                <div className="rt-overflow-hidden">
                  <div
                    data-value-blur=""
                    className="rt-text-style-h3 rt-text-white rt-text-top-gap-v1"
                  >
                    {content.your}
                    <span className="rt-highilight-text-v2">
                      {content.brand}
                    </span>
                    {content.deservesMoreThanOrdinary}
                  </div>
                </div>
                <div className="rt-grid-wrap-4 rt-overflow-hidden">
                  <p
                    data-value-blur=""
                    className="rt-bottom-no-gap rt-light-text rt-text-top-gap-v1"
                  >
                    {content.description}
                  </p>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-vflex rt-text-top-gap-v1"
                >
                  <Link
                    href={content.scheduleAConsultationScheduleAConsuHref}
                    {...{ button: "hover-wrap" }}
                    className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
                  >
                    <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                      <div
                        button-one="text"
                        className="rt-button-text w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1 rt-button-text-v1"
                      >
                        {content.scheduleAConsultation}
                      </div>
                      <div
                        button-one="text"
                        className="rt-button-text w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1 rt-button-text-v2"
                      >
                        {content.scheduleAConsultation}
                      </div>
                    </div>
                    <div className="rt-button-v1-border w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1">
                      <div className="rt-button-v1-border-overlay w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1"></div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="rt-grid-wrap-4">
                <div className="w-layout-hflex rt-footer-v1-links-social-icon-wrap">
                  <div className="rt-grid-wrap-1">
                    <div className="w-layout-vflex rt-footer-link-block-wrap">
                      <a
                        data-value-blur=""
                        href={content.homeHref}
                        className="rt-footer-link-block w-inline-block"
                      >
                        <div className="rt-footer-link">{content.home}</div>
                        <div className="rt-footer-link-border"></div>
                      </a>
                      {content.links.map((item, index) => (
                        <Link
                          data-value-blur=""
                          href={item.href}
                          className="rt-footer-link-block w-inline-block"
                          key={index}
                        >
                          <div className="rt-footer-link rt-dark-text">
                            {item.label}
                          </div>
                          <div className="rt-footer-link-border"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="rt-grid-wrap-1">
                    <div className="w-layout-vflex rt-footer-v2-social-icon">
                      <a
                        data-value-blur=""
                        href={content.Href}
                        className="rt-footer-v1-icon-wrap w-inline-block"
                      >
                        <div className="rt-footer-v1-icon">
                          <Image
                            alt={content.footerLinkedinIconAlt}
                            src={content.footerLinkedinIconImage}
                            className="rt-footer-icon"
                            width={16}
                            height={16}
                            sizes="16px"
                          />
                        </div>
                      </a>
                      <a
                        data-value-blur=""
                        href={content.Href2}
                        className="rt-footer-v1-icon-wrap w-inline-block"
                      >
                        <div className="rt-footer-v1-icon">
                          <Image
                            alt={content.footerFacebookIconAlt}
                            src={content.footerFacebookIconImage}
                            className="rt-footer-icon"
                            width={11}
                            height={16}
                            sizes="11px"
                          />
                        </div>
                      </a>
                      <a
                        data-value-blur=""
                        href={content.Href3}
                        className="rt-footer-v1-icon-wrap w-inline-block"
                      >
                        <div className="rt-footer-v1-icon">
                          <Image
                            alt={content.adrovenFooterXIconAlt}
                            src={content.adrovenFooterXIconImage}
                            className="rt-footer-icon"
                            width={16}
                            height={16}
                            sizes="16px"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-layout-vflex rt-footer-v1-list-wrap">
                  <div className="rt-footer-link rt-uppercase-text rt-weight-bold">
                    {content.location}
                  </div>
                  <div
                    data-value-blur=""
                    className="rt-text-style-h6 rt-uppercase-text rt-highilight-text-v2"
                  >
                    {content.value410SandtownCalifornia94001Usa}
                  </div>
                </div>
                <div
                  data-value-blur=""
                  className="w-layout-hflex rt-footer-v1-links-social-icon-wrap rt-footer-v1-utility-link-wrap"
                >
                  <a
                    href={content.licenseHref}
                    className="rt-footer-link rt-text-white"
                  >
                    {content.license}
                  </a>
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      alt={content.Alt}
                      src={content.ellipseWhiteImage}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <Link
                    href={content.passwordProtectedHref}
                    className="rt-footer-link"
                  >
                    {content.passwordProtected}
                  </Link>
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      alt={content.Alt}
                      src={content.ellipseWhiteImage}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <Link
                    href={content.value404Href}
                    className="rt-footer-link rt-text-white"
                  >
                    {content.value404}
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-ooter-v1-large-text-wrap rt-overflow-hidden">
              <div className="rt-grid-wrap-7">
                <div
                  data-value-blur=""
                  role="group"
                  className="rt-large-text-v2"
                >
                  {siteConfig.name}
                </div>
              </div>
              <div className="w-layout-hflex rt-footer-v1-bottom-text-wrap rt-grid-wrap-5">
                <div className="rt-text-white">
                  &copy; 2026 {siteConfig.name}. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        aria-label={content.scrollToTopButtonAriaLabel}
        href={content.homeHref}
        className="rt-back-to-top w-inline-block"
      >
        <div className="rt-inline-flex w-embed">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M0.700348 10.7211L10.2003 1.40039L19.7003 10.7211M10.2003 1.40039V20.4004"
              stroke="black"
              strokeWidth="2"
            ></path>{" "}
          </svg>
        </div>
      </a>
    </section>
  );
}
