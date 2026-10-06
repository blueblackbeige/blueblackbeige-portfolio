"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackMetaPixelEvent } from "@/lib/meta-pixel";

const servicePages: Record<string, string> = {
  "/digital-marketing": "Digital Marketing",
  "/seo-organic-growth": "SEO & Organic Growth",
  "/web-design-development": "Web Design & Development",
};

export default function MetaPixelTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackMetaPixelEvent("PageView");

    const serviceName = servicePages[pathname];
    if (serviceName) {
      trackMetaPixelEvent("ViewContent", {
        content_name: serviceName,
        content_category: "Service",
        content_type: "product",
      });
    }
  }, [pathname]);

  return null;
}
