  const books = require('../helpers/bookHelper')
  function getAllBooks() {
    return books;
  }
  
  function getBookById(id) {
    return books.find(b => b.id === id);
  }
  
  function createBook(book) {
    book.id = books.length + 1;
    books.push(book);
    return book;
  }
  
  function updateBook(id, newBookData) {
    const book = getBookById(id);
    if (book) {
      Object.assign(book, newBookData);
      return book;
    }
    return null;
  }
  
  function deleteBook(id) {
    const index = books.findIndex(b => b.id === id);
    if (index !== -1) {
      return books.splice(index, 1)[0];
    }
    return null;
  }
  
  module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };