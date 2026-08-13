import { GrainGradient } from "@paper-design/shaders-react";
import {
  IconArrowNarrowRight,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import SlideElement from "@/components/animation/SlideElement";
import TextExpand from "@/components/animation/TextExpand";
import { Button } from "@/components/ui/button";
import { Slices } from "@/slices";

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 -z-10 size-full">
        <GrainGradient
          className="size-full"
          colorBack="#101010"
          colors={["#c6d8f6", "#8ab8f0", "#3797eb"]}
          intensity={0.41}
          noise={0.29}
          shape="corners"
          softness={0.81}
          speed={1.18}
        />
      </div>
      <div className="relative mt-[12svh] w-full text-white">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="mb-6">
              <TextExpand
                transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
              >
                Boost Business Efficiency With Our ERP solutions
              </TextExpand>
            </h1>
            <p className="mb-10 text-lg opacity-70">
              <TextExpand
                transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
              >
                Our ERP solutions designed to streamline operations, enhance
                collaboration.
              </TextExpand>
            </p>
            <SlideElement
              className="flex flex-wrap items-center justify-center gap-6"
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            >
              <Button
                className="h-16 rounded-full bg-white pe-1 text-base text-black"
                size="lg"
                variant={"ghost"}
              >
                Get Free Trial{" "}
                <span className="ms-4 inline-flex size-14 items-center justify-center rounded-full bg-black text-white">
                  <IconArrowNarrowRight className="size-6" />
                </span>
              </Button>
              <Button
                className="rounded-full px-0 text-base text-white"
                size="lg"
                variant={"link"}
              >
                <span className="me-2 inline-flex size-14 items-center justify-center rounded-full bg-white text-black">
                  <IconPlayerPlayFilled className="size-6" />
                </span>
                Watch Demo
              </Button>
            </SlideElement>
          </div>
        </div>
      </div>
      {/* Dashboard image */}
      <SlideElement
        className="-translate-y-4"
        transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-white/20 p-2 backdrop-blur-md sm:p-4 md:p-6">
            <Image
              alt="Dashboard ERP system"
              className="size-full rounded-xl object-cover"
              height={1024}
              preload
              src={"/dashboard.png"}
              width={1536}
            />
          </div>
        </div>
      </SlideElement>
      <Slices.clients />
      <Slices.services />
      <Slices.about />
      <Slices.pricing />
      <Slices.contact />
    </main>
  );
}
