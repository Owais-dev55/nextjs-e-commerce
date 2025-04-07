"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  Title: string;
  MainImage: string;
  price: number;
}

const SearchDropdown = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fetchData = async (value: string) => {
    setIsLoading(true);
    try {
      const data = await client.fetch<Product[]>(
        `*[_type == "apiproduct" && Title match $searchTerm] {
          _id,
          Title,
          "MainImage": MainImage.asset->url,
          OriginalPrice
        }`,
        { searchTerm: `*${value}*` }
      );
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      fetchData(value);
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-[340px] z-20" ref={dropdownRef}>
      {/* Search Input */}
      <input
        className="w-full pl-4 pr-10 py-2 rounded-full border border-[#2C2F36] bg-[#1F2937] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E5E7EB] transition-all placeholder-gray-400"
        type="text"
        placeholder="Search for watches..."
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />

      {/* Loading Indicator */}
      {isLoading && <p className="mt-2 text-gray-400">Searching...</p>}

      {/* Dropdown Results */}
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1F2937] border border-[#2C2F36] shadow-lg rounded-lg overflow-y-auto max-h-60 z-50">
          {results.map((item) => (
            <Link
              href={`/products/${item._id}`}
              key={item._id}
              onClick={() => {
                setSearch("");
                setResults([]);
              }}
            >
              <div className="flex items-center gap-4 py-2 px-4 border-b border-[#2C2F36] cursor-pointer hover:bg-[#374151] transition-all">
                <Image
                  src={item.MainImage}
                  alt={item.Title}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover rounded-md"
                />
                <p className="text-gray-300 font-medium text-sm truncate">
                  {item.Title.substring(0 , 100)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export { SearchDropdown };
