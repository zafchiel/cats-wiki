import { useState, useEffect } from "react";
import { Cat } from "../types";

const API_URL = "https://api.thecatapi.com/v1/breeds/search";

export function useSearch(searchString: string) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [debouncedSearchInput, setDebouncedSearchInput] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Cat[]>([]);

  useEffect(() => {
    if (searchString.length >= 3) setIsSearching(true);

    setSearchInput(searchString);
  }, [searchString]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchInput(searchInput);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  useEffect(() => {
    if (debouncedSearchInput.length < 3) return;

    fetch(`${API_URL}?q=${debouncedSearchInput}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
        console.log(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsSearching(false));
  }, [debouncedSearchInput]);

  return { searchResults, isSearching };
}
