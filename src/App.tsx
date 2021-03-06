import { NavigationStack } from "./navigations";
import { ThemeProvider } from "./themes";
import { WindowProvider } from "./windows";

export default function App() {
  return (
    <WindowProvider>
      <ThemeProvider>
        <NavigationStack />
      </ThemeProvider>
    </WindowProvider>
  );
}
