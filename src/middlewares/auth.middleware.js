/**
 * The `auth` function is a middleware that verifies the token in the request cookies and sets the
 * `req.user` property to the decoded user object if the token is valid.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters. It is an object
 * that is automatically passed to the middleware function by the Express framework.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, sending JSON data, or redirecting the client to a different URL.
 * @param next - The `next` parameter is a function that is used to pass control to the next middleware
 * function in the request-response cycle. It is typically called at the end of the current middleware
 * function to indicate that it has completed its processing and the next middleware function should be
 * called.
 * @returns The code is returning a middleware function named "auth".
 */
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const auth = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      if (error) return res.status(401).json({ message: "Token is not valid" });

      req.user = user

      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
