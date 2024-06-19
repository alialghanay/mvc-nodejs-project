const express = require("express");
const deleteAllStudents = require("../controllers/delete-all-student");

const router = express.Router();
router.post("/", deleteAllStudents.deleteAllStudents);

module.exports = router;
