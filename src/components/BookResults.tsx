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

  return (
    <div>
      <BookSearchForm onSearch={searchBooks} />
      {loading ? (
        <p className="mt-4 text-blue-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {books.map((book) => (
            <div key={book.Item.isbn} className="border p-4 rounded-lg shadow-md">
              <Image
                src={book.Item.largeImageUrl}
                alt={book.Item.title}
                width={200}
                height={200}
                className="w-full h-auto object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{book.Item.title}</h3>
              <p className="text-gray-600">Author: {book.Item.author}</p>
              <p className="text-gray-600">Price: ¥{book.Item.itemPrice}</p>
              <p className="text-gray-600">Publisher: {book.Item.publisherName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
