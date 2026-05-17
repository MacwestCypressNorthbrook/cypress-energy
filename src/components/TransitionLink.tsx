"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import React, { forwardRef } from "react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseMove?: () => void;
  style?: React.CSSProperties;
}

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  ({ href, children, className, onClick, ...props }, ref) => {
    const router = useRouter();
    const pathname = usePathname();
    const lenis = useLenis();

    const handleTransition = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const targetUrl = new URL(href.toString(), window.location.href);

      // If navigating to the same page (e.g., hash links like /services#pod),
      // allow Next.js native <Link> behavior so it can scroll without freezing.
      if (targetUrl.pathname === pathname) {
        if (onClick) onClick();
        
        if (targetUrl.hash) {
          e.preventDefault(); // Prevent native instant jump
          
          // Update URL without jump
          window.history.pushState(null, '', targetUrl.href);
          
          // Smooth scroll via Lenis
          if (lenis) {
            lenis.scrollTo(targetUrl.hash, { offset: -50 });
          } else {
            const element = document.querySelector(targetUrl.hash);
            element?.scrollIntoView({ behavior: 'smooth' });
          }
        }
        return;
      }

      e.preventDefault();

      if (onClick) onClick();

      // Trigger the global transition animation
      if (typeof window !== "undefined" && (window as any).startPageTransition) {
        (window as any).startPageTransition(href.toString(), () => {
          router.push(href.toString());
        });
      } else {
        router.push(href.toString());
      }
    };

    return (
      <Link
        ref={ref}
        href={href}
        className={className}
        onClick={handleTransition}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

TransitionLink.displayName = "TransitionLink";

export default TransitionLink;
