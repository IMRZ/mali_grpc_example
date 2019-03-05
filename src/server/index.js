const Mali = require("mali");

const BookService = require("./book/BookService");
const AuthorService = require("./author/AuthorService");

const app = new Mali();

BookService(app);
AuthorService(app);

app.start("127.0.0.1:50051");
