"use client";
import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeSection3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeSection3;
  return (
    <section className="rt-section-top-lg" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="w-layout-hflex rt-flex-bottom-space-between">
          <div className="rt-grid-wrap-6">
            <div className="rt-sub-text">{content.eyebrow}</div>
            <h2 data-value-blur="">{content.heading}</h2>
          </div>
          <div className="w-layout-hflex rt-grid-wrap-2 rt-flex-left rt-process-button">
            <Link
              href={content.exploreServicesexploreServicesHref}
              {...{ button: "hover-wrap" }}
              className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
            >
              <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                <div
                  button-one="text"
                  className="rt-button-text rt-button-text-v1"
                >
                  {content.exploreServices}
                </div>
                <div
                  button-one="text"
                  className="rt-button-text rt-button-text-v2"
                >
                  {content.exploreServices}
                </div>
              </div>
              <div className="rt-button-v1-border">
                <div className="rt-button-v1-border-overlay"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-layout-vflex rt-award-v1-list-wrap rt-wrap-top-gap-v1">
        <div award-wrap="main" className="rt-position-relative">
          <div
            border-line="horizental"
            className="rt-award-v1-list-border"
          ></div>
          <div className="w-layout-blockcontainer rt-container-v1 w-container">
            <div className="w-layout-hflex rt-award-v1-list">
              <div
                id="w-node-_432c7e8b-b128-4d80-4aeb-5d1bf38af3af-103a0cfb"
                className="w-layout-hflex rt-grid-wrap-5 rt-z-index-1 rt-full-width"
              >
                <div className="rt-grid-wrap-1">
                  <div className="rt-text-color-inherit">
                    {content.value2026}
                  </div>
                </div>
                <div className="rt-grid-wrap-3 rt-overflow-hidden">
                  <div
                    mask-element="apear-scroll"
                    award-list="title"
                    className="rt-text-style-h4"
                  >
                    {content.awardWinningDigitalExcellence}
                  </div>
                </div>
              </div>
              <div className="rt-grid-wrap-4 rt-z-index-1">
                <div
                  mask-element="apear-scroll"
                  className="rt-gap-off rt-text-color-inherit"
                >
                  {
                    content.ourPassionForCreativityInnovationAndStrategicThinkingHasEarnedRec
                  }
                </div>
                <div className="w-layout-hflex rt-service-v1-tag-block rt-text-top-gap-v1">
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.creativeDesign}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.innovation}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.digitalExcellence}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            award-list-one="curtain-one"
            className="rt-award-v1-list-background rt-mouse-event-none"
          ></div>
          <div
            award-list-two="curtain-two"
            className="rt-award-v1-list-background rt-award-v1-list-background-v3 rt-mouse-event-none"
          ></div>
          <div
            award-list-three="curtain-three"
            className="rt-award-v1-list-background rt-award-v1-list-background-v2 rt-mouse-event-none"
          ></div>
          <div
            border-line="horizental"
            className="rt-award-v1-list-border"
          ></div>
        </div>
        <div
          award-list="list-two"
          award-wrap="main"
          className="rt-position-relative"
        >
          <div className="w-layout-blockcontainer rt-container-v1 w-container">
            <div className="w-layout-hflex rt-award-v1-list">
              <div
                id="w-node-d9b56ae6-8b14-cf55-193e-d6bbb014b860-103a0cfb"
                className="w-layout-hflex rt-grid-wrap-5 rt-z-index-1 rt-full-width"
              >
                <div className="rt-grid-wrap-1">
                  <div className="rt-text-color-inherit">
                    {content.value2025}
                  </div>
                </div>
                <div className="rt-grid-wrap-3">
                  <div
                    mask-element="apear-scroll"
                    award-list="title"
                    className="rt-text-style-h4"
                  >
                    {content.creatingExceptionalUserExperiences}
                  </div>
                </div>
              </div>
              <div className="rt-grid-wrap-4 rt-z-index-1">
                <div
                  mask-element="apear-scroll"
                  className="rt-gap-off rt-text-color-inherit"
                >
                  {
                    content.weCreateIntuitiveEngagingAndUserFocusedDigitalExperiencesThatComb
                  }
                </div>
                <div className="w-layout-hflex rt-service-v1-tag-block rt-text-top-gap-v1">
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.creativeDirection}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.visualDesign}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.innovation}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            award-list-one="curtain-one"
            className="rt-award-v1-list-background rt-mouse-event-none"
          ></div>
          <div
            award-list-two="curtain-two"
            className="rt-award-v1-list-background rt-award-v1-list-background-v3 rt-mouse-event-none"
          ></div>
          <div
            award-list-three="curtain-three"
            className="rt-award-v1-list-background rt-award-v1-list-background-v2 rt-mouse-event-none"
          ></div>
          <div
            border-line="horizental"
            className="rt-award-v1-list-border"
          ></div>
        </div>
        <div award-wrap="main" className="rt-position-relative">
          <div className="w-layout-blockcontainer rt-container-v1 w-container">
            <div className="w-layout-hflex rt-award-v1-list">
              <div
                id="w-node-ae54d299-f346-5212-19cf-cedd9e9f3ddd-103a0cfb"
                className="w-layout-hflex rt-grid-wrap-5 rt-z-index-1 rt-full-width"
              >
                <div className="rt-grid-wrap-1">
                  <div className="rt-text-color-inherit">
                    {content.value2024}
                  </div>
                </div>
                <div className="rt-grid-wrap-3">
                  <div
                    mask-element="apear-scroll"
                    award-list="title"
                    className="rt-text-style-h4"
                  >
                    {content.creatingPowerfulBrandIdentities}
                  </div>
                </div>
              </div>
              <div className="rt-grid-wrap-4 rt-z-index-1">
                <div
                  mask-element="apear-scroll"
                  className="rt-gap-off rt-text-color-inherit"
                >
                  {
                    content.weTransformIdeasIntoCompellingBrandIdentitiesThroughThoughtfulStr
                  }
                </div>
                <div className="w-layout-hflex rt-service-v1-tag-block rt-text-top-gap-v1">
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.brandIdentity}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.visualLanguage}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.brandStrategy}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            award-list-one="curtain-one"
            className="rt-award-v1-list-background rt-mouse-event-none"
          ></div>
          <div
            award-list-two="curtain-two"
            className="rt-award-v1-list-background rt-award-v1-list-background-v3 rt-mouse-event-none"
          ></div>
          <div
            award-list-three="curtain-three"
            className="rt-award-v1-list-background rt-award-v1-list-background-v2 rt-mouse-event-none"
          ></div>
          <div
            border-line="horizental"
            className="rt-award-v1-list-border"
          ></div>
        </div>
        <div award-wrap="main" className="rt-position-relative">
          <div className="w-layout-blockcontainer rt-container-v1 w-container">
            <div className="w-layout-hflex rt-award-v1-list">
              <div
                id="w-node-_940c0477-9ee5-bf9e-ba54-483b8513281b-103a0cfb"
                className="w-layout-hflex rt-grid-wrap-5 rt-z-index-1 rt-full-width"
              >
                <div className="rt-grid-wrap-1">
                  <div className="rt-text-color-inherit">
                    {content.value2023}
                  </div>
                </div>
                <div className="rt-grid-wrap-3">
                  <div
                    mask-element="apear-scroll"
                    award-list="title"
                    className="rt-text-style-h4"
                  >
                    {content.deliveringExceptionalUserExperiences}
                  </div>
                </div>
              </div>
              <div className="rt-grid-wrap-4 rt-z-index-1">
                <div
                  mask-element="apear-scroll"
                  className="rt-gap-off rt-text-color-inherit"
                >
                  {
                    content.weDesignIntuitiveDigitalExperiencesThatPrioritizeUsabilityAccessi
                  }
                </div>
                <div className="w-layout-hflex rt-service-v1-tag-block rt-text-top-gap-v1">
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.userExperience}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.accessibility}
                    </div>
                  </div>
                  <div className="rt-service-v1-tag">
                    <div className="rt-small-text rt-uppercase-text">
                      {content.uiDesign}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            award-list-one="curtain-one"
            className="rt-award-v1-list-background rt-mouse-event-none"
          ></div>
          <div
            award-list-two="curtain-two"
            className="rt-award-v1-list-background rt-award-v1-list-background-v3 rt-mouse-event-none"
          ></div>
          <div
            award-list-three="curtain-three"
            className="rt-award-v1-list-background rt-award-v1-list-background-v2 rt-mouse-event-none"
          ></div>
          <div
            border-line="horizental"
            className="rt-award-v1-list-border"
          ></div>
        </div>
      </div>
    </section>
  );
}
