"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function AboutMissionV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutMissionV1;
  return (
    <section className="rt-mission-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-full rt-full-height w-container">
        <div className="w-layout-hflex rt-mission-v1-wrapper rt-full-height rt-overflow-hidden">
          <div className="rt-mission-v1-block rt-mission-v1-block-1">
            <div
              data-poster-url="/assets/134e20ec79-6a3a2ec973fc5efc103a0d0d-6a58c9c2c142bf32e0fa6fb6_ission-video_poster.0000000.jpg"
              data-video-urls="/assets/de973d2382-6a3a2ec973fc5efc103a0d0d-6a58c9c2c142bf32e0fa6fb6_ission-video_mp4.mp4,/assets/9379a33e77-6a3a2ec973fc5efc103a0d0d-6a58c9c2c142bf32e0fa6fb6_ission-video_webm.webm"
              data-autoplay="true"
              data-loop="true"
              className="rt-full-height rt-z-index-1 _63 w-background-video w-background-video-atom"
            >
              <video
                id="297d85a5-4a2f-7aad-24ee-a8d7c4edf544-video"
                autoPlay={true}
                loop={true}
                style={{
                  backgroundImage:
                    'url("/assets/134e20ec79-6a3a2ec973fc5efc103a0d0d-6a58c9c2c142bf32e0fa6fb6_ission-video_poster.0000000.jpg")',
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
                  aria-controls="297d85a5-4a2f-7aad-24ee-a8d7c4edf544-video"
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
          </div>
          <div className="w-layout-hflex rt-mission-v1-block rt-mission-v1-block-v2">
            <div className="rt-grid-wrap-6">
              <h2 feature-title="" className="rt-text-white rt-top-no-gap">
                {content.heading}
                <span className="rt-highilight-text-v2">
                  {content.meaningful}
                </span>
                {content.heading2}
              </h2>
              <div className="rt-text-bottom-gap-v1 rt-grid-wrap-5">
                <p feature-title="" className="rt-bottom-no-gap rt-light-text">
                  {content.description}
                </p>
              </div>
              <div feature-title="" className="w-layout-hflex">
                <Link
                  href={content.startYourProjectstartYourProjectHref}
                  {...{ button: "hover-wrap" }}
                  className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
                >
                  <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                    <div
                      button-one="text"
                      className="rt-button-text w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1 rt-button-text-v1"
                    >
                      {content.startYourProject}
                    </div>
                    <div
                      button-one="text"
                      className="rt-button-text w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1 rt-button-text-v2"
                    >
                      {content.startYourProject}
                    </div>
                  </div>
                  <div className="rt-button-v1-border w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1">
                    <div className="rt-button-v1-border-overlay w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
