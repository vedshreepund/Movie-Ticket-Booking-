const jwt = require("jsonwebtoken");

const protect = async (req, res, next )=> {
  try{
  let token;

  if( req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    token = req.headers.authorization.split(" ")[1];

  const decoded = jwt.verify( token, process.env.JWT_SECRET_KEY );

  req.user = decoded;
  next();
  }

  else{
    return res.status(401).json({
      message: "No tokens"
    })
  }
  }
    catch(error){
     return res.status(401).json({
        message: "Invalid Token"
      })
    }
};

const adminAccess = ( req, res, next )=>{
  if( req.user.role != "admin" ){
    return res.status(403).json({
      message: "Admin access only"
    });
  }
  next();
};

const theatreAccess = (req, res, next )=>{
  if( req.user.role != "theatreAdmin" ){
    return res.status(403).json({
      message: "Theatre Management Access Only"
    });
  }
  next();
}

module.exports = {protect, adminAccess, theatreAccess};
