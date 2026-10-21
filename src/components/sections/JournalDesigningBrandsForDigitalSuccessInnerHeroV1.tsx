"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function JournalDesigningBrandsForDigitalSuccessInnerHeroV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content =
    siteConfig.sections.journalDesigningBrandsForDigitalSuccessInnerHeroV1;
  return (
    <section className="rt-inner-hero-v1 rt-section-bottom-sm" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="rt-grid-wrap-8 rt-margin-auto rt-text-center rt-overflow-hidden">
          <h1 data-value-blur="">{content.title}</h1>
        </div>
        <div className="rt-blog-details-image-wrap rt-blog-details-wrap-top-gap">
          <Image
            src={content.blogMedium06Image}
            alt={content.Alt}
            className="rt-radius-v2"
            width={1168}
            height={1262}
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
          />
        </div>
        <div className="rt-grid-wrap-8 rt-margin-auto">
          <div
            data-value-blur=""
            className="rt-blog-rich-text rt-section-top-sm w-richtext"
          >
            <h2>{content.heading}</h2>
            <p>{content.description}</p>
            <p>{content.description2}</p>
            <p>{content.description3}</p>
            <h3>{content.heading2}</h3>
            <p>{content.description4}</p>
            <p>{content.description5}</p>
            <h3>{content.heading3}</h3>
            <p>{content.description6}</p>
          </div>
          <div
            {...{ "data-scroll": "pop-up" }}
            className="w-layout-hflex rt-blog-author-wrapper rt-radius-v2 rt-blog-details-wrap-top-gap"
          >
            <div className="rt-blog-author-image rt-no-shrink">
              <Image
                src={content.blogAuthor06Image}
                alt={content.Alt}
                className="rt-radius-v2"
                width={264}
                height={264}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
            <div className="w-layout-vflex">
              <div className="rt-text-style-h6 rt-text-bottom-gap-v1">
                {content.aboutMe}
              </div>
              <p className="rt-bottom-no-gap">{content.description7}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
