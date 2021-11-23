const livros = require('../models/livros.json');

  const getAllLivros = (req, res) => {
      console.log(req.url);
      res.status(200).send(livros)
  };

  module.exports = {
    getAllLivros,
  }
