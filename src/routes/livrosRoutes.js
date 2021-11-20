const express = require('express');
const router = express.Router();
const controller = require('../controller/livrosController');

router.get("/", controller.getAll);
router.get("/livros", controller.getAll);

module.exports = router;