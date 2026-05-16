const express = require("express");
const { protect, adminAccess, theatreAccess } = require("../middleware/authMiddleware");
const { createScreen, getAllScreens, getScreenById, updateScreen, deleteScreen } = require("../controllers/screenController");

const router = express.Router();

router.get("/", getAllScreens );
router.get("/:id", getScreenById );
router.post("/", protect, theatreAccess, createScreen);
router.put("/:id", protect, theatreAccess, updateScreen);
router.delete("/:id", protect, theatreAccess, deleteScreen);

module.exports = router;