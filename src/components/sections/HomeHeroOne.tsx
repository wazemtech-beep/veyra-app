"use client";
import DeferredVideo from "@/components/ui/DeferredVideo";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function HomeHeroOne() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeHeroOne;
  return (
    <section className="rt-hero-one rt-position-relative" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-hero-one-content-wrap">
          <div className="w-layout-vflex rt-flex-center-center rt-overflow-hidden">
            <div className="w-layout-hflex rt-hero-v1-title-wrap">
              <h1 hero-text="top" className="rt-no-gap">
                {content.title}
              </h1>
              <div
                hero-text="highlighted"
                className="rt-stylish-font rt-text-grey rt-text-bottom-gap-v2"
              >
                {content.your}
              </div>
            </div>
            <div className="w-layout-hflex rt-overflow-hidden rt-grid-wrap-11 rt-section-gap-hero-text">
              <div
                role="group"
                hero-one="title-apearance"
                className="rt-large-text-v1 rt-highilight-text rt-text-indent"
              >
                {content.b}
              </div>
              <div
                role="group"
                hero-one="title-apearance"
                className="rt-large-text-v1 rt-highilight-text rt-text-indent"
              >
                {content.r}
              </div>
              <div
                role="group"
                hero-one="title-apearance"
                className="rt-large-text-v1 rt-highilight-text rt-text-indent"
              >
                {content.a}
              </div>
              <div
                role="group"
                hero-one="title-apearance"
                className="rt-large-text-v1 rt-highilight-text rt-text-indent"
              >
                {content.n}
              </div>
              <div
                role="group"
                hero-one="title-apearance"
                className="rt-large-text-v1 rt-highilight-text rt-text-indent"
              >
                {content.d}
              </div>
              <div
                role="group"
                hero-one="title-apearance"
                className="rt-large-text-v1 rt-highilight-text rt-text-indent"
              >
                {content.i}
              </div>
              <div
                role="group"
                hero-one="title-apearance"
                className="rt-large-text-v1 rt-highilight-text rt-text-indent"
              >
                {content.n}
              </div>
              <div
                role="group"
                hero-one="title-apearance"
                className="rt-large-text-v1 rt-highilight-text rt-text-indent"
              >
                {content.g}
              </div>
            </div>
            <div className="rt-grid-wrap-4">
              <p
                role="group"
                hero-one="paragraph"
                className="rt-bottom-no-gap rt-text-top-gap-v1 rt-text-center"
              >
                {content.description}
              </p>
            </div>
            <div
              hero-one="marque"
              className="w-layout-hflex rt-hero-v1-marque-wrap rt-overflow-hidden rt-grid-wrap-10"
            >
              <div
                {...{ train: "left" }}
                className="w-layout-hflex rt-client-v1-marque-train"
              >
                <div className="rt-no-shrink">
                  <Image
                    src={content.client1Image}
                    alt={content.client1Alt}
                    width={108}
                    height={27}
                    sizes="108px"
                  />
                </div>
                <div className="rt-no-shrink">
                  <Image
                    src={content.client2Image}
                    alt={content.client2Alt}
                    width={102}
                    height={22}
                    sizes="102px"
                  />
                </div>
                <div className="rt-no-shrink">
                  <Image
                    src={content.client3Image}
                    alt={content.client3Alt}
                    width={108}
                    height={23}
                    sizes="108px"
                  />
                </div>
                <div className="rt-no-shrink">
                  <Image
                    src={content.client4Image}
                    alt={content.client4Alt}
                    width={125}
                    height={20}
                    sizes="125px"
                  />
                </div>
                <div className="rt-no-shrink">
                  <Image
                    src={content.client5Image}
                    alt={content.client5Alt}
                    width={46}
                    height={38}
                    sizes="46px"
                  />
                </div>
                <div className="rt-no-shrink">
                  <Image
                    src={content.client7Image}
                    alt={content.client7Alt}
                    width={95}
                    height={23}
                    sizes="95px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rt-hero-video-wrap rt-full-width rt-radius-v2 rt-overflow-hidden">
          <div className="rt-full-height rt-full-width rt-z-index-1 w-embed">
            <div
              data-poster-url="https://res.cloudinary.com/dj4rfocct/image/upload/v1792581739/wazemtech/veyra/72c895130388_217fc93902e0f1d017bb4cf654cc59b8_hero-1-video-poster-469240adbbfe.avif"
              data-video-urls="https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581745/wazemtech/veyra/ec973fc5efc103a0d0d-6a7019267d0bc9978e6f3f0e_hero-1-video--1-_mp4-27d433e1fc7a.mp4,https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581745/wazemtech/veyra/c973fc5efc103a0d0d-6a7019267d0bc9978e6f3f0e_hero-1-video--1-_webm-e1bf962a2674.webm"
              data-autoplay="true"
              data-loop="true"
              className="rt-full-height rt-full-width rt-z-index-1 w-background-video w-background-video-atom"
            >
              <DeferredVideo
                id="10051e1b-2928-172c-8081-4b43a3d139b4-video"
                autoPlay={true}
                loop={true}
                style={{
                  backgroundImage:
                    'url("https://res.cloudinary.com/dj4rfocct/image/upload/v1792581739/wazemtech/veyra/72c895130388_217fc93902e0f1d017bb4cf654cc59b8_hero-1-video-poster-469240adbbfe.avif")',
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
                  aria-controls="10051e1b-2928-172c-8081-4b43a3d139b4-video"
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
        </div>
      </div>
    </section>
  );
}
