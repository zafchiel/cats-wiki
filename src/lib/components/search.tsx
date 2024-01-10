"use client";

import searchIcon from "../assets/icons/search.svg";
import Image from "next/image";
import { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import Link from "next/link";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const { isSearching, searchResults } = useSearch(searchInput);

  return (
    <div className="relative">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="search"
        placeholder="Enter your breed"
        className="py-3 pl-3 pr-10 w-full rounded-3xl caret-black text-black"
      />

      {isSearching ? (
        <div className="absolute top-4 right-4 flex">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
        </div>
      ) : (
        <Image
          src={searchIcon}
          alt="Search Icon"
          className="absolute top-4 right-4"
        />
      )}

      {searchResults.length > 0 && searchInput && (
        <div className="bg-white rounded-xl grid gap-1 text-black absolute w-full">
          {searchResults.map((result) => (
            <Link
              href={`/${result.id}`}
              key={result.id}
              className="hover:bg-[#e3e1dc] px-4 py-2 rounded-lg"
            >
              {result.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
