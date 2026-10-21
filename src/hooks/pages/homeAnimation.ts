import { gsap } from "gsap";
import type { AnimationScope } from "@/hooks/usePageAnimation";

export function homeAnimation(scope: AnimationScope) {
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

  // [blog-card="one"] (t-3c0b5b09)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[blog-card="one"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query('[blog-image="scale"]', trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { scale: 1.1 });
        const to = scope.pose(target, { scale: 1 });
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
        ...scope.query('[blog-one="text-hover"]', trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { color: "#57666b" });
        const to = scope.pose(target, { color: "#171e24" });
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
      const targets3 = [
        ...scope.query(".rt-blog-v1-wrap-view-button", trigger || root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { scale: 0, opacity: 0 });
        const to = scope.pose(target, { scale: null, opacity: null });
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

  // Page load (t-b18b23d8)
  if (!scope.excluded([])) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = scope.split(
        [...scope.query('[text-top="apearance"]', root)],
        "lines",
        null,
      );
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 50 });
        const to = scope.pose(target, { opacity: null, yPercent: null });
        scope.initial(target, from);
        const offset = index * 0.03;
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

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // [portfolio-two="card"] (t-2140b072)
  if (!scope.excluded(["small", "tiny"])) {
    for (const trigger of scope.query('[portfolio-two="card"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...(trigger ? [trigger] : [])];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, {
          rotationX: 50,
          scale: 0.8,
          yPercent: 30,
        });
        const to = scope.pose(target, {
          rotationX: null,
          scale: null,
          yPercent: null,
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.1,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.1,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query('[portfolio-three="image-zoom"]', trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { scale: null });
        const to = scope.pose(target, { scale: 1.2 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.25,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.25,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets3 = [
        ...scope.query('[portfolio-two="content-wrap"]', trigger || root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 10 });
        const to = scope.pose(target, { opacity: null, yPercent: null });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.21,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.21,
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

  // [portfolio-two="card"] (t-18d039a3)
  if (!scope.excluded(["main", "medium"])) {
    for (const trigger of scope.query('[portfolio-two="card"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query('[portfolio-three="image-zoom"]', trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { scale: null });
        const to = scope.pose(target, { scale: 1.2 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.25,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.25,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query('[portfolio-two="content-wrap"]', trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 10 });
        const to = scope.pose(target, { opacity: null, yPercent: null });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.21,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.21,
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

  // Page load (t-e65b79f2)
  if (!scope.excluded([]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{ repeat: -1, yoyo: false },
        repeat: reduced ? 0 : -1,
      });
      const targets1 = [...scope.query('[rotate-icon="loop"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { rotation: null });
        const to = scope.pose(target, { rotation: 180 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // Page load (t-491898da)
  if (!scope.excluded([]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{ repeat: -1, yoyo: false },
        repeat: reduced ? 0 : -1,
      });
      const targets1 = [...scope.query('[scale-icon="loop"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { scale: 0.8 });
        const to = scope.pose(target, { scale: 1 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [...scope.query('[scale-icon="loop"]', root)];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { scale: 1 });
        const to = scope.pose(target, { scale: 0.8 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.5 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // Page load (t-d37f0670)
  if (!scope.excluded([]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{ repeat: -1, yoyo: false },
        repeat: reduced ? 0 : -1,
      });
      const targets1 = [...scope.query('[left-right="move-loop-v1"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: 0 });
        const to = scope.pose(target, { xPercent: 5 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 2,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 2,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [...scope.query('[left-right="move-loop-v1"]', root)];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: 5 });
        const to = scope.pose(target, { xPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 2,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 2,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.98 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // Page load (t-85038b63)
  if (!scope.excluded([]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{ repeat: -1, yoyo: false },
        repeat: reduced ? 0 : -1,
      });
      const targets1 = [...scope.query('[float-icon-one="loop-one"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 0, xPercent: 0 });
        const to = scope.pose(target, { yPercent: -20, xPercent: 30 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [...scope.query('[float-icon-one="loop-one"]', root)];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: -20, xPercent: 30 });
        const to = scope.pose(target, { yPercent: 0, xPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.5 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // Page load (t-cdad04d7)
  if (!scope.excluded([]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{ repeat: -1, yoyo: false },
        repeat: reduced ? 0 : -1,
      });
      const targets1 = [...scope.query('[float-icon-two="loop-two"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 0, xPercent: 0 });
        const to = scope.pose(target, { yPercent: 20, xPercent: -30 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [...scope.query('[float-icon-two="loop-two"]', root)];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 20, xPercent: -30 });
        const to = scope.pose(target, { yPercent: 0, xPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.5 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // Page load (t-7b68184a)
  if (!scope.excluded([]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{ repeat: -1, yoyo: false },
        repeat: reduced ? 0 : -1,
      });
      const targets1 = [...scope.query('[right-left="move-loop"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: 5 });
        const to = scope.pose(target, { xPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 2,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 2,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [...scope.query('[right-left="move-loop"]', root)];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: 0 });
        const to = scope.pose(target, { xPercent: 5 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 2,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 2,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.98 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // Page load (t-a4fc5447)
  if (!scope.excluded([]) && !reduced) {
    for (const trigger of [undefined]) {
      const timeline = gsap.timeline({
        paused: true,
        ...{ repeat: -1, yoyo: false },
        repeat: reduced ? 0 : -1,
      });
      const targets1 = [...scope.query('[top-bottom="move-loop"]', root)];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 0 });
        const to = scope.pose(target, { yPercent: 5 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [...scope.query('[top-bottom="move-loop"]', root)];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 5 });
        const to = scope.pose(target, { yPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 1.5,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 1.5,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 1.5 + offset,
        );
      });

      if (reduced) timeline.totalProgress(1);
      else timeline.play();
    }
  }

  // [circle-mask="image-scale"] (t-339a48d8)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[circle-mask="image-scale"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...(trigger ? [trigger] : [])];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { scale: 1.1 });
        const to = scope.pose(target, { scale: 10 });
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
          start: "top 50%",
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

  // .rt-service-v1-main-wrapper.rt-position-relative (t-6abcf84d)
  if (!scope.excluded([])) {
    for (const trigger of scope.query(
      ".rt-service-v1-main-wrapper.rt-position-relative",
      root,
    )) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query(
          ".rt-service-v1-title-block.rt-block-1",
          trigger || root,
        ),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: 60, opacity: 0 });
        const to = scope.pose(target, { xPercent: null, opacity: null });
        scope.initial(target, from);
        const offset = index * 0.02;
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
        ...scope.query(
          ".rt-service-v1-title-block.rt-block-2",
          trigger || root,
        ),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: -60, opacity: 0 });
        const to = scope.pose(target, { xPercent: null, opacity: null });
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
      const targets3 = [
        ...scope.query(".rt-service-v1-image-wrapper", trigger || root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { rotationX: 360 });
        const to = scope.pose(target, { rotationX: 0 });
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

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 37%",
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

  // .rt-service-v1-main-wrapper.rt-position-relative (t-6fa5c192)
  if (!scope.excluded(["small", "tiny", "medium"])) {
    for (const trigger of scope.query(
      ".rt-service-v1-main-wrapper.rt-position-relative",
      root,
    )) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query(".rt-service-v1-image-wrapper", trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, {
          xPercent: 0,
          rotation: 0,
          rotationY: 0,
        });
        const to = scope.pose(target, {
          xPercent: -70,
          rotation: -8,
          rotationY: 180,
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.03,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.03,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.03 + offset,
        );
      });
      const targets2 = [root];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---opacity--opacity-1": "0%",
          "--_animation-variable---opacity--opacity-3": "100%",
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.07 + offset,
        );
      });
      const targets3 = [
        ...scope.query(".rt-service-v1-image-wrapper", trigger || root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { rotationY: 180 });
        const to = scope.pose(target, { rotationY: 360 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.03,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.03,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.06 + offset,
        );
      });
      const targets4 = [root];
      targets4.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---opacity--opacity-4": "100%",
          "--_animation-variable---opacity--opacity-2": "0%",
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.1 + offset,
        );
      });
      const targets5 = [
        ...scope.query(".rt-service-v1-image-wrapper", trigger || root),
      ];
      targets5.forEach((target, index) => {
        const from = scope.pose(target, { rotationY: 360 });
        const to = scope.pose(target, { rotationY: 540 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.03,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.03,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.09 + offset,
        );
      });
      const targets6 = [root];
      targets6.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---opacity--opacity-4": "0%",
          "--_animation-variable---opacity--opacity-5": "100%",
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.13 + offset,
        );
      });
      const targets7 = [
        ...scope.query(".rt-service-v1-image-wrapper", trigger || root),
      ];
      targets7.forEach((target, index) => {
        const from = scope.pose(target, { rotationY: 540 });
        const to = scope.pose(target, { rotationY: 720 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.03,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.03,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.12 + offset,
        );
      });
      const targets8 = [root];
      targets8.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---opacity--opacity-6": "100%",
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.16 + offset,
        );
      });
      const targets9 = [
        ...scope.query(".rt-service-v1-image-wrapper", trigger || root),
      ];
      targets9.forEach((target, index) => {
        const from = scope.pose(target, {
          rotationY: 720,
          xPercent: -70,
          rotation: -8,
        });
        const to = scope.pose(target, {
          rotationY: 900,
          xPercent: 0,
          rotation: 0,
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.03,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.03,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.15 + offset,
        );
      });
      const targets10 = [
        ...scope.query(
          ".rt-service-v1-bottom-block.rt-grid-wrap-2",
          trigger || root,
        ),
      ];
      targets10.forEach((target, index) => {
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
              duration: 0.03,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.03,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.16 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top bottom",
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

  // .rt-service-v1-main-wrapper.rt-position-relative (t-c78ac2d8)
  if (!scope.excluded(["small", "tiny", "main"])) {
    for (const trigger of scope.query(
      ".rt-service-v1-main-wrapper.rt-position-relative",
      root,
    )) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query(".rt-service-v1-image-wrapper", trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { xPercent: 0, rotationY: 0 });
        const to = scope.pose(target, { xPercent: -80, rotationY: 180 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.05 + offset,
        );
      });
      const targets2 = [root];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---opacity--opacity-1": "0%",
          "--_animation-variable---opacity--opacity-3": "100%",
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.09 + offset,
        );
      });
      const targets3 = [
        ...scope.query(".rt-service-v1-image-wrapper", trigger || root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { rotationY: 180 });
        const to = scope.pose(target, { rotationY: 360 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.09 + offset,
        );
      });
      const targets4 = [root];
      targets4.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---opacity--opacity-4": "100%",
          "--_animation-variable---opacity--opacity-2": "0%",
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.12 + offset,
        );
      });
      const targets5 = [
        ...scope.query(".rt-service-v1-image-wrapper", trigger || root),
      ];
      targets5.forEach((target, index) => {
        const from = scope.pose(target, { rotationY: 360 });
        const to = scope.pose(target, { rotationY: 540 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.12 + offset,
        );
      });
      const targets6 = [root];
      targets6.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---opacity--opacity-4": "0%",
          "--_animation-variable---opacity--opacity-5": "100%",
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.15 + offset,
        );
      });
      const targets7 = [
        ...scope.query(".rt-service-v1-image-wrapper", trigger || root),
      ];
      targets7.forEach((target, index) => {
        const from = scope.pose(target, { rotationY: 540 });
        const to = scope.pose(target, { rotationY: 720 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.15 + offset,
        );
      });
      const targets8 = [root];
      targets8.forEach((target, index) => {
        const from = scope.pose(target, {});
        const to = scope.pose(target, {
          "--_animation-variable---opacity--opacity-6": "100%",
        });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.18 + offset,
        );
      });
      const targets9 = [
        ...scope.query(".rt-service-v1-image-wrapper", trigger || root),
      ];
      targets9.forEach((target, index) => {
        const from = scope.pose(target, { rotationY: 720, xPercent: -60 });
        const to = scope.pose(target, { rotationY: 900, xPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.02,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.02,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.2 + offset,
        );
      });

      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top bottom",
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

  // [award-wrap="main"] (t-04f29e08)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[award-wrap="main"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query('[award-list-one="curtain-one"]', trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { height: "0%" });
        const to = scope.pose(target, { height: "100%" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.67,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.67,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query('[award-list-two="curtain-two"]', trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { height: "0%" });
        const to = scope.pose(target, { height: "100%" });
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
          reduced ? 0 : 0.17 + offset,
        );
      });
      const targets3 = [
        ...scope.query('[award-list-three="curtain-three"]', trigger || root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { height: "0%" });
        const to = scope.pose(target, { height: "100%" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.33,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.33,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.34 + offset,
        );
      });
      const targets4 = [
        ...scope.query('[award-list="title"]', trigger || root),
      ];
      targets4.forEach((target, index) => {
        const from = scope.pose(target, { color: "#171e24" });
        const to = scope.pose(target, { color: "white" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.67,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.67,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });

      scope.hover(trigger!, timeline, false, true);
    }
  }

  // .rt-pricing-v1-table-wrapper.rt-wrap-top-gap-v1 (t-6740ed3f)
  if (!scope.excluded(["tiny", "small"])) {
    for (const trigger of scope.query(
      ".rt-pricing-v1-table-wrapper.rt-wrap-top-gap-v1",
      root,
    )) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query('[pricing-card="one-card"]', trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 50 });
        const to = scope.pose(target, { yPercent: null });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.56,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.56,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [
        ...scope.query('[pricing-card="card-two"]', trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 50 });
        const to = scope.pose(target, { yPercent: null });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.56,
              ease: "power1.out",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.56,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets3 = [
        ...scope.query('[pricing-card="one-card"]', trigger || root),
      ];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { x: null });
        const to = scope.pose(target, { x: "0vw" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.63,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.63,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.56 + offset,
        );
      });
      const targets4 = [
        ...scope.query('[pricing-card="card-two"]', trigger || root),
      ];
      targets4.forEach((target, index) => {
        const from = scope.pose(target, { x: null });
        const to = scope.pose(target, { x: "0vw" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.63,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.63,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0.56 + offset,
        );
      });
      timeline.to({}, { duration: reduced ? 0 : 1, ease: "none" }, 0);
      scope.scroll(
        trigger!,
        timeline,
        {
          clamp: true,
          start: "top 70%",
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

  // .rt-about-v5 (t-d303190d)
  if (!scope.excluded(["medium", "small", "tiny"])) {
    for (const trigger of scope.query(".rt-about-v5", root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query(
          ".rt-about-v5-content-wrap.rt-grid-wrap-5",
          trigger || root,
        ),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: -60 });
        const to = scope.pose(target, { yPercent: 20 });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.5878894767783656,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.5878894767783656,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets2 = [...scope.query('[about-card="main"]', root)];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0, yPercent: 30 });
        const to = scope.pose(target, { opacity: 1, yPercent: 0 });
        scope.initial(target, from);
        const offset = index * 0.02;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.49,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.49,
            repeat: reduced ? 0 : 0,
          },
          reduced ? 0 : 0 + offset,
        );
      });
      const targets3 = [...scope.query('[about-box="border"]', root)];
      targets3.forEach((target, index) => {
        const from = scope.pose(target, { height: "0%" });
        const to = scope.pose(target, { height: "100%" });
        scope.initial(target, from);
        const offset = index * 0;
        timeline.fromTo(
          target,
          from,
          {
            ...to,
            ...{
              duration: 0.62,
              ease: "none",
              repeat: 0,
              yoyo: false,
              immediateRender: false,
            },
            duration: reduced ? 0 : 0.62,
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

  // [about-one-card="card-wrapper"] (t-32701c9d)
  if (!scope.excluded(["tiny", "small"])) {
    for (const trigger of scope.query(
      '[about-one-card="card-wrapper"]',
      root,
    )) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query('[about-one-card="card-middle"]', trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 30 });
        const to = scope.pose(target, { yPercent: null });
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
        ...scope.query('[about-one-card="card-last"]', trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 60 });
        const to = scope.pose(target, { yPercent: null });
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
          start: "top 60%",
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

  // [cta-sticky="wrap"] (t-1198957b)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[cta-sticky="wrap"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [
        ...scope.query('[cta-wrapper="text"]', trigger || root),
      ];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: null, scale: null });
        const to = scope.pose(target, { opacity: 0.3, scale: 0.5 });
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
        ...scope.query('[cta-data-scroll="image-movement"]', trigger || root),
      ];
      targets2.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: -20 });
        const to = scope.pose(target, { yPercent: null });
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
          start: "top top",
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

  // [mask-element="apear-scroll"] (t-6cad10f4)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[mask-element="apear-scroll"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = scope.split(
        [...(trigger ? [trigger] : [])],
        "lines",
        "lines",
      );
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { yPercent: 100 });
        const to = scope.pose(target, { yPercent: null });
        scope.initial(target, from);
        const offset = index * 0.02;
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
          start: "top 70%",
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

  // [award-wrap="main"] (t-655dd211)
  if (!scope.excluded([])) {
    for (const trigger of scope.query('[award-wrap="main"]', root)) {
      const timeline = gsap.timeline({
        paused: true,
        ...{},
        repeat: reduced ? 0 : 0,
      });
      const targets1 = [...(trigger ? [trigger] : [])];
      targets1.forEach((target, index) => {
        const from = scope.pose(target, { opacity: 0.6 });
        const to = scope.pose(target, { opacity: null });
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
          end: "bottom 60%",
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
