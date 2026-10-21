import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function BrandLogo({ symbolOnly = false }: { symbolOnly?: boolean }) {
  return (
    <span className={symbolOnly ? "veyra-brand veyra-brand--symbol" : "veyra-brand"}>
      <Image
        src={siteConfig.brand.logo}
        alt={symbolOnly ? siteConfig.brand.logoAlt : ""}
        width={48}
        height={48}
        sizes={symbolOnly ? "160px" : "40px"}
        className="veyra-brand__mark"
        priority={!symbolOnly}
      />
      {!symbolOnly && <span className="veyra-brand__wordmark">{siteConfig.name}<span>studio</span></span>}
    </span>
  );
}
