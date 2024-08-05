import BackBtn from "@/components/BackBtn";
import Country from "@/components/Country";
import { cookies } from "next/headers";
import { Suspense } from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-10 sm:flex-row">
      <div className="aspect-video relative w-full bg-slate-200 animate-pulse"></div>
      <div className="flex flex-col xl:flex-1 justify-center">
        <div className="mb-7 w-[200px] h-4 bg-slate-200 text-xl md:h-5 lg:h-6 animate-pulse rounded-lg"></div>
        <div className="flex flex-col gap-12 lg:flex-row mb-10">
          <div className="flex flex-col gap-5">
            <div className="w-[250px] h-4 bg-slate-200 animate-pulse rounded-lg"></div>
            <div className="w-[150px] h-4 bg-slate-200 animate-pulse rounded-lg"></div>
            <div className="w-[100px] h-4 bg-slate-200 animate-pulse rounded-lg"></div>
            <div className="w-[180px] h-4 bg-slate-200 animate-pulse rounded-lg"></div>
            <div className="w-[150px] h-4 bg-slate-200 animate-pulse rounded-lg"></div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-[180px] h-4 bg-slate-200 animate-pulse rounded-lg"></div>
            <div className="w-[160px] h-4 bg-slate-200 animate-pulse rounded-lg"></div>
            <div className="w-[140px] h-4 bg-slate-200 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const darkTheme = cookieStore.get("darkTheme");

  return (
    <main className="xl:container mx-auto px-5 lg:px-12">
      <BackBtn darkTheme={darkTheme} />
      <Suspense fallback={<Loading />}>
        <Country params={params} />
      </Suspense>
    </main>
  );
}
