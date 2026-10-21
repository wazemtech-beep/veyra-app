"use client";
import DeferredVideo from "@/components/ui/DeferredVideo";
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
              data-poster-url="https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581734/wazemtech/veyra/refly-generate-a-motion-video-by-this-image-557484_poster-0000000-c797e499d75f.jpg"
              data-video-urls="https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581736/wazemtech/veyra/e74ed322_Firefly-generate-a-motion-video-by-this-image-557484_mp4-b2d0003d6fd0.mp4,https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581736/wazemtech/veyra/74ed322_Firefly-generate-a-motion-video-by-this-image-557484_webm-dc3c55cb5fe0.webm"
              data-autoplay="true"
              data-loop="true"
              className="rt-full-height rt-full-width w-background-video w-background-video-atom"
            >
              <DeferredVideo
                id="9384aded-40a8-9856-f751-ce01120fee5c-video"
                autoPlay={true}
                loop={true}
                style={{
                  backgroundImage:
                    'url("https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581734/wazemtech/veyra/refly-generate-a-motion-video-by-this-image-557484_poster-0000000-c797e499d75f.jpg")',
                }}
                muted={true}
                playsInline={true}
                data-object-fit="cover"
              >
                <source src={content.mp4Image} />
                <source src={content.webmImage} />
              </DeferredVideo>
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
