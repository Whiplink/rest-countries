import { cookies } from "next/headers";
import Image from "next/image";

export default async function Country({ params }) {
  let country;
  let languages;
  let nativeName;
  let currencies;
  try {
    const fetchData = await fetch(
      `https://restcountries.com/v3.1/name/${params.country}`
    );
    const res = await fetchData.json();
    country = res[0];

    let langValues = Object.values(country.languages);
    languages = langValues.join(", ");

    let nativeValues = Object.keys(country.name.nativeName);
    nativeName = country.name.nativeName[nativeValues[0]].common;

    let currenciesValues = Object.keys(country.currencies);
    currencies = country.currencies[currenciesValues[0]].name;
  } catch (e) {
    country = null;
  }

  const cookieStore = cookies();
  const darkTheme = cookieStore.get("darkTheme");
  const color =
    darkTheme?.value === "true" ? "text-[var(--n6)]" : "text-[var(--n3)]";

  if (country === null) {
    return <p className={`${color}`}>Error.</p>;
  }

  return (
    <div className={`${color} flex flex-col gap-10 sm:flex-row`}>
      <div className="flex flex-1 justify-center items-center">
        <div className="aspect-video overflow-hidden relative w-full">
          <Image src={country.flags.png} fill={true} alt="/" />
        </div>
      </div>
      <div className="flex flex-col xl:flex-1 justify-center">
        <h1 className="mb-5 font-black text-xl md:text-2xl lg:text-3xl">
          {country.name.common}
        </h1>
        <div className="flex flex-col gap-10 lg:flex-row mb-10">
          <div className="flex flex-col gap-3">
            <p>
              <span className="font-bold">Native Name: </span>
              <span>{nativeName}</span>
            </p>
            <p>
              <span className="font-bold">Population: </span>
              <span>{country.population}</span>
            </p>
            <p>
              <span className="font-bold">Region: </span>
              <span>{country.region}</span>
            </p>
            <p>
              <span className="font-bold">Sub Region: </span>
              <span>{country.subregion}</span>
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              <span>{country.capital}</span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p>
              <span className="font-bold">Top Level Domain: </span>
              <span>{country.tld}</span>
            </p>
            <p>
              <span className="font-bold">Currencies: </span>
              <span>{currencies}</span>
            </p>
            <p>
              <span className="font-bold">Languages: </span>
              <span>{languages}</span>
            </p>
          </div>
        </div>
        <div>
          {country.borders && (
            <h1 className="font-bold text-xl mb-4">Border Countries:</h1>
          )}
          {country.borders && (
            <div className="flex gap-3 flex-wrap max-w-xs">
              {country.borders.map((border) => {
                return (
                  <div key={border} className="px-6 py-1 shadow-md border">
                    {border}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
