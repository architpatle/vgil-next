"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";

import {
    ChevronLeft,
    ChevronRight,
    Star,
} from "lucide-react";

import styles from "./TestimonialsSection.module.css";

import { testimonials } from "./data";

export default function TestimonialsSection() {

    const [active, setActive] = useState(0);

    const nextSlide = () => {

        setActive((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );

    };

    const prevSlide = () => {

        setActive((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );

    };

    const testimonial = testimonials[active];

    return (

        <section className={styles.section}>

            <div className="max-w-7xl mx-auto px-6">

                {/* ===========================
                    HEADING
                =========================== */}

                <motion.div

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

                        Testimonials

                    </span>

                    <h2 className={styles.heading}>

                        What Our Clients Say

                    </h2>

                </motion.div>

                {/* ===========================
                    GRID
                =========================== */}

                <div className={styles.wrapper}>

                    {/* LEFT */}

                    <div className={styles.left}>

                        <AnimatePresence mode="wait">

                            <motion.div

                                key={testimonial.id}

                                className={styles.card}

                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                exit={{
                                    opacity: 0,
                                    y: -20,
                                }}

                                transition={{
                                    duration: .45,
                                }}

                            >

                                {/* Rating */}

                                <div className={styles.stars}>

                                    {[...Array(testimonial.rating)].map((_, i) => (

                                        <Star
                                            key={i}
                                            size={18}
                                            fill="#E10600"
                                            color="#E10600"
                                        />

                                    ))}

                                </div>

                                {/* Quote */}

                                <p className={styles.quote}>

                                    “{testimonial.quote}”

                                </p>

                                {/* Footer */}

                                <div className={styles.client}>

                                    <h4>

                                        {testimonial.name}

                                    </h4>

                                    <span>

                                        {testimonial.designation}

                                    </span>

                                </div>

                            </motion.div>

                        </AnimatePresence>

                        {/* Navigation */}

                        <div className={styles.bottom}>

                            <div className={styles.buttons}>

                                <button

                                    onClick={prevSlide}

                                    className={styles.navBtn}

                                >

                                    <ChevronLeft size={22} />

                                </button>

                                <button

                                    onClick={nextSlide}

                                    className={`${styles.navBtn} ${styles.activeBtn}`}

                                >

                                    <ChevronRight size={22} />

                                </button>

                            </div>

                            <div className={styles.counter}>

                                {String(active + 1).padStart(2, "0")}

                                <span>

                                    /{String(testimonials.length).padStart(2, "0")}

                                </span>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className={styles.right}>

                        <AnimatePresence mode="wait">

                            <motion.div

                                key={testimonial.image}

                                initial={{
                                    opacity: 0,
                                    scale: .92,
                                }}

                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}

                                exit={{
                                    opacity: 0,
                                    scale: .96,
                                }}

                                transition={{
                                    duration: .55,
                                }}

                                className={styles.imageCard}

                            >

                                <Image

                                    src={testimonial.image}

                                    alt={testimonial.name}

                                    fill

                                    className={styles.image}

                                />

                            </motion.div>

                        </AnimatePresence>

                    </div>

                </div>

            </div>

        </section>

    );

}