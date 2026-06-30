"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import styles from "./FeaturesSection.module.css";

import { features } from "./data";

import FeatureCard from "./FeatureCard";

import vgLogo from "@/assets/logos/logo.png";

export default function FeaturesSection() {

    const leftFeatures = features.slice(0, 3);

    const rightFeatures = features.slice(3, 6);

    return (

        <section className={styles.section}>

            <div className="max-w-7xl mx-auto px-6">

                {/* ======================================
                    Heading
                ====================================== */}

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

                        Features

                    </span>

                    <h2 className={styles.title}>

                        The Complete AI-native

                        <span>

                            Feature Set

                        </span>

                    </h2>

                </motion.div>

                {/* ======================================
                    Desktop Layout
                ====================================== */}

                <div className={styles.desktopLayout}>
                    {/* SVG Connector */}

                    <svg
                        className={styles.connector}
                        viewBox="0 0 1180 760"
                        preserveAspectRatio="none"
                    >

                        {/* LEFT TOP */}
<path
    id="line1"
    className={styles.path}
    d="M590 380 H494 Q470 380 470 356 V149 Q470 125 446 125 H205"
/>

{/* LEFT MIDDLE */}
<path
    id="line2"
    className={styles.path}
    d="M590 380 H205"
/>

{/* LEFT BOTTOM */}
<path
    id="line3"
    className={styles.path}
    d="M590 380 H494 Q470 380 470 404 V611 Q470 635 446 635 H205"
/>

{/* RIGHT TOP */}
<path
    id="line4"
    className={styles.path}
    d="M590 380 H686 Q710 380 710 356 V149 Q710 125 734 125 H975"
/>

{/* RIGHT MIDDLE */}
<path
    id="line5"
    className={styles.path}
    d="M590 380 H975"
/>

{/* RIGHT BOTTOM */}
<path
    id="line6"
    className={styles.path}
    d="M590 380 H686 Q710 380 710 404 V611 Q710 635 734 635 H975"
/>

                    </svg>

                    <div className={styles.pulseLayer}>
    {[1, 2, 3, 4, 5, 6].map((id) => (
        <div key={id} className={styles.pulseWrapper}>
            <svg className={styles.pulseSvg} viewBox="0 0 1180 760" preserveAspectRatio="none">
                <circle r="5" className={styles.pulse}>
                    <animateMotion
                        dur="5s"
                        repeatCount="indefinite"
                    >
                        <mpath href={`#line${id}`} />
                    </animateMotion>
                </circle>
            </svg>
        </div>
    ))}
</div>
                    {/* LEFT */}

                    <div className={styles.column}>

                        {leftFeatures.map((feature, index) => (

                            <FeatureCard

                                key={feature.id}

                                feature={feature}

                                delay={index * .12}

                                side="left"

                            />

                        ))}

                    </div>

                    {/* CENTER */}

                    <div className={styles.center}>



                        {/* Logo */}

                        <motion.div

                            className={styles.logoCard}

                            animate={{

                                y: [0, -6, 0],

                            }}

                            transition={{

                                repeat: Infinity,

                                duration: 4,

                                ease: "easeInOut",

                            }}

                        >

                            <Image

                                src={vgLogo}

                                alt="Virtual Galaxy"

                                width={220}

                                height={70}

                            />

                        </motion.div>

                    </div>

                    {/* RIGHT */}

                    <div className={styles.column}>

                        {rightFeatures.map((feature, index) => (

                            <FeatureCard

                                key={feature.id}

                                feature={feature}

                                delay={(index + 3) * .12}

                                side="right"

                            />

                        ))}

                    </div>

                </div>

                {/* ======================================
                    Mobile
                ====================================== */}

                <div className={styles.mobileLayout}>

                    <motion.div

                        className={styles.logoCard}

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

                    >

                        <Image

                            src={vgLogo}

                            alt="Virtual Galaxy"

                            width={190}

                            height={60}

                        />

                    </motion.div>

                    <div className={styles.mobileCards}>

                        {features.map((feature, index) => (

                            <FeatureCard

                                key={feature.id}

                                feature={feature}

                                delay={index * .08}

                                side="mobile"

                            />

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}