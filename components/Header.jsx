import { cookies } from "next/headers";
import DarkModeBtn from "../components/DarkModeBtn";

export default function Header() {
  const cookieStore = cookies();
  const darkTheme = cookieStore.get("darkTheme") || "false";
  const bg = darkTheme.value === "true" ? "bg-[var(--n1)]" : "bg-[var(--n6)]";
  const color =
    darkTheme.value === "true" ? "text-[var(--n6)]" : "text-[var(--n3)]";
  return (
    <div className={`${bg} ${color} py-8 shadow-md`}>
      <div className="flex justify-between items-center xl:container my-0 mx-auto px-5 lg:px-12">
        <h1 className="font-bold">Where in the world?</h1>
        <DarkModeBtn darkTheme={darkTheme} />
      </div>
    </div>
  );
}
