import React, { useContext, useState, useEffect } from 'react';
import { LibraryContext } from '../../context/LibraryContext';
import BookList from '../../components/BookList';
import SearchBar from '../../components/SearchBar';

const HomePage = () => {
  const { books } = useContext(LibraryContext);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleSearch = (term) => {
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(term.toLowerCase()) ||
      book.author.toLowerCase().includes(term.toLowerCase()) ||
      book.genre.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="container">
      <h1>Book Library</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid">
        <BookList books={filteredBooks} />
      </div>
    </div>
  );
};

export default HomePage;
