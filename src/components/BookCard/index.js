import React from 'react';
import './BookCard.css';

function BookCard({ book, actionButton }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p className="author">by {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p className="rating">Rating: {book.rating}</p>
      {actionButton}
    </div>
  );
}

export default BookCard;
