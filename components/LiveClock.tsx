"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "America/Los_Angeles",
});

function format(d: Date): string {
  return formatter.format(d).replace(/^24/, "00").replace(":", " : ");
}

export function LiveClock() {
  const [time, setTime] = useState("—— : ——");

  useEffect(() => {
    setTime(format(new Date()));
    const id = setInterval(() => setTime(format(new Date())), 20_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}
