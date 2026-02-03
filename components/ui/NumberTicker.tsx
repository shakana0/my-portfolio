"use client";

import { useEffect, useState } from "react";

interface NumberTickerProps {
  value: number;
  duration?: number;
}

export const NumberTicker = ({ value, duration = 1200 }: NumberTickerProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);

    const step = () => {
      start += increment;
      if (start < end) {
        setDisplayValue(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setDisplayValue(end);
      }
    };

    requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{displayValue}</span>;
};
