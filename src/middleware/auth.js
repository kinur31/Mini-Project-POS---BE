const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) return res.status(500).send("Access Denied");

    token = token.split(" ")[1];

    if (token === "null" || !token)
      return res.status(500).send("Unauthorized Token");

    let verifiedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verifiedUser) return res.status(500).send("Unauthorized token");

    req.user = verifiedUser;
    next();
  } catch (err) {
    return res.status(500).send("Invalid Token");
  }
};

const checkRoles = (req, res, next) => {
  try {
    if (req.user.role_id === 1) {
      next();
    } else {
      return res.status(500).send("Unauthorized");
    }
  } catch (err) {
    return res.status(500).send("Unauthorized");
  }
};

module.exports = {
  verifyToken,
  checkRoles,
};
