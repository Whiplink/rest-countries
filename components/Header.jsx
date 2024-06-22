export default function Header() {
  return (
    <div className="bg-[var(--n6)] py-8 shadow-md mb-6">
      <div className="flex justify-between items-center xl:container my-0 mx-auto px-5 lg:px-12">
        <h1 className="font-bold">Where in the world?</h1>
        <div className="flex items-center gap-3">
          <span>(moon logo)</span>
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
}
