export default function ContactSection() {
  return (
    <>
      <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase">
        Contact
      </p>
      <h2 className="mb-4 text-2xl md:text-3xl font-semibold">
        Let&apos;s work together
      </h2>
      <p className="mb-6 text-gray-600 leading-relaxed">
        ถ้าสนใจให้ผมช่วยดูโปรเจกต์, หรือสร้างเว็บด้วย Next.js / Tailwind
        สามารถติดต่อผมได้ทางอีเมล หรือช่องทางด้านล่างนี้
      </p>

      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium text-gray-800">Email: </span>
          <a href="mailto:kin1@windowslive.com" className="">
            kin1@windowslive.com
          </a>
        </div>
        <div>
          <span className="font-medium text-gray-800">GitHub: </span>
          <a
            href="https://github.com/kinnyx"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://github.com/kinnyx
          </a>
        </div>
      </div>
    </>
  );
}
