import Countries from "../components/Countries";
import Filter from "../components/Filter";
import Search from "../components/Search";
import LoadingUI from "../components/LoadingUI";
import { Suspense } from "react";
import { cookies } from "next/headers";

export default function Home({ searchParams }) {
  const cookieStore = cookies();
  const darkTheme = cookieStore.get("darkTheme");
  return (
    <main className="xl:container mx-auto px-5 lg:px-12">
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between mb-6">
        <Search darkTheme={darkTheme} />
        <Filter
          darkTheme={darkTheme}
          search={searchParams.search}
          filter={searchParams?.filter}
        />
      </div>
      <Suspense
        key={`${searchParams?.search}${searchParams?.filter}`}
        fallback={<LoadingUI />}
      >
        <Countries
          search={searchParams?.search}
          filter={searchParams?.filter}
        />
      </Suspense>
    </main>
  );
}
