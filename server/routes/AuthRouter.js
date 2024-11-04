const { signUp, login } = require("../controllers/authController"); // Make sure the path is correct
const {
  signUpValidation,
  loginValidation,
} = require("../middlewares/AuthMiddleware");
const upload = require("../models/fileUpload");

const router = require("express").Router();

router.post(
  "/signup",
  upload.single("profilePicture"),
  signUpValidation,
  signUp
);

router.post("/login", loginValidation, login);

module.exports = router;
