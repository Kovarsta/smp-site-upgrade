import React from "react";
import { TabsTrigger } from "@/components/ui/tabs";

const baseStyle = "w-full rounded-lg px-6 py-2 text-sm font-medium transition-all ";
const specialStyle = {
    ABOUT : "data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-blue-300 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-blue-500/30 data-[state=inactive]:text-neutral-400 data-[state=inactive]:hover:text-neutral-200 data-[state=inactive]:hover:bg-neutral-700/50",
    MODS : "data-[state=active]:bg-gradient-to-br data-[state=active]:from-emerald-500/20 data-[state=active]:to-emerald-600/20 data-[state=active]:text-emerald-300 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-emerald-500/30 data-[state=inactive]:text-neutral-400 data-[state=inactive]:hover:text-neutral-200 data-[state=inactive]:hover:bg-neutral-700/50", 
    DATAPACKS : "data-[state=active]:bg-gradient-to-br data-[state=active]:from-cyan-500/20 data-[state=active]:to-cyan-600/20 data-[state=active]:text-cyan-300 data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-cyan-500/30 data-[state=inactive]:text-neutral-400 data-[state=inactive]:hover:text-neutral-200 data-[state=inactive]:hover:bg-neutral-700/50",
} 

const TabTriggerBar = ({tabType, text}) => {
    return (<TabsTrigger 
        value={tabType}
        className={baseStyle + specialStyle[tabType.toUpperCase()]}
    >
        {text} 
    </TabsTrigger>)
};

export default TabTriggerBar;
