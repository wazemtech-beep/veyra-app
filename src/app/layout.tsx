import SmoothScroll from "@/components/layout/SmoothScroll";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import "@/styles/index.css";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://veyra.example"),
  title: siteConfig.metadata["/"].title,
  description: siteConfig.description,
  icons: { icon: "/brand/veyra-mark.png", apple: "/brand/veyra-mark.png" },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
