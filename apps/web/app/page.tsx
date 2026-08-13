import { GrainGradient } from "@paper-design/shaders-react";
import {
  IconArrowNarrowRight,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Slices } from "@/slices";

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 -z-10 size-full">
        <GrainGradient
          className="size-full"
          colorBack="#000000"
          colors={["#c6d8f6", "#8ab8f0", "#3797eb"]}
          intensity={0.41}
          noise={0.29}
          shape="corners"
          softness={0.81}
          speed={1.18}
        />
      </div>
      <div className="relative mt-40 mb-20 w-full text-white">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="mb-6 text-6xl">
              Boost Business Efficiency With Our ERP solutions
            </h1>
            <p className="mb-10 text-lg opacity-70">
              Our ERP solutions designed to streamline operations, enhance
              collaboration.
            </p>
            <div>
              <Button
                className="h-16 rounded-full bg-white text-base text-black"
                size="lg"
                variant={"ghost"}
              >
                Get Free Trial{" "}
                <span className="ms-4 inline-flex size-10 items-center justify-center rounded-full bg-black text-white">
                  <IconArrowNarrowRight className="size-5" />
                </span>
              </Button>
              <Button
                className="rounded-full text-base text-white"
                size="lg"
                variant={"link"}
              >
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-white text-black">
                  <IconPlayerPlayFilled className="size-5" />
                </span>
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Dashboard image */}
      <div className="-translate-y-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
            <Image
              alt="Dashboard ERP system"
              className="size-full rounded-xl object-cover"
              height={1024}
              src={"/dashboard.png"}
              width={1536}
            />
          </div>
        </div>
      </div>
      {/* Clients */}
      <Slices.clients />
    </main>
  );
}
