"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { forwardRef } from "react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseMove?: () => void;
}

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  ({ href, children, className, onClick, ...props }, ref) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleTransition = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();

      // If target is same as current, just return or scroll to top
      if (href.toString() === pathname || (href.toString() === "/" && pathname === "/")) {
        return;
      }

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
