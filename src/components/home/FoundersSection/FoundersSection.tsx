"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./FoundersSection.module.css";

import { founders } from "./data";

import FounderCard from "./FounderCard";

import vgLogo from "@/assets/logos/vg-logo-2.png";

export default function FoundersSection() {

    return (

        <section className={styles.section}>

            <div className="max-w-7xl mx-auto px-6">

                {/* ==========================================
                    HEADING
                ========================================== */}

                <motion.div

                    className={styles.heading}

                    initial={{
                        opacity: 0,
                        y: 40,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    transition={{
                        duration: .7,
                    }}

                >

                    <span className={styles.eyebrow}>

                        Our Leadership

                    </span>

                    <h2 className={styles.title}>

                        The Minds Behind

                        <span>

                            Virtual Galaxy

                        </span>

                    </h2>

                    <p className={styles.subtitle}>

                        Meet the visionaries driving innovation,
                        enterprise transformation and AI-powered
                        solutions for businesses across industries.

                    </p>

                </motion.div>

                {/* ==========================================
                    DESKTOP LAYOUT
                ========================================== */}

                <div className={styles.desktopLayout}>

                    {/* Left Founder */}

                    <FounderCard

                        founder={founders[0]}

                        delay={0}

                    />

                    {/* Center */}

                    <motion.div

                        className={styles.center}

                        initial={{
                            opacity: 0,
                            scale: .8,
                        }}

                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}

                        viewport={{
                            once: true,
                        }}

                        transition={{
                            duration: .8,
                        }}

                    >

                        <div className={styles.glowRing}></div>

                        <div className={styles.logoCircle}>

                            <Image

                                src={vgLogo}

                                alt="Virtual Galaxy"

                                width={130}

                                height={40}

                                priority

                            />

                        </div>

                        {/* Decorative Connector */}

                        {/* <div className={styles.connectorLeft}></div>

                        <div className={styles.connectorRight}></div> */}

                    </motion.div>

                    {/* Right Founder */}

                    <FounderCard

                        founder={founders[1]}

                        delay={0.15}

                    />

                </div>

                {/* ==========================================
                    MOBILE
                ========================================== */}

                <div className={styles.mobileLayout}>

                    {founders.map((founder, index) => (

                        <FounderCard

                            key={founder.id}

                            founder={founder}

                            delay={index * .15}

                            mobile

                        />

                    ))}

                </div>

            </div>

        </section>

    );

}