import React, { createContext, useState } from 'react';
import data from '../../data.json';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [books] = useState(data.books);
  const [myLibrary, setMyLibrary] = useState([]);

  const addToLibrary = (book) => {
    setMyLibrary([...myLibrary, book]);
  };

  const removeFromLibrary = (id) => {
    setMyLibrary(myLibrary.filter(book => book.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ books, myLibrary, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
