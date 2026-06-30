"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
    ArrowUp,
    ArrowRight,
} from "lucide-react";

import styles from "./Footer.module.css";

import logo from "@/assets/logos/logo.png";

import {
    technologies,
    companyLinks,
    productLinks,
    contactInfo,
    socialLinks,
} from "./data";

import FooterColumn from "./FooterColumn";

export default function Footer() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (

        <footer className={styles.footer}>

            {/* Decorative Background */}

            <div className={styles.bgGlow}></div>

            <div className={styles.bgRingOne}></div>

            <div className={styles.bgRingTwo}></div>

            <div className="max-w-7xl mx-auto px-6">

                {/* ==========================================
                    HERO
                ========================================== */}

                <motion.div

                    className={styles.hero}

                    initial={{
                        opacity: 0,
                        y: 50,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    transition={{
                        duration: .8,
                    }}

                >

                    <Image

                        src={logo}

                        alt="Virtual Galaxy"

                        width={270}

                        priority

                    />

                    <h2>

                        Powering Intelligent Enterprises

                        <span>

                            Since 1997

                        </span>

                    </h2>

                    <p>

                        Delivering secure enterprise software,
                        AI innovation and digital transformation
                        solutions for Banking, Healthcare,
                        Government and Enterprises.

                    </p>

                    {/* Technology Pills */}

                    <div className={styles.techStack}>

                        {technologies.map((item) => {

                            const Icon = item.icon;

                            return (

                                <div

                                    key={item.title}

                                    className={styles.techItem}

                                >

                                    <Icon size={16} />

                                    <span>

                                        {item.title}

                                    </span>

                                </div>

                            );

                        })}

                    </div>

                </motion.div>

                {/* ==========================================
                    FOOTER GRID
                ========================================== */}

                <div className={styles.grid}>

                    {/* Company */}

                    <FooterColumn

                        title="Company"

                        links={companyLinks}

                    />

                    {/* Products */}

                    <FooterColumn

                        title="Products"

                        links={productLinks}

                    />

                    {/* Contact */}

                    <div className={styles.column}>

                        <h4>

                            Contact

                        </h4>

                        <div className={styles.contactList}>

                            {contactInfo.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <div

                                        key={item.title}

                                        className={styles.contactCard}

                                    >

                                        <div className={styles.contactIcon}>

                                            <Icon size={18} />

                                        </div>

                                        <div>

                                            <span>

                                                {item.title}

                                            </span>

                                            <p>

                                                {item.value}

                                            </p>

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                    {/* Social */}

                    <div className={styles.column}>

                        <h4>

                            Follow Us

                        </h4>

                        <div className={styles.socials}>

                            {socialLinks.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <Link

                                        key={item.label}

                                        href={item.href}

                                        className={styles.social}

                                    >

                                        <Icon size={18} />

                                    </Link>

                                );

                            })}

                        </div>

                    </div>

                </div>

                {/* ==========================================
                    DIVIDER
                ========================================== */}

                <div className={styles.divider}></div>

                {/* ==========================================
                    COPYRIGHT
                ========================================== */}

                <div className={styles.bottom}>

                    <p>

                        © {new Date().getFullYear()} Virtual Galaxy Infotech Limited.

                        All Rights Reserved.

                    </p>

                    <div className={styles.bottomLinks}>

                        <Link href="/privacy-policy">

                            Privacy Policy

                        </Link>

                        <Link href="/terms-and-conditions">

                            Terms & Conditions

                        </Link>

                        <Link href="/cookie-policy">

                            Cookie Policy

                        </Link>

                    </div>

                </div>

                {/* ==========================================
                    BACK TO TOP
                ========================================== */}

                <button

                    onClick={scrollTop}

                    className={styles.backTop}

                >

                    <span>

                        Back To Top

                    </span>

                    <ArrowUp size={18} />

                </button>

            </div>

        </footer>

    );

}