import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="mb-4">Let&apos;s Start Something Great</h2>
            <p className="mb-10 opacity-60">
              Ready to supercharge your business with our intuitive ERP
              solution? Let&apos;s talk about how we can help you streamline
              operations, boost efficiency, and drive real growth. Drop us a
              line and let&apos;s create something amazing together.
            </p>
            <div className="space-y-6">
              <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="flex size-14 items-center justify-center rounded-lg bg-white/10">
                    <IconMail />
                  </div>
                  <div>
                    <p className="mb-1">Email us:</p>
                    <Link
                      className="opacity-60 hover:text-accent hover:underline hover:opacity-100"
                      href="mailto:hello@example.com"
                    >
                      hello@example.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-14 items-center justify-center rounded-lg bg-white/10">
                    <IconPhone />
                  </div>
                  <div>
                    <p className="mb-1">Call us:</p>
                    <Link
                      className="opacity-60 hover:text-accent hover:underline hover:opacity-100"
                      href="tel:+11234567890"
                    >
                      +1 (123) 456-7890
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-4">Follow us:</p>
                <div className="flex items-center gap-2">
                  {[
                    {
                      icon: <IconBrandFacebook className="size-6" />,
                      label: "Facebook",
                    },
                    {
                      icon: <IconBrandInstagram className="size-6" />,
                      label: "Instagram",
                    },
                    {
                      icon: <IconBrandLinkedin className="size-6" />,
                      label: "LinkedIn",
                    },
                    {
                      icon: <IconBrandThreads className="size-6" />,
                      label: "Threads",
                    },
                  ].map((icon) => (
                    <Button
                      className="h-12 rounded-lg bg-white/10 px-3 text-white hover:bg-white/15"
                      key={icon.label}
                    >
                      {icon.icon}
                      <span className="sr-only">{icon.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1">
            <div className="relative border border-white/10 bg-neutral-950 p-8 backdrop-blur-md transition-colors duration-300 hover:bg-white/2">
              <div className="absolute top-0 left-0 h-2 w-2 border-white/40 border-t border-l" />
              <div className="absolute right-0 bottom-0 h-2 w-2 border-white/40 border-r border-b" />
              <h3 className="mb-6 text-center">Send Us a Message</h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-1/2">
                    <input
                      className="w-full rounded-lg border-0 border-white/12 bg-white/3 p-4 text-lg text-white placeholder:text-white/50 focus:ring-1 focus:ring-white"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      className="w-full rounded-lg border-0 border-white/12 bg-white/3 p-4 text-lg text-white placeholder:text-white/50 focus:ring-1 focus:ring-white"
                      placeholder="Your Email"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    className="w-full rounded-lg border-0 border-white/12 bg-white/3 p-4 text-lg text-white placeholder:text-white/50 focus:ring-1 focus:ring-white"
                    placeholder="Message"
                    rows={4}
                  />
                </div>
                <Button
                  className="w-full rounded-full py-7 font-semibold text-base"
                  size="lg"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
