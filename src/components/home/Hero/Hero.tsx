"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Building2,
    Cpu,
    BarChart3,
} from "lucide-react";

import styles from "./Hero.module.css";

const words = ["TECH", "DRIVEN", "NATIVE"];

const floatingCards = [
    {
        icon: <ShieldCheck size={20} />,
        title: "Cyber Security",
    },
    {
        icon: <Building2 size={20} />,
        title: "Core Banking",
    },
    {
        icon: <Cpu size={20} />,
        title: "AI Solutions",
    },
    {
        icon: <BarChart3 size={20} />,
        title: "Analytics",
    },
];

export default function Hero() {

    const words = ["TECH", "DRIVEN", "NATIVE"];

    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className={`${styles.hero} relative overflow-hidden`}
        >
            {/* Background */}

            <div className={styles.grid}></div>

            <div className={styles.glow1}></div>

            <div className={styles.glow2}></div>

            <div className="container mx-auto px-6">

                <div className={styles.heroContent}>

                    {/* LEFT */}

                    <motion.div
                        className={styles.left}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: .8,
                        }}
                    >

                        {/* Badge */}

                        <motion.div
                            className={styles.badge}
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: .15,
                            }}
                        >
                            <Sparkles size={16} />

                            AI Powered Enterprise Solutions
                        </motion.div>

                        {/* Heading */}

                        <motion.h1
                            className={styles.title}
                            initial={{
                                opacity: 0,
                                y: 35,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: .3,
                            }}
                        >
                            Your Complete

                            <br />

                            <span className={styles.ai}>
                                AI -

                                <span className={styles.wordBox}>

                                    <AnimatePresence mode="wait">

                                        <motion.span
                                            key={words[currentWord]}
                                            className={styles.word}
                                            initial={{
                                                y: 30,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                y: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                y: -30,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: .45,
                                            }}
                                        >
                                            {words[currentWord]}
                                        </motion.span>

                                    </AnimatePresence>

                                </span>

                                Partner

                            </span>

                        </motion.h1>

                        {/* Description */}

                        <motion.p
                            className={styles.description}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: .45,
                            }}
                        >
                            We engineer enterprise-grade AI solutions,
                            intelligent automation and scalable digital
                            platforms that help businesses innovate,
                            accelerate and lead with confidence.
                        </motion.p>

                        {/* Buttons */}

                        <motion.div
                            className={styles.buttons}
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: .6,
                            }}
                        >
                            <Link
                                href="/products"
                                className={styles.primaryBtn}
                            >
                                Explore Solutions

                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/contact"
                                className={styles.secondaryBtn}
                            >
                                Let's Talk
                            </Link>
                        </motion.div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                         className={`${styles.right} ${styles.desktopOnly}`}
                        initial={{
                            opacity: 0,
                            scale: .9,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            delay: .5,
                        }}
                    >

                        {/* Dashboard */}

                        <div className={styles.dashboard}>

                            {/* Top */}

                            <div className={styles.dashboardHeader}>

                                <div>

                                    <p className={styles.dashboardLabel}>
                                        AI ENGINE
                                    </p>

                                    <h3>
                                        Enterprise Intelligence
                                    </h3>

                                </div>

                                <div className={styles.score}>

                                    98.7%

                                </div>

                            </div>

                            {/* Graph Placeholder */}

                            <div className={styles.chartArea}>

                                {/* SVG Chart */}

                                <svg
                                    className={styles.chartSvg}
                                    viewBox="0 0 600 220"
                                    preserveAspectRatio="none"
                                >

                                    <defs>

                                        <linearGradient
                                            id="lineGradient"
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="0%"
                                        >
                                            <stop offset="0%" stopColor="#E10600" />
                                            <stop offset="100%" stopColor="#ff7a7a" />
                                        </linearGradient>

                                        <linearGradient
                                            id="fillGradient"
                                            x1="0%"
                                            y1="0%"
                                            x2="0%"
                                            y2="100%"
                                        >
                                            <stop offset="0%" stopColor="rgba(225,6,0,.45)" />
                                            <stop offset="100%" stopColor="rgba(225,6,0,0)" />
                                        </linearGradient>

                                    </defs>

                                    {/* Filled Area */}

                                    <path
                                        className={styles.chartFill}
                                        d="
      M0 180
      C60 150 90 120 130 125
      S220 70 270 90
      S360 145 430 95
      S510 60 600 35
      L600 220
      L0 220
      Z
      "
                                    />

                                    {/* Main Line */}

                                    <path
                                        className={styles.chartLine}
                                        d="
      M0 180
      C60 150 90 120 130 125
      S220 70 270 90
      S360 145 430 95
      S510 60 600 35
      "
                                    />

                                    {/* Data Points */}

                                    {[

                                        [130, 125],

                                        [270, 90],

                                        [430, 95],

                                        [600, 35],

                                    ].map(([x, y], i) => (
                                        <circle
                                            key={i}
                                            cx={x}
                                            cy={y}
                                            r="5"
                                            className={styles.chartPoint}
                                        />
                                    ))}

                                </svg>

                                {/* Live Metrics */}

                                <div className={styles.liveStats}>

                                    <div>

                                        <span>AI Prediction</span>

                                        <strong>99.1%</strong>

                                    </div>

                                    <div>

                                        <span>Growth</span>

                                        <strong>+42%</strong>

                                    </div>

                                    <div>

                                        <span>Requests</span>

                                        <strong>12.4M</strong>

                                    </div>

                                </div>

                            </div>

                            {/* Stats */}

                            <div className={styles.statsGrid}>

                                <div className={styles.statCard}>
                                    <span>Latency</span>
                                    <h4>17 ms</h4>
                                </div>

                                <div className={styles.statCard}>
                                    <span>Accuracy</span>
                                    <h4>99.1%</h4>
                                </div>

                                <div className={styles.statCard}>
                                    <span>Inference</span>
                                    <h4>4.2M</h4>
                                </div>

                                <div className={styles.statCard}>
                                    <span>Requests</span>
                                    <h4>12.6M</h4>
                                </div>

                            </div>

                        </div>

                        {/* Floating Cards */}

                        {floatingCards.map((item, index) => (

                            <motion.div
                                key={index}
                                className={`${styles.floatCard} ${styles["card" + index]}`}
                                animate={{
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5 + index,
                                }}
                            >
                                {item.icon}

                                <span>{item.title}</span>

                            </motion.div>

                        ))}

                    </motion.div>

                </div>

            </div>

            {/* Scroll */}

            <motion.div
                className={styles.scroll}
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.8,
                }}
            >
                Scroll to Explore
            </motion.div>

        </section>
    );
}