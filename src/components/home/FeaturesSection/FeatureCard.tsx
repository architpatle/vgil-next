"use client";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import styles from "./FeaturesSection.module.css";

type Props = {

    feature: {

        id: number;

        title: string;

        description: string;

        icon: React.ElementType;

    };

    delay: number;

    side: "left" | "right" | "mobile";

};

export default function FeatureCard({

    feature,

    delay,

}: Props) {

    const Icon = feature.icon;

    return (

        <motion.article

            className={styles.card}

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

                duration: .65,

                delay,

            }}

            whileHover={{

                y: -8,

            }}

        >

            {/* =========================================
                ICON
            ========================================= */}

            <div className={styles.iconWrapper}>

                <div className={styles.iconBox}>

                    <Icon

                        size={24}

                        strokeWidth={2}

                    />

                </div>

                <ArrowUpRight

                    size={18}

                    className={styles.arrow}

                />

            </div>

            {/* =========================================
                CONTENT
            ========================================= */}

            <div className={styles.content}>

                <h3>

                    {feature.title}

                </h3>

                <p>

                    {feature.description}

                </p>

            </div>

            {/* =========================================
                HOVER ACCENT
            ========================================= */}

            <div className={styles.hoverAccent}></div>

        </motion.article>

    );

}