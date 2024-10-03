# Virtual Library

A React-based virtual library application that allows users to browse books, search for specific titles, and manage their personal library.

## Project Overview

- A GitHub repository containing the code for the project.
- A `README.md` file explaining the structure of the project and how to run it.

## Implementation Summary

This Virtual Book Library is implemented using React.js, following the assignment requirements. Here's a summary of the key features and implementation details:

### Pages

1. **Home Page (Book Listing)**
   - Displays a grid of books with title, author, genre, and rating.
   - Implements a search functionality to filter books by title, author, or genre.
   - Uses a reusable `BookCard` component to display each book.

2. **Book Details Page**
   - Shows detailed information about a selected book.
   - Provides an option to add the book to the user's personal library.
   - Implements routing to navigate from the Home page to this page.

3. **My Library Page**
   - Displays books added to the user's personal library.
   - Allows users to remove books from their collection.

### Key Features

- **Routing**: Implemented using `react-router-dom` for navigation between pages.
- **State Management**: Utilizes React's `useState` and `useContext` hooks for managing the book list, selected books, and personal library.
- **Reusable Components**: Created components like `BookCard`, `BookList`, and `SearchBar` for better code organization and reusability.
- **Context API**: Used to avoid prop drilling and efficiently manage global state.
- **Form Handling**: Implemented a search form for filtering books.

### Project Structure

```
virtuallibrary/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── BookCard.js
│   │   ├── BookList.js
│   │   ├── SearchBar.js
│   │   └── PersonalLibrary.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── BookDetailsPage.js
│   │   └── MyLibraryPage.js
│   ├── context/
│   │   └── LibraryContext.js
│   ├── data/
│   │   └── books.json
│   ├── styles/
│   │   └── main.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

- `components/`: Contains reusable React components.
- `pages/`: Contains the main page components.
- `context/`: Contains the React Context for global state management.
- `data/`: Contains the JSON data for the book library.
- `styles/`: Contains CSS files for styling the application.

### Good Practices Implemented

- Component decomposition for better maintainability.
- Proper folder structure to organize code.
- Use of functional components and React hooks.
- Following DRY (Don't Repeat Yourself) and clean code principles.
- Error handling for scenarios like empty book lists or failed searches.

## How to Run the Project

1. Clone the repository:
   ```
   git clone https://github.com/jay-chand-ra/virtualLibrary.git
   ```

2. Navigate to the project directory:
   ```
   cd virtualLibrary
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Additional Information

For more details about the project structure, components, and functionality, please refer to the comments in the source code files.

## Contact

For any queries or suggestions, please feel free to reach out to Jaya Chandra at [boyajaychandra@gmail.com].

## Deployment

This project is set up to be deployed on GitHub Pages. To deploy:

1. Ensure all your changes are committed and pushed to the main branch.

2. Run the following command:
   ```
   npm run deploy
   ```

3. GitHub Actions will automatically build and deploy your site to the `gh-pages` branch.

4. Your site will be available at: https://jay-chand-ra.github.io/virtualLibrary

Note: Make sure your repository settings have GitHub Pages set to deploy from the `gh-pages` branch.
