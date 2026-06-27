"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({
  end,
  suffix = "",
  duration = 1800,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let start = 0;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;

          if (start >= end) {
            start = end;
            clearInterval(timer);
          }

          setCount(Math.floor(start));
        }, 16);
      },
      {
        threshold: 0.5,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [duration, end]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}