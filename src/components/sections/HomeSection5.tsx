"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function HomeSection5() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeSection5;
  return (
    <section
      className="rt-section-top-lg rt-section-bottom-lg"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="rt-grid-wrap-7 rt-margin-auto rt-text-center">
          <h2 data-value-blur="" className="rt-no-gap">
            {content.heading}
            <span className="rt-highilight-text">{content.organizations}</span>
            {content.heading2}
          </h2>
        </div>
      </div>
      <div className="w-layout-blockcontainer rt-container-full w-container">
        <div className="w-layout-vflex rt-testimonial-v1-marque-wrapper rt-wrap-top-gap-v1 rt-overflow-hidden">
          <div
            {...{ "data-scroll": "fade-up" }}
            className="w-layout-hflex rt-testimonial-v1-marque-wrap"
          >
            <div
              {...{ train: "" }}
              className="w-layout-hflex rt-testimonial-v1-marque-train"
            >
              <div className="w-layout-vflex rt-testimonials-v2-content">
                <div className="w-layout-vflex rt-testimonials-v2-card-top">
                  <p className="rt-testimonial-text">{content.description}</p>
                </div>
                <div className="w-layout-hflex rt-testimonials-v2-card-bottom">
                  <div className="rt-testimonial-v1-author-image">
                    <Image
                      src={content.testimonialAuthor7Image}
                      alt={content.testimonialAuthor7Alt}
                      width={60}
                      height={60}
                      sizes="60px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-testimonials-card-v2-author">
                    <div className="rt-text-style-h6">
                      {content.emilyCarter}
                    </div>
                    <div>{content.marketingDirector}</div>
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-testimonials-v2-content rt-position-relative rt-overflow-hidden">
                <div className="w-layout-hflex rt-testimonials-v2-card-bottom rt-testimonial-bottom-title">
                  <div className="rt-testimonial-v1-author-image">
                    <Image
                      src={content.testimonialAuthor8Image}
                      alt={content.testimonialAuthor8Alt}
                      width={120}
                      height={120}
                      sizes="120px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-testimonials-card-v2-author">
                    <div className="rt-text-style-h6 rt-text-white">
                      {content.nathanCollins}
                    </div>
                    <div className="rt-text-white">{content.uxDesignLead}</div>
                  </div>
                </div>
                <Image
                  src={content.testiImage1Image}
                  alt={content.testiImage1Alt}
                  className="rt-testimonial-v1-video"
                  width={1082}
                  height={650}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-vflex rt-testimonials-v2-content">
                <div className="w-layout-vflex rt-testimonials-v2-card-top">
                  <p className="rt-testimonial-text">{content.description}</p>
                </div>
                <div className="w-layout-hflex rt-testimonials-v2-card-bottom">
                  <div className="rt-testimonial-v1-author-image">
                    <Image
                      src={content.testimonialAuthor7Image}
                      alt={content.testimonialAuthor7Alt}
                      width={60}
                      height={60}
                      sizes="60px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-testimonials-card-v2-author">
                    <div className="rt-text-style-h6">
                      {content.emilyCarter}
                    </div>
                    <div>{content.marketingDirector}</div>
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-testimonials-v2-content">
                <div className="w-layout-vflex rt-testimonials-v2-card-top">
                  <p className="rt-testimonial-text">{content.description2}</p>
                </div>
                <div className="w-layout-hflex rt-testimonials-v2-card-bottom">
                  <div className="rt-testimonial-v1-author-image">
                    <Image
                      src={content.testimonialAuthor3Image}
                      alt={content.testimonialAuthor3Alt}
                      width={120}
                      height={120}
                      sizes="120px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-testimonials-card-v2-author">
                    <div className="rt-text-style-h6">
                      {content.sophiaMitchell}
                    </div>
                    <div>{content.brandStrategist}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            {...{ "data-scroll": "fade-up" }}
            className="w-layout-hflex rt-testimonial-v1-marque-wrap rt-testimonial-v1-marque-wrap-v2"
          >
            <div
              {...{ train: "right" }}
              className="w-layout-hflex rt-testimonial-v1-marque-train"
            >
              <div className="w-layout-vflex rt-testimonials-v2-content">
                <div className="w-layout-vflex rt-testimonials-v2-card-top">
                  <p className="rt-testimonial-text">{content.description3}</p>
                </div>
                <div className="w-layout-hflex rt-testimonials-v2-card-bottom">
                  <div className="rt-testimonial-v1-author-image">
                    <Image
                      src={content.testimonialAuthor2Image}
                      alt={content.testimonialAuthor2Alt}
                      width={120}
                      height={120}
                      sizes="120px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-testimonials-card-v2-author">
                    <div className="rt-text-style-h6">
                      {content.jamesAnderson}
                    </div>
                    <div>{content.creativeDirector}</div>
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-testimonials-v2-content">
                <div className="w-layout-vflex rt-testimonials-v2-card-top">
                  <p className="rt-testimonial-text">{content.description4}</p>
                </div>
                <div className="w-layout-hflex rt-testimonials-v2-card-bottom">
                  <div className="rt-testimonial-v1-author-image">
                    <Image
                      src={content.testimonialAuthor3Image}
                      alt={content.testimonialAuthor3Alt}
                      width={120}
                      height={120}
                      sizes="120px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-testimonials-card-v2-author">
                    <div className="rt-text-style-h6">
                      {content.oliviaBennett}
                    </div>
                    <div>{content.businessConsultant}</div>
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-testimonials-v2-content rt-position-relative rt-overflow-hidden">
                <div className="w-layout-hflex rt-testimonials-v2-card-bottom rt-testimonial-bottom-title">
                  <div className="rt-testimonial-v1-author-image">
                    <Image
                      src={content.testimonialAuthor5Image}
                      alt={content.testimonialAuthor5Alt}
                      width={120}
                      height={120}
                      sizes="120px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-testimonials-card-v2-author">
                    <div className="rt-text-style-h6 rt-text-white">
                      {content.graceFoster}
                    </div>
                    <div className="rt-text-white">
                      {content.digitalMarketingManager}
                    </div>
                  </div>
                </div>
                <Image
                  src={content.testiImage2Image}
                  alt={content.testiImage2Alt}
                  className="rt-testimonial-v1-video"
                  width={1082}
                  height={690}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-vflex rt-testimonials-v2-content">
                <div className="w-layout-vflex rt-testimonials-v2-card-top">
                  <p className="rt-testimonial-text">{content.description4}</p>
                </div>
                <div className="w-layout-hflex rt-testimonials-v2-card-bottom">
                  <div className="rt-testimonial-v1-author-image">
                    <Image
                      src={content.testimonialAuthor3Image}
                      alt={content.testimonialAuthor3Alt}
                      width={120}
                      height={120}
                      sizes="120px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-testimonials-card-v2-author">
                    <div className="rt-text-style-h6">
                      {content.oliviaBennett}
                    </div>
                    <div>{content.businessConsultant}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rt-testimonial-v1-marque-overlay rt-mouse-event-none"></div>
        </div>
      </div>
    </section>
  );
}
