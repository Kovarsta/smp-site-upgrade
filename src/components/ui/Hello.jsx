import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import {
    Wrench,
    Users,
    Shield,
    Zap,
    LucideCakeSlice,
} from "lucide-react";

const Hello = () => {
    return (
        <>
            <Card className="bg-neutral-800/70 backdrop-blur-sm border-neutral-700">
                <CardContent className="p-5 space-y-2">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2 text-neutral-100">
                            <LucideCakeSlice className="w-7 h-7 text-blue-400" />
                            Welcome to the SMP!
                        </h2>
                        <p className="text-neutral-400 leading-relaxed">
                            This server runs on Fabric with a mix of performance mods
                            and vanilla-plus datapacks to enhance the survival
                            experience without straying too far from vanilla.
                        </p>
                    </div>

                    <div className="border-t border-neutral-700 pt-2">
                        <h3 className="text-xl font-semibold mb-3 text-blue-400">
                            Server Information
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-neutral-900/50 rounded-lg p-4">
                                <p className="text-neutral-400 mb-1">
                                    Minecraft Version
                                </p>
                                <p className="text-neutral-100 font-semibold">
                                    1.21.11
                                </p>
                            </div>
                            <div className="bg-neutral-900/50 rounded-lg p-4">
                                <p className="text-neutral-400 mb-1">Server IP</p>
                                <p className="text-neutral-100 font-semibold">
                                    minecraft.kovarsta.com
                                </p>
                            </div>
                            <div className="bg-neutral-900/50 rounded-lg p-4">
                                <p className="text-neutral-400 mb-1">Difficulty</p>
                                <p className="text-neutral-100 font-semibold">Hard</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-neutral-700 pt-3">
                        <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            Server Commands
                        </h3>

                        <div className="bg-neutral-900/50 rounded-lg p-4 text-sm font-mono space-y-1">
                            <p className="pt-2 text-xs uppercase tracking-wide text-neutral-500">
                                GENERAL COMMANDS
                            </p>

                            <p>
                                <span className="text-emerald-400">/sit</span>
                                <span className="text-neutral-400">
                                    {" "}
                                    – Sit anywhere on command
                                </span>
                            </p>

                            <p>
                                <span className="text-emerald-400">/crawl</span>
                                <span className="text-neutral-400">
                                    {" "}
                                    – Crawl anywhere on command
                                </span>
                            </p>

                            <p>
                                <span className="text-emerald-400">/trigger color</span>
                                <span className="text-neutral-400">
                                    {" "}
                                    – Change your username color by selecting a color in
                                    chat.
                                </span>
                            </p>

                            <p className="pt-2 text-xs uppercase tracking-wide text-neutral-500">
                                IMAGE TO MAPS
                            </p>

                            <p>
                                <span className="text-emerald-400">
                                    /image2map create &lt;WIDTH&gt; &lt;HEIGHT&gt;
                                    &lt;[dither/none]&gt; &lt;URL&gt;
                                </span>
                                <span className="text-neutral-400">
                                    {" "}
                                    – Creates map of specified size (128×128 per map),
                                    with or without dithering
                                </span>
                            </p>

                            <p>
                                <span className="text-emerald-400">
                                    /image2map create &lt;[dither/none]&gt; &lt;URL&gt;
                                </span>
                                <span className="text-neutral-400">
                                    {" "}
                                    – Creates map using default size
                                </span>
                            </p>

                            <p>
                                <span className="text-emerald-400">
                                    /image2map preview &lt;URL&gt;
                                </span>
                                <span className="text-neutral-400">
                                    {" "}
                                    – Creates a dynamic preview before saving
                                </span>
                            </p>

                            <p className="pt-2 text-xs uppercase tracking-wide text-neutral-500">
                                Commands in preview mode
                            </p>

                            <div className="pl-4 space-y-1">
                                <p>
                                    <span className="text-emerald-400">
                                        /dither &lt;[dither/none]&gt;
                                    </span>
                                    <span className="text-neutral-400">
                                        {" "}
                                        – Changes dither mode
                                    </span>
                                </p>

                                <p>
                                    <span className="text-emerald-400">/size</span>
                                    <span className="text-neutral-400">
                                        {" "}
                                        – Displays current size
                                    </span>
                                </p>

                                <p>
                                    <span className="text-emerald-400">
                                        /size &lt;WIDTH&gt; &lt;HEIGHT&gt;
                                    </span>
                                    <span className="text-neutral-400">
                                        {" "}
                                        – Changes map size (128×128 per map)
                                    </span>
                                </p>

                                <p>
                                    <span className="text-emerald-400">/grid</span>
                                    <span className="text-neutral-400">
                                        {" "}
                                        – Toggles map grid visibility
                                    </span>
                                </p>

                                <p>
                                    <span className="text-emerald-400">/save</span>
                                    <span className="text-neutral-400">
                                        {" "}
                                        – Exits preview and saves map
                                    </span>
                                </p>

                                <p>
                                    <span className="text-emerald-400">/exit</span>
                                    <span className="text-neutral-400">
                                        {" "}
                                        – Exits preview without saving
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border-indigo-500/30">
                <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-indigo-500/20 rounded-lg border border-indigo-500/30 shrink-0">
                            <Users className="w-6 h-6 text-indigo-300" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-neutral-100">
                                Voice Chat Enabled
                            </h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                We support and recommend{" "}
                                <span className="font-semibold text-indigo-300">
                                    <a href="https://modrinth.com/plugin/simple-voice-chat">
                                        Simple Voice Chat
                                    </a>
                                </span>{" "}
                                Fabric mod for proximity-based voice communication. Talk
                                to nearby players naturally with 3D positional audio.
                                The mod is optional to enhance the multiplayer
                                experience significantly.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-neutral-800/70 backdrop-blur-sm border-neutral-700">
                <CardContent className="p-5 space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-neutral-100">
                            <Shield className="w-6 h-6 text-purple-400" />
                            Community Guidelines
                        </h2>
                        <p className="text-neutral-300 leading-relaxed mb-6">
                            Simple rules to keep the server fun and fair for everyone.
                            Breaking these rules may result in warnings or temporary
                            bans.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 shrink-0 mt-1">
                                    <Users className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-neutral-100 mb-1">
                                        Respect Other Players
                                    </h4>
                                    <p className="text-neutral-300 text-sm">
                                        No griefing, stealing, or destroying others' builds
                                        without permission. PvP must be consensual. Pranks
                                        are allowed but should be harmless and fun.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 shrink-0 mt-1">
                                    <Wrench className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-neutral-100 mb-1">
                                        Build Responsibly
                                    </h4>
                                    <p className="text-neutral-300 text-sm">
                                        Keep spawn area clean and organized. Clean up
                                        temporary structures and resource gathering sites.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 shrink-0 mt-1">
                                    <Zap className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-neutral-100 mb-1">
                                        Server Resources
                                    </h4>
                                    <p className="text-neutral-300 text-sm">
                                        No lag machines or excessive redstone contraptions
                                        near spawn.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 shrink-0 mt-1">
                                    <LucideCakeSlice className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-neutral-100 mb-1">
                                        Have Fun
                                    </h4>
                                    <p className="text-neutral-300 text-sm">
                                        This is a casual, friendly server. Play fair, be
                                        respectful, and enjoy the game with others!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-neutral-700 pt-6">
                        <h3 className="text-xl font-semibold mb-4 text-amber-400">
                            Bannable Offenses
                        </h3>
                        <ul className="space-y-2 text-neutral-300 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-400 mt-1">•</span>
                                <span>
                                    Intentional griefing, stealing, or destroying other
                                    players' builds and belongings
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-400 mt-1">•</span>
                                <span>
                                    Harassment, hate speech, or making other players feel
                                    unwelcome
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-400 mt-1">•</span>
                                <span>
                                    Intentionally lagging the server or using exploits
                                    after being warned
                                </span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export { Hello };
