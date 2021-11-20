const livros = require("..model/livro.json");

  const getAll = (req, res) => {
      console.log(req.url);

      res.send(livros);

  };

  module.exports = { getAll };
