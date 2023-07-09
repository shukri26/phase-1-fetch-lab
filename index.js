// index.js

// Import the fetch function from a library or use a polyfill
const fetch = require('node-fetch');

function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books';

  // Send the fetch request
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      return response.json();
    })
    .then(data => {
      // Process the fetched data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}

fetchBooks(); // Call the fetchBooks function
