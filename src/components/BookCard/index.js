import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
