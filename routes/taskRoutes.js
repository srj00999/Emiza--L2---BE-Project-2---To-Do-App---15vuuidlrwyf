const express = require("express");

const { createTask, getdetailTask } = require("../controllers/taskControllers");

const router = express.Router();

router.post("/create", createTask);
router.get("/detail", getdetailTask);

module.exports = router;