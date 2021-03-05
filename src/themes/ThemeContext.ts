import { createContext, Dispatch, SetStateAction } from "react";
import { ThemeType } from "./Theme";

export const ThemeContextState = createContext<
  [ThemeType, Dispatch<SetStateAction<ThemeType>>] | undefined
>(undefined);
