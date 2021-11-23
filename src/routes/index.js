const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send({
        titulo: 'Livros para ler e se tornar um Einstein',
        data: "19/11/2021"
    })
})

module.exports = router;