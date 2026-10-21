"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/data/siteConfig";
export default function ContactSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.contactSection1;
  return (
    <section className="rt-section-bottom-lg" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container-v1 w-container">
        <div
          inner-hero="text-wrap"
          className="w-layout-hflex rt-flex-top-space-between rt-contact-v1-flex-wrap"
        >
          <div className="rt-grid-wrap-7 rt-stretch-verticle">
            <div
              image-apear="wrapper"
              className="rt-image-wrap rt-radius-v2 rt-overflow-hidden"
            >
              <Image
                image-apear="image"
                alt={content.Alt}
                src={content.contactImageImage}
                className="rt-image-effect"
                width={300}
                height={408}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
              <div className="rt-image-overlay"></div>
            </div>
          </div>
          <div className="rt-contact-v1-form-wrap rt-grid-wrap-6 rt-radius-v2">
            <h2 data-value-blur="" className="rt-top-no-gap">
              {content.heading}
              <span className="rt-highilight-text">{content.conversation}</span>
            </h2>
            <p {...{ text: "apear" }} className="rt-text-top-gap-v1">
              {content.description}
            </p>
            <div className="rt-bottom-no-gap w-form">
              <ContactForm
                id="wf-form-Contact-form-v1"
                name="wf-form-Contact-form-v1"
                data-name="Contact form v1"
                className="rt-contact-v1-form rt-text-top-gap-v1"
                data-design-only="true"
              >
                <div data-value-blur="">
                  <label
                    {...{ htmlFor: "name" }}
                    className="rt-form-field-label rt-text-style-h6"
                  >
                    {content.fullName}
                  </label>
                  <input
                    className="rt-form-text-feild w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder={content.johnDoePlaceholder}
                    type="text"
                    id="name"
                    required={true}
                    aria-label={content.fullName}
                  />
                </div>
                <div data-value-blur="">
                  <label
                    {...{ htmlFor: "email" }}
                    className="rt-form-field-label rt-text-style-h6"
                  >
                    {content.emailAddress}
                  </label>
                  <input
                    className="rt-form-text-feild w-input"
                    maxLength={256}
                    name="email"
                    data-name="Email"
                    placeholder={content.exampleMailComPlaceholder}
                    type="email"
                    id="email"
                    required={true}
                    aria-label={content.emailAddress}
                  />
                </div>
                <div>
                  <label
                    {...{ htmlFor: "" }}
                    data-value-blur=""
                    className="rt-form-field-label rt-text-style-h6"
                  >
                    {content.services}
                  </label>
                  <div className="w-layout-hflex rt-form-radio-button-wrap">
                    <label
                      data-value-blur=""
                      className="rt-form-select-option w-radio"
                    >
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom rt-form-radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Services"
                        id="Website-design"
                        name="Services"
                        style={{
                          opacity: "0",
                          position: "absolute",
                          zIndex: "-1",
                        }}
                        defaultValue="Website design"
                        aria-label={content.websiteDesignAriaLabel}
                      />
                      <span
                        className="rt-bottom-no-gap rt-dark-text w-form-label"
                        {...{ htmlFor: "Website-design" }}
                      >
                        {content.websiteDesignAriaLabel}
                      </span>
                    </label>
                    <label
                      data-value-blur=""
                      className="rt-form-select-option w-radio"
                    >
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom rt-form-radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Services"
                        id="Web-development"
                        name="Services"
                        style={{
                          opacity: "0",
                          position: "absolute",
                          zIndex: "-1",
                        }}
                        defaultValue="Web development"
                        aria-label={content.webDevelopmentAriaLabel}
                      />
                      <span
                        className="rt-bottom-no-gap rt-dark-text w-form-label"
                        {...{ htmlFor: "Web-development" }}
                      >
                        {content.webDevelopmentAriaLabel}
                      </span>
                    </label>
                    <label
                      data-value-blur=""
                      className="rt-form-select-option w-radio"
                    >
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom rt-form-radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Services"
                        id="Mobile-app-design"
                        name="Services"
                        style={{
                          opacity: "0",
                          position: "absolute",
                          zIndex: "-1",
                        }}
                        defaultValue="Mobile app design"
                        aria-label={content.mobileAppDesignAriaLabel}
                      />
                      <span
                        className="rt-bottom-no-gap rt-dark-text w-form-label"
                        {...{ htmlFor: "Mobile-app-design" }}
                      >
                        {content.mobileAppDesignAriaLabel}
                      </span>
                    </label>
                    <label
                      data-value-blur=""
                      className="rt-form-select-option w-radio"
                    >
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom rt-form-radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Services"
                        id="Branding"
                        name="Services"
                        style={{
                          opacity: "0",
                          position: "absolute",
                          zIndex: "-1",
                        }}
                        defaultValue="Branding"
                        aria-label={content.brandingAriaLabel}
                      />
                      <span
                        className="rt-bottom-no-gap rt-dark-text w-form-label"
                        {...{ htmlFor: "Branding" }}
                      >
                        {content.brandingAriaLabel}
                      </span>
                    </label>
                    <label
                      data-value-blur=""
                      className="rt-form-select-option w-radio"
                    >
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom rt-form-radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Services"
                        id="Logo-design"
                        name="Services"
                        style={{
                          opacity: "0",
                          position: "absolute",
                          zIndex: "-1",
                        }}
                        defaultValue="Logo design"
                        aria-label={content.logoDesignAriaLabel}
                      />
                      <span
                        className="rt-bottom-no-gap rt-dark-text w-form-label"
                        {...{ htmlFor: "Logo-design" }}
                      >
                        {content.logoDesignAriaLabel}
                      </span>
                    </label>
                  </div>
                </div>
                <div data-value-blur="">
                  <label
                    {...{ htmlFor: "message" }}
                    className="rt-form-field-label rt-text-style-h6"
                  >
                    {content.message}
                  </label>
                  <textarea
                    placeholder={content.enterMessagePlaceholder}
                    maxLength={5000}
                    id="message"
                    name="message"
                    data-name="message"
                    className="rt-form-text-feild rt-form-text-area w-input"
                    aria-label={content.message}
                  ></textarea>
                </div>
                <div className="w-layout-hflex rt-flex-left">
                  <div
                    {...{ button: "hover-wrap" }}
                    className="rt-position-relative"
                  >
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="submit-button w-button"
                      value={content.submitValue}
                      aria-label={content.sendMessagesendMessageAriaLabel}
                    />
                    <div className="rt-contact-button-wrap">
                      <Link
                        href={content.sendMessagesendMessageHref}
                        {...{ button: "hover-wrap" }}
                        className="rt-button-v1 rt-overflow-hidden rt-position-relative w-inline-block w--current"
                      >
                        <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden rt-position-relative">
                          <div
                            button-one="text"
                            className="rt-button-text rt-button-text-v1"
                          >
                            {content.sendMessage}
                          </div>
                          <div
                            button-one="text"
                            className="rt-button-text rt-button-text-v2"
                          >
                            {content.sendMessage}
                          </div>
                        </div>
                        <div className="rt-button-v1-border">
                          <div className="rt-button-v1-border-overlay"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </ContactForm>
              <div className="rt-form-success w-form-done">
                <div>{content.thankYouYourSubmissionHasBeenReceived}</div>
              </div>
              <div className="rt-form-error w-form-fail">
                <div>
                  {content.oopsSomethingWentWrongWhileSubmittingTheForm}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
