const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let books = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/health', (req, res) => {
    res.sendStatus(200);
});

app.post('/book', (req, res) => {
    const book = req.body;

    console.log(book);
    books.push(book);

    res.sendStatus(201);
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

app.delete('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    books = books.filter(i => i.isbn !== isbn);

    res.send('Book deleted');
});

app.put('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const newBook = req.body;

    let found = false;
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        if (book.isbn === isbn) {
            books[i] = newBook;
            found = true;
        }
    }

    if (!found) {
        res.status(404).send('Book not found');
        return;
    }

    res.send('Book updated');
});

app.listen(port, () => console.log(`Book app listening on port ${port}`));