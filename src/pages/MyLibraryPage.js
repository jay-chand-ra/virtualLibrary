import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LibraryContext } from '../context/LibraryContext';
import BookCard from '../components/BookCard';
import '../styles/MyLibrary.css';  // Make sure this CSS file exists and is imported

function MyLibraryPage() {
  const { myLibrary, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div className="my-library-page">
      <h1>My Library</h1>
      <div className="book-grid">
        {myLibrary.length > 0 ? (
          myLibrary.map(book => (
            <BookCard 
              key={book.id} 
              book={book} 
              actionButton={
                <button 
                  className="remove-button"
                  onClick={() => removeFromLibrary(book.id)}
                >
                  Remove from Library
                </button>
              }
            />
          ))
        ) : (
          <div className="empty-library">
            <p>Your library is empty.</p>
            <Link to="/" className="add-books-link">Add some books!</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyLibraryPage;