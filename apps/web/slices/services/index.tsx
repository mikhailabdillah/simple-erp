import {
  IconBuildingWarehouse,
  IconBusinessplan,
  IconDeviceAnalytics,
  IconForklift,
} from "@tabler/icons-react";
import SlideElement from "@/components/animation/SlideElement";
import TextExpand from "@/components/animation/TextExpand";
import { Button } from "@/components/ui/button";

const items = [
  {
    description: "Manage your customer relationships and sales pipeline.",
    icon: <IconBusinessplan className="size-10 text-accent" />,
    title: "Billing & Accounting",
  },
  {
    description: "Manage your inventory and supply chain.",
    icon: <IconBuildingWarehouse className="size-10 text-accent" />,
    title: "Inventory Management",
  },
  {
    description: "Streamline production workflows and monitor output.",
    icon: <IconForklift className="size-10 text-accent" />,
    title: "Manufacturing & Production",
  },
  {
    description: "Track key metrics and generate insights.",
    icon: <IconDeviceAnalytics className="size-10 text-accent" />,
    title: "Reporting & Analytics",
  },
];

const Services = () => {
  return (
    <section id={"services"}>
      <div className="container mx-auto px-4 py-24">
        <h2 className="mb-12">
          <TextExpand>Our services</TextExpand>
        </h2>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {items.map((item, index) => (
            <SlideElement
              className="group relative border border-white/10 bg-neutral-950 p-6 backdrop-blur-md transition-colors duration-300 hover:bg-white/2"
              key={item.title}
              transition={{
                delay: 0.3 * index + 0.2,
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="absolute top-0 left-0 h-2 w-2 border-white/40 border-t border-l" />
              <div className="absolute right-0 bottom-0 h-2 w-2 border-white/40 border-r border-b" />
              <div className="flex flex-col gap-6">
                {item.icon}
                <h5>{item.title}</h5>
                <p className="text-sm opacity-60">{item.description}</p>
              </div>
              <div className="mt-6">
                <Button
                  className={"rounded-full"}
                  size={"sm"}
                  variant={"outline"}
                >
                  Learn More
                </Button>
              </div>
            </SlideElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
