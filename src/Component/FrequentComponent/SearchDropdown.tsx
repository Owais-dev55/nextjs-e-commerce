"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  imageUrl: string;
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
        `*[_type == "product" && title match $searchTerm] {
          _id,
          title,
          "imageUrl": productImage.asset->url,
          price
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
    <div className="relative w-[340px]" ref={dropdownRef}>
      <input
        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />
      {isLoading && <p className="mt-2 text-gray-600">Loading...</p>}
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-md rounded-lg p-4 overflow-y-auto max-h-60 z-50">
          {results.map((item) => (
            <Link
              href={`/products/${item._id}`}
              key={item._id}
              onClick={() => {
                setSearch("");
                setResults([]);
              }}
            >
              <div className="py-2 border-b last:border-none cursor-pointer hover:bg-gray-100 flex items-center gap-4">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover rounded-md"
                />
                <p className="text-gray-700 font-medium text-sm truncate">
                  {item.title}
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
