import React, { createContext, useState, useEffect } from 'react';
import booksData from '../data/books.json';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [myLibrary, setMyLibrary] = useState([]);

  useEffect(() => {
    setBooks(booksData.books);
  }, []);

  const addToLibrary = (book) => {
    setMyLibrary([...myLibrary, book]);
  };

  const removeFromLibrary = (bookId) => {
    setMyLibrary(myLibrary.filter(book => book.id !== bookId));
  };

  return (
    <LibraryContext.Provider value={{ books, myLibrary, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};