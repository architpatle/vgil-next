"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import styles from "./Footer.module.css";

type LinkItem = {

    title: string;

    href: string;

};

type Props = {

    title: string;

    links: LinkItem[];

};

export default function FooterColumn({

    title,

    links,

}: Props) {

    return (

        <div className={styles.column}>

            <h4>

                {title}

            </h4>

            <ul className={styles.linkList}>

                {links.map((link, index) => (

                    <motion.li

                        key={link.title}

                        initial={{
                            opacity: 0,
                            x: -15,
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}

                        viewport={{
                            once: true,
                        }}

                        transition={{
                            duration: .4,
                            delay: index * .08,
                        }}

                    >

                        <Link

                            href={link.href}

                            className={styles.footerLink}

                        >

                            <span>

                                {link.title}

                            </span>

                            <ArrowUpRight
                                size={15}
                                className={styles.linkArrow}
                            />

                        </Link>

                    </motion.li>

                ))}

            </ul>

        </div>

    );

}