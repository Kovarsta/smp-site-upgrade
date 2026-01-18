import { useState } from "react";
import { filteredData } from "@/lib/utils"
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


const TabsContentSect = ({
  type,
  title,
  desc,
  Icon,
  CustomComponent,
  data,
  color,
}) => {

  const [dataSearch, setDataSearch] = useState("");
  const [dataSort, setDataSort] = useState("name");

  if (CustomComponent) {
    return (
      <TabsContent value={type} className="space-y-6">
        <CustomComponent />
      </TabsContent >)
  };

  const filtered = filteredData(data, dataSearch, dataSort);

  const getStyles = (c) => {
    if (c === "blue") return { text: "text-blue-400", focus: "focus:border-blue-500/50" };
    if (c === "emerald") return { text: "text-emerald-400", focus: "focus:border-emerald-500/50" };
    if (c === "cyan") return { text: "text-cyan-400", focus: "focus:border-cyan-500/50" };
  };

  const styles = getStyles(color);

  return (
    <TabsContent value={type} className="space-y-6">
      <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-4 mb-8 space-y-2">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-neutral-100">
          <Icon className={`w-6 h-6 ${styles.text}`} />
          {title}
        </h2>
        <p className="text-neutral-300">{desc}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder={`Search ${type.toLowerCase()}...`}
          value={dataSearch}
          onChange={(e) => setDataSearch(e.target.value)}
          className={`flex-1 bg-neutral-900/60 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none ${styles.focus}`}
        />

        <select
          value={dataSort}
          onChange={(e) => setDataSort(e.target.value)}
          className={`bg-neutral-900/60 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-100 focus:outline-none ${styles.focus}`}
        >
          <option value="name">Sort by name</option>
          <option value="category">Sort by category</option>
          <option value="type">Sort by type</option>
          <option value="new">Newest first</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((pack, idx) => (
          <CustomCard
            key={idx}
            {...pack}
            color={color} />
        ))}
      </div>
    </TabsContent>
  );
}; export { TabsContentSect };

// Stupid tailwind JIT problem
const COLOR_MAP = {
  cyan: {
    hoverBorder: "hover:border-cyan-500/50",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  emerald: {
    hoverBorder: "hover:border-emerald-500/50",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  blue: {
    hoverBorder: "hover:border-blue-500/50",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
};

const CustomCard = ({ name, category, description, type, color = "cyan" }) => {
  const theme = COLOR_MAP[color] || COLOR_MAP.cyan;

  return (
    <Card
      className={`relative bg-neutral-800/70 backdrop-blur-sm border-neutral-700 ${theme.hoverBorder} hover:bg-neutral-800/90 transition-all duration-300`}
    >
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-neutral-100">
          {name}
        </h3>

        <div className="flex gap-2 mb-4 flex-wrap">
          <Badge className={`${theme.badge} border shadow-none`}>
            {category}
          </Badge>

          <Badge
            variant="secondary"
            className="bg-neutral-700/50 text-neutral-200 border-neutral-600 shadow-none"
          >
            {type}
          </Badge>
        </div>

        <p className="text-neutral-300 text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
