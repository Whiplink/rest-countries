"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";

export default function Search({ darkTheme }) {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(input ? `?search=${input}` : "/");
  };
  const bg = darkTheme?.value === "true" ? "bg-[var(--n1)]" : "bg-[var(--n6)]";
  const color =
    darkTheme?.value === "true" ? "text-[var(--n6)]" : "text-[var(--n3)]";
  const iconColor = darkTheme?.value === "true" ? "#ffffff" : "#949494";

  return (
    <div className={`${bg} px-9 py-4 shadow-md max-w-[500px] rounded-md`}>
      <form onSubmit={handleSubmit} className="flex gap-8 items-center">
        <button type="submit">
          <SearchIcon size={20} color={`${iconColor}`} />
        </button>
        <input
          type="text"
          placeholder="Search for a country..."
          className={`${bg} ${color} outline-none flex-1`}
          value={input}
          onChange={handleInput}
        />
      </form>
    </div>
  );
}
