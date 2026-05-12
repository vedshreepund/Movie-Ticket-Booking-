const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res)=>{

try{
  const {name, email, password } = req.body;

  const exists = await User.findOne({email});

  if(exists){
    res.status(400).json({
      message : "User already registered"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const new_user = await  User.create({
    name,
    email,
    password: hashedPassword
  });

  res.status(200).json({
    message: "User registered successfully",
    new_user
  });
 }
 catch(error){
   res.status(500).json({
     message : error.message
   });
 } 
};

const loginUser = async (req, res)=>{
  try{
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if(!user){
    res.status(400).json({message: "Not registered email"});
  }

  const ismatch = await bcrypt.compare(password, user.password);

  if (!ismatch){
    res.status(400).json({message: "Incorrect password"});
  }

  const token = jwt.sign(
    {
      id : user._id,
      role: user.role
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn : "30d"
    }
  );

  res.status(200).json({
    message: "Login Successful",
    token
  });
  
 } catch(error){
   res.status(500).json({message: error.message });
 }
};

module.exports = { loginUser, registerUser };

