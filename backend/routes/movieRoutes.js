const express = require("express");
const { protect, adminAccess, theatreAccess } = require("../middleware/authMiddleware");
const {createMovie, getAllMovies, getMovieById, updateMovie,  deleteMovie } = require("../controllers/movieController");

const router = express.Router();

router.get("/", getAllMovies );
router.get("/:id", getMovieById );
router.post("/", protect, theatreAccess, createMovie );
router.put("/:id", protect, theatreAccess, updateMovie );
router.delete("/:id", protect, theatreAccess, deleteMovie );

module.exports = router;




