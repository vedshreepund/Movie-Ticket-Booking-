const Show = require("../models/Show");

const createShow = async (req, res )=>{
    try{
        const show = await Show.create(req.body);
        return res.status(200).json({
            message: "Show registerd successfully",
            show
        });
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
};

const getAllShows = async (req, res)=>{
    try{
        const shows = await Show.find();
        return res.status(200).json(shows);
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
};

const getShowById = async (req, res)=>{
    try{
        const show = await Show.findById(req.params.id);
        return res.status(200).json(show);
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

const updateShow = async (req, res)=>{
    try{
        const show = await Show.findByIdAndUpdate(req.params.id);
        if(!show){
            return res.status(404).json({
                message: "Show not found"
            });

        }
        return res.status(200).json({
            message: "Show updated successfully"
        });
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
};

const deleteShow = async (req, res)=>{
    try{
        const show = await Show.findByIdAndDelete(req.params.id);
        if(!show){
            return res.status(404).json({
                message: "Show not found"
            });

        }
        return res.status(200).json({
            message: "Show deleted successfully"
        });
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { createShow, getAllShows, getShowById, updateShow, deleteShow };