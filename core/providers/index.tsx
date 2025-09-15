import type { PropsWithChildren } from "react";

import { Toaster } from "@/components/ui/sonner";

function AppProviders({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Toaster position="top-right" richColors closeButton duration={3000} />
    </>
  );
}

export { AppProviders };
