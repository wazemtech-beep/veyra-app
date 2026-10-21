"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function ServiceInnerHeroV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.serviceInnerHeroV1;
  return (
    <section className="rt-inner-hero-v1 rt-section-bottom-md" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-hero-v3-text-wrap">
          <h1 hero-two="top-text" className="rt-no-gap">
            {content.title}
          </h1>
          <div hero-text="highlighted" className="rt-stylish-font rt-text-grey">
            {content.creative}
          </div>
        </div>
        <div className="w-layout-hflex rt-hero-v2-text-image-wrap">
          <div
            hero-two="center-video"
            className="rt-hero-v2-video rt-radius-v2 rt-overflow-hidden"
          >
            <Image
              src={content.hero3ImageImage}
              alt={content.hero3ImageAlt}
              while-data-scroll="image-move"
              className="rt-scroll-move-v1-image"
              width={332}
              height={199}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div
            hero-two="title-two"
            role="group"
            className="rt-large-text-v2 rt-highilight-text"
          >
            {content.services}
          </div>
        </div>
      </div>
    </section>
  );
}
