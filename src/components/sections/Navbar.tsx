"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import TransitionLink from "../TransitionLink";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services-data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MaskButton from "../MaskButton";
import CircleButton from "../ui/CircleButton";
import { devMode } from "@/lib/dev-mode";

gsap.registerPlugin(useGSAP);

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Management", href: "/management" },
];

const serviceLinks = services.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));

const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Management", href: "/management" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Partners", href: "/partners" },
  { label: "QHSE", href: "/qhse" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navPillRef = useRef<HTMLDivElement>(null);
  const pillBgRef = useRef<HTMLDivElement>(null);

  // Mobile menu refs
  const menuRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const bar1Ref = useRef<HTMLSpanElement>(null);
  const bar2Ref = useRef<HTMLSpanElement>(null);
  const bar3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate pill background following mouse
  useEffect(() => {
    const navPill = navPillRef.current;
    const pillBg = pillBgRef.current;
    if (!navPill || !pillBg) return;

    const getMenuItems = () => {
      return Array.from(navPill.querySelectorAll("[data-menu-item]")) as HTMLElement[];
    };

    const animateToPill = (item: HTMLElement, duration = 0.4) => {
      const x = item.offsetLeft;
      const y = item.offsetTop;
      const width = item.offsetWidth;
      const height = item.offsetHeight;

      gsap.to(pillBg, {
        x: x,
        y: y,
        width: width,
        height: height,
        duration: duration,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const items = getMenuItems();
      const navRect = navPill.getBoundingClientRect();
      const mouseX = e.clientX - navRect.left;

      let closestItem = items[0];
      let closestDistance = Infinity;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left - navRect.left + itemRect.width / 2;
        const distance = Math.abs(mouseX - itemCenterX);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = item;
        }
      });

      animateToPill(closestItem, 0.3);
    };

    const handleMouseLeave = () => {
      const activeItem = navPill.querySelector("[data-active]") as HTMLElement;
      if (activeItem) {
        animateToPill(activeItem, 0.5);
      }
    };

    navPill.addEventListener("mousemove", handleMouseMove);
    navPill.addEventListener("mouseleave", handleMouseLeave);

    // Initialize to active item on mount
    setTimeout(() => {
      const activeItem = navPill.querySelector("[data-active]") as HTMLElement;
      if (activeItem) {
        animateToPill(activeItem, 0);
      }
    }, 0);

    return () => {
      navPill.removeEventListener("mousemove", handleMouseMove);
      navPill.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pathname]);

  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  // Close menu on route change
  useEffect(() => {
    if (mobileOpen) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const openDropdown = (name: string) => {
    if (!devMode.navbar.showDropdowns) return;
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  // Animate hamburger bars
  const animateHamburgerOpen = useCallback(() => {
    if (!bar1Ref.current || !bar2Ref.current || !bar3Ref.current) return;
    gsap.to(bar1Ref.current, { y: 8, rotate: 45, duration: 0.35, ease: "power3.inOut" });
    gsap.to(bar2Ref.current, { opacity: 0, scaleX: 0, duration: 0.2, ease: "power2.in" });
    gsap.to(bar3Ref.current, { y: -8, rotate: -45, duration: 0.35, ease: "power3.inOut" });
  }, []);

  const animateHamburgerClose = useCallback(() => {
    if (!bar1Ref.current || !bar2Ref.current || !bar3Ref.current) return;
    gsap.to(bar1Ref.current, { y: 0, rotate: 0, duration: 0.35, ease: "power3.inOut" });
    gsap.to(bar2Ref.current, {
      opacity: 1,
      scaleX: 1,
      duration: 0.3,
      delay: 0.05,
      ease: "power2.out",
    });
    gsap.to(bar3Ref.current, { y: 0, rotate: 0, duration: 0.35, ease: "power3.inOut" });
  }, []);

  const openMenu = useCallback(() => {
    if (!menuRef.current) return;
    setMobileOpen(true);
    animateHamburgerOpen();

    tlRef.current?.kill();

    const menu = menuRef.current;
    const panel = menu.querySelector(".mob-panel") as HTMLElement;
    const topBar = menu.querySelector(".mob-top-bar") as HTMLElement;
    const deco = menu.querySelector(".mob-deco") as HTMLElement;
    const items = menu.querySelectorAll(".mob-item");
    const cta = menu.querySelector(".mob-cta") as HTMLElement;
    const contact = menu.querySelector(".mob-contact") as HTMLElement;

    // Set initial states
    gsap.set(panel, { clipPath: "inset(0% 0% 100% 0%)", pointerEvents: "auto" });
    gsap.set(topBar, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(deco, { opacity: 0, y: 50 });
    gsap.set(items, { y: 80, opacity: 0 });
    gsap.set(cta, { y: 40, opacity: 0 });
    gsap.set(contact, { opacity: 0 });

    const tl = gsap.timeline();

    tl.to(panel, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.7,
      ease: "power4.inOut",
    })
      .to(topBar, { scaleX: 1, duration: 0.6, ease: "power3.out" }, "-=0.35")
      .to(deco, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5")
      .to(
        items,
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.07,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .to(cta, { y: 0, opacity: 1, duration: 0.45, ease: "back.out(1.5)" }, "-=0.2")
      .to(contact, { opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.2");

    tlRef.current = tl;
  }, [animateHamburgerOpen]);

  const closeMenu = useCallback(() => {
    if (!menuRef.current) return;
    animateHamburgerClose();

    tlRef.current?.kill();

    const menu = menuRef.current;
    const panel = menu.querySelector(".mob-panel") as HTMLElement;
    const topBar = menu.querySelector(".mob-top-bar") as HTMLElement;
    const deco = menu.querySelector(".mob-deco") as HTMLElement;
    const items = menu.querySelectorAll(".mob-item");
    const cta = menu.querySelector(".mob-cta") as HTMLElement;
    const contact = menu.querySelector(".mob-contact") as HTMLElement;

    const tl = gsap.timeline({
      onComplete: () => {
        setMobileOpen(false);
        gsap.set(panel, { pointerEvents: "none" });
      },
    });

    tl.to(contact, { opacity: 0, duration: 0.15, ease: "power2.in" })
      .to(cta, { y: 30, opacity: 0, duration: 0.2, ease: "power2.in" }, "<")
      .to(
        items,
        {
          y: -50,
          opacity: 0,
          duration: 0.25,
          stagger: { each: 0.04, from: "end" },
          ease: "power2.in",
        },
        "<0.05",
      )
      .to(deco, { opacity: 0, y: -30, duration: 0.25, ease: "power2.in" }, "<")
      .to(
        topBar,
        { scaleX: 0, transformOrigin: "right center", duration: 0.35, ease: "power3.in" },
        "-=0.1",
      )
      .to(
        panel,
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.6,
          ease: "power4.inOut",
        },
        "-=0.15",
      );

    tlRef.current = tl;
  }, [animateHamburgerClose]);

  const toggleMenu = useCallback(() => {
    if (mobileOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [mobileOpen, openMenu, closeMenu]);

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 mx-auto left-0 right-0 top-0 w-[calc(100%-2rem)] max-w-9xl rounded-[1.5rem] ${
          transparent ? "bg-transparent py-5" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <TransitionLink href="/" className="flex items-center">
            <img
              src={"/logo.png"}
              alt="Cypress Energy"
              className="h-10 md:h-14 w-auto transition-opacity duration-300"
            />
          </TransitionLink>

          {/* Desktop Nav */}
          <div className="hidden absolute left-[49%] top-0 transform -translate-x-1/2 translate-y-1/20 lg:flex items-center gap-0">
            {/* Pill-shaped Navigation Container */}
            <div
              ref={navPillRef}
              className="scale-85 relative bg-white/0 backdrop-blur-sm rounded-2xl p-1 flex items-center gap-8"
            >
              {/* Animated white pill background */}
              <div
                ref={pillBgRef}
                className="absolute left-0 top-0 bg-white rounded-2xl shadow-sm pointer-events-none"
                style={{
                  width: "80px",
                  height: "100%",
                }}
              />
              {/* Home */}
              <TransitionLink
                href="/"
                data-menu-item
                data-active={pathname === "/" ? "" : undefined}
                className={`relative z-10 text-lg font-bold transition-all tracking-tight px-6 py-2.5 rounded-2xl ${
                  pathname === "/" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Home
              </TransitionLink>

              {/* About */}
              {devMode.navbar.showDropdowns ? (
                <div
                  className="relative"
                  data-menu-item
                  onMouseEnter={() => openDropdown("about")}
                  onMouseLeave={closeDropdown}
                  data-active={isActive("/about") || isActive("/management") ? "" : undefined}
                >
                  <button
                    className={`relative cursor-pointer z-10 text-lg font-bold transition-all tracking-tight flex items-center gap-1 px-6 py-2.5 rounded-2xl ${
                      isActive("/about") || isActive("/management")
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    About
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === "about" && (
                    <div
                      className="absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-xl border border-border/50 py-3 min-w-[180px] z-50"
                      onMouseEnter={() => openDropdown("about")}
                      onMouseLeave={closeDropdown}
                    >
                      {aboutLinks.map((link) => (
                        <TransitionLink
                          key={link.href}
                          href={link.href}
                          className={`block px-5 py-3 text-sm font-bold transition-colors hover:text-[#DC5817] hover:bg-[#F8F9FA] ${
                            pathname === link.href ? "text-[#13642C]" : "text-foreground/70"
                          }`}
                        >
                          {link.label}
                        </TransitionLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <TransitionLink
                  href="/about"
                  data-menu-item
                  data-active={isActive("/about") || isActive("/management") ? "" : undefined}
                  className={`relative z-10 text-lg font-bold transition-all tracking-tight px-6 py-2.5 rounded-2xl ${
                    isActive("/about")
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  About
                </TransitionLink>
              )}

              {/* Services */}
              {devMode.navbar.showDropdowns ? (
                <div
                  className="relative"
                  data-menu-item
                  onMouseEnter={() => openDropdown("services")}
                  onMouseLeave={closeDropdown}
                  data-active={isActive("/services") ? "" : undefined}
                >
                  <button
                    className={`relative cursor-pointer z-10 text-lg font-bold transition-all tracking-tight flex items-center gap-1 px-6 py-2.5 rounded-2xl ${
                      isActive("/services")
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    Services
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === "services" && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-xl border border-border/50 py-4 z-50 w-[680px]"
                      onMouseEnter={() => openDropdown("services")}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="px-4 mb-3 pb-3 border-b border-border/40">
                        <TransitionLink
                          href="/services"
                          className="text-xs font-black uppercase tracking-widest text-[#DC5817] hover:underline"
                        >
                          View All Services →
                        </TransitionLink>
                      </div>
                      <div className="grid grid-cols-2 gap-1 px-2">
                        {serviceLinks.map((link) => (
                          <TransitionLink
                            key={link.href}
                            href={link.href}
                            className={`block px-4 py-2.5 text-sm font-bold rounded-xl transition-colors hover:text-[#DC5817] hover:bg-[#F8F9FA] ${
                              pathname === link.href ? "text-[#13642C]" : "text-foreground/70"
                            }`}
                          >
                            {link.label}
                          </TransitionLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <TransitionLink
                  href="/services"
                  data-menu-item
                  data-active={isActive("/services") ? "" : undefined}
                  className={`relative z-10 text-lg font-bold transition-all tracking-tight px-6 py-2.5 rounded-2xl ${
                    isActive("/services")
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  Services
                </TransitionLink>
              )}

              {/* Projects */}
              <TransitionLink
                href="/projects"
                data-menu-item
                data-active={isActive("/projects") ? "" : undefined}
                className={`relative z-10 text-lg font-bold transition-all tracking-tight px-6 py-2.5 rounded-2xl ${
                  isActive("/projects")
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Projects
              </TransitionLink>
            </div>
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            {/* <TransitionLink href="/contact" className={`hidden md:block`}>
              <MaskButton text="Contact Us" backgroundColor="#fd7435" />
            </TransitionLink> */}

            <CircleButton
              href="/contact"
              variant="secondary"
              className="hidden md:inline-flex scale-90"
            >
              Contact Us
            </CircleButton>

            {/* Hamburger — 3 animated bars */}
            <button
              className={`lg:hidden p-2 flex flex-col justify-center items-center w-10 h-10 gap-0 relative z-60 ${
                mobileOpen ? "text-white" : transparent ? "text-white" : "text-foreground"
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                ref={bar1Ref}
                className="block w-6 h-[2px] bg-current rounded-full origin-center"
                style={{ marginBottom: "6px" }}
              />
              <span
                ref={bar2Ref}
                className="block w-6 h-[2px] bg-current rounded-full origin-center"
                style={{ marginBottom: "6px" }}
              />
              <span
                ref={bar3Ref}
                className="block w-6 h-[2px] bg-current rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — always mounted, GSAP controlled */}
      <div ref={menuRef} className="lg:hidden">
        <div
          className="mob-panel fixed inset-0 z-40 bg-[#0b1f10] flex flex-col"
          style={{ clipPath: "inset(0% 0% 100% 0%)", pointerEvents: "none" }}
        >
          {/* Orange accent bar across top */}
          <div className="mob-top-bar absolute top-0 left-0 right-0 h-[3px] bg-[#DC5817] origin-left" />

          {/* Decorative background "CE" monogram */}
          <div
            className="mob-deco absolute bottom-0 right-0 text-[22rem] font-black text-white/30 leading-none select-none pointer-events-none translate-y-8"
            aria-hidden
          >
            CE
          </div>

          {/* Scroll container */}
          <div className="flex flex-col h-full px-6 pt-24 pb-10 overflow-y-auto">
            {/* Nav items */}
            <nav className="flex-1 flex flex-col justify-center">
              {mobileNavItems.map((item, i) => (
                <div key={item.href} className="mob-item border-b border-white/10 last:border-0">
                  <TransitionLink
                    href={item.href}
                    onClick={closeMenu}
                    className={`group flex items-center justify-between py-5 transition-colors duration-200 ${
                      pathname === item.href ? "text-[#DC5817]" : "text-white hover:text-[#DC5817]"
                    }`}
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="text-white/20 text-xs font-bold tabular-nums w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[1.75rem] font-black uppercase tracking-tight leading-none">
                        {item.label}
                      </span>
                    </div>
                    <svg
                      className="w-5 h-5 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 18l6-6-6-6"
                      />
                    </svg>
                  </TransitionLink>
                </div>
              ))}
            </nav>

            {/* Bottom section */}
            <div className="space-y-6 pt-6">
              {/* CTA */}
              <div className="mob-cta">
                <TransitionLink
                  href="/contact"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-3 bg-[#DC5817] hover:bg-[#C44D14] text-white font-black px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-colors"
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </TransitionLink>
              </div>

              {/* Contact info */}
              <div className="mob-contact space-y-1">
                <div className="w-8 h-px bg-white/20 mb-3" />
                <a
                  href="tel:+233244270797"
                  className="block text-white/40 text-xs font-bold tracking-widest hover:text-white/70 transition-colors"
                >
                  +233 (0) 244 270797
                </a>
                <a
                  href="mailto:info@cypressenergyghana.com"
                  className="block text-white/40 text-xs font-bold tracking-widest hover:text-white/70 transition-colors"
                >
                  info@cypressenergyghana.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
