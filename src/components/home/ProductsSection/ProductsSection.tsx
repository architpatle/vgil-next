"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import styles from "./ProductsSection.module.css";

import { products } from "./data";

import ProductCard from "./ProductCard";

export default function ProductsSection() {

    // Mobile Accordion

    const [activeCard, setActiveCard] = useState(0);

    return (

        <section className={styles.section}>

            <div className="max-w-7xl mx-auto px-6">

                {/* ===========================
                    HEADING
                =========================== */}

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

                        Enterprise Solutions

                    </span>

                    <h2 className={styles.title}>

                        Software Built For

                        <span>

                            Every Industry

                        </span>

                    </h2>

                    <p className={styles.description}>

                        Explore our flagship software products
                        engineered to transform banking,
                        enterprise management, healthcare and
                        cybersecurity through intelligent
                        digital innovation.

                    </p>

                </motion.div>

                {/* ===========================
                    PRODUCTS GRID
                =========================== */}

                <div className={styles.grid}>

                    {products.map((product, index) => (

                        <ProductCard

                            key={product.id}

                            product={product}

                            index={index}

                            active={activeCard === index}

                            onToggle={() =>
                                setActiveCard(
                                    activeCard === index
                                        ? -1
                                        : index
                                )
                            }

                        />

                    ))}

                </div>

            </div>

        </section>

    );

}