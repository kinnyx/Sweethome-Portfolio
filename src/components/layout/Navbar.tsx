"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import { HiOutlineMenu } from "react-icons/hi";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // กดโลโก้เลื่อนขึ้นบนสุดแบบ smooth
    const handleScrollTop = () => {
        if (typeof window !== "undefined") {
            window.scroll({ top: 0, behavior: "smooth" });
        }
    };

    // กดเมนู (ทั้งเดสก์ท็อป & มือถือ) ให้ scroll ไป section
    const handleNavClick = (href: string) => (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setMenuOpen(false);

        if (typeof document !== "undefined") {
            const el = document.querySelector(href);
            if (el) {
                (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    // ปิดเมนูเมื่อคลิกนอกกล่องเมนู
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent | globalThis.MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, []);

    return (
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
                {/* โลโก้ / ชื่อเว็บ */}
                <button onClick={handleScrollTop} className="text-lg font-bold tracking-tight">
                    SweetHome <span className="text-sky-500">.dev</span>
                </button>

                {/* เมนูปกติบนหน้าจอใหญ่ */}
                <nav className="hidden gap-6 text-sm text-gray-600 md:flex">
                    {navLinks.map((item) => (
                        <button
                            key={item.href}
                            onClick={handleNavClick(item.href)}
                            className="hover:text-black transition-colors">
                            {item.label}
                        </button>
                    ))}
                </nav>

                { /* mobile nav */ }
                <div
                    ref={menuRef}
                    className="relative md:hidden"
                    onMouseEnter={() => setMenuOpen(true)}
                >
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm"
                        aria-label="Open navigatiion menu"
                    >
                        <HiOutlineMenu className="h-5 w-5 text-gray-700" />
                    </button>

                    {/* dropdown เมนู */}
                    <div
                        className={`absolute right-0 mt-2 w-40 rounded-xl border border-gray-200 bg-white shadow-lg shadow-gray-300/40
                            origin-top-right transform transition-all duration-200
                            ${
                                menuOpen ? "scale-100 opacity-100"
                                : "pointer-events-none scale-95 opacity-0"
                            }`}
                    >
                        <nav className="flex flex-col py-2">
                            {navLinks.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={handleNavClick(item.href)}
                                    className="px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}