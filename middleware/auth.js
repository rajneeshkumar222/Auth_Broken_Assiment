const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const secret = process.env.JWT_SECRET || "default-secret-key";

    const token = authHeader.replace("Bearer ", "");
    const decoded = jwt.verify(token, secret);

    req.user = decoded;
  //  Sir next was missing -> Fix sir  
    next(); 
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
