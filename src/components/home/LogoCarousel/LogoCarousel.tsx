"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "./LogoCarousel.module.css";

import { logos } from "./logos";

export default function LogoCarousel() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    dragFree: false,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {

    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    onSelect();

  }, [emblaApi]);

  useEffect(() => {

    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 1500);

    return () => clearInterval(interval);

  }, [emblaApi]);

  return (

    <section className="pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className={styles.wrapper}>

          {/* Left */}

          <button
            className={styles.arrow}
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel */}

          <div
            className={styles.viewport}
            ref={emblaRef}
          >

            <div className={styles.container}>

                              {logos.map((logo, index) => {

                const isActive = index === selectedIndex;

                return (

                  <div
                    key={logo.id}
                    className={styles.slide}
                  >

                    <div
                      className={`${styles.card} ${
                        isActive ? styles.activeCard : ""
                      }`}
                    >

                      <Image
                        src={logo.image}
                        alt={logo.name}
                        className={styles.logo}
                      />

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

          {/* Right */}

          <button
            className={styles.arrow}
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* Progress */}

        <div className={styles.progress}>

          {logos.map((_, index) => (

            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`${styles.dot} ${
                selectedIndex === index
                  ? styles.activeDot
                  : ""
              }`}
            />

          ))}

        </div>

      </div>

    </section>

  );
}