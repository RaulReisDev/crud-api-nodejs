const router = require("express").Router();

// Import CRUD Controller
const crudController = require("../controllers/crudController");

// get all
router.get("/", crudController.getAll);

// get details
router.get("/:uuid", crudController.getDetails);

// post
router.post("/", crudController.create);

// patch
router.patch("/:uuid", crudController.patch);

// delete
router.delete("/:uuid", crudController.destroy);

module.exports = router;