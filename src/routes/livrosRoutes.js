const express = require('express');
const router = express.Router();
const controller = require('../controller/livrosController');

router.get("/", controller.getAllLivros);
router.post("/", controller.createLivros);
router.get("/:title", controller.getByTitle);
router.get("/:id", controller.getLivros);


module.exports = router;