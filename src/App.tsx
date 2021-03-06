import { initTranslation } from "./i18n";
import { NavigationStack } from "./navigations";
import { ThemeProvider } from "./themes";

initTranslation();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationStack />
    </ThemeProvider>
  );
}
