const projects = [
  {
    title: "Expense Tracker",
    description:
      "เว็บบันทึกรายรับรายจ่ายส่วนตัว มีหมวดหมู่ และหน้ารายงานสรุปยอด ใช้ Next.js + PostgreSQL.",
    stack: ["Next.js", "Tailwind CSS", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Task Management / To-Do",
    description:
      "ระบบจัดการงานพร้อม Dashboard, สถานะงาน และแยก Role ระหว่าง Admin / User.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "MongoDB"],
  },
];

export default function ProjectsSection() {
  return (
    <>
      <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase">
        Projects
      </p>
      <h2 className="mb-6 text-xl md:text-3xl font-semibold">Selected work</h2>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-gray-200/80 bg-white px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
            <p className="mb-3 text-sm text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-300 px-3 py-1 text-[11px] text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
