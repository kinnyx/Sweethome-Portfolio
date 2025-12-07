import Image from "next/image";

export default function HeroImage() {
    return (
        <div className="relative h-full w-full">
            <Image 
                src="/profile.jpg"
                alt="Kin"
                fill
                priority
                className="object-cover object-center"
            />
        </div>
    )
}