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

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="書籍名・著者・出版社・ISBNで検索"
        className="border p-2 rounded-lg flex-1"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        検索
      </button>
    </form>
  );
}
