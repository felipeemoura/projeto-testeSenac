const livros = require('../models/livros.json');
const fs = require("fs");

const getAllLivros = (req, res) => {
    console.log(req.url);
    res.status(200).send(livros);
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



const getLivros = (req, res) => {
    const livrosId = req.params.id
    const livrosFound = livros.find((livros) => livros.id == livrosId)
    if (livrosFound) {
        res.status(200).send(livrosFound)
    } else {
        res.status(404).send({ message: "Livro não encontrado." })
    }
}



const getByTitle = (req, res) => {
    const livrosTitle = req.params.title;
    const livrosFound = livros.find((livros) => livros.title == livrosTitle);
    if (livrosFound) {
        res.status(200).send(livrosFound)
    } else {
        res.status(404).send("Título não encontrado.")
    }
}

module.exports = {
    getByTitle,
    getLivros,
    createLivros,
    getAllLivros,
}