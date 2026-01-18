import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import {useMemo} from "react";


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function filterAndSort(items, search, sortKey) {
  return items
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortKey === "new") {
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      }
      return a[sortKey].localeCompare(b[sortKey]);
    });
}

export function filteredData(data, dataSearch, dataSort) { 
  return useMemo(
    () => filterAndSort(data, dataSearch, dataSort),
    [data, dataSearch, dataSort]
  )
};
