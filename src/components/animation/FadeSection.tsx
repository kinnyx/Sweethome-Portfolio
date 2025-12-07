"use client";

import { useEffect, useRef, useState } from "react";

type FadeSectionProps = {
  id?: string; // ใช้ให้ navbar link มาหา (#about / #projects ฯลฯ)
  children: React.ReactNode; // เนื้อหาข้างใน section
  fullHeight?: boolean; // จะให้สูงเต็มจอไหม (default = true)
  withScrollMarginTop?: boolean; // ใช้ scroll-mt-14 ไหม (default = true)
  withBorderTop?: boolean; // มีเส้นขอบบนไหม (default = true)
  className?: string; // เผื่ออยากใส่คลาสเพิ่ม
  useContainer?: boolean; // ใส่ max-w-5xl หรือเปล่า
  center?: boolean; // จัดกลางแนวตั้งไหม
};

export default function FadeSection({
  id,
  children,
  fullHeight = true,
  withScrollMarginTop = true,
  withBorderTop = true,
  className = "",
  useContainer = true,
  center = true,
}: FadeSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // สร้าง observer ได้ดูว่า section นี้เข้าหรือออกจาก viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting = true เมื่อ section เข้ามาในจอ
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.4, // ให้ถือว่า "เข้าจอ" เมื่อเห็นประมาณ 40% ของความสูง
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`
                ${fullHeight ? "min-h-[calc(100vh-3.5rem)]" : ""}
                ${center ? "flex items-center" : ""}
                ${withScrollMarginTop ? "scroll-mt-14" : ""}
                ${withBorderTop ? "border-t border-gray-200" : ""}
                transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
                ${className}
            `}
    >
      {useContainer ? (
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
