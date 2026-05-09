"use client";

import React, { useRef } from "react";
import TransitionLink from "@/components/TransitionLink";
import gsap from "gsap";
import styles from "./PremiumButton.module.css";

interface PremiumButtonProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const PremiumButton = React.forwardRef<HTMLDivElement, PremiumButtonProps>(
  ({ href, label, icon }, ref) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const whiteOverlayRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
      if (!overlayRef.current || !textRef.current) return;

      overlayRef.current.classList.add(styles.active);

      // Show white circle after 0.45s (while dark circle is expanding)
      const timer = setTimeout(() => {
        if (whiteOverlayRef.current) {
          whiteOverlayRef.current.classList.add(styles.active);
        }
      }, 450);

      gsap.to(textRef.current, {
        color: "#FFF3E0",
        duration: 0.65,
        ease: "cubic-bezier(.785,.135,.15,.86)",
      });

      return () => clearTimeout(timer);
    };

    const handleMouseLeave = () => {
      if (!overlayRef.current || !textRef.current || !whiteOverlayRef.current) return;

      overlayRef.current.classList.remove(styles.active);
      whiteOverlayRef.current.classList.remove(styles.active);

      gsap.to(textRef.current, {
        color: "#DC5817",
        duration: 0.65,
        ease: "cubic-bezier(.785,.135,.15,.86)",
      });
    };

    return (
      <div
        ref={ref || buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: "inline-block",
          transformOrigin: "center",
        }}
      >
        <TransitionLink href={href} className={`${styles.premiumBtn} font-black text-xs md:text-sm uppercase tracking-widest`}>
          {/* Text content - always on top */}
          <div ref={textRef} className={styles.content}>
            <span>{label}</span>
            {icon && <span>{icon}</span>}
          </div>

          {/* Dark circle overlay - expands from right to left using clip-path */}
          <div ref={overlayRef} className={styles.overlay} />

          {/* White circle overlay - appears when dark circle is expanded */}
          <div ref={whiteOverlayRef} className={styles.whiteOverlay} />
        </TransitionLink>
      </div>
    );
  }
);

PremiumButton.displayName = "PremiumButton";

export default PremiumButton;
