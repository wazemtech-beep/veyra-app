"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import BrandLogo from "./BrandLogo";
export default function Navbar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.navbar;
  return (
    <section className="rt-nav-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v2 w-container">
        <div className="w-layout-hflex rt-nav-wrap">
          <Link
            href={content.Href}
            className="rt-brand w-inline-block w--current"
          >
            <BrandLogo />
          </Link>
          <div className="w-layout-hflex rt-nav-right rt-grid-wrap-3">
            <div className="rt-nav-button rt-tab-display-none">
              <Link
                href={content.letSTalkletSTalkHref}
                {...{ button: "hover-wrap" }}
                className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
              >
                <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                  <div
                    button-one="text"
                    className="rt-button-text rt-button-text-v1"
                  >
                    {content.letSTalk}
                  </div>
                  <div
                    button-one="text"
                    className="rt-button-text rt-button-text-v2"
                  >
                    {content.letSTalk}
                  </div>
                </div>
                <div className="rt-button-v1-border">
                  <div className="rt-button-v1-border-overlay"></div>
                </div>
              </Link>
            </div>
            <div className="w-layout-vflex rt-nav-hamburger-wrap">
              <div className="rt-nav-hamburger-line-v1"></div>
              <div className="rt-nav-hamburger-line-v1 rt-nav-hamburger-line-v2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-layout-hflex rt-nav-menu-wrapper">
        <div className="w-layout-vflex rt-nav-menu-curtain rt-nav-menu-curtain-1">
          <div className="w-layout-hflex rt-nav-menu-left-line-wrap">
            <div className="w-layout-vflex rt-nav-menu-list-wrap">
              <div className="rt-overflow-hidden">
                <Link
                  href={content.Href}
                  className="rt-nav-link w-inline-block w--current"
                >
                  <div className="rt-text-style-h2 rt-text-color-inherit">
                    {content.home}
                  </div>
                </Link>
              </div>
              <div className="rt-overflow-hidden">
                <Link
                  href={content.aboutHref}
                  className="rt-nav-link w-inline-block"
                >
                  <div className="rt-text-style-h2 rt-text-color-inherit">
                    {content.about}
                  </div>
                </Link>
              </div>
              <div className="rt-overflow-hidden">
                <Link
                  href={content.servicesHref}
                  className="rt-nav-link w-inline-block"
                >
                  <div className="rt-text-style-h2 rt-text-color-inherit">
                    {content.services}
                  </div>
                </Link>
              </div>
              <div className="w-layout-hflex rt-nav-menu-list">
                <div className="w-layout-hflex rt-nav-menu-link-wrap">
                  <div className="rt-text-style-h2 rt-text-color-inherit">
                    {content.journal}
                  </div>
                  <div className="div-block-3">
                    <div className="w-embed">
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M15.7871 32.2811L31.5741 16.4941L15.7871 0.707031M31.5741 16.4941H8.8397e-05"
                          stroke="var(--_colors---text-color--text-secondary)"
                          strokeWidth="2"
                        ></path>{" "}
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-layout-vflex rt-nav-submenu-wrap">
                  <Link href={content.journalHref} className="rt-nav-link-text">
                    {content.journal2}
                  </Link>
                  <Link
                    href={content.journalDetailsHref}
                    className="rt-nav-link-text"
                  >
                    {content.journalDetails}
                  </Link>
                </div>
              </div>
              <div className="rt-overflow-hidden">
                <Link
                  href={content.letSTalkletSTalkHref}
                  className="rt-nav-link w-inline-block"
                >
                  <div className="rt-text-style-h2 rt-text-color-inherit">
                    {content.contact}
                  </div>
                </Link>
              </div>
              <div className="w-layout-hflex rt-nav-menu-list">
                <div className="w-layout-hflex rt-nav-menu-link-wrap">
                  <div className="rt-text-style-h2 rt-text-color-inherit">
                    {content.portfolio}
                  </div>
                  <div className="div-block-3">
                    <div className="w-embed">
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M15.7871 32.2811L31.5741 16.4941L15.7871 0.707031M31.5741 16.4941H8.8397e-05"
                          stroke="var(--_colors---text-color--text-secondary)"
                          strokeWidth="2"
                        ></path>{" "}
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-layout-vflex rt-nav-submenu-wrap">
                  <Link
                    href={content.portfolioOneHref}
                    className="rt-nav-link-text"
                  >
                    {content.portfolioOne}
                  </Link>
                  <a
                    href={content.portfolioTwoHref}
                    className="rt-nav-link-text"
                  >
                    {content.portfolioTwo}
                  </a>
                  <a
                    href={content.portfolioThreeHref}
                    className="rt-nav-link-text"
                  >
                    {content.portfolioThree}
                  </a>
                  <Link
                    href={content.portfolioDetailsHref}
                    className="rt-nav-link-text"
                  >
                    {content.portfolioDetails}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-nav-menu-left-bottom-wrap">
            <a
              href={content.licenseHref}
              className="rt-text-style-h6 rt-highilight-text rt-nav-link"
            >
              {content.license}
            </a>
            <div className="rt-no-shrink rt-inline-flex">
              <div className="rt-inline-flex w-embed">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <circle cx="3" cy="3" r="3" fill="#4E4E4E"></circle>{" "}
                </svg>
              </div>
            </div>
            <Link
              href={content.value404Href}
              className="rt-text-style-h6 rt-highilight-text rt-nav-link"
            >
              {content.value404}
            </Link>
            <div className="rt-no-shrink rt-inline-flex">
              <div className="rt-inline-flex w-embed">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <circle cx="3" cy="3" r="3" fill="#4E4E4E"></circle>{" "}
                </svg>
              </div>
            </div>
            <a
              href={content.styleGuideHref}
              className="rt-text-style-h6 rt-highilight-text rt-nav-link"
            >
              {content.styleGuide}
            </a>
          </div>
        </div>
        <div className="w-layout-vflex rt-nav-menu-curtain rt-nav-menu-curtain-v2">
          <div className="w-layout-hflex rt-menu-logo-wrap">
            <div className="rt-menu-logo">
              <BrandLogo symbolOnly />
            </div>
            <div className="rt-large-text-v3 nav-highlight-text">
              {siteConfig.name}
            </div>
          </div>
          <div className="rt-overflow-hidden rt-full-width rt-radius-v2 rt-tab-display-none">
            <Image
              src={content.hero1VideoPosterImage}
              alt={content.Alt}
              className="rt-menu-video rt-z-index-1"
              width={3120}
              height={1532}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div className="w-layout-hflex rt-menu-right-bottom-wrap rt-tab-display-none">
            <div className="w-layout-hflex rt-menu-right-bottom-social-wrap">
              <a
                data-value-blur=""
                href={content.Href2}
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
                href={content.Href3}
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
                href={content.Href4}
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
            <div className="w-layout-vflex rt-menu-right-bottom-address-wrap">
              <div className="rt-uppercase-text rt-text-white rt-weight-bold">
                {content.location}
              </div>
              <div
                data-value-blur=""
                className="rt-text-style-h6 rt-uppercase-text rt-highilight-text-v2"
              >
                {content.value410SandtownCalifornia94001Usa}
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-menu-close-button">
            <div className="rt-sub-text rt-uppercase-text">{content.close}</div>
            <div className="rt-inline-flex">
              <div className="rt-inline-flex w-embed">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <line
                    y1="-0.5"
                    x2="14.613"
                    y2="-0.5"
                    {...{
                      transform:
                        "matrix(0.707097 0.707116 -0.707097 0.707116 0 1.40625)",
                    }}
                    stroke="black"
                  ></line>{" "}
                  <line
                    y1="-0.5"
                    x2="14.7304"
                    y2="-0.5"
                    {...{
                      transform:
                        "matrix(0.62931 -0.777154 0.777138 0.629331 1.06738 12.0762)",
                    }}
                    stroke="black"
                  ></line>{" "}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
