"use client";

import React, { useEffect, useState, useRef } from "react";

interface InlineSVGProps {
  src: string;
  className?: string;
  onLoaded?: (svgElement: SVGSVGElement) => void;
}

export default function InlineSVG({ src, className, onLoaded }: InlineSVGProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((text) => {
        // Basic check to ensure it's an SVG
        if (text.includes("<svg")) {
          setSvgContent(text);
        }
      })
      .catch((err) => console.error("Failed to load SVG:", src, err));
  }, [src]);

  const hasLoadedRef = useRef(false);

  useEffect(() => {
    if (svgContent && containerRef.current && onLoaded && !hasLoadedRef.current) {
      const svgEl = containerRef.current.querySelector("svg");
      if (svgEl) {
        hasLoadedRef.current = true;
        onLoaded(svgEl);
      }
    }
  }, [svgContent, onLoaded]);

  if (!svgContent) {
    return <div className={className} style={{ visibility: "hidden" }} />;
  }

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
