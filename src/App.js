import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { LibraryProvider } from './context/LibraryContext';

function App() {
  return (
    <LibraryProvider>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetailsPage />} />
            <Route path="/my-library" element={<MyLibraryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LibraryProvider>
  );
}

export default App;
