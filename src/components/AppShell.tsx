"use client";

import { LoadingProvider, useLoading } from "@/context/LoadingContext";
import LoadingScreen from "./LoadingScreen";

const AppShellInner = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, setIsLoaded } = useLoading();

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {children}
    </>
  );
};

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <AppShellInner>{children}</AppShellInner>
    </LoadingProvider>
  );
}
