const express = require("express");
const { protect, adminAccess, theatreAccess } = require("../middleware/authMiddleware");
const {searchMovie, createMovie, getAllMovies, getMovieById, updateMovie,  deleteMovie } = require("../controllers/movieController");

const router = express.Router();

router.get("/search", searchMovie);
router.get("/", getAllMovies );
router.get("/:id", getMovieById );
router.post("/", protect, theatreAccess, createMovie );
router.put("/:id", protect, theatreAccess, updateMovie );
router.delete("/:id", protect, theatreAccess, deleteMovie );

module.exports = router;




