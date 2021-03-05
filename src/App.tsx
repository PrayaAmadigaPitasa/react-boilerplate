import { NavigationStack } from "./navigations";
import { ThemeProvider } from "./themes";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationStack />
    </ThemeProvider>
  );
}
