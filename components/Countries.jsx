import Image from 'next/image';
import Link from 'next/link';

export default async function Countries({ query }) {
  let data;
  try {
    const string = query ? `name/${query}` : 'all';
    const fetchData = await fetch(`https://restcountries.com/v3.1/${string}`);
    const res = await fetchData.json();
    data = res?.slice(0, 8);
  } catch (e) {
    data = [];
  }

  return (
    <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((x) => {
        return (
          <Link href={`/${x.name.official}`} key={x.name.official}>
            <div  className="bg-[var(--n6)] shadow-md">
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
