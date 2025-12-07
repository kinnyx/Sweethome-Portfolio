"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
    words: string[]; // คำ/ประโยคที่จะพิมพ์วนลูป
    typingSpeed?: number; // ความเร็วตอนพิมพ์ (ms/ตัวอักษร)
    deletingSpeed?: number; // ความเร็วตอนลบ (ms/ตัวอักษร)
    pauseTime?: number; // หน่วงเมื่อพิมพ์จบคำ หรือหลังลบเสร็จ (ms)
    loop?: boolean; // true = วนลูปไม่รู้จบ
    className?: string // เผื่ออยากใส่คราส Tailwind เพิ่ม
    cursor?: boolean; // แสดงเคอร์เซอร์กระพริบหรือไม่
};

export default function Typewriter({
    words,
    typingSpeed = 90,
    deletingSpeed = 50,
    pauseTime = 900,
    loop = true,
    className = "",
    cursor,
}: TypewriterProps) {
    const [wordIndex, setWordIndex] = useState(0); // index ของค้าปัจจุบัน
    const [subIndex, setSubindex] = useState(0); // ความยาว substring ที่แสดง
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true); // กระพริบเคอร์เซอร์

    const currentWord = words[wordIndex] ?? "";

    useEffect(() => {
        // กระพริบเคอร์เซอร์
        if (!cursor) return;
        const blinkTimer = setInterval(() => setBlink((v) => !v), 500);
        return () => clearInterval(blinkTimer);
    }, [cursor]);

    useEffect(() => {
        // ถ้าไม่มีคำให้พิมพ์ ไม่ต้องทำอะไร
        if (words.length === 0) return;

        // กำหนดความเร็วตามสถานะกำลังพิมพ์ / ลบ
        const speed = isDeleting ? deletingSpeed : typingSpeed;

        // เมื่อพิมพ์จบ "เต็มคำ" ให้หน่วงก่อนสลับเป็นลบ
        if (!isDeleting && subIndex === currentWord.length) {
            const t = setTimeout(() => setIsDeleting(true), pauseTime);
            return () => clearTimeout(t);
        }

        // เมื่อ "ลบหมดคำแล้ว" ให้หน่วงก่อนขยับไปคำถัดไป
        if (isDeleting && subIndex === 0) {
            const t = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((prev) => {
                    const next = prev + 1;
                    if (next < words.length) return next;
                    return loop ? 0 : prev; // ถ้าไม่ loop ก็หยุดที่คำสุดท้าย
                });
            }, pauseTime / 2);
            return () => clearTimeout(t);
        }

        // ทำงานพิมพ์/ลบทีละตัว
        const timer = setTimeout(() => {
            setSubindex((prev) => prev + (isDeleting ? -1 : 1));
        }, speed);

        return () => clearTimeout(timer);
    }, [
        words,
        wordIndex,
        subIndex,
        isDeleting,
        typingSpeed,
        deletingSpeed,
        pauseTime,
        loop,
        currentWord.length,
    ]);

    const visibleText = currentWord.substring(0, subIndex);

    return (
        <span className={className} aria-live="polite" aria-atomic="true">
            {visibleText}
            {cursor && <span className={blink ? "opacity-100" : "opacity-0"}>|</span>}
        </span>
    )
}