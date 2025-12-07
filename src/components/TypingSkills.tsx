"use client";

import { useEffect, useState } from "react";

type TypingSkillsProps = {
  items: string[];          // list skill ที่จะวนพิมพ์
  prefixText?: string;      // ข้อความก่อนหน้า (เช่น "Skill ที่ผมใช้คือ ")
  className?: string;       // เอาไว้เพิ่ม tailwind class ภายนอก
};

export default function TypingSkills({
  items,
  prefixText = "",
  className = "",
}: TypingSkillsProps) {
  const [index, setIndex] = useState(0);       // index ของคำใน items
  const [subIndex, setSubIndex] = useState(0); // จำนวนตัวอักษรที่แสดง
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  const currentWord = items[index] ?? "";

  // effect พิมพ์ / ลบทีละตัว
  useEffect(() => {
    if (!currentWord) return;

    // พิมพ์ครบ -> เว้นจังหวะก่อนลบ
    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), 1000);
      return () => clearTimeout(timeout);
    }

    // ลบจนหมด -> ไปคำถัดไป
    if (deleting && subIndex === 0) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % items.length);
      }, 200);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 60 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, currentWord, items.length]);

  // กระพริบเคอร์เซอร์
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  const typingText = currentWord.substring(0, subIndex);

  return (
    <p className={`text-sm md:text-base text-sky-400 mb-6 ${className}`}>
      {prefixText && <span>{prefixText} </span>}
      <span className="font-semibold">{typingText}</span>
      <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
    </p>
  );
}