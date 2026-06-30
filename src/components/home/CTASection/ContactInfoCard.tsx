"use client";

import { motion } from "framer-motion";

import {
    ArrowUpRight,
} from "lucide-react";

import styles from "./CTASection.module.css";

type Props = {

    item: {

        id: number;

        icon: any;

        title: string;

        value: string;

        subtitle: string;

    };

};

export default function ContactInfoCard({

    item,

}: Props) {

    const Icon = item.icon;

    return (

        <motion.div

            className={styles.contactCard}

            whileHover={{
                y: -6,
            }}

            transition={{
                duration: .3,
            }}

        >

            <div className={styles.contactIcon}>

                <Icon size={22} />

            </div>

            <div className={styles.contactContent}>

                <h4>

                    {item.title}

                </h4>

                <h5>

                    {item.value}

                </h5>

                <span>

                    {item.subtitle}

                </span>

            </div>

            <div className={styles.contactArrow}>

                <ArrowUpRight size={18} />

            </div>

            <div className={styles.contactAccent}></div>

        </motion.div>

    );

}