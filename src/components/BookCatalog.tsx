import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { CatalogType } from '../data/books';

interface BookCatalogProps {
  catalog: CatalogType;
}

const BookCatalog: React.FC<BookCatalogProps> = ({ catalog }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{catalog.name} Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalog.books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{book.author}</p>
              <div className="flex gap-2">
                {book.readUrl && (
                  <a
                    href={book.readUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Online
                  </a>
                )}
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookCatalog;