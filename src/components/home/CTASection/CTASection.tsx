"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./CTASection.module.css";

import ContactInfoCard from "./ContactInfoCard";

import {
    contactCards,
    companyHighlights,
    services,
} from "./data";

import logo from "@/assets/logos/logo.png";

import {
    ArrowRight,
    Sparkles,
} from "lucide-react";

export default function CTASection() {

    return (

        <section className={styles.section}>

            <div className="max-w-7xl mx-auto px-6">

                {/* ==========================
                    HEADING
                ========================== */}

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

                        Get In Touch

                    </span>

                    <h2 className={styles.title}>

                        Let's Build Your

                        <span>

                            Next Intelligent Solution

                        </span>

                    </h2>

                    <p className={styles.subtitle}>

                        Whether you're looking for enterprise software,
                        AI-powered automation or digital transformation,
                        our experts are ready to help.

                    </p>

                </motion.div>

                {/* ==========================
                    CTA CONTAINER
                ========================== */}

                <div className={styles.wrapper}>

                    {/* ======================================================
                        LEFT PANEL
                    ====================================================== */}

                    <motion.div

                        className={styles.leftPanel}

                        initial={{
                            opacity: 0,
                            x: -60,
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

                        {/* Company */}

                        <div className={styles.companyCard}>

                            <Image

                                src={logo}

                                alt="Virtual Galaxy"

                                width={170}

                                priority

                            />

                            <h3>

                                Building Enterprise
                                Software Since 1997

                            </h3>

                            <p>

                                Trusted by banks, enterprises,
                                healthcare organizations and
                                government institutions for
                                secure, scalable and intelligent
                                digital solutions.

                            </p>

                        </div>

                        {/* Contact Cards */}

                        <div className={styles.contactGrid}>

                            {contactCards.map((item) => (

                                <ContactInfoCard

                                    key={item.id}

                                    item={item}

                                />

                            ))}

                        </div>

                        {/* Stats */}

                        {/* <div className={styles.stats}>

                            {companyHighlights.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <div

                                        key={item.id}

                                        className={styles.statCard}

                                    >

                                        <Icon size={22} />

                                        <h4>

                                            {item.value}

                                        </h4>

                                        <span>

                                            {item.label}

                                        </span>

                                    </div>

                                );

                            })}

                        </div> */}

                    </motion.div>

                    {/* ======================================================
                        FORM
                    ====================================================== */}

                    <motion.div

                        className={styles.formCard}

                        initial={{
                            opacity: 0,
                            x: 60,
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
                            delay: .15,
                        }}

                    >

                        <div className={styles.formHeading}>

                            <span>

                                Contact Form

                            </span>

                            <h3>

                                Send Us a Message

                            </h3>

                            <p>

                                Fill out the form and our
                                experts will contact you shortly.

                            </p>

                        </div>

                        <form
                            className={styles.form}
                        >

                            {/* Row 1 */}

                            <div className={styles.row}>

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                />

                                <input
                                    type="text"
                                    placeholder="Company Name"
                                />

                            </div>

                            {/* Row 2 */}

                            <div className={styles.row}>

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                />

                            </div>

                            {/* Row 3 */}

                            <div className={styles.row}>

                                <select
                                    defaultValue=""
                                >

                                    <option
                                        value=""
                                        disabled
                                    >
                                        Select Service
                                    </option>

                                    {services.map((item) => (

                                        <option
                                            key={item}
                                        >

                                            {item}

                                        </option>

                                    ))}

                                </select>

                                <input
                                    type="text"
                                    placeholder="Organization"
                                />

                            </div>

                            {/* Message */}

                            <textarea

                                rows={6}

                                placeholder="Tell us about your project..."

                            />

                            {/* Footer */}

                            <div className={styles.formFooter}>

                                <label
                                    className={styles.checkbox}
                                >

                                    <input
                                        type="checkbox"
                                    />

                                    <span>

                                        I agree to the 

                                        <a href="#">

                                             Privacy Policy

                                        </a>

                                    </span>

                                </label>

                                <button
                                    type="submit"
                                    className={styles.submit}
                                >

                                    <Sparkles
                                        size={18}
                                    />

                                    Send Message

                                    <ArrowRight
                                        size={18}
                                    />

                                </button>

                            </div>

                        </form>

                    </motion.div>

                </div>

            </div>

        </section>

    );

}