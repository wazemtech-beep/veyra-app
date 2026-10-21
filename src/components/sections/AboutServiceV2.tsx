"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function AboutServiceV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutServiceV2;
  return (
    <section className="rt-service-v2" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="rt-service-v2-block-wrapper">
          <div className="rt-service-v2-block-wrap rt-radius-v2 rt-overflow-hidden">
            <Image
              src={content.aboutServiceImageImage}
              alt={content.aboutServiceImageAlt}
              className="rt-service-v2-image"
              width={3600}
              height={1800}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
            <div className="w-layout-vflex rt-service-v2-wrapper">
              <div
                service-one="scroll-block"
                className="w-layout-vflex rt-service-v2-block-train"
              >
                <div
                  service-one="block"
                  className="rt-grid-wrap-4 rt-no-shrink rt-text-center rt-service-v2-block-v1"
                >
                  <div className="rt-sub-text w-variant-a55ef6ae-5a71-6df9-fd80-5c0a14b4bb91">
                    {content.whatInspiresUs}
                  </div>
                  <h2 className="rt-text-white rt-text-style-h3">
                    {content.heading}
                  </h2>
                  <p className="rt-text-white rt-bottom-no-gap">
                    {content.description}
                  </p>
                </div>
                <div
                  service-one="block"
                  className="rt-grid-wrap-4 rt-no-shrink rt-text-center rt-service-v2-block-v2"
                >
                  <div className="rt-sub-text w-variant-a55ef6ae-5a71-6df9-fd80-5c0a14b4bb91">
                    {content.ourPhilosophy}
                  </div>
                  <h3 className="rt-text-white">{content.heading2}</h3>
                  <p className="rt-text-white rt-bottom-no-gap">
                    {content.description2}
                  </p>
                </div>
                <div
                  service-one="block"
                  className="rt-grid-wrap-4 rt-no-shrink rt-text-center rt-service-v2-block-v3"
                >
                  <div className="rt-sub-text w-variant-a55ef6ae-5a71-6df9-fd80-5c0a14b4bb91">
                    {content.ourApproach}
                  </div>
                  <h3 className="rt-text-white">{content.heading3}</h3>
                  <p className="rt-text-white rt-bottom-no-gap">
                    {content.description3}
                  </p>
                </div>
                <div
                  service-one="block"
                  className="rt-grid-wrap-4 rt-no-shrink rt-text-center rt-service-v2-block-v4"
                >
                  <div className="rt-sub-text w-variant-a55ef6ae-5a71-6df9-fd80-5c0a14b4bb91">
                    {content.whatWeBelieve}
                  </div>
                  <h3 className="rt-text-white">{content.heading4}</h3>
                  <p className="rt-text-white rt-bottom-no-gap">
                    {content.description4}
                  </p>
                </div>
                <div className="rt-grid-wrap-4 rt-no-shrink rt-text-center">
                  <div className="rt-sub-text w-variant-a55ef6ae-5a71-6df9-fd80-5c0a14b4bb91">
                    {content.ourMission}
                  </div>
                  <h3 className="rt-text-white">{content.heading5}</h3>
                  <p className="rt-text-white rt-bottom-no-gap">
                    {content.description5}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
