const express = require('express');
const router = express.Router();
const controller = require('../controllers/livrosController');

router.post("/", controller.createLivros);
router.put("/:id", controller.updateLivros);
router.delete("/:id", controller.deleteLivros);
router.patch("/:id/read", controller.updateReadStatus);
router.get("/:id", controller.getLivros);
router.get("/", controller.getAllLivros);
//router.get("/:title", controller.getByTitle);


module.exports = router;