export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-10 max-w-5xl items-center justify-between px-4 text-xs text-gray-500">
                <span>
                    © {new Date().getFullYear()} SweetHome. All rights reserved.
                </span>
                <span className="hidden sm:inline">
                    |||
                </span>
            </div>
        </footer>
    )
}