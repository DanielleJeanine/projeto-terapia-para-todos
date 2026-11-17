"use client";

import { useEffect, useRef } from "react";
import AccessibilityBar from "./AccessibilityBar";
import Navbar from "./Navbar";

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${header.getBoundingClientRect().height}px`,
      );
    });
    observer.observe(header);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, []);

  return (
    <header ref={headerRef} className="site-header">
      <AccessibilityBar />
      <Navbar />
    </header>
  );
}
