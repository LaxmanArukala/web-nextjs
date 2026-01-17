
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search, MapPin, Filter, Clock } from "lucide-react";

export default function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();



  const update = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "All") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          placeholder="Search lawyer..."
          value={searchParams.get("search") ?? ""}
            onChange={(e) => update("search", e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Category */}
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={searchParams.get("category") ?? "All"}
            onChange={(e) => update("category", e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>All</option>
            <option>Criminal Law</option>
            <option>Corporate Law</option>
            <option>Family Law</option>
          </select>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-gray-500" />
          <select
            value={searchParams.get("location") ?? "All"}
            onChange={(e) => update("location", e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>All</option>
            <option>Hyderabad</option>
            <option>Delhi</option>
            <option>Mumbai</option>
          </select>
        </div>

        {/* Experience */}
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-gray-500" />
          <select
            value={searchParams.get("minExp") ?? ""}
            onChange={(e) => update("minExp", e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Any Exp</option>
            <option value="3">3+ yrs</option>
            <option value="5">5+ yrs</option>
            <option value="10">10+ yrs</option>
          </select>
        </div>
      </div>
    </>
  );
}
