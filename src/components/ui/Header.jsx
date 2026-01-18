import {
    Scroll,
} from "lucide-react";


const Header = () => {
    return (
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-5">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <Scroll className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        LOREM SMP
                    </h1>
                    <p className="text-neutral-300 text-lg mt-1">
                        Running Minecraft 1.21.11
                    </p>
                </div>
            </div>
            <p className="text-neutral-300 text-lg max-w-5xl">
                A curated survival experience with performance mods, quality-of-life improvements, and vanilla-plus gameplay enhancements.
            </p>
        </header>

    )
};

export { Header }
