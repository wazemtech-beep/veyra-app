import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import JournalDesigningBrandsForDigitalSuccessView from "@/components/pages/JournalDesigningBrandsForDigitalSuccessView";
export const metadata: Metadata =
  siteConfig.metadata["/journal/designing-brands-for-digital-success"];
export default function Page() {
  return <JournalDesigningBrandsForDigitalSuccessView />;
}
