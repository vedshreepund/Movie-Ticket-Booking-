const Movie = require("../models/Movie");

const createMovie = async (req, res)=>{
  try{
    const movie = await Movie.create(req.body);

    return res.status(200).json({
      message: "Movie registered",
      movie
    });
  }catch(error){
    return res.status(500).json({
      message: error.message
    });
  }
  };

  const getAllMovies = async (req, res)=>{
    try {
      const movies = await Movie.find();

      return res.status(200).json(movies);
    }
    catch(error){
      return res.status(500).json({
        message: error.message
      });
    }
  };

  const getMovieById = async (req, res)=>{
    try {
      const movie = await Movie.findById(req.params.id);

      if(!movie){
        return res.status(404).json({
          message: "Movie Not Found"
        });
      }

      res.status(200).json(movie);
    }
    catch(error){
      return res.status(500).json({
        message: error.message
      });
    }
  };

  const updateMovie = async (req, res)=>{

    try{
    const movie = await Movie.findByIdAndUpdate( req.params.id, req.body, { new : true } );
    
    if(!movie){
      return res.status(404).json({
        message: "Movie not found"
      });
    }

    return res.status(200).json(movie);

    }
    catch(error){
      return res.status(500).json({
        message: error.message
      });
    }
  };

  const deleteMovie = async (req, res)=>{
    try{
      const movie = await Movie.findByIdAndDelete( req.params.id );

      if(!movie){
        return res.status(404).json({
          message: "Movie not found"
        });
      }
      return res.status(200).json({
        message: "Movie deleted successfully"
      });
    }
    catch(error){
      return res.status(500).json({
        message: error.message
      });
    }
  };

  module.exports = {createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie  };
  

  

