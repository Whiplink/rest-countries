import Countries from '../components/Countries';
import Filter from '../components/Filter';
import Header from '../components/Header';
import Search from '../components/Search';

export default function Home({ searchParams }) {
  return (
    <div className="bg-[var(--n5)] w-[100vw] h-[100vh]">
      <Header />
      <main className="xl:container my-0 mx-auto px-5 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between mb-6">
          <Search />
          <Filter />
        </div>
        <Countries query={searchParams?.search} />
      </main>
    </div>
  );
}
