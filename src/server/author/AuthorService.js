const path = require("path");

const AUTHOR_SERVICE_PROTO_PATH = path.resolve(__dirname, "../../../proto/AuthorService.proto");

const authors = [
  { name: "Johnny 5" },
  { name: "O'Rly" }
];

module.exports = (app) => {
  app.addService(AUTHOR_SERVICE_PROTO_PATH);

  app.use("AuthorService", "getAuthor", async (ctx) => {
    try {
      const { id } = ctx.req;
      const author = authors[id];

      if (!author) throw new Error(`invalid author id: ${id}`);

      ctx.res = author;
    } catch (error) {
      console.log(error);
    }
  });
};

