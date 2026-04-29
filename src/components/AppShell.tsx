"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done && <LoadingScreen onComplete={() => setDone(true)} />}
      {children}
    </>
  );
}
