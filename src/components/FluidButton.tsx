"use client";

import React from "react";
import { cn } from "@/lib/utils";
import TransitionLink from "./TransitionLink";

interface FluidButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
}

/**
 * FluidButton component based on a custom liquid-fill design.
 * Features a staggered background reveal and premium typography.
 */
const FluidButton = ({ children, className, onClick, href, type = "button" }: FluidButtonProps) => {
  const baseStyles = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-[#DC5817]/70 backdrop-blur-md border border-white/40",
    "font-black uppercase tracking-[0.2em] text-[10px] md:text-xs text-white",
    "transition-all duration-300 active:scale-95 px-6 py-2.5",
    className
  );

  const fluidOverlay = (
    <>
      {/* Subtle glass reflection */}
      <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent pointer-events-none z-0" />
      <div 
        className="absolute top-0 left-0 h-full w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0" 
        aria-hidden="true"
      />
    </>
  );

  const content = (
    <span className="relative z-10 px-8 py-2 transition-colors duration-500 group-hover:text-[#DC5817]">
      {children}
    </span>
  );

  if (href) {
    return (
      <TransitionLink href={href} className={baseStyles}>
        {fluidOverlay}
        {content}
      </TransitionLink>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles}>
      {fluidOverlay}
      {content}
    </button>
  );
};

export default FluidButton;
