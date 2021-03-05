import { ReactNode, useState } from "react";
import { ThemeContext } from "styled-components";
import { ThemeType } from "./Theme";
import { ThemeContextState } from "./ThemeContext";
import { THEME_MAP } from "./ThemeMap";

export interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const stateTheme = useState<ThemeType>("light");
  const theme = stateTheme[0];

  return (
    <ThemeContextState.Provider value={stateTheme}>
      <ThemeContext.Provider value={THEME_MAP[theme]}>
        {children}
      </ThemeContext.Provider>
    </ThemeContextState.Provider>
  );
}
