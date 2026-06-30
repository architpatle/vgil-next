"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
    ArrowUpRight,
    UserRound,
} from "lucide-react";


import { FaLinkedinIn } from "react-icons/fa6";

import styles from "./FoundersSection.module.css";

type Founder = {

    id: number;

    name: string;

    designation: string;

    image: any;

    signature: any;

    expertise: string[];

    description: string;

    linkedin: string;

    accent: string;

};

type Props = {

    founder: Founder;

    delay: number;

    mobile?: boolean;

};

export default function FounderCard({

    founder,

    delay,

}: Props) {

    return (

        <motion.article

    className={styles.card}

    initial={{
        opacity: 0,
        x: founder.id === 1 ? -50 : 50,
    }}

    whileInView={{
        opacity: 1,
        x: 0,
    }}

    viewport={{
        once: true,
        amount: 0.3,
    }}

    transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
    }}

    whileHover={{
        y: -8,
    }}

>

            {/* ======================================
                IMAGE
            ====================================== */}

            <motion.div

    className={styles.imageWrapper}

    initial={{
        scale: 1.08,
        opacity: 0,
    }}

    whileInView={{
        scale: 1,
        opacity: 1,
    }}

    viewport={{
        once: true,
    }}

    transition={{
        duration: 0.8,
        delay: delay + 0.2,
    }}

>

                <Image

                    src={founder.image}

                    alt={founder.name}

                    className={styles.image}

                    priority

                />

                {/* Floating Badge */}

                <div className={styles.profileBadge}>

                    <UserRound
    size={18}
    strokeWidth={2.2}
/>

                </div>

            </motion.div>

            {/* ======================================
                CONTENT
            ====================================== */}

            <div className={styles.content}>

                {/* Signature */}

                <motion.div

    initial={{
        opacity: 0,
        y: 10,
    }}

    whileInView={{
        opacity: 1,
        y: 0,
    }}

    viewport={{
        once: true,
    }}

    transition={{
        delay: delay + 0.4,
    }}

>

    <Image
        src={founder.signature}
        alt={`${founder.name} Signature`}
        className={styles.signature}
    />

</motion.div>

                {/* Designation */}

                <p className={styles.designation}>

                    {founder.designation}

                </p>

                <div className={styles.divider}></div>

                {/* Expertise */}

                <div className={styles.skills}>

                    {founder.expertise.map((item) => (

                        <span

                            key={item}

                            className={styles.skill}

                        >

                            {item}

                        </span>

                    ))}

                </div>

                {/* Description */}

                <p className={styles.description}>

                    {founder.description}

                </p>

                {/* Footer */}

                <div className={styles.footer}>

                    <Link

                        href={founder.linkedin}

                        target="_blank"

                        className={styles.linkedin}

                    >

                        <FaLinkedinIn size={16} />

                        <span>

                            LinkedIn

                        </span>

                    </Link>

                    <button

                        className={styles.profileButton}

                    >

                        View Profile

                        <ArrowUpRight size={18} />

                    </button>

                </div>

            </div>

            {/* Accent Border */}

            <div className={styles.hoverAccent}></div>

        </motion.article>

    );

}