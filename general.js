const axios = require('axios');

// Base URL of your backend server
const BASE_URL = 'http://localhost:5000'; // Replace with your actual backend URL

/**
 * Retrieves all books from the database.
 */
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching all books:", error);
        throw error;
    }
}

/**
 * Retrieves books by ISBN.
 */
async function getBooksByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching book with ISBN ${isbn}:`, error);
        throw error;
    }
}

/**
 * Retrieves books by Author.
 */
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/author/${author}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching books by author ${author}:`, error);
        throw error;
    }
}

/**
 * Retrieves books by Title.
 */
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/title/${title}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching books with title ${title}:`, error);
        throw error;
    }
}

module.exports = {
    getAllBooks,
    getBooksByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
