"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function AboutInnerHeroV1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutInnerHeroV1;
  return (
    <section className="rt-inner-hero-v1 rt-section-bottom-md" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-hero-v2-text-wrap-bottom">
          <h1 hero-two="top-text" className="rt-no-gap">
            {content.title}
          </h1>
          <div hero-text="highlighted" className="rt-stylish-font rt-text-grey">
            {content.make}
          </div>
        </div>
        <div className="w-layout-hflex rt-hero-v2-text-image-wrap">
          <div
            hero-two="title-one"
            className="rt-large-text-v2 rt-highilight-text"
          >
            {content.our}
          </div>
          <div
            hero-two="center-video"
            hero-video="control"
            className="rt-hero-v2-video rt-radius-v1 rt-overflow-hidden rt-hero-v2-text-image-wrap-v2"
          >
            <div
              data-poster-url="/assets/a97d13ba9b-6a3a2ec973fc5efc103a0d0d-6a5605d3fe9ce5f1e74ed322_Firefly-generate-a-motion-video-by-this-image-557484_poster.0000000.jpg"
              data-video-urls="/assets/c8243a8a71-6a3a2ec973fc5efc103a0d0d-6a5605d3fe9ce5f1e74ed322_Firefly-generate-a-motion-video-by-this-image-557484_mp4.mp4,/assets/613d7a7e41-6a3a2ec973fc5efc103a0d0d-6a5605d3fe9ce5f1e74ed322_Firefly-generate-a-motion-video-by-this-image-557484_webm.webm"
              data-autoplay="true"
              data-loop="true"
              className="rt-full-height rt-full-width w-background-video w-background-video-atom"
            >
              <video
                id="9384aded-40a8-9856-f751-ce01120fee5c-video"
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
                  aria-controls="9384aded-40a8-9856-f751-ce01120fee5c-video"
                  video-control="button"
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
          <div
            hero-two="title-two"
            className="rt-large-text-v2 rt-highilight-text"
          >
            {content.story}
          </div>
        </div>
      </div>
    </section>
  );
}
