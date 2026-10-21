import { gsap } from "gsap";
import type { AnimationScope } from "@/hooks/usePageAnimation";

export function aboutAnimation(scope: AnimationScope) {
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

  // Page load (t-10ca8be7)
  if (!scope.excluded([]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{ repeat: -1, yoyo: false },
        repeat: reduced ? 0 : -1,
      });
      const targets1 = [...scope.query('[rotation="loop"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { rotation: null });
        const to = scope.pose(target, { rotation: 360 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 15,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 15,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
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

  // .rt-service-v2-block-wrapper (t-c1dc8f45)
  if (!scope.excluded([])) {
    for (const trigger of scope.query(".rt-service-v2-block-wrapper", root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[service-one="scroll-block"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 80 });
        const to = scope.pose(target, { yPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.57,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.57,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [...scope.query('[service-one="block"]', root)];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { scale: null });
        const to = scope.pose(target, { scale: 0.6 });
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
          reduced ? 0 : 0.07 + offset,
        );
      });
      const targets3 = [root];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---service-image-saturation": "0%",
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.3,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.3,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets4 = [root];
      targets4.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---blur--service-two-blue-one": "1rem",
        });
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
          reduced ? 0 : 0.05 + offset,
        );
      });
      const targets5 = [root];
      targets5.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---blur--service-two-blue-two": "1rem",
        });
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
          reduced ? 0 : 0.17 + offset,
        );
      });
      const targets6 = [root];
      targets6.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---blur--service-two-blue-three": "1rem",
        });
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
          reduced ? 0 : 0.34 + offset,
        );
      });
      const targets7 = [root];
      targets7.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---blur--service-two-blue-four": "1rem",
        });
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
          reduced ? 0 : 0.44 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 10%",
          end: "bottom 20%",
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

  // [hero-video="control"] (t-7d3dafdd)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[hero-video="control"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query('[video-control="button"]', trigger || root),
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

  // .rt-mission-v1-main-wrap (t-e58eb524)
  if (!scope.excluded(["small", "tiny"])) {
    for (const trigger of scope.query(".rt-mission-v1-main-wrap", root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query(
          ".rt-mission-v1-block.rt-mission-v1-block-1",
          trigger || root,
        ),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { width: "100%" });
        const to = scope.pose(target, { width: "50%" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.47,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.47,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query(
          ".rt-mission-v1-block.rt-mission-v1-block-v2",
          trigger || root,
        ),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: 200 });
        const to = scope.pose(target, { xPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.4,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.4,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.14 + offset,
        );
      });
      const targets3 = [root];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---inset-for-mission": "0%",
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.65,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.65,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.38 + offset,
        );
      });
      timeline.to({}, { duration: reduced ? 0 : 1, ease: "none" }, 0);
      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 20%",
          end: "bottom bottom",
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

  // .rt-team-v1-card (t-4b9e03c7)
  if (!scope.excluded([])) {
    for (const trigger of scope.query(".rt-team-v1-card", root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...scope.query('[team-card="apear"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, xPercent: 30 });
        const to = scope.pose(target, { opacity: null, xPercent: null });
        scope.initial(target, from);
        const offset = index * 0.7;
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
          start: "top 80%",
          end: "bottom 80%",
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

  // .rt-service-v2 (t-fe557d1a)
  if (!scope.excluded([])) {
    for (const trigger of scope.query(".rt-service-v2", root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query(".rt-service-v2-image", trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { scale: 1.3 });
        const to = scope.pose(target, { scale: null });
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
      const targets2 = [
        ...scope.query(".rt-service-v2-wrapper", trigger || root),
      ];
      targets2.forEach((target, index) => {
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
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.93 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 60%",
          end: "bottom 65%",
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
}
