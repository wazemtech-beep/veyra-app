"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { journalDesigningBrandsForDigitalSuccessAnimation } from "@/hooks/pages/journalDesigningBrandsForDigitalSuccessAnimation";
import { mountBrisifyInteractions } from "@/hooks/brisify/interactions";

import Navbar from "@/components/layout/Navbar";
import JournalDesigningBrandsForDigitalSuccessInnerHeroV1 from "@/components/sections/JournalDesigningBrandsForDigitalSuccessInnerHeroV1";
import JournalDesigningBrandsForDigitalSuccessCtaV2 from "@/components/sections/JournalDesigningBrandsForDigitalSuccessCtaV2";
import JournalDesigningBrandsForDigitalSuccessSection1 from "@/components/sections/JournalDesigningBrandsForDigitalSuccessSection1";
import Footer from "@/components/layout/Footer";
export default function JournalDesigningBrandsForDigitalSuccessView() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageAnimation(
    rootRef,
    journalDesigningBrandsForDigitalSuccessAnimation,
    mountBrisifyInteractions,
  );
  return (
    <div ref={rootRef} className="brisify-site">
      <Navbar />
      <main>
        <JournalDesigningBrandsForDigitalSuccessInnerHeroV1 />
        <JournalDesigningBrandsForDigitalSuccessCtaV2 />
        <main className="rt-section-top-sm rt-section-bottom-sm">
          <JournalDesigningBrandsForDigitalSuccessSection1 />
        </main>
      </main>
      <Footer />
    </div>
  );
}
