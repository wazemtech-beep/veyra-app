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
  icons: { icon: "https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581735/wazemtech/veyra/veyra-mark-29f6417769bb.png", apple: "https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581735/wazemtech/veyra/veyra-mark-29f6417769bb.png" },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
