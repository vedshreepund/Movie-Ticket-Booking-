const express = require("express");
const { protect, adminAccess } = require("../middleware/authMiddleware");
const {createMovie, getAllMovies, getMovieById, updateMovie,  deleteMovie } = require("../controllers/movieController");

const router = express.Router();

router.get("/", getAllMovies );
router.get("/:id", getMovieById );
router.post("/", protect, adminAccess, createMovie );
router.put("/:id", protect, adminAccess, updateMovie );
router.delete("/:id", protect, adminAccess, deleteMovie );

module.exports = router;




