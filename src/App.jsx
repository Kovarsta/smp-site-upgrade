import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Scroll,
  Wrench,
  Users,
  Shield,
  Zap,
  Globe,
  LucideCakeSlice,
} from "lucide-react";

export default function SMPInfoSite() {
  const mods = [
    {
      name: "Fabric API",
      category: "Core",
      type: "Server-side",
      description:
        "Foundation mod required for all other Fabric mods to function. Provides essential hooks and APIs for mod development.",
    },
    {
      name: "Almanac",
      category: "Library",
      type: "Server-side",
      description: "Library mod for Let Me Despawn.",
    },
    {
      name: "Let Me Despawn",
      category: "Performance",
      type: "Server-side",
      description:
        "Improves performance by tweaking mob despawn rules. Say bye to pesky unintentional persistent mobs.",
    },
    {
      name: "Always Shield",
      category: "Gameplay",
      type: "Server-side",
      description:
        "Removes the obnoxious block delay of the shield, so it works the moment you press Right-Click. No more delay and confusion",
    },
    {
      name: "Simple Voice Chat",
      category: "Social",
      type: "Optional Client",
      description:
        "Proximity-based voice chat with 3D positional audio. Players can talk to nearby players naturally. Works even if some players don't install it.",
    },
    {
      name: "Lithium",
      category: "Performance",
      type: "Server-side",
      description: "No-compromises game logic optimization mod.",
    },
    {
      name: "Balm",
      category: "Library",
      type: "Server-side",
      description: "Abstraction Layer for Multi-Loader Mods",
    },
    {
      name: "LithoStitched",
      category: "Library",
      type: "Server-side",
      description:
        "Library mod with new configurability and compatibility enhancements for worldgen",
    },
    {
      name: "Banner Hats",
      category: "Cosmetic",
      type: "Server-Side",
      description:
        "Make banners wearable in the helmet slot, just like for pillagers",
    },
    {
      name: "LuckPerms",
      category: "Admin",
      type: "Server-side",
      description: "A permissions plugin/mod for Minecraft servers.",
    },
    {
      name: "Collective",
      category: "Library",
      type: "Server-side",
      description: "Library with common code.",
    },
    {
      name: "Moonrise",
      category: "Performance",
      type: "Server-side",
      description: "Optimisation mod for the dedicated/integrated server.",
    },
    {
      name: "Disable Dimensions",
      category: "Admin",
      type: "Server-side",
      description:
        "A hard-to-break, grief-resistant solution for preventing players from entering The End.",
    },
    {
      name: "No Chat Reports",
      category: "Social",
      type: "Server-side",
      description: "Makes chat unreportable",
    },
    {
      name: "EasyAuth",
      category: "Utility",
      type: "Server-side",
      description: "Authentication mod for Fabric servers",
    },
    {
      name: "EasyWhitelist",
      category: "Utility",
      type: "Server-side",
      description: "Name-based whitelist for Fabric servers",
    },
    {
      name: "Fabric language Kotlin",
      category: "Core",
      type: "Server-Side",
      description:
        "Enables usage of the Kotlin programming language for Fabric mods.",
    },
    {
      name: "Serversleep",
      category: "Utility",
      type: "Server-side",
      description: "Changes playersSleepingPercentage to 1%",
    },
    {
      name: "Servercore",
      category: "Performance",
      type: "Server-side",
      description: "A mod that aims to optimize the minecraft server.",
    },
    {
      name: "fabric permissions",
      category: "Library",
      type: "Server-side",
      description: "A simple permissions API for Fabric.",
    },
    {
      name: "Spark",
      category: "Admin",
      type: "Server-side",
      description:
        "Performance profiler for Minecraft clients, servers and proxies.",
    },
    {
      name: "Polymer",
      category: "Library",
      type: "Server-side",
      description: "Library for creating better server side content!",
    },
    {
      name: "Fast Backups",
      category: "Utility",
      type: "Server-side",
      description: "Fast, incremental world backups powered by Git. ",
    },
    {
      name: "Tectonic",
      category: "World Generation",
      type: "Server-side",
      description:
        "Terrain shaping brought to new heights, grander and more varied than ever before!",
    },
    {
      name: "FerriteCore",
      category: "Performance",
      type: "Server-side",
      description: "Memory usage optimizations",
    },
    {
      name: "Tree Harvester",
      category: "Utility",
      type: "Server-side",
      description:
        "Harvest full trees and huge mushrooms instantly with an axe. Shift+right-click the base block of a tree to fell the entire tree at once.",
    },
    {
      name: "Fsit",
      category: "Social",
      type: "Server-side",
      description: "Sit anywhere! Enter /sit or /crawl",
    },
    {
      name: "Voice Chat Interaction",
      category: "Gameplay",
      type: "Server-side",
      description: "Voice chat skulk sensor activation and warden detection",
    },
    {
      name: "Image2Map",
      category: "Cosmetic",
      type: "Server-side",
      description:
        "Turn images into maps! Visit the modpage to see usage instructions.",
    },
    {
      name: "Krypton",
      category: "Performance",
      type: "Server-side",
      description: "A mod to optimize the Minecraft networking stack",
    },
    {
      name: "Welcome Message",
      category: "Social",
      type: "Server-side",
      description:
        "Easy to configure welcome messages for server players logging in with URL support.",
    },
    {
      name: "Ledger",
      category: "Admin",
      type: "Server-side",
      description: "Comprehensive logging system for Fabric servers",
    },
    {
      name: "Simple Voice Chat Enhanced groups",
      category: "Social",
      type: "Server-side",
      description:
        "Provides useful commands and features to Simple Voice Chat groups.",
      isNew: true,
    },
    {
      name: "Skin Shuffle",
      category: "Social",
      type: "Optional Client",
      description: "Allows changing skins withouht leaving the server",
      isNew: true,
    },
    {
      name: "SpeedyGhast",
      category: "Gameplay",
      type: "Server-side",
      description: "Faster Happy Ghast Flight with Soul Speed Boots",
      isNew: true,
    },
  ];

  const datapacks = [
    {
      name: "Age Lock",
      category: "Cosmetic",
      type: "Function",
      description:
        "Adds the ability to lock a mob's age using a name tag. 'Age lock'; 'age lock'; 'age_lock' are all acceptable names.",
    },
    {
      name: "Armor statues",
      category: "Cosmetic",
      type: "Function",
      description:
        "Adds a unique book that allows you to alter the properties of armor stands in survival. Simply sign the book and quill title to 'Statues' and use it on an armor stand to toggle its properties.",
    },
    {
      name: "Mini blocks",
      category: "Cosmetic",
      type: "Building",
      description:
        "Use a stonecutter to craft certain blocks into mini blocks (heads textured like blocks).",
    },
    {
      name: "Blasting Plus",
      category: "Quality of Life",
      type: "Crafting",
      description:
        "Makes various items and blocks smeltable in the Blast Furnace for faster smelting.",
    },
    {
      name: "More effective tools",
      category: "Quality of Life",
      type: "Gameplay",
      description:
        "Sets an effective tool for blocks that annoyingly don't have one (e.g. pickaxe for glass, axe for cactus). This excludes blocks specifically intended to have no effective tool (e.g. powder snow, reinforced deepslate, vault).",
    },
    {
      name: "Decorative Player Heads",
      category: "Cosmetic",
      type: "Building",
      description:
        "Craft decorative player heads using common material, and rename it to a player's username to apply their skin texture.",
    },
    {
      name: "Builder's Wand",
      category: "Quality of Life",
      type: "Building",
      description:
        "Craft Builder's Wand heads using diamonds, amethysts, and a brush. With a block on your offhand and wand in main hand, right-click to place multiples of that blocks at once.",
    },
    {
      name: "Double Shulker shell",
      category: "Gameplay",
      type: "Loot",
      description: "Makes all shulkers drops two shells instead of one.",
    },
    {
      name: "Name Colors",
      category: "Cosmetic",
      type: "Function",
      description:
        "Enter '/trigger color' to list the colors in chat and select your desired username color.",
    },
    {
      name: "Ender Chest Always Drops",
      category: "Quality of Life",
      type: "Gameplay",
      description:
        "Ender Chests always drop when broken, even without silk touch.",
    },
    {
      name: "Silence Mobs",
      category: "Cosmetic",
      type: "Function",
      description:
        "Adds the ability to lock a mob's age using a name tag. 'Silence me'; 'silence me'; 'silence_me' are all acceptable names.",
    },
    {
      name: "fast leaf decay",
      category: "Quality of Life",
      type: "Gameplay",
      description:
        "Leaves decay much faster when trees are mined in survival mode.",
    },
    {
      name: "Silk Touch budding amethyst",
      category: "Quality of Life",
      type: "Building",
      description:
        "Lets you collect budding amethyst using a silk touch pickaxe.",
    },
    {
      name: "Glass Always Drops",
      category: "Quality of Life",
      type: "Building",
      description: "Makes all types of glass drop without silk touch.",
    },
    {
      name: "Smoking Plus",
      category: "Quality of Life",
      type: "Crafting",
      description:
        "Makes various items and blocks smeltable in the Smoker for faster smelting.",
    },
    {
      name: "Blossoming Pots",
      category: "Cosmetic",
      type: "Building",
      description:
        "Greatly expands the selection of potable plants. Allows the use of Decorated Pots as abnormally large Flower Pots.",
    },
    {
      name: "Unlock all Recipes",
      category: "Quality of Life",
      type: "Gameplay",
      description: "Automaticall unlocks all crafting recipes.",
    },
    {
      name: "Lively Lily Pads",
      category: "Cosmetic",
      type: "Building",
      description: "Place decorations on lily pads!",
    },
    {
      name: "Crafting Tweaks",
      category: "Quality of Life",
      type: "Crafting",
      description:
        "Slabs/Stairs back to blocks, Powder to glass, Blackstone as cobblestone, More shapeless recipes, Universal dyeing, Sandstone dyeing, Coal/charcoal to black dye, Copper powered rails, Cook flesh to leather, Dropper to dispenser, Block to 2 slabs, Craftablility (notch apples, gravel, blackstone), Unpackable blocks",
    },
    {
      name: "Kill Empty Boats",
      category: "Management",
      type: "Utility",
      description:
        "Adds a function for admins to kill all boats without passengers.",
    },
    {
      name: "Happy Ghast Stopper",
      category: "Gameplay",
      type: "Utility",
      isNew: true,
      description:
        "Rename a ghast harness to `STOP` to disallow happy ghast roaming.",
    },
    {
      name: "Oxidize Copper",
      category: "Gameplay",
      type: "Utility",
      isNew: true,
      description:
        "Quickly oxidize copper blocks using splash thick potions. A great utility to facilitate your building.",
    },
    {
      name: "Sniffy Sand",
      category: "Gameplay",
      type: "Utility",
      isNew: true,
      description:
        "Makes sand, red sand and dead bushes renewable by having Sniffers on sand.",
    },
    {
      name: "Trek",
      category: "Gameplay",
      type: "World-gen",
      isNew: true,
      description:
        "Adds over 150 custom structures across biomes to enhance exploration.",
    },

    // {
    //   name: "",
    //   category: "",
    //   type: "",
    //   description: ""
    // },
  ];

  const rules = [];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
      <div className="fixed inset-0 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative w-full">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <Scroll className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Lorem Ipsum SMP
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
            <TabsList className="mb-5 bg-neutral-800/80 backdrop-blur-md border border-neutral-700 p-1.5 rounded-xl shadow-lg">
              <TabsTrigger
                value="about"
                className="rounded-lg px-6 py-1 text-sm font-medium transition-all data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-blue-300 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-blue-500/30 data-[state=inactive]:text-neutral-400 data-[state=inactive]:hover:text-neutral-200 data-[state=inactive]:hover:bg-neutral-700/50"
              >
                Getting Started
              </TabsTrigger>
              <TabsTrigger
                value="mods"
                className="rounded-lg px-6 py-1 text-sm font-medium transition-all data-[state=active]:bg-gradient-to-br data-[state=active]:from-emerald-500/20 data-[state=active]:to-emerald-600/20 data-[state=active]:text-emerald-300 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-emerald-500/30 data-[state=inactive]:text-neutral-400 data-[state=inactive]:hover:text-neutral-200 data-[state=inactive]:hover:bg-neutral-700/50"
              >
                Server Mods ({mods.length})
              </TabsTrigger>
              <TabsTrigger
                value="datapacks"
                className="rounded-lg px-6 py-1 text-sm font-medium transition-all data-[state=active]:bg-gradient-to-br data-[state=active]:from-cyan-500/20 data-[state=active]:to-cyan-600/20 data-[state=active]:text-cyan-300 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-cyan-500/30 data-[state=inactive]:text-neutral-400 data-[state=inactive]:hover:text-neutral-200 data-[state=inactive]:hover:bg-neutral-700/50"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mods.map((mod, idx) => (
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {datapacks.map((pack, idx) => (
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

            <TabsContent value="client-mods" className="space-y-6">
              <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-neutral-100">
                  <Shield className="w-6 h-6 text-purple-400" />
                  Community Guidelines
                </h2>
                <p className="text-neutral-300">
                  Simple rules to keep the server fun and fair for everyone.
                  Breaking these rules may result in warnings or temporary bans.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rules.map((rule, idx) => {
                  const Icon = rule.icon;
                  return (
                    <Card
                      key={idx}
                      className="bg-neutral-800/70 backdrop-blur-sm border-neutral-700 hover:border-purple-500/50 hover:bg-neutral-800/90 transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 shrink-0">
                            <Icon className="w-6 h-6 text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-3 text-neutral-100">
                              {rule.title}
                            </h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                              {rule.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="bg-neutral-800/70 backdrop-blur-sm border-neutral-700 mt-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-400">
                    Bannable Offenses
                  </h3>
                  <ul className="space-y-2 text-neutral-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>
                        Using hacked clients, x-ray resource packs, or any
                        unauthorized mods that give unfair advantages
                      </span>
                    </li>
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
                        Intentionally lagging the server or using exploits after
                        being warned
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
