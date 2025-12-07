import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

export default function HeroSection() {
    return(
        <div className="grid h-[calc(100vh-3.5rem)] md:grid-cols-2 ">
            {/* ซ้าย: รูปใหญ่ */}
            <div className="relative h-full">
                <HeroImage />
            </div>
            {/* ขวา: ข้อความ */}
            <div className="flex h-full items-center justify-center px-6">
                <HeroContent />
            </div>
        </div>
    )
}