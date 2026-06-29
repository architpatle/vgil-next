"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import { ArrowRight, Check, Plus, Minus } from "lucide-react";

import styles from "./ProductsSection.module.css";

type Product = {
    id: string;
    title: string;
    category: string;
    image: any;
    logo: any;
    accent: string;
    description: string;
    features: string[];
};

type Props = {
    product: Product;
    index: number;
    active: boolean;
    onToggle: () => void;
};

export default function ProductCard({
    product,
    index,
    active,
    onToggle,
}: Props) {

    const imageRef = useRef<HTMLDivElement>(null);

    const [cursor, setCursor] = useState({
        x: 0,
        y: 0,
    });

    const [hovered, setHovered] = useState(false);

    const handleMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {

        if (!imageRef.current) return;

        const rect =
            imageRef.current.getBoundingClientRect();

        setCursor({

            x: e.clientX - rect.left,

            y: e.clientY - rect.top,

        });

    };

    return (

        <motion.article

            className={styles.card}

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
                duration: .7,
                delay: index * .08,
            }}

            whileHover={{
                y: -10,
            }}

        >

            {/* ======================================
                IMAGE
            ====================================== */}

            <div

                ref={imageRef}

                className={styles.imageContainer}

                onMouseMove={handleMove}

                onMouseEnter={() =>
                    setHovered(true)
                }

                onMouseLeave={() =>
                    setHovered(false)
                }

            >

                <Image

                    src={product.image}

                    alt={product.title}

                    fill

                    className={styles.productImage}

                />

                {/* Overlay */}

                <div
                    className={styles.imageOverlay}
                />

                {/* Product Number */}

                <span
                    className={styles.productId}
                >

                    {product.id}

                </span>

                {/* Center Logo */}

                <div
                    className={styles.logoGlass}
                >

                    <Image

                        src={product.logo}

                        alt={product.title}

                        width={120}

                        height={120}

                        className={styles.logo}

                    />

                </div>

                {/* Cursor Follow */}

                <AnimatePresence>

                    {hovered && (

                        <motion.div

                            className={
                                styles.cursorButton
                            }

                            initial={{
                                opacity: 0,
                                scale: .8,
                            }}

                            animate={{

                                opacity: 1,

                                scale: 1,

                                x: cursor.x - 50,

                                y: cursor.y - 50,

                            }}

                            exit={{

                                opacity: 0,

                                scale: .8,

                            }}

                            transition={{

                                type: "spring",

                                stiffness: 180,

                                damping: 18,

                            }}

                        >

                            View Product

                        </motion.div>

                    )}

                </AnimatePresence>

            </div>

           {/* ======================================
    CONTENT
====================================== */}

<div className={styles.content}>

    {/* Top Row */}

    <div className={styles.contentHeader}>

        <span
            className={styles.category}
            style={{
                "--accent": product.accent,
            } as React.CSSProperties}
        >

            {product.category}

        </span>

        {/* Mobile Accordion */}

        <button

            className={styles.expandBtn}

            onClick={onToggle}

        >

            <motion.div

                animate={{
                    rotate: active ? 180 : 0,
                }}

                transition={{
                    duration: .3,
                }}

            >

                {active ?

                    <Minus size={20} />

                    :

                    <Plus size={20} />

                }

            </motion.div>

        </button>

    </div>

    {/* Title */}

    <h3 className={styles.titleCard}>

        {product.title}

    </h3>

    {/* Desktop */}

    <div className={styles.desktopContent}>

        <div className={styles.divider}></div>

        <h5 className={styles.subHeading}>

            Description

        </h5>

        <p className={styles.description}>

            {product.description}

        </p>

        <h5 className={styles.subHeading}>

            Key Features

        </h5>

        <ul className={styles.featureList}>

            {product.features.map((feature) => (

                <li key={feature}>

                    <Check
                        size={16}
                        strokeWidth={3}
                    />

                    {feature}

                </li>

            ))}

        </ul>

        <button className={styles.learnMore}>

            Learn More

            <ArrowRight size={18} />

        </button>

    </div>

    {/* Mobile Accordion */}

    <AnimatePresence>

        {active && (

            <motion.div

                className={styles.mobileContent}

                initial={{

                    height: 0,

                    opacity: 0,

                }}

                animate={{

                    height: "auto",

                    opacity: 1,

                }}

                exit={{

                    height: 0,

                    opacity: 0,

                }}

                transition={{

                    duration: .35,

                }}

            >

                <div className={styles.divider}></div>

                <h5 className={styles.subHeading}>

                    Description

                </h5>

                <p className={styles.description}>

                    {product.description}

                </p>

                <h5 className={styles.subHeading}>

                    Key Features

                </h5>

                <ul className={styles.featureList}>

                    {product.features.map((feature) => (

                        <li key={feature}>

                            <Check
                                size={16}
                                strokeWidth={3}
                            />

                            {feature}

                        </li>

                    ))}

                </ul>

                <button className={styles.learnMore}>

                    Learn More

                    <ArrowRight size={18} />

                </button>

            </motion.div>

        )}

    </AnimatePresence>

</div>

        </motion.article>

    );

}