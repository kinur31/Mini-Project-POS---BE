const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth");
const { uploadAvatarFile } = require("../middleware/multer");
const { uploadAvatarController } = require("../controller/userController");

router.patch("/upload-avatar/:id", uploadAvatarFile, uploadAvatarController);

module.exports = router;
