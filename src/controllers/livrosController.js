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



/*const getByTitle = (req, res) => {
    const livrosTitle = req.params.title;
    const livrosFound = livros.find((livros) => livros.title == livrosTitle);
    if (livrosFound) {
        res.status(200).send(livrosFound)
    } else {
        res.status(404).send("Título não encontrado.")
    }
}*/

const updateLivros = (req, res) => {
    try {
        const livrosId = req.params.id
        const livrosToUpdate = req.body //Pego o corpo da requisição com as alterações 

        const livrosFound = livros.find(livros => livros.id == livrosId) // separo o livro que irei atualizar      
        const livrosIndex = livros.indexOf(livrosFound) // separo o índice do livro no array de filmes

        if (livrosIndex >= 0) { // verifico se o livro existe no array de livros
            livros.splice(livrosIndex, 1, livrosToUpdate) //busco no array o livro, excluo o registro antigo e substituo pelo novo 
        } else {
            res.status(404).send({ message: "Livro não encontrado para ser atualizado" })
        }

        fs.writeFile("./src/models/livros.json", JSON.stringify(livros), 'utf8', function (err) { // gravo meu json de livros atualizado
            if (err) {
                res.status(500).send({ message: err }) // caso dê erro retorno status 500
            } else {
                console.log("Arquivo de livros atualizado com sucesso!")
                const livrosUpdated = livros.find(livros => livros.id == livrosId) // separo o livro que modifiquei no array
                res.status(200).send(livrosUpdated) // envio o livro modificado como resposta
            }
        })
    } catch (err) {
        res.status(500).send({ message: err }) // caso dê erro retorno status 500
    }
}

const updateReadStatus = (req, res) => {
    try {
        const livrosId = req.params.id
        const read = req.body.read

        const livrosToUpdate = livros.find(livros => livros.id == livrosId)
        const livrosIndex = livros.indexOf(livrosToUpdate)

        if (livrosIndex >= 0) {
            livrosToUpdate.read = read
            livros.splice(livrosIndex, 1, livrosToUpdate)
        } else {
            res.status(404).send({message:"Livro não encontrado para informar se foi assistido ou não"})
        }
        fs.writeFile("./src/models/livros.json", JSON.stringify(livros), 'utf8', function (err) {
            if (err) {
                res.status(500).send({message: err})
            } else {
                console.log("Arquivo atualizado com sucesso!")
                const livrosUpdated = livros.find((livros) => livros.id == livrosId)
                res.status(200).send(livrosUpdated)
            }
        })
    } catch (err) {
        res.status(500).send({message: err})
    }
}

const deleteLivros = (req, res) => {
    try {
        const livrosId = req.params.id
        const livrosFound = livros.find(livros => livros.id == livrosId) // encontro o livro pelo id
        const livrosIndex = livros.indexOf(livrosFound) // identifico o índice do livro no meu array

        if (livrosIndex >= 0) { // verifico se o livro existe no array de filmes
            livros.splice(livrosIndex, 1) // removo o livro pelo índice
        } else {
            res.status(404).send({ message: "Livro não encontrado para ser deletado" })
        }

        fs.writeFile("./src/models/livros.json", JSON.stringify(livros), 'utf8', function (err) { // gravo meu array de filmes sem o filme que deletei
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("Livro deletado com sucesso do arquivo!")
                res.sendStatus(204)
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Erro ao deletar o livro" })
    }
}

module.exports = {
    createLivros,
    deleteLivros,
    updateLivros,
    updateReadStatus,
    getLivros,
    getAllLivros,
}