import { ReactNode, useState } from "react";
import { ThemeContext } from "styled-components";
import { ThemeType } from "./Theme";
import { ThemeContextAction } from "./ThemeContext";
import { THEME_MAP } from "./ThemeMap";

export interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ ...children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ThemeContextAction.Provider value={setTheme}>
      <ThemeContext.Provider value={THEME_MAP[theme]}>
        {children}
      </ThemeContext.Provider>
    </ThemeContextAction.Provider>
  );
}
