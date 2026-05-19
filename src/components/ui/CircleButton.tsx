"use client";

import React, { useState } from "react";
import TransitionLink from "../TransitionLink";
import { cn } from "@/lib/utils";

interface CircleButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  show?: boolean;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  href,
  children,
  variant = "primary",
  className = "",
  show = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // primary: Light Green base, Navy circle
  // secondary: White base, Orange circle
  const isPrimary = variant === "primary";

  const baseBg = isPrimary ? "bg-[#DAFDA3]" : "bg-white";
  const textColor = isPrimary ? "text-[#082E29]" : "text-[#082E29]";
  const circleBg = isPrimary ? "bg-[#082E29]" : "bg-[#FF7500]";
  const hoverBaseBg = isPrimary ? "bg-[#082E29]" : "bg-[#FF7500]";

  return (
    <TransitionLink
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative inline-flex items-center min-w-[170px] px-8 pt-[10px] pb-[12px] rounded-full overflow-hidden transition-all",
        isHovered ? `${hoverBaseBg} text-white` : `${baseBg} ${textColor}`,
        !show && "opacity-0 pointer-events-none",
        className
      )}
      style={{
        // Match reference: Text color transitions, background switches instantly after delay on enter
        // On exit, background switches back instantly, text color transitions back
        transitionProperty: "color, background-color",
        transitionDuration: "0.65s, 0s",
        transitionDelay: isHovered ? "0s, 0.65s" : "0s, 0s",
        transitionTimingFunction: "cubic-bezier(.785,.135,.15,.86)",
      }}
    >
      <span className="relative z-10 text-sm font-display font-medium tracking-normal transition-colors duration-[0.65s] ease-[cubic-bezier(.785,.135,.15,.86)]">
        {children}
      </span>

      {/* The Animated Circle / Pill */}
      <div
        className={`
          absolute inset-0 w-full h-full rounded-full ${circleBg}
          transition-all duration-[0.65s] ease-[cubic-bezier(.785,.135,.15,.86)]
          ${
            isHovered
              ? "[clip-path:inset(0_round_25px)]"
              : "[clip-path:inset(14px_16px_16px_calc(100%-30px)_round_20px)]"
          }
        `}
      />

      {/* The Arrow Dot - Match reference dot behavior */}
      <div
        className={`
        absolute right-[23px] top-1/2 -translate-y-1/2 z-20 
        w-0 h-0 rounded-full ${isPrimary ? "bg-[#DAFDA3]" : "bg-white"} opacity-0
        transition-all duration-[0.65s] ease-[cubic-bezier(.785,.135,.15,.86)]
        ${isHovered ? "w-[14px] h-[14px] opacity-100" : ""}
      `}
      />
    </TransitionLink>
  );
};

export default CircleButton;
