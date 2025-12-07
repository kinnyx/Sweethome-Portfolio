import type { IconType } from "react-icons";
import { FaDatabase, FaCubes } from "react-icons/fa";
import {
  SiSharp,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const coreSkills: { name: string; icon: IconType; color: string } [] = [
  {
    name: "Microsoft SQL Server",
    icon: FaDatabase,
    color: "text-red-600",
  },
  {
    name: "C# (.NET)",
    icon: SiSharp,
    color: "text-purple-600",
  },
  {
    name: "DevExpress",
    icon: FaCubes,
    color: "text-amber-600",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-gray-900",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-500",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-emerald-600",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-sky-700",
  },
];

export default function AboutSection() {
  return (
    <>
      <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase">
        About
      </p>
      <h2 className="mb-4 text-2xl md:text-3xl font-semibold">
        A bit about me
      </h2>
      <p className="mb-4 text-gray-600 leading-relaxed">
        ผมชื่อ Kin ทำงานกับระบบ Enterprise ที่ใช้ Microsoft SQL Server, C#,
        DevExpress และมีประสบการณ์ในการออกแบบ Dashboard / Report
        รวมถึงพัฒนาเว็บสมัยใหม่ด้วย Next.js, Tailwind CSS, MongoDB และ
        PostgreSQL เพื่อเชื่อมโลกของระบบหลังบ้านกับ UI ที่ใช้งานง่ายและสวยงาม
      </p>
      <p className="text-gray-600 leading-relaxed">
        เป้าหมายของผมคือสร้างเว็บที่{" "}
        <span className="font-bold">เร็ว, ใช้งานง่าย และดูเป็นมืออาชีพ</span>{" "}
        ไม่ว่าจะเป็น Dashboard ภายในองค์กร หรือเว็บส่วนตัว/เว็บลูกค้า
      </p>

      {/* บล็อก skill icons */}
      <div className="mt-8">
        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-gray-500">
          Core Stack
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coreSkills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/70 px-3 py-2 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
                <Icon className={`text-xl ${color}`}/>
              </span>
              <span className="text-sm font-medium text-gray-800">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
