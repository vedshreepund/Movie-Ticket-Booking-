const Movie = require("../models/Movie");
const Fuse = require("fuse.js");

const searchMovie = async (req, res)=>{
  try{
    const search = req.query.q||"";

    if(!search.trim()){
      return res.status(200).json([]);
    };

    let movies = await Movie.find({
      title: {
        $regex: search,
        $options: "i"
      }
    }).limit(10);

    if( movies.length == 0 ){

      const allMovies = await Movie.find();

      const fuse = new Fuse(allMovies, {
        keys: ["title"],
        threshold: 0.4,
        minMatchCharLength: 2
      });

      const fuzzyResult = fuse.search(search);
      movies = fuzzyResult.map( result => result.item).slice(0, 10);

    }

    return res.status(200).json(movies);

  }
  catch(error){
    return res.status(500).json({
      message: error.message
    });
  }
}

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

  module.exports = {searchMovie, createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie  };
  

  

