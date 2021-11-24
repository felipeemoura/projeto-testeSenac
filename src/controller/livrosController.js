const livros = require('../models/livros.json');
const fs = require("fs");

  const getAllLivros = (req, res) => {
      console.log(req.url);
      res.status(200).send(livros);
  };

  module.exports = {

  }


const createLivros = (req, res) => {
    const { id, title, pages, year, author } = req.body;
    livros.push({ id, title, pages, year, author });
    fs.writeFile("./src/models/livros.json", JSON.stringify(livros), 'utf8', function (err) { // gravando novo filme no array de filmes
        if (err) {
            res.status(500).send({ message: err });
        } else {
            console.log("Arquivo atualizado com sucesso!");
            const livrosFound = livros.find(livros => livros.id == id); // recupero o filme que foi criei no array de filmes      
            res.status(200).send(livrosFound);
        }
    })
}

module.exports = {
    createLivros,
    getAllLivros,
}
