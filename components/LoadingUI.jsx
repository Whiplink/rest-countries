import { cookies } from "next/headers";

export default function Loading() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8];
  const cookieStore = cookies();
  const darkTheme = cookieStore.get("darkTheme");
  const bg = darkTheme?.value === "true" ? "bg-[var(--n1)]" : "bg-[var(--n6)]";
  return (
    <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((x) => {
        return (
          <div key={x} className={`${bg} shadow-md rounded overflow-hidden`}>
            <div className="aspect-video overflow-hidden relative bg-slate-200 animate-pulse"></div>
            <div className="p-5 grid gap-3">
              <div className="w-2/6 h-4 bg-slate-200 animate-pulse rounded-lg"></div>
              <div className="w-4/5 h-4 bg-slate-200 animate-pulse rounded-lg"></div>
              <div className="w-3/6 h-4 bg-slate-200 animate-pulse rounded-lg"></div>
              <div className="w-3/5 h-4 bg-slate-200 animate-pulse rounded-lg"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
