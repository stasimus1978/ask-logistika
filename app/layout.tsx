import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import "./globals.css";

export const metadata: Metadata = { title: "title" };

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
