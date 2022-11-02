import createError from "../Errors/createError.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
   const token = req.cookies.access_token;
     if (!token) return next(createError(401, "your not authenticated"));
       jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "token is not valid"));
        req.user = user;
        next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || isAdmin) {
      next();
    } else {
      return next(createError(403, "your not authorized"));
    }
  });
};
