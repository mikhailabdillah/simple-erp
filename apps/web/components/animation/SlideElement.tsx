"use client";

import {
  type MotionProps,
  motion,
  type Transition,
  type Variants,
} from "motion/react";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type SlideElementProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  direction?: "toTop" | "toBottom" | "toLeft" | "toRight";
  offset?: number;
  transition?: Transition;
} & MotionProps &
  Omit<ComponentPropsWithoutRef<T>, "children" | keyof MotionProps>;

const SlideElement = <T extends ElementType = "div">({
  as,
  children,
  direction = "toTop",
  offset = 60,
  transition,
  ...rest
}: SlideElementProps<T>) => {
  const Component = motion[(as ?? "div") as "div"];

  const variantsMap = {
    toBottom: {
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: offset },
      initial: { opacity: 0, y: -offset },
    },
    toLeft: {
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -offset },
      initial: { opacity: 0, x: offset },
    },
    toRight: {
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: offset },
      initial: { opacity: 0, x: -offset },
    },
    toTop: {
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -offset },
      initial: { opacity: 0, y: offset },
    },
  };

  const variants: Variants = variantsMap[direction];

  return (
    <Component
      exit={"exit"}
      initial={"initial"}
      transition={
        transition ?? { delay: 0.2, duration: 0.5, ease: "easeInOut" }
      }
      variants={variants}
      viewport={{ margin: "10%", once: true }}
      whileInView={"animate"}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default SlideElement;
