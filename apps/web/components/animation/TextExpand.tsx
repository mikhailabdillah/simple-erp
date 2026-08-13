"use client";

import { type MotionProps, motion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

import type { ComponentPropsWithoutRef, ReactNode } from "react";

type TextExpandProps = {
  children: ReactNode;
  transition?: Transition;
} & MotionProps &
  Omit<ComponentPropsWithoutRef<"span">, "children" | keyof MotionProps>;

const TextExpand = ({
  children,
  transition,
  className,
  ...rest
}: TextExpandProps) => (
  <span className="relative block overflow-hidden">
    <motion.span
      className={cn("block", className)}
      exit={{ y: "-100%" }}
      initial={{ y: "100%" }}
      transition={
        transition ?? { delay: 0.3, duration: 0.5, ease: "easeInOut" }
      }
      viewport={{ margin: "10%", once: true }}
      whileInView={{ y: 0 }}
      {...rest}
    >
      {children}
    </motion.span>
  </span>
);

export default TextExpand;
