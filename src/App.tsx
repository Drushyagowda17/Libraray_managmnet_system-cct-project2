import React, { useState } from 'react';
import { Book, Library, BookOpen, Monitor, Sprout, Heart } from 'lucide-react';
import BookCatalog from './components/BookCatalog';
import { catalogs } from './data/books';

function App() {
  const [selectedCatalog, setSelectedCatalog] = useState(catalogs[0].id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Library className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Digital Library</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <nav className="space-y-2">
              {catalogs.map((catalog) => (
                <button
                  key={catalog.id}
                  onClick={() => setSelectedCatalog(catalog.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    selectedCatalog === catalog.id
                      ? 'bg-indigo-600 text-white'
                      : 'hover:bg-indigo-50 text-gray-700'
                  }`}
                >
                  {catalog.id === 'health' && <Heart className="w-5 h-5" />}
                  {catalog.id === 'sports' && <Book className="w-5 h-5" />}
                  {catalog.id === 'farming' && <Sprout className="w-5 h-5" />}
                  {catalog.id === 'computers' && <Monitor className="w-5 h-5" />}
                  {catalog.id === 'education' && <BookOpen className="w-5 h-5" />}
                  <span className="font-medium">{catalog.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-5">
            <BookCatalog 
              catalog={catalogs.find(c => c.id === selectedCatalog)!}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;