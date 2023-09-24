import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vladimir Vuksanovic",
  description: "Vladimir Vuksanovic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
