import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LibraryContext } from '../../context/LibraryContext';

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div className="container">
      <h2>My Library</h2>
      {myLibrary.length === 0 ? (
        <p>Your library is empty. <Link to="/">Add some books</Link> from the home page!</p>
      ) : (
        <ul className="book-list">
          {myLibrary.map(book => (
            <li key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Rating: {book.rating}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
              <button onClick={() => removeFromLibrary(book.id)} className="remove-button">
                Remove from Library
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyLibraryPage;
