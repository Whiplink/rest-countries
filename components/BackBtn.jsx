"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackBtn({ darkTheme }) {
  const router = useRouter();

  const handleBtn = () => {
    router.back();
  };
  const bg = darkTheme?.value === "true" ? "bg-[var(--n1)]" : "bg-[var(--n6)]";
  const color =
    darkTheme?.value === "true" ? "text-[var(--n6)]" : "text-[var(--n3)]";

  return (
    <div className="mb-16">
      <button
        onClick={handleBtn}
        className={`${bg} ${color} flex gap-2 shadow-md py-1 px-5 items-center`}
      >
        <MoveLeft size={19} />
        <p>Back</p>
      </button>
    </div>
  );
}
