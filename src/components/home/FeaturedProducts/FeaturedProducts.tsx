"use client";

import { motion } from "framer-motion";

import styles from "./FeaturedProducts.module.css";

import { products } from "./data";

export default function FeaturedProducts() {

    return (

        <section className="py-28 lg:py-36 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <motion.div

                    className="text-center max-w-4xl mx-auto"

                    initial={{
                        opacity:0,
                        y:40,
                    }}

                    whileInView={{
                        opacity:1,
                        y:0,
                    }}

                    viewport={{
                        once:true,
                    }}

                    transition={{
                        duration:.7,
                    }}

                >

                    <span className={styles.eyebrow}>

                        Enterprise Solutions

                    </span>

                    <h2 className={styles.heading}>

                        Software Built For

                        <span>

                            Every Business Need

                        </span>

                    </h2>

                    <p className={styles.description}>

                        Discover our flagship digital solutions
                        powering banks, enterprises, healthcare
                        organizations and mission-critical
                        operations across industries.

                    </p>

                </motion.div>

               <div className="mt-24 space-y-10">

    {products.map((product, index) => {

        const reverse = index % 2 !== 0;

        return (

            <motion.div

                key={product.id}

                initial={{
                    opacity: 0,
                    y: 60,
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

                className={`
                    grid
                    lg:grid-cols-2
                    gap-10
                    items-center
                    ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
                `}

            >

                {/* =====================================
                    IMAGE
                ===================================== */}

                <div className={styles.imageWrapper}>

                    <span className={styles.productNumber}>

                        {product.id}

                    </span>

                    <img
                        src={product.image.src}
                        alt={product.title}
                        className={styles.productImage}
                    />

                </div>

                {/* =====================================
                    CONTENT
                ===================================== */}

                <div className={styles.content}>

                    <span className={styles.category}>

                        {product.category}

                    </span>

                    <h3 className={styles.title}>

                        {product.title}

                    </h3>

                    <p className={styles.descriptionCard}>

                        {product.description}

                    </p>

                    {/* Features */}

                    <div className={styles.featureWrap}>

                        {product.features.map((feature) => (

                            <span
                                key={feature}
                                className={styles.featureChip}
                            >

                                {feature}

                            </span>

                        ))}

                    </div>

                    <button
                        className={styles.cta}
                    >

                        View Product

                        <span>

                            →

                        </span>

                    </button>

                </div>

            </motion.div>

        );

    })}

</div>

            </div>

        </section>

    );

}