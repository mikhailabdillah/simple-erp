import dynamic from "next/dynamic";

export const Slices = {
  about: dynamic(() => import("./about")),
  clients: dynamic(() => import("./clients")),
  contact: dynamic(() => import("./contact")),
  pricing: dynamic(() => import("./pricing")),
  services: dynamic(() => import("./services")),
};
