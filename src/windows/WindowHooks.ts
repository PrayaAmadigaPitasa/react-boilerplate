import { useContext } from "react";
import { WindowLayoutContext } from "./WindowContext";

export function useWindowLayout() {
  return useContext(WindowLayoutContext);
}
