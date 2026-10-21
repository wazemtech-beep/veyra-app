import { gsap } from "gsap";
import type { AnimationScope } from "@/hooks/usePageAnimation";

export function page404Animation(scope: AnimationScope) {
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
}
