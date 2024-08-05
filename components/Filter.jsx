"use client";

import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Filter({ darkTheme, search, filter }) {
  const [showRegions, setShowRegions] = useState(false);
  const router = useRouter();

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleClick = (p) => {
    if (filter === p) {
      router.push(search ? `?search=${search}` : "/");
    } else {
      router.push(search ? `?search=${search}&filter=${p}` : `?filter=${p}`);
    }
    setShowRegions(false);
  };

  const bg = darkTheme?.value === "true" ? "bg-[var(--n1)]" : "bg-[var(--n6)]";
  const color =
    darkTheme?.value === "true" ? "text-[var(--n6)]" : "text-[var(--n3)]";
  const iconColor = darkTheme?.value === "true" ? "#ffffff" : "#333333";
  return (
    <div className="relative cursor-pointer w-fit">
      <div
        onClick={() => {
          setShowRegions((prev) => !prev);
        }}
        className={`${bg} ${color} flex gap-10 w-fit px-9 py-4 rounded-md shadow-md items-center`}
      >
        <p>Filter by Region</p>
        <ChevronDown color={`${iconColor}`} size={22} />
      </div>
      {showRegions && (
        <div
          className={`${bg} ${color} absolute cursor-default px-9 py-4 rounded-md shadow-md w-full mt-1 z-10 space-y-3`}
        >
          {regions.map((r) => {
            return (
              <div
                key={r}
                className="cursor-pointer"
                onClick={() => {
                  handleClick(r);
                }}
              >
                {r}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
