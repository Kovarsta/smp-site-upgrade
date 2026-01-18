import { Tabs, TabsList } from "@/components/ui/tabs";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hello } from "@/components/ui/Hello";
import mods from "@/assets/modList.js";
import datapacks from "@/assets/datapackList.js";
import { TabsContentSect } from "@/components/ui/TabsContentSect"
import {
  Scroll,
  Shield,
} from "lucide-react";
import TabTriggerBar from "./components/ui/TabTriggerBar";

export default function SMPInfoSite() {

  // Enums for tab type, please use this 
  const tabType = {
    ABOUT: "about",
    MODS: "mods",
    DATAPACKS: "datapacks",
  }

  // Enums for color per type, please use this
  const color = {
    ABOUT: "blue",
    MODS: "emerald",
    DATAPACKS: "cyan",
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
      <div className="relative w-full">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4 pb-20">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="flex flex-col gap-3 h-auto sm:flex-row mb-5 bg-neutral-800/80 backdrop-blur-md border border-neutral-700 p-1.5 rounded-xl shadow-lg">
              <TabTriggerBar tabType={tabType.ABOUT} text={"Getting Started"} color={color.ABOUT} />
              <TabTriggerBar tabType={tabType.MODS} text={`Server Mods (${mods.length})`} color={color.MODS} />
              <TabTriggerBar tabType={tabType.DATAPACKS} text={`Datapacks (${datapacks.length})`} color={color.DATAPACKS} />
            </TabsList>

            <TabsContentSect type={tabType.ABOUT} CustomComponent={Hello} />

            <TabsContentSect type={tabType.MODS} title={"Server Mods"} desc={"These mods run on the server and enhance performance, gameplay, and functionality. They're server-side only and don't require client installation."} Icon={Shield} data={mods} color={color.MODS} />

            <TabsContentSect type={tabType.DATAPACKS} title={"Custom Datapacks"} desc={"Vanilla-friendly gameplay enhancements using Minecraft's built-in datapack system. These modify recipes, loot tables, and add custom functions."} Icon={Scroll} data={mods} color={color.DATAPACKS} />

          </Tabs>
        </main>
        <Footer />
      </div>
    </div>
  );
}
