import { createContext } from "react";
import { Layout } from "@types";

export const WindowLayoutContext = createContext<Layout>({
  width: window.innerWidth,
  height: window.innerHeight,
});
