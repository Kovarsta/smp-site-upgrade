import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Scroll, Wrench, Users, Shield, Zap, Globe } from "lucide-react";

export default function SMPInfoSite() {
  const mods = [
    {
      name: "Fabric API",
      category: "Core",
      type: "Required",
      description: "Foundation mod required for all other Fabric mods to function. Provides essential hooks and APIs for mod development."
    },
    {
      name: "Lithium",
      category: "Performance",
      type: "Server-side",
      description: "Optimizes game physics, mob AI, and chunk loading without changing vanilla mechanics. Significantly improves server TPS and reduces lag."
    },
    {
      name: "Starlight",
      category: "Performance",
      type: "Server-side",
      description: "Completely rewrites the lighting engine for massive performance gains. Fixes lighting bugs and makes chunk generation much faster."
    },
    {
      name: "Polymer",
      category: "Content",
      type: "Server-side",
      description: "Allows server-side custom items and blocks visible to vanilla clients using resource pack tricks. No client mod required for custom content."
    },
    {
      name: "Simple Voice Chat",
      category: "Social",
      type: "Optional Client",
      description: "Proximity-based voice chat with 3D positional audio. Players can talk to nearby players naturally. Works even if some players don't install it."
    },
    {
      name: "Lootr",
      category: "Gameplay",
      type: "Both sides",
      description: "Gives each player their own loot in chests, preventing chest camping and making dungeon exploration fairer for everyone."
    },
    {
      name: "Universal Graves",
      category: "Quality of Life",
      type: "Server-side",
      description: "Creates a grave block when you die that stores all your items safely. Prevents item despawning and protects against lava/void deaths."
    },
    {
      name: "Chunky",
      category: "Admin",
      type: "Server-side",
      description: "Pre-generates world chunks to reduce lag from exploration. Used by admins to prepare spawn areas and popular regions."
    }
  ];

  const datapacks = [
    {
      name: "Multiplayer Sleep",
      category: "Quality of Life",
      type: "Command-based",
      description: "Only requires a percentage of online players to sleep to skip the night. Default set to 50%. Prevents one player from keeping everyone awake."
    },
    {
      name: "Player Heads",
      category: "Vanilla+",
      type: "Loot table",
      description: "Players drop their head on death with a small chance. Heads can be collected and displayed as trophies or used for decoration."
    },
    {
      name: "AFK Display",
      category: "Social",
      type: "Command-based",
      description: "Shows [AFK] tag next to player names in tab list after 5 minutes of inactivity. Helps others know who's actually playing."
    },
    {
      name: "Armored Elytra",
      category: "Gameplay",
      type: "Crafting",
      description: "Combine elytra with any chestplate in a smithing table to get both armor protection and flight. Balanced for late-game exploration."
    },
    {
      name: "Coordinates HUD",
      category: "Quality of Life",
      type: "Action bar",
      description: "Displays coordinates in action bar with a simple command toggle. Easier than pressing F3 constantly while exploring."
    },
    {
      name: "Home & Spawn",
      category: "Teleportation",
      type: "Command-based",
      description: "Set personal home points with /sethome and teleport back with /home. Includes 10-second warmup and cooldown to prevent abuse in combat."
    },
    {
      name: "Dungeon Loot+",
      category: "Vanilla+",
      type: "Loot table",
      description: "Enhanced loot tables for dungeons, mineshafts, and temples. Adds rare enchanted books, unique items, and better treasure without being overpowered."
    },
    {
      name: "Custom Crafting",
      category: "Crafting",
      type: "Recipe",
      description: "Adds recipes for previously uncraftable items like horse armor, name tags, and saddles. Makes renewable resources more accessible."
    },
    {
      name: "Dragon Drops",
      category: "Gameplay",
      type: "Loot table",
      description: "Ender Dragon drops an elytra and dragon head on death. Makes elytra renewable and rewards repeated dragon fights in the End."
    },
    {
      name: "Wandering Trades",
      category: "Vanilla+",
      type: "Trade table",
      description: "Expanded wandering trader with useful trades including coral, saplings from other biomes, and occasional rare items like spore blossoms."
    }
  ];

  const rules = [
    {
      title: "Respect Other Players",
      icon: Users,
      description: "No griefing, stealing, or destroying others' builds without permission. PvP must be consensual. Pranks are allowed but should be harmless and fun."
    },
    {
      title: "Build Responsibly",
      icon: Wrench,
      description: "Keep spawn area clean and organized. Claim your builds with signs showing your username. Clean up temporary structures and resource gathering sites."
    },
    {
      title: "Server Resources",
      icon: Zap,
      description: "No lag machines, excessive redstone contraptions near spawn, or item duplication exploits. Report any bugs or exploits to admins immediately."
    },
    {
      title: "Shopping District",
      icon: Globe,
      description: "The communal shopping district is for player shops only. Keep storefronts themed and functional. No massive farms or storage in the district area."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="relative">
        <header className="max-w-6xl mx-auto px-8 pt-16 pb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <Scroll className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Private SMP
              </h1>
              <p className="text-neutral-400 text-lg mt-1">
                Season 3 — Running Minecraft 1.21.1
              </p>
            </div>
          </div>
          <p className="text-neutral-400 text-lg max-w-3xl">
            A carefully curated survival experience with performance mods, quality-of-life improvements, and vanilla-plus gameplay enhancements.
          </p>
        </header>

        <main className="max-w-6xl mx-auto px-8 pb-20">
          <Tabs defaultValue="mods" className="w-full">
            <TabsList className="mb-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
              <TabsTrigger value="mods" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
                Mods ({mods.length})
              </TabsTrigger>
              <TabsTrigger value="datapacks" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                Datapacks ({datapacks.length})
              </TabsTrigger>
              <TabsTrigger value="rules" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                Server Rules
              </TabsTrigger>
              <TabsTrigger value="about" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
                Getting Started
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mods" className="space-y-6">
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  Server Mods
                </h2>
                <p className="text-neutral-400">
                  These mods run on the server and enhance performance, gameplay, and functionality. Most are server-side only and don't require client installation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mods.map((mod, idx) => (
                  <Card key={idx} className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 hover:border-emerald-500/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{mod.name}</h3>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">{mod.category}</Badge>
                        <Badge variant="secondary" className="bg-neutral-800 text-neutral-300">{mod.type}</Badge>
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {mod.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="datapacks" className="space-y-6">
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                  <Scroll className="w-6 h-6 text-cyan-400" />
                  Custom Datapacks
                </h2>
                <p className="text-neutral-400">
                  Vanilla-friendly gameplay enhancements using Minecraft's built-in datapack system. These modify recipes, loot tables, and add custom functions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {datapacks.map((pack, idx) => (
                  <Card key={idx} className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 hover:border-cyan-500/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{pack.name}</h3>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">{pack.category}</Badge>
                        <Badge variant="secondary" className="bg-neutral-800 text-neutral-300">{pack.type}</Badge>
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {pack.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rules" className="space-y-6">
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-400" />
                  Community Guidelines
                </h2>
                <p className="text-neutral-400">
                  Simple rules to keep the server fun and fair for everyone. Breaking these rules may result in warnings or temporary bans.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rules.map((rule, idx) => {
                  const Icon = rule.icon;
                  return (
                    <Card key={idx} className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 hover:border-purple-500/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 shrink-0">
                            <Icon className="w-6 h-6 text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-3">{rule.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                              {rule.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 mt-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-400">Bannable Offenses</h3>
                  <ul className="space-y-2 text-neutral-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Using hacked clients, x-ray resource packs, or any unauthorized mods that give unfair advantages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Intentional griefing, stealing, or destroying other players' builds and belongings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Harassment, hate speech, or making other players feel unwelcome</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Intentionally lagging the server or using exploits after being warned</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="about" className="space-y-6">
              <Card className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                      <Wrench className="w-7 h-7 text-blue-400" />
                      Getting Started
                    </h2>
                    <p className="text-neutral-400 leading-relaxed">
                      Welcome to the SMP! This server runs on Fabric with a mix of performance mods and vanilla-plus datapacks to enhance the survival experience without straying too far from vanilla Minecraft.
                    </p>
                  </div>

                  <div className="border-t border-neutral-800 pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-emerald-400">How Mods Work</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                      Most mods on this server are server-side only, meaning you can connect with a vanilla Minecraft client. Mods like Lithium and Starlight optimize server performance behind the scenes, while Polymer allows custom items to work without requiring players to install anything.
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Optional client-side mods like Simple Voice Chat enhance your experience but aren't required. If you want voice chat, you'll need to install that mod separately.
                    </p>
                  </div>

                  <div className="border-t border-neutral-800 pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">How Datapacks Work</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                      Datapacks modify the game using Minecraft's built-in systems. They can add custom recipes, modify loot tables, create new commands, or trigger functions based on player actions. Everything works through vanilla Minecraft's command and function system.
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Unlike mods, datapacks can't add new blocks or items from scratch, but they can customize existing gameplay in creative ways. The datapacks on this server focus on quality-of-life improvements and balanced gameplay enhancements.
                    </p>
                  </div>

                  <div className="border-t border-neutral-800 pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-purple-400">Server Commands</h3>
                    <div className="bg-neutral-950/50 rounded-lg p-4 space-y-2 font-mono text-sm">
                      <div className="flex gap-3">
                        <span className="text-emerald-400">/home</span>
                        <span className="text-neutral-500">Teleport to your set home location</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-emerald-400">/sethome</span>
                        <span className="text-neutral-500">Set your home point at current location</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-emerald-400">/spawn</span>
                        <span className="text-neutral-500">Return to the world spawn point</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-emerald-400">/coords</span>
                        <span className="text-neutral-500">Toggle coordinate display in action bar</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-emerald-400">/afk</span>
                        <span className="text-neutral-500">Mark yourself as away from keyboard</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-neutral-800 pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">Server Information</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <p className="text-neutral-500 mb-1">Minecraft Version</p>
                        <p className="text-neutral-100 font-semibold">1.21.1</p>
                      </div>
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <p className="text-neutral-500 mb-1">Mod Loader</p>
                        <p className="text-neutral-100 font-semibold">Fabric</p>
                      </div>
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <p className="text-neutral-500 mb-1">Difficulty</p>
                        <p className="text-neutral-100 font-semibold">Hard</p>
                      </div>
                      <div className="bg-neutral-950/50 rounded-lg p-4">
                        <p className="text-neutral-500 mb-1">World Border</p>
                        <p className="text-neutral-100 font-semibold">10,000 blocks</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        <footer className="border-t border-neutral-800 mt-20">
          <div className="max-w-6xl mx-auto px-8 py-8">
            <p className="text-neutral-500 text-sm text-center">
              Questions or suggestions? Contact the server admins on Discord
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}