"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeSection4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeSection4;
  return (
    <section className="rt-section-top-lg" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div className="rt-grid-wrap-7 rt-margin-auto rt-text-center">
          <div className="rt-sub-text">{content.eyebrow}</div>
          <h2 data-value-blur="">
            {content.heading}
            <span className="rt-highilight-text">{content.pricing}</span>
            {content.heading2}
          </h2>
          <div className="rt-grid-wrap-5 rt-margin-auto">
            <p {...{ text: "apear" }}>{content.description}</p>
          </div>
        </div>
        <div className="w-layout-grid rt-pricing-v1-table-wrapper rt-wrap-top-gap-v1">
          <div
            pricing-card="one-card"
            id="w-node-_472333ca-c607-7693-6fba-904f5a69424b-103a0cfb"
            className="rt-pricing-v1-card _1"
          >
            <div className="w-layout-vflex rt-pricing-v1-card-plan-name rt-grid-wrap-4">
              <div className="rt-sub-text">{content.eyebrow2}</div>
              <div className="rt-text-style-h4">
                {content.perfectForEmergingBrands}
              </div>
              <p className="rt-bottom-no-gap">{content.description2}</p>
            </div>
            <div className="w-layout-vflex rt-pricing-card-v1-list-wrap">
              <div className="rt-sub-text rt-weight-bold">
                {content.whatSIncluded}
              </div>
              <div className="w-layout-vflex rt-pricing-v1-point-listing">
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipse7Image}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-dark-text">
                    {content.brandConsultation}
                    <br />
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipse7Image}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-dark-text">
                    {content.upTo5WebsitePages}
                    <br />
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipse7Image}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-dark-text">
                    {content.responsiveWebDesign}
                    <br />
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipse7Image}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-dark-text">
                    {content.basicSeoSetup}
                    <br />
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipse7Image}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-dark-text">
                    {content.contactFormIntegration}
                    <br />
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipse7Image}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-dark-text">
                    {content.value2RoundsOfRevisions}
                    <br />
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipse7Image}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-dark-text">
                    {content.value30DaysSupport}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-price-card-v1-button-wrap">
              <div className="w-layout-hflex rt-plan-price-v1">
                <div
                  {...{ price: "yearly" }}
                  className="rt-text-style-h4 rt-weight-bold"
                >
                  {content.value1500}
                </div>
                <div className="rt-main-price-box">
                  <div className="rt-dark-text">{content.project}</div>
                </div>
              </div>
              <Link
                href={content.getAQuotegetAQuoteHref}
                {...{ button: "hover-wrap" }}
                className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
              >
                <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                  <div
                    button-one="text"
                    className="rt-button-text rt-button-text-v1"
                  >
                    {content.getAQuote}
                  </div>
                  <div
                    button-one="text"
                    className="rt-button-text rt-button-text-v2"
                  >
                    {content.getAQuote}
                  </div>
                </div>
                <div className="rt-button-v1-border">
                  <div className="rt-button-v1-border-overlay"></div>
                </div>
              </Link>
            </div>
          </div>
          <div
            pricing-card="card-two"
            className="rt-pricing-v1-card rt-pricing-v1-card-dark"
          >
            <div className="w-layout-vflex rt-pricing-v1-card-plan-name rt-grid-wrap-4">
              <div className="rt-sub-text w-variant-a55ef6ae-5a71-6df9-fd80-5c0a14b4bb91">
                {content.premiumPlan}
              </div>
              <div className="rt-text-style-h4 rt-text-white">
                {content.builtForAmbitiousCompanies}
              </div>
              <p className="rt-bottom-no-gap rt-text-white">
                {content.description2}
              </p>
            </div>
            <div className="w-layout-vflex rt-pricing-card-v1-list-wrap">
              <div className="rt-sub-text rt-weight-bold rt-text-white">
                {content.whatSIncluded}
              </div>
              <div className="w-layout-vflex rt-pricing-v1-point-listing">
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipseWhiteImage}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.completeBrandStrategy}
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipseWhiteImage}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.customWebsiteDevelopment}
                    <br />
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipseWhiteImage}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.advancedAnimations}
                    <br />
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipseWhiteImage}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.conversionFocusedUx}
                    <br />
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipseWhiteImage}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.contentManagementSystem}
                    <br />
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipseWhiteImage}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.unlimitedRevisions}
                  </div>
                </div>
                <div className="w-layout-hflex rt-pricing-v1-point-list-wrap">
                  <div className="rt-no-shrink rt-inline-flex">
                    <Image
                      src={content.ellipseWhiteImage}
                      alt={content.Alt}
                      width={4}
                      height={4}
                      sizes="4px"
                    />
                  </div>
                  <div className="rt-text-white">
                    {content.value90DaysSupport}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-price-card-v1-button-wrap rt-price-card-v1-button-wrap-dark">
              <div className="w-layout-hflex rt-plan-price-v1">
                <div
                  {...{ price: "yearly" }}
                  className="rt-text-style-h4 rt-weight-bold rt-text-white"
                >
                  {content.value4999}
                </div>
                <div className="rt-main-price-box">
                  <div className="rt-weight-semibold rt-text-white">
                    {content.project}
                  </div>
                </div>
              </div>
              <Link
                href={content.getAQuotegetAQuoteHref}
                {...{ button: "hover-wrap" }}
                className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block"
              >
                <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                  <div
                    button-one="text"
                    className="rt-button-text w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1 rt-button-text-v1"
                  >
                    {content.getAQuote}
                  </div>
                  <div
                    button-one="text"
                    className="rt-button-text w-variant-0f5e59b7-26cf-d805-02af-2ec1e2f659d1 rt-button-text-v2"
                  >
                    {content.getAQuote}
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
    </section>
  );
}
