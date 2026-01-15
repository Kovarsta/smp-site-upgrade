import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import mods from "@/assets/modList.js";
import datapacks from "@/assets/datapackList.js";  
import {
  Scroll,
  Wrench,
  Users,
  Shield,
  Zap,
  Globe,
  LucideCakeSlice,
} from "lucide-react";
import { useState, useMemo } from "react";
import TabTriggerBar from "./components/ui/TabTriggerBar";

function filterAndSort(items, search, sortKey) {
  return items
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortKey === "new") {
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      }
      return a[sortKey].localeCompare(b[sortKey]);
    });
}

export default function SMPInfoSite() {
  const [modSearch, setModSearch] = useState("");
  const [modSort, setModSort] = useState("name");

  const [datapackSearch, setDatapackSearch] = useState("");
  const [datapackSort, setDatapackSort] = useState("name");
  const rules = [];

  const filteredMods = useMemo(
    () => filterAndSort(mods, modSearch, modSort),
    [mods, modSearch, modSort]
  );

  const filteredDatapacks = useMemo(
    () => filterAndSort(datapacks, datapackSearch, datapackSort),
    [datapacks, datapackSearch, datapackSort]
  );

    const tabType = {
        ABOUT : "about",
        MODS : "mods",
        DATAPACKS : "datapacks",
    }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
      <div className="relative w-full">
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
            A curated survival experience with performance mods, quality-of-life
            improvements, and vanilla-plus gameplay enhancements.
          </p>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4 pb-20">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="flex flex-col gap-3 h-auto sm:flex-row mb-5 bg-neutral-800/80 backdrop-blur-md border border-neutral-700 p-1.5 rounded-xl shadow-lg">
            <TabTriggerBar tabType={tabType.MODS} text={tabType.MODS}/>
                

              <TabsTrigger
                value={tabType.ABOUT}
                className="w-full rounded-lg px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-blue-300 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-blue-500/30 data-[state=inactive]:text-neutral-400 data-[state=inactive]:hover:text-neutral-200 data-[state=inactive]:hover:bg-neutral-700/50"
              >
                Getting Started
              </TabsTrigger>
              <TabsTrigger
                value={tabType.MODS}
                className="w-full rounded-lg px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-gradient-to-br data-[state=active]:from-emerald-500/20 data-[state=active]:to-emerald-600/20 data-[state=active]:text-emerald-300 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-emerald-500/30 data-[state=inactive]:text-neutral-400 data-[state=inactive]:hover:text-neutral-200 data-[state=inactive]:hover:bg-neutral-700/50"
              >
                Server Mods ({mods.length})
              </TabsTrigger>
              <TabsTrigger
                value={tabType.DATAPACKS}
                className="w-full rounded-lg px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-gradient-to-br data-[state=active]:from-cyan-500/20 data-[state=active]:to-cyan-600/20 data-[state=active]:text-cyan-300 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-cyan-500/30 data-[state=inactive]:text-neutral-400 data-[state=inactive]:hover:text-neutral-200 data-[state=inactive]:hover:bg-neutral-700/50"
              >
                Datapacks ({datapacks.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mods" className="space-y-">
              <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-3 mb-8">
                <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-neutral-100">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  Server Mods
                </h2>
                <p className="text-neutral-300">
                  These mods run on the server and enhance performance,
                  gameplay, and functionality. They're server-side only and
                  don't require client installation.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-3 mb-6">
                <input
                  type="text"
                  placeholder="Search mods..."
                  value={modSearch}
                  onChange={(e) => setModSearch(e.target.value)}
                  className="flex-1 bg-neutral-900/60 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500/50"
                />

                <select
                  value={modSort}
                  onChange={(e) => setModSort(e.target.value)}
                  className="bg-neutral-900/60 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-100 focus:outline-none focus:border-emerald-500/50"
                >
                  <option value="name">Sort by name</option>
                  <option value="category">Sort by category</option>
                  <option value="type">Sort by type</option>
                  <option value="new">Newest first</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMods.map((mod, idx) => (
                  <Card
                    key={idx}
                    className="relative bg-neutral-800/70 backdrop-blur-sm border-neutral-700 hover:border-emerald-500/50 hover:bg-neutral-800/90 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      {mod.isNew && (
                        <div className="absolute top-3 right-3 bg-emerald-500/20 border border-emerald-500/30 rounded px-1.5 py-0.5">
                          <span className="text-emerald-300 text-xs font-bold">
                            NEW
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-3 text-neutral-100">
                        {mod.name}
                      </h3>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                          {mod.category}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-neutral-700/50 text-neutral-200 border-neutral-600"
                        >
                          {mod.type}
                        </Badge>
                      </div>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {mod.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="datapacks" className="space-y-6">
              <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-4 mb-8 space-y-2">
                <h2 className="text-2xl font-semibold flex items-center gap-2 text-neutral-100">
                  <Scroll className="w-6 h-6 text-cyan-400" />
                  Custom Datapacks
                </h2>

                <p className="text-neutral-300">
                  Vanilla-friendly gameplay enhancements using Minecraft's
                  built-in datapack system. These modify recipes, loot tables,
                  and add custom functions.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-3 mb-6">
                <input
                  type="text"
                  placeholder="Search datapacks..."
                  value={datapackSearch}
                  onChange={(e) => setDatapackSearch(e.target.value)}
                  className="flex-1 bg-neutral-900/60 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50"
                />

                <select
                  value={datapackSort}
                  onChange={(e) => setDatapackSort(e.target.value)}
                  className="bg-neutral-900/60 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-100 focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="name">Sort by name</option>
                  <option value="category">Sort by category</option>
                  <option value="type">Sort by type</option>
                  <option value="new">Newest first</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDatapacks.map((pack, idx) => (
                  <Card
                    key={idx}
                    className="relative bg-neutral-800/70 backdrop-blur-sm border-neutral-700 hover:border-cyan-500/50 hover:bg-neutral-800/90 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      {pack.isNew && (
                        <div className="absolute top-3 right-3 bg-cyan-500/20 border border-cyan-500/30 rounded px-1.5 py-0.5">
                          <span
                            title="New datapack"
                            className="text-cyan-300 text-xs font-bold"
                          >
                            NEW
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-3 text-neutral-100">
                        {pack.name}
                      </h3>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                          {pack.category}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-neutral-700/50 text-neutral-200 border-neutral-600"
                        >
                          {pack.type}
                        </Badge>
                      </div>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {pack.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about" className="space-y-6">
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
            </TabsContent>
          </Tabs>
        </main>

        <footer className="border-t border-neutral-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-neutral-400 text-sm text-center">
              Questions or suggestions? Contact the server admins on Discord
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
