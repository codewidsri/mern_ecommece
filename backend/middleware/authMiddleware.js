const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
      if (!decoded || !decoded.id) {
        return res.status(401).json({ message: "Invalid token, ID missing" });
      }
      // Use mongoose.Types.ObjectId to ensure the ID is in ObjectId format
      const user = await User.findById(decoded.id).select('-password'); // Find user by ID
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      req.user = user; // Assign the user to req.user
      next(); // Continue to the next middleware or route handler
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
});

module.exports = { protect };