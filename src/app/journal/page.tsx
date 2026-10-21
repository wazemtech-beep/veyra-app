import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import JournalView from "@/components/pages/JournalView";
export const metadata: Metadata = siteConfig.metadata["/journal"];
export default function Page() {
  return <JournalView />;
}
