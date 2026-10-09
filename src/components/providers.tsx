"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // reducedMotion="user" : coupe les animations si le visiteur l'a demandé dans son système.
    <MotionConfig reducedMotion="user">
      <ReactLenis root options={{ lerp: 0.1, anchors: true }}>
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
