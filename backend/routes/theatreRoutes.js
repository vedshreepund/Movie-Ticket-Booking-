const express = require("express");
const { protect, adminAccess } = require("../middleware/authMiddleware");
const { createTheatre, getAllTheatres, getTheatreById, updateTheatre, deleteTheatre } = require("../controllers/theatreController");

const router = express.Router();

router.get("/", getAllTheatres );
router.get("/:id", getTheatreById );
router.post("/", protect, adminAccess, createTheatre );
router.put("/:id", protect, adminAccess, updateTheatre );
router.delete("/:id", protect, adminAccess, deleteTheatre );

module.exports = router;