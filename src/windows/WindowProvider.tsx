import { ReactNode, useCallback, useEffect, useState } from "react";
import { Layout } from "@types";
import { WindowLayoutContext } from "./WindowContext";

export interface WindowProviderProps {
  children: ReactNode;
}

export default function WindowProvider({ children }: WindowProviderProps) {
  const [layout, setLayout] = useState<Layout>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = useCallback(
    () => setLayout({ width: window.innerWidth, height: window.innerHeight }),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <WindowLayoutContext.Provider value={layout}>
      {children}
    </WindowLayoutContext.Provider>
  );
}
