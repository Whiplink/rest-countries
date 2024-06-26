import { ChevronDown } from "lucide-react";

export default function Filter() {
  return (
    <div className="flex gap-10 bg-[var(--n6)] w-fit px-9 py-4 rounded-md shadow-md items-center">
      <p>Filter by Region</p>
      <ChevronDown color="#333333" size={22}/>
    </div>
  );
}
