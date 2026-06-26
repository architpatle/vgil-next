"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import clsx from "clsx";

import styles from "./Navbar.module.css";

// Change later
import logo from "@/assets/logos/logo.png";

const navLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Products",
        href: "/products",
    },
    {
        label: "Investors",
        href: "/investors",
    },
    {
        label: "IPO",
        href: "/ipo",
    },
    {
        label: "AI",
        href: "/ai",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    const [mobileOpen, setMobileOpen] = useState(false);

    const [pastHero, setPastHero] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight * 0.8;

            setPastHero(window.scrollY > heroHeight);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen
            ? "hidden"
            : "auto";
    }, [mobileOpen]);

    return (
        <>
            <header
                className={clsx(
                    styles.navbar,
                    pastHero && styles.scrolled
                )}
            >
                <div className={styles.navInner}>
                    {/* Logo */}

                    <Link href="/" className={styles.logo}>
                        <Image
                            src={logo}
                            alt="VGIL"
                            priority
                            width={170}
                            height={55}
                        />
                    </Link>

                    {/* Desktop */}

                    <nav className={styles.desktopNav}>
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    styles.navLink,
                                    pathname === item.href &&
                                    styles.active
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}

                    <Link
                        href="/contact"
                        className={styles.ctaButton}
                    >
                        Get Started

                        <ArrowRight size={18} />
                    </Link>

                    {/* Mobile Toggle */}

                    <button
                        className={styles.mobileToggle}
                        onClick={() =>
                            setMobileOpen(!mobileOpen)
                        }
                    >
                        {mobileOpen ? (
                            <X size={30} />
                        ) : (
                            <Menu size={30} />
                        )}
                    </button>
                </div>
            </header>

            {/* Overlay */}

            <div
                className={clsx(
                    styles.overlay,
                    mobileOpen &&
                    styles.overlayVisible
                )}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Menu */}

            <aside
                className={clsx(
                    styles.mobileDrawer,
                    mobileOpen &&
                    styles.mobileDrawerOpen
                )}
            >
                <button
                    className={styles.closeButton}
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close Menu"
                >
                    <X size={28} />
                </button>

                <div className={styles.mobileLinks}>
                    {navLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() =>
                                setMobileOpen(false)
                            }
                            className={clsx(
                                styles.mobileLink,
                                pathname === item.href &&
                                styles.activeMobile
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <Link
                    href="/contact"
                    onClick={() =>
                        setMobileOpen(false)
                    }
                    className={styles.mobileCTA}
                >
                    Get Started

                    <ArrowRight size={18} />
                </Link>
            </aside>
        </>
    );
}