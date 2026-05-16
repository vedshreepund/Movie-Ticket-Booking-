const Theatre = require("../models/Theatre");

const createTheatre = async (req, res)=>{
  try{
    const theatre = await Theatre.create(req.body);

    return res.status(200).json({
      message: "Theatre registered",
      theatre
    });
  }catch(error){
    return res.status(500).json({
      message: error.message
    });
  }
  };

  const getAllTheatres = async (req, res)=>{
    try {
      const theatres = await Theatre.find();

      return res.status(200).json(theatres);
    }
    catch(error){
      return res.status(500).json({
        message: error.message
      });
    }
  };

  const getTheatreById = async (req, res)=>{
    try {
      const theatre = await Theatre.findById(req.params.id);

      if(!theatre){
        return res.status(404).json({
          message: "Theatre Not Found"
        });
      }

      return res.status(200).json(theatre);
    }
    catch(error){
      return res.status(500).json({
        message: error.message
      });
    }
  };

  const updateTheatre = async (req, res)=>{

    try{
    const theatre = await Theatre.findByIdAndUpdate( req.params.id, req.body, { new : true } );
    
    if(!theatre){
      return res.status(404).json({
        message: "Theatre not found"
      });
    }

    return res.status(200).json(theatre);

    }
    catch(error){
      return res.status(500).json({
        message: error.message
      });
    }
  };

  const deleteTheatre = async (req, res)=>{
    try{
      const theatre = await Theatre.findByIdAndDelete( req.params.id );

      if(!theatre){
        return res.status(404).json({
          message: "Theatre not found"
        });
      }
      return res.status(200).json({
        message: "Theatre deleted successfully",
        theatre
      });
    }
    catch(error){
      return res.status(500).json({
        message: error.message
      });
    }
  };

  module.exports = {createTheatre, getAllTheatres, getTheatreById, updateTheatre, deleteTheatre  };
  