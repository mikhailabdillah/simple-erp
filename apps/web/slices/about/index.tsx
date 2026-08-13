import Image from "next/image";
import SlideElement from "@/components/animation/SlideElement";
import TextExpand from "@/components/animation/TextExpand";

const About = () => {
  return (
    <section className="relative overflow-x-hidden" id="about">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div className="relative mb-20">
            <div className="absolute top-0 -left-10 -z-1 size-100 rounded-full bg-[linear-gradient(284.22deg,#F3E623_0%,rgba(0,0,0,0)_60%)] md:-top-10 md:size-120 lg:size-130" />
            <SlideElement
              direction="toRight"
              transition={{
                delay: 0.8,
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="h-100 md:-translate-x-20 lg:-translate-x-40">
                <Image
                  alt="dashboard wireframe"
                  className="size-full object-contain"
                  height={1024}
                  src={"/dashboard-wireframe.png"}
                  width={1536}
                />
              </div>
            </SlideElement>
          </div>
          <div className="max-w-md">
            <TextExpand
              className="text-sm"
              transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
            >
              About Us
            </TextExpand>
            <h2 className="my-4">
              <TextExpand
                transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
              >
                Driving Innovation Through Technology
              </TextExpand>
            </h2>
            <p className="opacity-60 lg:text-lg">
              <TextExpand
                transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
              >
                We are a team of passionate developers and designers dedicated
                to building innovative solutions that help businesses thrive.
              </TextExpand>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
