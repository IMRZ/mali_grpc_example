const path = require("path");

const BOOK_SERVICE_PROTO_PATH = path.resolve(__dirname, "../../../proto/BookService.proto");

const books = [
  { name: "Expert Trying Until it Works", authorId: 1 },
];

module.exports = (app) => {
  app.addService(BOOK_SERVICE_PROTO_PATH);

  app.use("BookService", "getBook", async (ctx) => {
    try {
      const { id } = ctx.req;
      const book = books[id];

      if (!book) throw new Error(`invalid book id: ${id}`);

      ctx.res = book;
    } catch (error) {
      console.log(error);
    }
  });
};
