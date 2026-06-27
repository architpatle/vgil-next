"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
  Landmark,
  Building2,
  Users,
  ArrowUpRight,
} from "lucide-react";

import styles from "./StatsSection.module.css";
import CountUp from "@/components/ui/CountUp";

const stats = [
  {
    number: 28,
    suffix: "+",
    title: "Years of Excellence",
    subtitle: "Since 1997",
    icon: CalendarClock
  },
  {
    number: 5000,
    suffix: "+",
    title: "Bank Branches",
    subtitle: "Powered Daily",
    icon: Landmark
  },
  {
    number: 180,
    suffix: "+",
    title: "Enterprise Clients",
    subtitle: "Across Industries",
    icon: Users
  },
  {
    number: 400,
    suffix: "+",
    title: "Technology Experts",
    subtitle: "Building Tomorrow",
    icon: CalendarClock

  },
];

export default function StatsSection() {
  return (
    <section className="py-24  lg:py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className={styles.eyebrow}>
            Built on Trust • Powered by Innovation
          </span>

          <h2 className={styles.heading}>
            Engineering Enterprise Success Since 1997
          </h2>

          <p className={styles.description}>
            For more than <strong>28 years</strong>, Virtual Galaxy
            Infotech has partnered with banks, manufacturers and
            enterprises to deliver intelligent software,
            AI-powered automation and secure digital platforms
            that drive measurable business growth.
          </p>

        </motion.div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div

                key={index}

                className={styles.card}

                initial={{
                  opacity: 0,
                  y: 50,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: index * .12,
                  duration: .6,
                }}

                viewport={{
                  once: true,
                }}

              >

                {/* Top */}

                <div className={styles.cardTop}>

                  <div className={styles.iconBox}>

                    <Icon size={22} />

                  </div>

                  <ArrowUpRight
                    size={18}
                    className={styles.arrow}
                  />

                </div>

                {/* Number */}

                <h3 className={styles.number}>
  <CountUp
    end={item.number}
    suffix={item.suffix}
  />
</h3>

                {/* Title */}

                <h4 className={styles.cardTitle}>

                  {item.title}

                </h4>

                {/* Subtitle */}

                <p className={styles.cardSubtitle}>

                  {item.subtitle}

                </p>

                <div className={styles.bottomLine}></div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}