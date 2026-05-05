"use client";
import { useEffect, useRef } from "react";

export function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => node.classList.add("is-visible"), delay);
            obs.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
