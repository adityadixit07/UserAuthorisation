import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
      res
        .status(403)
        .json({ message: "Token is compulsory for authentication" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
  return next();
};
