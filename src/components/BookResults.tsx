'use client';
import { useState } from 'react';
import { BookItem } from '@/types/books';
import BookSearchForm from '@/components/BookSearchForm';
import Image from 'next/image';

export default function BookResults() {
  const [books, setBooks] = useState<BookItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchBooks = async (query: string) => {
    setLoading(true);
    const res = await fetch(`/api/books?search=${query}`);
    const data = await res.json();
    setBooks(data.Items || []);
    setLoading(false);
  };

  const handleBookmark = async (isbn: string) => {
    try {
      const response = await fetch('/api/userbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isbn }),
      });

      if (!response.ok) {
        throw new Error('ブックマークの追加に失敗しました');
      }
      alert("ブックマークが追加されました!");
    } catch (error) {
      console.error(error);
      alert("エラーが発生しました。もう一度お試しください。");
    }
  };

  return (
    <div>
      <BookSearchForm onSearch={searchBooks} />
      {loading ? (
        <p className="mt-4 text-blue-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {books.map((book) => (
            <div key={book.Item.isbn} className="relative bg-white border p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
              <button 
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
                aria-label="ブックマーク"
                onClick={() => handleBookmark(book.Item.isbn)}
              >
                <img 
                  src="/bookmark_icon.svg"  // SVGファイルへのパス
                  alt="ブックマークアイコン" 
                  className="w-6 h-6"
                />
              </button>
              <Image
                src={book.Item.largeImageUrl}
                alt={book.Item.title}
                width={150}
                height={150}
                className="w-full h-auto object-cover mb-4"
              />
              <h3 className="truncate overflow-hidden whitespace-nowrap mt-auto font-sans">{book.Item.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
