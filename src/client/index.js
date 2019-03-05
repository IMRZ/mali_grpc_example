const path = require("path");

const BOOK_SERVICE_PROTO_PATH = path.resolve(__dirname, "../../proto/BookService.proto");
const AUTHOR_SERVICE_PROTO_PATH = path.resolve(__dirname, "../../proto/AuthorService.proto");

const grpc = require("grpc");
const protoLoader = require('@grpc/proto-loader');

function bookServiceClient() {
  const packageDefinition = protoLoader.loadSync(BOOK_SERVICE_PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });

  const book = grpc.loadPackageDefinition(packageDefinition).book;

  return new book.BookService("localhost:50051", grpc.credentials.createInsecure());
}

function authorServiceClient() {
  const packageDefinition = protoLoader.loadSync(AUTHOR_SERVICE_PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });

  const author = grpc.loadPackageDefinition(packageDefinition).author;

  return new author.AuthorService("localhost:50051", grpc.credentials.createInsecure());
}

const bookClient = bookServiceClient();
const authorClient = authorServiceClient();

bookClient.getBook({ id: 0 }, (err, response) => {
  console.log(response);

  authorClient.getAuthor({ id: response.author_id }, (err, response) => {
    console.log(response);
  });
});
