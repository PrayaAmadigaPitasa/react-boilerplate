import { GiftShopScreen } from "./screens";
import { ThemeProvider } from "./themes";

export default function App() {
  return (
    <ThemeProvider>
      <GiftShopScreen />
    </ThemeProvider>
  );
}
