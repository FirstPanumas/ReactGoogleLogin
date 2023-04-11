const express = require("express");
const router = express.Router();

const {
  createAndupdateUser,
} = require("../Controllers/authController");

router.get("/auth", createAndupdateUser);

module.exports = router;
