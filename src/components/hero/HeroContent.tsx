import Typewriter from "../ui/Typewriter";

const heroTags = ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"];

export default function HeroContent() {
    return(
        <div className="flex items-center justify-center px-6 py-10">
            <div className="max-w-md">
                <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase">
                    Portfolio
                </p>

                <p className="mb-5 text-base text-gray-800 leading-relaxed">
                    A developer passionate about building beautiful, user-friendly, and fast
                    websites. Skilled in{" "}
                    <span className="font-semibold">
                        <Typewriter 
                            words={["Next.js", "TypeScript", "Tailwind CSS", "Node.js"]}
                            typingSpeed={90}
                            deletingSpeed={50}
                            pauseTime={900}
                        />
                    </span>
                    |
                </p>

                <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center rounded-full border border-gray-400 px-6 py-2 text-sm hover:bg-black hover:text-white transition">
                    Contact Me
                </a>

                <div className="mt-6 flex flex-wrap gap-3">
                    {heroTags.map((tag) => (
                        <span key={tag} className="rounded-full border border-gray-400 px-4 py-1 text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}