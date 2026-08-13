"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Clients = () => {
  return (
    <section>
      <div className="py-20">
        <Carousel
          opts={{
            dragFree: true,
            loop: true,
            skipSnaps: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="max-w-64 basis-auto px-32">
              <Image
                alt={"Amazon"}
                className="object-contain opacity-50 brightness-0 invert-[1]"
                height={800}
                src={"/clients/Amazon-Logo.png"}
                width={1280}
              />
            </CarouselItem>
            <CarouselItem className="max-w-64 basis-auto px-32">
              <Image
                alt={"Anthropic"}
                className="object-contain opacity-50 brightness-0 invert-[1]"
                height={800}
                src={"/clients/Anthropic-Logo.png"}
                width={1280}
              />
            </CarouselItem>
            <CarouselItem className="max-w-64 basis-auto px-32">
              <Image
                alt={"Deco"}
                className="object-contain opacity-50 brightness-0 invert-[1]"
                height={800}
                src={"/clients/Deco-Logo.png"}
                width={1280}
              />
            </CarouselItem>
            <CarouselItem className="max-w-64 basis-auto px-32">
              <Image
                alt={"denzeen"}
                className="object-contain opacity-50 brightness-0 invert-[1]"
                height={800}
                src={"/clients/denzeen-Logo.png"}
                width={1280}
              />
            </CarouselItem>
            <CarouselItem className="max-w-64 basis-auto px-32">
              <Image
                alt={"Fila"}
                className="object-contain opacity-50 brightness-0 invert-[1]"
                height={800}
                src={"/clients/Fila-Logo.png"}
                width={1280}
              />
            </CarouselItem>
            <CarouselItem className="max-w-64 basis-auto px-32">
              <Image
                alt={"Google"}
                className="object-contain opacity-50 brightness-0 invert-[1]"
                height={800}
                src={"/clients/Google-Logo.png"}
                width={1280}
              />
            </CarouselItem>
            <CarouselItem className="max-w-64 basis-auto px-32">
              <Image
                alt={"Nike"}
                className="object-contain opacity-50 brightness-0 invert-[1]"
                height={800}
                src={"/clients/Nike-Logo.png"}
                width={1280}
              />
            </CarouselItem>
            <CarouselItem className="max-w-64 basis-auto px-32">
              <Image
                alt={"OpenAI"}
                className="object-contain opacity-50 brightness-0 invert-[1]"
                height={800}
                src={"/clients/OpenAI-Logo.png"}
                width={1280}
              />
            </CarouselItem>
            <CarouselItem className="max-w-64 basis-auto px-32">
              <Image
                alt={"Vogue"}
                className="object-contain opacity-50 brightness-0 invert-[1]"
                height={800}
                src={"/clients/Vogue-Logo.png"}
                width={1280}
              />
            </CarouselItem>
            <CarouselItem className="max-w-64 basis-auto px-32">
              <Image
                alt={"Wallpaper"}
                className="object-contain opacity-50 brightness-0 invert-[1]"
                height={800}
                src={"/clients/Wallpaper-Logo.png"}
                width={1280}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;
