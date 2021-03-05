import { createContext, Dispatch, SetStateAction } from "react";
import { ThemeType } from "./Theme";

export const ThemeContextAction = createContext<
  Dispatch<SetStateAction<ThemeType>> | undefined
>(undefined);
