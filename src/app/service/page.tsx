import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import ServiceView from "@/components/pages/ServiceView";
export const metadata: Metadata = siteConfig.metadata["/service"];
export default function Page() {
  return <ServiceView />;
}
