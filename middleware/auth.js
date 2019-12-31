// const config = require("config");
// const jwt = require("jsonwebtoken");

// function auth(req, res, next) {
//   const token = req.header("x-auth-token");

//   //check for token
//   if (!token) {
//     res.status(401).json({ msg: "No token,authorization denied" });
//   }
//   try {
//     //verify token
//     const decoded = jwt.verify(token, config.get("jwtSecret"));
//     //Add user from payload
//     req.user = decoded;
    
//     next();
//   } catch (err) {
//     res.status(400).json({ msg: "Token is not Valid", error: err });
//   }
// }
// module.exports = auth;


const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  // Check for token
  if (!token)
    return res.status(401).json({ msg: 'No token, authorizaton denied' });

  try {
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}

module.exports = auth;