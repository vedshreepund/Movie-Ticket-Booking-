const Screen = require("../models/Screen");

const createScreen = async (req, res)=>{
    try{
        const screen = await Screen.create(req.body);
        return res.status(200).json({
            message: "Screen registered successfully",
            screen
        })
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
};

const getAllScreens = async (req, res)=>{
    try{
        const screens = await Screen.find();
        return res.status(200).json(screens);
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
};

const getScreenById = async (req, res)=>{
    try{
        const screen = await Screen.findById(req.params.id);
        return res.status(200).json(screen);
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
};

const updateScreen = async (req, res)=>{
    try{
        const screen = await Screen.findByIdAndUpdate(req.params.id);
        if(!screen){
            return res.status(404).json({
                message: "screen not found"
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
};

const deleteScreen = async (req, res)=>{
    try{
        const screen = await Screen.findByIdAndDelete(req.params.id);
        if(!screen){
            return res.status(404).json({
                message: "screen not found"
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
};
module.exports = { createScreen, getAllScreens, getScreenById, updateScreen, deleteScreen };