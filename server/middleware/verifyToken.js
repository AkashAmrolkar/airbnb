const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = async(req, res, next) =>{
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - No token provided' });
    }
  
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });
      }
  
      req.userId = decoded.userId;
      req.email = decoded.email;
      next();
    });
  }

  