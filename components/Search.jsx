'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchIcon } from 'lucide-react';

export default function Search() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(input? `?search=${input}`: '/');
  };

  return (
    <div className="bg-[var(--n6)] px-9 py-4 shadow-md max-w-[500px] rounded-md">
      <form onSubmit={handleSubmit} className="flex gap-8 items-center">
        <button type="submit">
          <SearchIcon size={20} color='#949494'/>
        </button>
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
