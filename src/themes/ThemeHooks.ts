import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeType } from "./Theme";
import { THEME_MAP } from "./ThemeMap";

export function useTheme(type?: ThemeType) {
  const theme = useContext(ThemeContext);

  return type ? THEME_MAP[type] : theme;
}
