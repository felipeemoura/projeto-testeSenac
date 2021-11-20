const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: 'Livros para ler e se tornar um Einstein',
        data: "19/11/2021"
    })
})
module.exorts = router; ''