"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

import { Plus, Minus, Check } from "lucide-react";

import styles from "./WhyChooseUs.module.css";

import { accordionData } from "./data";

export default function WhyChooseUs() {

    const [activeIndex, setActiveIndex] = useState(0);

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkScreen();

        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (

        <section className="py-32 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-12 gap-16">

                    {/* LEFT CONTENT*/}

                    <div className="lg:col-span-4">

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -40,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .7,
                            }}
                        >

                            {/* Eyebrow */}

                            <span className={styles.eyebrow}>

                                Why Choose Us

                            </span>

                            {/* Heading */}

                            <h2 className={styles.heading}>

                                Enterprise Solutions

                                <span>

                                    Built for the Future

                                </span>

                            </h2>

                            {/* Description */}

                            <p className={styles.description}>

                                Since 1997, Virtual Galaxy Infotech has been
                                empowering banks, enterprises and government
                                organizations through secure software,
                                intelligent automation and AI-driven innovation.

                            </p>

                            {/* Trust Card */}

                            {/* <motion.div

                                className={styles.quoteCard}

                                whileHover={{
                                    y: -5,
                                }}

                            >

                                <div className={styles.quoteIcon}>

                                    ✦

                                </div>

                                <p>

                                    Delivering scalable digital
                                    transformation for mission-critical
                                    organizations across India.

                                </p>

                            </motion.div> */}

                            {/* Decorative Graphic */}

                            {/* <div className={styles.graphic}>

                                <div className={styles.graphicGlow}></div>

                                <div className={styles.graphicCircle}></div>

                                <div className={styles.graphicGrid}></div>

                            </div> */}

                        </motion.div>

                    </div>

                    {/* ======================================================
    RIGHT SIDE
====================================================== */}

                    <div className="lg:col-span-8">

                        {accordionData.map((item, index) => {

                            const active = index === activeIndex;

                            return (

                                <motion.div

                                    key={item.id}

                                    layout

                                    onMouseEnter={() => {
                                        if (isDesktop) {
                                            setActiveIndex(index);
                                        }
                                    }}

                                    className={`${styles.accordionItem} ${active ? styles.activeItem : ""
                                        }`}

                                    transition={{
                                        layout: {
                                            duration: .45,
                                        },
                                    }}

                                >

                                    {/* Header */}

                                    <div
                                        className={styles.accordionHeader}
                                        onClick={() => {
                                            if (!isDesktop) {
                                                setActiveIndex(
                                                    active ? -1 : index
                                                );
                                            }
                                        }}
                                    >

                                        <div className={styles.leftHeader}>

                                            <span className={styles.index}>

                                                {item.id}

                                            </span>

                                            <h3>

                                                {item.title}

                                            </h3>

                                        </div>

                                        <button
                                            className={styles.iconButton}
                                            onClick={(e) => {
                                                e.stopPropagation();

                                                if (!isDesktop) {
                                                    setActiveIndex(
                                                        active ? -1 : index
                                                    );
                                                }
                                            }}
                                        >

                                            {active ? (

                                                <Minus size={20} />

                                            ) : (

                                                <Plus size={20} />

                                            )}

                                        </button>

                                    </div>

                                    {/* Expanded Content */}

                                    <AnimatePresence>

                                        {active && (

                                            <motion.div

                                                className={styles.content}

                                                initial={{
                                                    opacity: 0,
                                                    height: 0,
                                                }}

                                                animate={{
                                                    opacity: 1,
                                                    height: "auto",
                                                }}

                                                exit={{
                                                    opacity: 0,
                                                    height: 0,
                                                }}

                                                transition={{
                                                    duration: .45,
                                                }}

                                            >

                                                <div className={styles.contentGrid}>

                                                    {/* LEFT */}

                                                    <div>

                                                        <p className={styles.contentText}>

                                                            {item.description}

                                                        </p>

                                                        <ul className={styles.points}>

                                                            {item.points.map((point) => (

                                                                <li key={point}>

                                                                    <Check size={18} />

                                                                    <span>

                                                                        {point}

                                                                    </span>

                                                                </li>

                                                            ))}

                                                        </ul>

                                                    </div>

                                                    {/* RIGHT */}

                                                    <motion.div

                                                        className={styles.imageWrapper}

                                                        initial={{
                                                            opacity: 0,
                                                            scale: .9,
                                                        }}

                                                        animate={{
                                                            opacity: 1,
                                                            scale: 1,
                                                        }}

                                                        transition={{
                                                            duration: .5,
                                                        }}

                                                    >

                                                        <Image

                                                            src={item.image}

                                                            alt={item.title}

                                                            className={styles.image}

                                                        />

                                                    </motion.div>

                                                </div>

                                            </motion.div>

                                        )}

                                    </AnimatePresence>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>

    );

}