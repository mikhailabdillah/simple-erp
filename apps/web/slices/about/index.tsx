import Image from "next/image";

const About = () => {
  return (
    <section className="relative overflow-x-hidden" id="about">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div className="relative mb-20">
            <div className="absolute top-0 -left-10 -z-1 size-100 rounded-full bg-[linear-gradient(284.22deg,#F3E623_0%,rgba(0,0,0,0)_60%)] md:-top-10 md:size-120 lg:size-130" />
            <div className="h-100 md:-translate-x-20 lg:-translate-x-40">
              <Image
                alt="dashboard wireframe"
                className="size-full object-contain"
                height={1024}
                src={"/dashboard-wireframe.png"}
                width={1536}
              />
            </div>
          </div>
          <div className="max-w-md">
            <span className="text-accent">About Us</span>
            <h2 className="my-4">Driving Innovation Through Technology</h2>
            <p className="opacity-60 lg:text-lg">
              We are a team of passionate developers and designers dedicated to
              building innovative solutions that help businesses thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
