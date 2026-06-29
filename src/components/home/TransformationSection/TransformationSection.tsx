"use client";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

import styles from "./TransformationSection.module.css";

import { comparison } from "./data";

export default function TransformationSection() {

    return (

        <section className="py-28 lg:py-36 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div

                    className="text-center max-w-4xl mx-auto"

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

                        Business Transformation

                    </span>

                    <h2 className={styles.heading}>

                        From Fragmented Operations

                        <span>

                            To Intelligent Enterprise Growth

                        </span>

                    </h2>

                    <p className={styles.description}>

                        Transform disconnected systems into
                        one intelligent platform powered by
                        automation, AI and real-time insights.

                    </p>

                </motion.div>

                {/* ======================================================
    COMPARISON
====================================================== */}

                <div className="relative mt-20">

                    <div
                        className="
        grid
        grid-cols-1
        lg:grid-cols-[1fr_auto_1fr]
        gap-8
        items-center
    "
                    >

                        {/* ================= LEFT CARD ================= */}

                        <motion.div

                            className={`${styles.beforeCard} order-1`}

                            initial={{
                                opacity: 0,
                                x: -50,
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}

                            viewport={{
                                once: true,
                            }}

                            transition={{
                                duration: .7,
                            }}

                        >

                            <div className={styles.cardHeader}>

                                <div className={styles.badgeRed}></div>

                                <h3>

                                    {comparison.before.title}

                                </h3>

                            </div>

                            <div className={styles.divider}></div>

                            <ul className={styles.list}>

                                {comparison.before.items.map((item) => {

                                    const Icon = item.icon;

                                    return (

                                        <li key={item.text}>

                                            <span className={styles.iconRed}>

                                                <Icon size={18} />

                                            </span>

                                            <span>

                                                {item.text}

                                            </span>

                                        </li>

                                    );

                                })}

                            </ul>

                        </motion.div>

                        {/* ================= CENTER ================= */}

                        <div className={`${styles.timeline} order-2`}>

                           <div className={styles.lineTop}>
    <div className={styles.pulseTop}></div>
</div>

<div className={styles.aiNode}>

    <div className={styles.nodeCircle}>
        AI
    </div>

    <span>
        AI Transformation
    </span>

</div>

<div className={styles.lineBottom}>
    <div className={styles.pulseBottom}></div>
</div>

                            

                        </div>

                        {/* ================= RIGHT CARD ================= */}

                        <motion.div

                            className={`${styles.afterCard} order-3`}

                            initial={{
                                opacity: 0,
                                x: 50,
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}

                            viewport={{
                                once: true,
                            }}

                            transition={{
                                duration: .7,
                            }}

                        >

                            <div className={styles.aiBadge}>

                                AI Powered

                            </div>

                            <div className={styles.cardHeader}>

                                <div className={styles.badgeGreen}></div>

                                <h3>

                                    {comparison.after.title}

                                </h3>

                            </div>

                            <div className={styles.divider}></div>

                            <ul className={styles.list}>

                                {comparison.after.items.map((item) => {

                                    const Icon = item.icon;

                                    return (

                                        <li key={item.text}>

                                            <span className={styles.iconGreen}>

                                                <Icon size={18} />

                                            </span>

                                            <span>

                                                {item.text}

                                            </span>

                                        </li>

                                    );

                                })}

                            </ul>

                        </motion.div>

                    </div>

                </div>

            </div>

        </section>

    );

}