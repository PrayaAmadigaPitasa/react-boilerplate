import { initTranslation } from "./i18n";
import { NavigationStack } from "./navigations";
import { ThemeProvider } from "./themes";
import { WindowProvider } from "./windows";

initTranslation();

export default function App() {
  return (
    <WindowProvider>
      <ThemeProvider>
        <NavigationStack />
      </ThemeProvider>
    </WindowProvider>
  );
}
