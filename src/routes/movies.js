const router = require("express").Router();

const movieController = require("../controllers/moviesController");

router.get("/", movieController.list);
router.post("/add", movieController.save);
router.get("/update/:id", movieController.edit);
router.post("/update/:id", movieController.update);
router.get("/delete/:id", movieController.delete);

module.exports = router;
