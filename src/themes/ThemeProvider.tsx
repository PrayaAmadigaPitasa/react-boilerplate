import { ReactNode, useState } from "react";
import { ThemeContext } from "styled-components";
import { ThemeType } from "./Theme";
import { ThemeContextState } from "./ThemeContext";
import { THEME_MAP } from "./ThemeMap";

export interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ ...children }: ThemeProviderProps) {
  const state = useState<ThemeType>("light");
  const theme = state[0];

  return (
    <ThemeContextState.Provider value={state}>
      <ThemeContext.Provider value={THEME_MAP[theme]}>
        {children}
      </ThemeContext.Provider>
    </ThemeContextState.Provider>
  );
}
