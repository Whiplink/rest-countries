import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Countries({ search, filter }) {
  let data;
  const path = search ? `name/${search}` : "all";
  try {
    const fetchData = await fetch(`https://restcountries.com/v3.1/${path}`);
    const res = await fetchData.json();
    if (filter) {
      data = await res.filter((x) => x.region === filter);
      data = await data?.slice(0, 8);
    } else {
      data = await res?.slice(0, 8);
    }
  } catch (e) {
    data = [];
  }

  const cookieStore = cookies();
  const darkTheme = cookieStore.get("darkTheme");
  const bg = darkTheme?.value === "true" ? "bg-[var(--n1)]" : "bg-[var(--n6)]";
  const color =
    darkTheme?.value === "true" ? "text-[var(--n6)]" : "text-[var(--n3)]";

  if (data.length === 0) {
    return (
      <div className={`${color}`}>
        <p>No result.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((x) => {
        return (
          <Link href={`/${x.name.official}`} key={x.name.official}>
            <div className={`${bg} ${color} shadow-md rounded overflow-hidden`}>
              <div className="aspect-video overflow-hidden relative">
                <Image src={x.flags.png} fill={true} alt="/" />
              </div>
              <div className="p-5">
                <h1 className="font-bold text-lg">{x.name.common}</h1>
                <p>Population: {x.population}</p>
                <p>Region: {x.region}</p>
                <p>Capital: {x.capital}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
