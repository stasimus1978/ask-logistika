import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { AppProviders } from "@/core/providers";

import "@/styles/globals.css";

export const metadata: Metadata = { title: "title" };

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;
