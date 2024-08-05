import { Moon, Sun } from "lucide-react";
import { setDarkTheme } from "@/actions";

export default function DarkModeBtn({ darkTheme }) {
  const text = darkTheme.value === "true" ? "Light" : "Dark";
  return (
    <form action={setDarkTheme}>
      <button type="submit" className="flex items-center gap-3">
        {darkTheme.value === "true" ? <Sun size={18} /> : <Moon size={18} />}
        <p>{text} Mode</p>
      </button>
    </form>
  );
}
