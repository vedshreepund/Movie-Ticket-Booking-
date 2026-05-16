const express = require("express");
const { createShow, getAllShows, getShowById, updateShow, deleteShow } = require("../controllers/showController");
const { protect, adminAccess, theatreAccess } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllShows );
router.get("/:id", getShowById );
router.post("/", protect, theatreAccess, createShow );
router.put("/:id", protect, theatreAccess, updateShow );
router.delete("/:id", protect, theatreAccess, deleteShow );

module.exports = router;