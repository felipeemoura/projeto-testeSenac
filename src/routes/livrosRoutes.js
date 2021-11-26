const express = require('express');
const router = express.Router();
const controller = require('../controllers/livrosController');

router.get("/", controller.getAllLivros);
router.post("/", controller.createLivros);
router.get("/:title", controller.getByTitle);
router.get("/:id", controller.getLivros);
router.put("/:id", controller.updateLivros);


module.exports = router;