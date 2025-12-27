import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function SMPInfoSite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <header className="max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-2">Private SMP — Mods & Datapacks</h1>
        <p className="text-neutral-400">
          An overview of the custom modifications and datapacks running on the server, and how they affect gameplay.
        </p>
      </header>

      <main className="max-w-5xl mx-auto">
        <Tabs defaultValue="mods" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="mods">Mods</TabsTrigger>
            <TabsTrigger value="datapacks">Datapacks</TabsTrigger>
            <TabsTrigger value="about">How It All Works</TabsTrigger>
          </TabsList>

          <TabsContent value="mods">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-neutral-900">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-2">Example Mod</h2>
                  <div className="flex gap-2 mb-3">
                    <Badge>Gameplay</Badge>
                    <Badge variant="secondary">Server-side</Badge>
                  </div>
                  <p className="text-neutral-400 text-sm">
                    Briefly describe what this mod does, why it was added, and how it changes vanilla mechanics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="datapacks">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-neutral-900">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-2">Example Datapack</h2>
                  <div className="flex gap-2 mb-3">
                    <Badge>Vanilla+</Badge>
                    <Badge variant="secondary">Command-based</Badge>
                  </div>
                  <p className="text-neutral-400 text-sm">
                    Explain the datapack’s mechanics, triggers, and any limitations players should know about.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="about">
            <Card className="bg-neutral-900">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold">System Overview</h2>
                <p className="text-neutral-400 text-sm">
                  This server uses a combination of Fabric/Forge mods and vanilla datapacks. Mods extend the game at the code level,
                  while datapacks rely on Minecraft’s built-in command and function system.
                </p>
                <p className="text-neutral-400 text-sm">
                  Together, they allow custom mechanics, balance tweaks, and quality-of-life improvements without heavily
                  altering the core survival experience.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
