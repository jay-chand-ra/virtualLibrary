import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LibraryContext } from '../../context/LibraryContext';

const BookDetailsPage = () => {
  const { id } = useParams();
  const { books, myLibrary, addToLibrary } = useContext(LibraryContext);
  const [message, setMessage] = useState('');
  const book = books.find(b => b.id === parseInt(id));

  if (!book) return <div>Book not found</div>;

  const isInLibrary = myLibrary.some(b => b.id === book.id);

  const handleAddToLibrary = () => {
    addToLibrary(book);
    setMessage('Book added to My Library!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="container book-details">
      <Link to="/">&larr; Back to Home</Link>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Publication Year:</strong> {book.publication_year}</p>
      <p><strong>Description:</strong> {book.description}</p>
      {message && <p className="success-message">{message}</p>}
      <button 
        onClick={handleAddToLibrary} 
        disabled={isInLibrary}
      >
        {isInLibrary ? 'Already in My Library' : 'Add to My Library'}
      </button>
    </div>
  );
};

export default BookDetailsPage;
