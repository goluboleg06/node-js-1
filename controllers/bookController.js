const bookService = require('../services/bookService');
const { validateBookData } = require('../helpers/bookHelper');

// Отримати всі книги
function getAllBooks(req, res) {
  res.json(bookService.getAllBooks());
}

// Отримати книгу за ID
function getBookById(req, res) {
  const book = bookService.getBookById(parseInt(req.params.id));
  if (!book) return res.status(404).send("Книга не знайдена");
  res.json(book);
}

// Створити нову книгу
function createBook(req, res) {
  if (!validateBookData(req.body)) {
    return res.status(400).send("Некоректні дані");
  }
  const newBook = bookService.createBook(req.body);
  res.status(201).json(newBook);
}

// Оновити книгу
function updateBook(req, res) {
  const book = bookService.updateBook(parseInt(req.params.id), req.body);
  if (!book) return res.status(404).send("Книга не знайдена");
  res.json(book);
}

// Видалити книгу
function deleteBook(req, res) {
  const book = bookService.deleteBook(parseInt(req.params.id));
  if (!book) return res.status(404).send("Книга не знайдена");
  res.json(book);
}

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };