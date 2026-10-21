import { gsap } from "gsap";
import type { AnimationScope } from "@/hooks/usePageAnimation";

export function serviceAnimation(scope: AnimationScope) {
  const { root, reduced } = scope;
  // [button="hover-wrap"] (t-e693c16e)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[button="hover-wrap"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[button-one="text"]', trigger || root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 0 });
        const to = scope.pose(target, { yPercent: -100 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query(".rt-button-v1-border-overlay", trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: -105 });
        const to = scope.pose(target, { xPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.hover(trigger!, timeline, false, true);
    }
  }

  // [image-apear="wrapper"] (t-389b67b3)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[image-apear="wrapper"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query(".rt-image-overlay", trigger || root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0 });
        const to = scope.pose(target, { opacity: 1 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [...scope.query(".rt-image-overlay", trigger || root)];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 0 });
        const to = scope.pose(target, { yPercent: 100 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets3 = [
        ...scope.query('[image-apear="image"]', trigger || root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0.3, scale: 1.3 });
        const to = scope.pose(target, { opacity: 1, scale: 1 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.82,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.82,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.1 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 60%",
          end: "bottom top",
          scrub: null,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // [image-apear="wrapper"] (t-4c7e002c)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[image-apear="wrapper"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[image-apear="image"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { scale: 1 });
        const to = scope.pose(target, { scale: 1.3 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // [faq-wrap="block"] (t-9ed8a744)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[faq-wrap="block"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...(trigger ? [trigger] : [])];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 100 });
        const to = scope.pose(target, { opacity: null, yPercent: null });
        scope.initial(target, from);
        const offset = index * 0.02;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.6,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.6,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top bottom",
          end: "bottom top",
          scrub: null,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // .rt-client-cell.rt-logo-hover.rt-position-relative (t-fd8aceb9)
  if (!scope.excluded([])) {
    for (const trigger of scope.query(
      ".rt-client-cell.rt-logo-hover.rt-position-relative",
      root,
    )) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query(".rt-client-logo.rt-logo-light", trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: null });
        const to = scope.pose(target, { yPercent: -100 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query(".rt-client-logo.rt-logo-dark", trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: null });
        const to = scope.pose(target, { yPercent: -100 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.hover(trigger!, timeline, false, true);
    }
  }

  // Page load (t-f31c8855)
  if (!scope.excluded([]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{ repeat: -1, yoyo: false },
        repeat: reduced ? 0 : -1,
      });
      const targets1 = [
        ...scope.query('[aria-label="Scroll to top button"]', root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 0 });
        const to = scope.pose(target, { yPercent: -10 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query('[aria-label="Scroll to top button"]', root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: -10 });
        const to = scope.pose(target, { yPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // [data-scroll="fade-up"] (t-13fc3303)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[data-scroll="fade-up"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...(trigger ? [trigger] : [])];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 50 });
        const to = scope.pose(target, { opacity: null, yPercent: null });
        scope.initial(target, from);
        const offset = index * 0.02;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top bottom",
          end: "bottom 60%",
          scrub: null,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // [data-scroll="pop-up"] (t-a558918f)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[data-scroll="pop-up"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...(trigger ? [trigger] : [])];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { scale: 0.7, opacity: 0 });
        const to = scope.pose(target, { scale: null, opacity: null });
        scope.initial(target, from);
        const offset = index * 0.05;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.01 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 80%",
          end: "bottom 30%",
          scrub: null,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // .rt-faq-v1-wrap (t-ffdc2278)
  if (!scope.excluded([])) {
    for (const trigger of scope.query(".rt-faq-v1-wrap", root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...(trigger ? [trigger] : [])];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 50 });
        const to = scope.pose(target, { opacity: null, yPercent: null });
        scope.initial(target, from);
        const offset = Math.abs(index - (targets1.length - 1) / 2) * 0.03;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top bottom",
          end: "bottom 20%",
          scrub: null,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // [border-line="horizental"] (t-c970bb72)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[border-line="horizental"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...(trigger ? [trigger] : [])];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { scaleX: 0 });
        const to = scope.pose(target, { scaleX: null });
        scope.initial(target, from);
        const offset = index * 0.2;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      timeline.to({}, { duration: reduced ? 0 : 1, ease: "none" }, 0);
      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 705",
          end: "bottom 35%",
          scrub: 0.8,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // .rt-service-v3-content-block.rt-position-relative (t-b85d93f7)
  if (!scope.excluded([])) {
    for (const trigger of scope.query(
      ".rt-service-v3-content-block.rt-position-relative",
      root,
    )) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query(".rt-service-v3-line", trigger || root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { height: "0%" });
        const to = scope.pose(target, { height: "80%" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query('[service-icon-content="one-list"]', trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0.6, xPercent: 30 });
        const to = scope.pose(target, { opacity: null, xPercent: null });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.2,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.2,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets3 = [
        ...scope.query('[service-icon-content="two-list"]', trigger || root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0.6, xPercent: 30 });
        const to = scope.pose(target, { opacity: null, xPercent: null });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.2,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.2,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.15 + offset,
        );
      });
      const targets4 = [
        ...scope.query('[service-icon-content="three-list"]', trigger || root),
      ];
      targets4.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0.6, xPercent: 30 });
        const to = scope.pose(target, { opacity: null, xPercent: null });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.2,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.2,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.3 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top bottom",
          end: "bottom 50%",
          scrub: 0.8,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // [about-card-box="wrapper"] (t-50da8639)
  if (!scope.excluded(["medium", "small", "tiny"])) {
    for (const trigger of scope.query('[about-card-box="wrapper"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query('[about-card="one-box"]', trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: 159, rotation: -20 });
        const to = scope.pose(target, { xPercent: 0, rotation: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.54,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.54,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query('[about-card="two-box"]', trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: 50, rotation: -12 });
        const to = scope.pose(target, { xPercent: 0, rotation: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.54,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.54,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets3 = [
        ...scope.query('[about-card="three-box"]', trigger || root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: -59, rotation: -5 });
        const to = scope.pose(target, { xPercent: 0, rotation: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.54,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.54,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets4 = [
        ...scope.query('[about-card="four-box"]', trigger || root),
      ];
      targets4.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: -167, rotation: 1 });
        const to = scope.pose(target, { xPercent: 0, rotation: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.54,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.54,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 40%",
          end: "bottom 90%",
          scrub: 0.8,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // .rt-service-v5-block-wrap.rt-flex-center-center.rt-wrap-top-gap-v1 (t-5e4b4400)
  if (!scope.excluded(["tiny"])) {
    for (const trigger of scope.query(
      ".rt-service-v5-block-wrap.rt-flex-center-center.rt-wrap-top-gap-v1",
      root,
    )) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query(
          ".rt-service-v5-block.rt-service-v5-block-div-1",
          trigger || root,
        ),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { scale: null });
        const to = scope.pose(target, { scale: 0.7 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.11 + offset,
        );
      });
      const targets2 = [
        ...scope.query(".rt-service-v5-block.rt-service-v5-block-div-2", root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { scale: null });
        const to = scope.pose(target, { scale: 0.7 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.43 + offset,
        );
      });
      const targets3 = [
        ...scope.query(".rt-service-v5-block.rt-service-v5-block-div-3", root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { scale: null });
        const to = scope.pose(target, { scale: 0.7 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.76 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 30%",
          end: "bottom 30%",
          scrub: 0.8,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }

  // .rt-portfolio-v3-card.rt-radius-v2.rt-overflow-hidden (t-681c50b6)
  if (!scope.excluded([])) {
    for (const trigger of scope.query(
      ".rt-portfolio-v3-card.rt-radius-v2.rt-overflow-hidden",
      root,
    )) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query(
          ".rt-portfolio-v1-overlay.rt-flex-center-center.rt-overflow-hidden",
          trigger || root,
        ),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0 });
        const to = scope.pose(target, { opacity: null });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.hover(trigger!, timeline, false, true);
    }
  }

  // [while-data-scroll="image-movement"] (t-757e0e3a)
  if (!scope.excluded([])) {
    for (const trigger of scope.query(
      '[while-data-scroll="image-movement"]',
      root,
    )) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...(trigger ? [trigger] : [])];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: null });
        const to = scope.pose(target, { yPercent: -20 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      timeline.to({}, { duration: reduced ? 0 : 1, ease: "none" }, 0);
      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
          enter: "play",
          leave: "none",
          enterBack: "none",
          leaveBack: "none",
        },
        reduced,
      );
    }
  }
}
