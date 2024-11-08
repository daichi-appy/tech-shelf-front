'use client';
import { useState } from 'react';

interface BookSearchFormProps {
  onSearch: (query: string) => void;
}

export default function BookSearchForm({ onSearch }: BookSearchFormProps) {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleBlur = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 relative">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        onBlur={handleBlur}
        placeholder="書籍名・著者・出版社・ISBNで検索"
        className="border px-5 py-3 rounded-lg flex-1 pr-10 focus:outline-none focus:ring focus:border-blue-500"
      />
      <button 
        type="submit" 
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
      >
        <img 
          src="/search_icon.svg"
          alt="検索アイコン" 
          className="h-5 w-5 text-gray-500"
        />
      </button>
    </form>
  );
}
