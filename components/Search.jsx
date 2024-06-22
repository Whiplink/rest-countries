'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`?search=${input}`);
  };

  return (
    <div className="bg-[var(--n6)] px-9 py-4 shadow-md max-w-[500px] rounded-md">
      <form onSubmit={handleSubmit} className="flex gap-5">
        <button type="submit">(search btn)</button>
        <input
          type="text"
          placeholder="Search for a country..."
          className="outline-none flex-1"
          value={input}
          onChange={handleInput}
        />
      </form>
    </div>
  );
}
