import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { scrolling as lenis } from "@/hooks/scrollController";

export function mountBrisifyInteractions(root: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.config({ nullTargetWarn: false });
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const q = <T extends HTMLElement = HTMLElement>(selector: string) =>
    Array.from(root.querySelectorAll<T>(selector));
  const cleanups: (() => void)[] = [];
  const ctx = gsap.context(() => {}, root);
  let disposed = false;
  const refresh = () => {
    if (!disposed) {
      lenis.resize();
      ScrollTrigger.refresh();
    }
  };
  const on = (
    target: EventTarget,
    event: string,
    callback: (event: Event) => void,
  ) => {
    const handler: EventListener = (event) => ctx.add(() => callback(event));
    target.addEventListener(event, handler);
    cleanups.push(() => target.removeEventListener(event, handler));
  };
  const control = (
    element: HTMLElement,
    label: string,
    callback: () => void,
  ) => {
    if (element.tagName !== "BUTTON" && element.tagName !== "A") {
      element.tabIndex = 0;
      element.setAttribute("role", "button");
    }
    element.setAttribute("aria-label", label);
    on(element, "click", (event) => {
      event.preventDefault();
      callback();
    });
    if (element.tagName !== "BUTTON")
      on(element, "keydown", (event) => {
        if (["Enter", " "].includes((event as KeyboardEvent).key)) {
          event.preventDefault();
          callback();
        }
      });
  };

  try {
    ctx.add(() => {
      gsap.set(q(".rt-main-page-wrap"), { opacity: 1, visibility: "visible" });
      if (!reduced) {
        if (q('[hero-one="title-apearance"]').length) {
          gsap
            .timeline()
            .from(
              q('[hero-text="top"]'),
              { y: 40, opacity: 0, filter: "blur(20px)", duration: 0.6 },
              0,
            )
            .from(
              q('[hero-text="highlighted"]'),
              { scale: 0.7, opacity: 0, rotation: -8, duration: 0.6 },
              0.1,
            )
            .from(
              q('[hero-one="title-apearance"]'),
              {
                scale: 0.6,
                opacity: 0,
                transformOrigin: "center",
                stagger: 0.06,
                duration: 0.9,
                ease: "expo.out",
              },
              0.5,
            )
            .from(
              q('[hero-one="paragraph"]'),
              { y: 25, opacity: 0, filter: "blur(10px)", duration: 0.5 },
              1.32,
            )
            .from(
              q('[hero-one="marque"]'),
              { y: 40, opacity: 0, stagger: 0.05, duration: 0.6 },
              1.52,
            )
            .from(
              q(".rt-hero-video-wrap"),
              { scale: 1.1, opacity: 0, duration: 1.2, ease: "expo.out" },
              1.52,
            );
        }
        for (const prefix of ["hero-two", "inner-hero"]) {
          if (!q(`[${prefix}]`).length) continue;
          const highlighted =
            prefix === "hero-two"
              ? '[hero-text="highlighted"]'
              : '[inner-hero="highlighted"]';
          gsap
            .timeline({ defaults: { ease: "expo.out" } })
            .fromTo(
              q(`[${prefix}="top-text"]`),
              { y: 50, scale: 0.95, filter: "blur(24px)", opacity: 0 },
              {
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                opacity: 1,
                duration: 0.8,
              },
              0,
            )
            .fromTo(
              q(highlighted),
              { scale: 0.6, rotation: -10, filter: "blur(24px)", opacity: 0 },
              {
                scale: 1,
                rotation: 0,
                filter: "blur(0px)",
                opacity: 1,
                duration: 0.9,
              },
              0.15,
            )
            .fromTo(
              q(`[${prefix}="title-one"]`),
              { y: 60, scale: 0.92, filter: "blur(30px)", opacity: 0 },
              {
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                opacity: 1,
                duration: 1.2,
              },
              0.7,
            )
            .fromTo(
              q(`[${prefix}="center-video"]`),
              { scale: 0.75, rotation: 6, filter: "blur(20px)", opacity: 0 },
              {
                scale: 1,
                rotation: 0,
                filter: "blur(0px)",
                opacity: 1,
                duration: 1.2,
              },
              0.9,
            )
            .fromTo(
              q(`[${prefix}="title-two"]`),
              { y: 60, scale: 0.92, filter: "blur(30px)", opacity: 0 },
              {
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                opacity: 1,
                duration: 1.2,
              },
              1.05,
            )
            .from(
              q(`[${prefix}="text-wrap"],[hero-bottom="text-wrap"]`),
              { y: 30, opacity: 0, filter: "blur(10px)", duration: 0.7 },
              1.85,
            );
        }
        q('[text="apear"]').forEach((element) =>
          gsap.fromTo(
            element,
            { opacity: 0, yPercent: 90 },
            {
              opacity: 1,
              yPercent: 0,
              ease: "power3.out",
              duration: 1,
              scrollTrigger: { trigger: element, start: "top 90%", once: true },
            },
          ),
        );
        q("[data-value-blur]").forEach((element) =>
          gsap.fromTo(
            element,
            { filter: "blur(20px)", opacity: 0, y: 40 },
            {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 85%", once: true },
            },
          ),
        );
        q("[data-counter]").forEach((element) => {
          const original = element.textContent;
          const value = element.getAttribute("data-counter") || "0";
          const state = { value: 0 };
          gsap.to(state, {
            value: parseFloat(value),
            duration: 2,
            ease: "none",
            scrollTrigger: { trigger: element, start: "top 85%", once: true },
            onUpdate: () => {
              element.textContent =
                Math.floor(state.value) + value.replace(/[0-9.]/g, "");
            },
          });
          cleanups.push(() => {
            element.textContent = original;
          });
        });
        q('[cta-card="block"]').forEach((card) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "bottom 65%",
              scrub: 1,
            },
          });
          tl.fromTo(
            card,
            { scale: 0.7, borderRadius: "1.25rem" },
            { scale: 1, borderRadius: "2.5rem", ease: "none" },
            0,
          )
            .fromTo(
              card.querySelectorAll('[cta-image="main"]'),
              { scale: 1.15 },
              { scale: 1, ease: "none" },
              0,
            )
            .fromTo(
              card.querySelectorAll('[cta-overlay="top"]'),
              { opacity: 0 },
              { opacity: 1, ease: "none" },
              0.1,
            )
            .fromTo(
              card.querySelectorAll('[cta-content="wrap"]'),
              { y: 80 },
              { y: 0, ease: "none" },
              0.2,
            )
            .from(
              card.querySelectorAll('[cta-title="top"]'),
              {
                y: 60,
                opacity: 0,
                filter: "blur(20px)",
                duration: 1,
                ease: "power3.out",
              },
              0.5,
            )
            .from(
              card.querySelectorAll('[cta-text="apear"]'),
              { y: 30, opacity: 0, filter: "blur(10px)", duration: 0.8 },
              0.7,
            )
            .from(
              card.querySelectorAll('[cta-button="wrapper"]'),
              { y: 20, opacity: 0, duration: 0.6 },
              0.9,
            );
        });
        q(".rt-footer-v1-wrapper").forEach((footer) =>
          gsap.fromTo(
            footer,
            { width: "100%", borderRadius: 0 },
            {
              width: "92%",
              borderRadius: "2.5rem",
              ease: "none",
              scrollTrigger: {
                trigger: footer,
                start: "center 75%",
                end: "bottom bottom",
                scrub: 1.5,
              },
            },
          ),
        );
      }

      q("[train]").forEach((train) => {
        if (reduced) return;
        const clones = Array.from(train.children).map((child) => {
          const clone = child.cloneNode(true) as HTMLElement;
          clone.setAttribute("aria-hidden", "true");
          clone.inert = true;
          train.append(clone);
          return clone;
        });
        cleanups.push(() => clones.forEach((clone) => clone.remove()));
        const distance = () =>
          (train.children[clones.length] as HTMLElement)?.offsetLeft -
            (train.children[0] as HTMLElement)?.offsetLeft ||
          train.scrollWidth / 2;
        const right = train.getAttribute("train") === "right";
        let tween: gsap.core.Tween;
        const start = () => {
          tween?.kill();
          const width = distance();
          tween = gsap.fromTo(
            train,
            { x: right ? -width : 0 },
            { x: right ? 0 : -width, duration: 20, ease: "none", repeat: -1 },
          );
        };
        start();
        on(window, "resize", start);
        if (train.hasAttribute("marquee-pause")) {
          const area = train.parentElement || train;
          on(area, "mouseenter", () => {
            tween.pause();
          });
          on(area, "mouseleave", () => {
            tween.resume();
          });
          on(area, "focusin", () => {
            tween.pause();
          });
          on(area, "focusout", () => {
            tween.resume();
          });
        }
      });

      const faqs = q(".rt-faq-v1-wrap");
      const answerState = (
        faq: HTMLElement,
        open: boolean,
        animate: boolean,
      ) => {
        faq.classList.toggle("active", open);
        faq
          .querySelector(".rt-faq-v1-top-wrap")
          ?.setAttribute("aria-expanded", String(open));
        gsap.to(faq.querySelector(".rt-faq-v1-bottom-wrap"), {
          height: open ? "auto" : 0,
          overflow: "hidden",
          duration: animate && !reduced ? 0.4 : 0,
          overwrite: true,
          onComplete: refresh,
        });
        gsap.to(faq.querySelector(".rt-faq-plus"), {
          rotation: open ? 0 : 180,
          opacity: open ? 0 : 1,
          duration: animate && !reduced ? 0.3 : 0,
        });
      };
      faqs.forEach((faq, index) => {
        const top = faq.querySelector<HTMLElement>(".rt-faq-v1-top-wrap");
        const answer = faq.querySelector<HTMLElement>(".rt-faq-v1-bottom-wrap");
        if (!top || !answer) return;
        answer.id ||= `brisify-faq-${index}`;
        top.setAttribute("aria-controls", answer.id);
        answerState(faq, index === 0, false);
        control(top, top.textContent?.trim() || "Toggle answer", () => {
          const open = !faq.classList.contains("active");
          faqs.forEach((item) => answerState(item, item === faq && open, true));
        });
      });

      const menu = q(".rt-nav-menu-wrapper")[0];
      const opener = q(".rt-nav-hamburger-wrap")[0];
      const closer = q(".rt-menu-close-button")[0];
      if (menu && opener && closer) {
        const previousOverflow = document.body.style.overflow;
        let opened = false;
        let lastFocused: HTMLElement | null = null;
        menu.inert = true;
        menu.setAttribute("aria-hidden", "true");
        menu.setAttribute("data-lenis-prevent", "");
        menu.setAttribute("role", "dialog");
        menu.setAttribute("aria-modal", "true");
        menu.setAttribute("aria-label", "Navigation");
        menu.id ||= "brisify-menu";
        opener.setAttribute("aria-controls", menu.id);
        opener.setAttribute("aria-expanded", "false");
        gsap.set(menu, { display: "none" });
        const tl = gsap.timeline({
          paused: true,
          defaults: { ease: "expo.inOut" },
          onReverseComplete: () => {
            gsap.set(menu, { display: "none" });
            menu.inert = true;
            menu.setAttribute("aria-hidden", "true");
            document.body.style.overflow = previousOverflow;
            lenis.start();
            lastFocused?.focus();
          },
        });
        tl.set(menu, { display: "flex" })
          .fromTo(
            menu.querySelector(".rt-nav-menu-curtain-1"),
            { xPercent: -100 },
            { xPercent: 0, duration: reduced ? 0 : 1.2 },
            0,
          )
          .fromTo(
            menu.querySelector(".rt-nav-menu-curtain-v2"),
            { xPercent: 100 },
            { xPercent: 0, duration: reduced ? 0 : 1.2 },
            window.innerWidth < 992 ? 0.15 : 0,
          )
          .fromTo(
            menu.querySelectorAll(".rt-nav-link,.rt-nav-menu-link-wrap"),
            { y: 90, opacity: 0, filter: "blur(18px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              stagger: reduced ? 0 : 0.08,
              duration: reduced ? 0 : 1,
              ease: "expo.out",
            },
            reduced ? 0 : 0.65,
          )
          .fromTo(
            menu.querySelectorAll(
              ".rt-nav-menu-left-bottom-wrap,.rt-menu-logo-wrap,.rt-menu-video,.rt-menu-right-bottom-social-wrap,.rt-menu-right-bottom-address-wrap",
            ),
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: reduced ? 0 : 0.08,
              duration: reduced ? 0 : 0.8,
            },
            reduced ? 0 : 0.75,
          );
        const show = (open: boolean) => {
          opened = open;
          opener.setAttribute("aria-expanded", String(open));
          if (open) {
            lastFocused = document.activeElement as HTMLElement;
            menu.inert = false;
            menu.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
            lenis.stop();
            gsap.set(menu, { display: "flex" });
            tl.play();
            closer.focus();
          } else if (reduced) {
            tl.progress(0).pause();
            gsap.set(menu, { display: "none" });
            menu.inert = true;
            menu.setAttribute("aria-hidden", "true");
            document.body.style.overflow = previousOverflow;
            lenis.start();
            lastFocused?.focus();
          } else tl.reverse();
        };
        control(opener, "Open navigation", () => show(true));
        control(closer, "Close navigation", () => show(false));
        on(document, "keydown", (event) => {
          const key = event as KeyboardEvent;
          if (!opened) return;
          if (key.key === "Escape") show(false);
          if (key.key === "Tab") {
            const items = Array.from(
              menu.querySelectorAll<HTMLElement>(
                'a[href],button,[tabindex="0"]',
              ),
            ).filter(
              (item) =>
                item.getClientRects().length && !item.closest("[inert]"),
            );
            const first = items[0];
            const last = items[items.length - 1];
            if (key.shiftKey && document.activeElement === first) {
              key.preventDefault();
              last?.focus();
            }
            if (!key.shiftKey && document.activeElement === last) {
              key.preventDefault();
              first?.focus();
            }
          }
        });
        cleanups.push(() => {
          document.body.style.overflow = previousOverflow;
          lenis.start();
        });
        q(".rt-nav-menu-list").forEach((item) => {
          const submenu = item.querySelector<HTMLElement>(
            ".rt-nav-submenu-wrap",
          );
          const trigger = item.querySelector<HTMLElement>(
            ".rt-nav-menu-link-wrap",
          );
          if (!submenu || !trigger) return;
          let expanded = false;
          const expand = (open: boolean) => {
            expanded = open;
            trigger.setAttribute("aria-expanded", String(open));
            submenu.inert = !open;
            gsap.to(submenu, {
              height: open ? "auto" : 0,
              opacity: open ? 1 : 0,
              overflow: "hidden",
              duration: reduced ? 0 : 0.35,
              ease: "power3.out",
              overwrite: true,
            });
          };
          expand(false);
          control(trigger, trigger.textContent?.trim() || "Expand pages", () =>
            expand(!expanded),
          );
          on(item, "mouseenter", () => expand(true));
          on(item, "mouseleave", () => expand(false));
          on(item, "focusout", (event) => {
            if (!item.contains((event as FocusEvent).relatedTarget as Node))
              expand(false);
          });
        });
      }

      q<HTMLVideoElement>("video").forEach((video) => {
        video.muted = true;
        video.playsInline = true;
        const button = video.parentElement?.querySelector<HTMLElement>(
          "[data-w-bg-video-control]",
        );
        const sync = () => {
          if (!button) return;
          button.setAttribute(
            "aria-label",
            video.paused ? "Play video" : "Pause video",
          );
          const icons = button.querySelectorAll<HTMLElement>(":scope > span");
          if (icons[0]) icons[0].hidden = video.paused;
          if (icons[1]) icons[1].hidden = !video.paused;
        };
        if (reduced) video.pause();
        else if (video.autoplay) void video.play().catch(() => {});
        if (button)
          control(button, "Pause video", () => {
            if (video.paused) void video.play().catch(() => {});
            else video.pause();
          });
        on(video, "play", sync);
        on(video, "pause", sync);
        sync();
        cleanups.push(() => video.pause());
      });
      const choices = q<HTMLInputElement>(
        'input[type="radio"],input[type="checkbox"]',
      );
      const syncChoices = () =>
        choices.forEach((input) => {
          const indicator = input
            .closest("label")
            ?.querySelector(".w-radio-input,.w-checkbox-input");
          indicator?.classList.toggle("w--redirected-checked", input.checked);
        });
      choices.forEach((input) => {
        on(input, "change", syncChoices);
        const indicator = input
          .closest("label")
          ?.querySelector(".w-radio-input,.w-checkbox-input");
        on(input, "focus", () => {
          indicator?.classList.add("w--redirected-focus");
        });
        on(input, "blur", () => {
          indicator?.classList.remove("w--redirected-focus");
        });
      });
      syncChoices();
      q<HTMLFormElement>("form").forEach((form) => {
        form
          .querySelectorAll<HTMLAnchorElement>(".rt-contact-button-wrap a")
          .forEach((link) => {
            on(link, "click", (event) => {
              event.preventDefault();
              form.reportValidity();
            });
          });
      });
      q(".rt-back-to-top").forEach((element) =>
        control(element, "Scroll to top", () =>
          lenis.scrollTo(0, { duration: reduced ? 0 : 1.2 }),
        ),
      );
      q<HTMLImageElement>("img")
        .filter((image) => !image.complete)
        .forEach((image) => on(image, "load", refresh));
      on(window, "resize", refresh);
      requestAnimationFrame(refresh);
    });
  } catch (error) {
    console.error("Brisify motion initialization failed", error);
    cleanups.splice(0).forEach((cleanup) => cleanup());
    ctx.revert();
    root
      .querySelectorAll<HTMLElement>(".rt-main-page-wrap")
      .forEach((element) => {
        element.style.opacity = "1";
        element.style.visibility = "visible";
      });
  }
  return () => {
    disposed = true;
    cleanups.forEach((cleanup) => cleanup());
    ctx.revert();
  };
}
