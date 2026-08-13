import dynamic from "next/dynamic";

export const Slices = {
  clients: dynamic(() => import("./clients")),
};
