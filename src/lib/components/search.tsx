"use client";

import { useState } from "react";
import { useSearch } from "../hooks/useSearch";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const { isSearching, searchResults } = useSearch(searchInput);

  return (
    <input
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      type="search"
      placeholder="Enter your breed"
      className="py-3 pl-3 pr-10 w-full rounded-3xl caret-black text-black"
    />
  );
}
