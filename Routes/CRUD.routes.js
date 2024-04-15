const { getcontroller, postcontroller, deletecontroller, updatecontroller } = require("../Controller/CRUD.controller");

const router = require("express").Router();

router.get("/", getcontroller);
router.post("/", postcontroller);
router.delete("/:id", deletecontroller);
router.put("/:id", updatecontroller);

module.exports = router;