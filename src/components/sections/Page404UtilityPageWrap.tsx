"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function Page404UtilityPageWrap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.page404UtilityPageWrap;
  return (
    <div className="rt-utility-page-wrap" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="rt-utility-page-flex-wrap rt-flex-center-space-between">
          <div className="w-layout-vflex rt-grid-wrap-7">
            <div className="w-layout-hflex rt-hero-v3-text-wrap rt-contact-hero-v1-text-wrap">
              <h1 inner-hero="top-text" className="rt-no-gap">
                {content.title}
              </h1>
              <div
                inner-hero="highlighted"
                className="rt-stylish-font rt-text-grey"
              >
                {content.here}
              </div>
            </div>
            <div
              inner-hero="title-one"
              className="rt-large-text-v2 rt-highilight-text"
            >
              {content.anymore}
            </div>
            <div className="rt-grid-wrap-5">
              <div
                {...{ text: "apear" }}
                className="rt-text-top-gap-v1 rt-text-bottom-gap-v1"
              >
                {
                  content.thePageMayHaveBeenRelocatedOrDeletedVisitOurHomepageAndContinueYo
                }
              </div>
            </div>
            <Link
              href={content.backToHomebackToHomeHref}
              {...{ button: "hover-wrap" }}
              className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
            >
              <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                <div
                  button-one="text"
                  className="rt-button-text rt-button-text-v1"
                >
                  {content.backToHome}
                </div>
                <div
                  button-one="text"
                  className="rt-button-text rt-button-text-v2"
                >
                  {content.backToHome}
                </div>
              </div>
              <div className="rt-button-v1-border">
                <div className="rt-button-v1-border-overlay"></div>
              </div>
            </Link>
          </div>
          <div className="rt-grid-wrap-5">
            <Image
              src={content.value404ImageImage}
              {...{ "data-scroll": "fade-in" }}
              alt={content.value404ImageAlt}
              className="rt-radius-v2"
              width={1250}
              height={1430}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
