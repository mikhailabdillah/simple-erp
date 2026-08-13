import { IconArrowNarrowRight, IconCheck } from "@tabler/icons-react";
import SlideElement from "@/components/animation/SlideElement";
import TextExpand from "@/components/animation/TextExpand";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <div className="mb-4 text-sm">
            <TextExpand>Scale with the right plan</TextExpand>
          </div>
          <h2 className="mb-6">
            <TextExpand>
              Plans built for every stage of your business growth
            </TextExpand>
          </h2>
          <p className="opacity-60 lg:text-lg">
            <TextExpand>
              From startups to scaling teams, find the right plan to support
              every stage of your journey.
            </TextExpand>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SlideElement
            direction="toLeft"
            transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="bg-neutral-950 text-white">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>
                  Best for individuals and early-stage startups
                </CardDescription>
                <div className="flex w-full flex-col gap-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-medium text-5xl text-foreground tracking-tight">
                      $0
                    </span>
                    <span className="text-base text-muted-foreground">
                      / per month
                    </span>
                  </div>
                </div>
                <Button className="mt-6 rounded-full" size={"lg"}>
                  Get Started
                  <IconArrowNarrowRight className="ms-2 size-5" />
                </Button>
              </CardHeader>
              <CardContent>
                <p>What's Included:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <IconCheck className="size-4" />
                    <span className="font-normal text-base text-muted-foreground">
                      Basic workflow tools
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <IconCheck className="size-4" />
                    <span className="font-normal text-base text-muted-foreground">
                      Task and project tracking
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <IconCheck className="size-4" />
                    <span className="font-normal text-base text-muted-foreground">
                      Limited integrations
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </SlideElement>

          <SlideElement
            direction="toLeft"
            transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="bg-neutral-950 text-white">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>
                  Best for growing teams and small businesses
                </CardDescription>
                <div className="flex w-full flex-col gap-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-medium text-5xl text-foreground tracking-tight">
                      $50
                    </span>
                    <span className="text-base text-muted-foreground">
                      / per month
                    </span>
                  </div>
                </div>
                <Button className="mt-6 rounded-full" size={"lg"}>
                  Get Started
                  <IconArrowNarrowRight className="ms-2 size-5" />
                </Button>
              </CardHeader>
              <CardContent>
                <p>What's Included:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <IconCheck className="size-4" />
                    <span className="font-normal text-base text-muted-foreground">
                      Everything in Free
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <IconCheck className="size-4" />
                    <span className="font-normal text-base text-muted-foreground">
                      Advanced workflows
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <IconCheck className="size-4" />
                    <span className="font-normal text-base text-muted-foreground">
                      Limited integrations
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </SlideElement>

          <SlideElement
            direction="toLeft"
            transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="bg-white text-neutral-950">
              <CardHeader>
                <CardTitle>Scale</CardTitle>
                <CardDescription>
                  Built for teams ready to scale operations
                </CardDescription>
                <div className="flex w-full flex-col gap-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-medium text-5xl tracking-tight">
                      $250
                    </span>
                    <span className="text-base text-muted-foreground">
                      / per month
                    </span>
                  </div>
                </div>
                <Button
                  className="mt-6 rounded-full bg-black text-white hover:bg-black/80 hover:text-white"
                  size={"lg"}
                >
                  Get Started
                  <IconArrowNarrowRight className="ms-2 size-5" />
                </Button>
              </CardHeader>
              <CardContent>
                <p>What's Included:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <IconCheck className="size-4" />
                    <span className="font-normal text-base text-muted-foreground">
                      Basic workflow tools
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <IconCheck className="size-4" />
                    <span className="font-normal text-base text-muted-foreground">
                      Task and project tracking
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <IconCheck className="size-4" />
                    <span className="font-normal text-base text-muted-foreground">
                      Limited integrations
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </SlideElement>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
