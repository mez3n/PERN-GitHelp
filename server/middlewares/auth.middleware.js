
const jwt = require('jsonwebtoken');
const pool = require('../DB/db.js');
const authMiddleware = async (req, res, next) => {
// Get the token from the authorization header
const authHeader = req.headers.authorization;
// Check if the token exists
if (!authHeader) {
return res.status(401).json({ error: "No token provided" });
}
// Check if the authorization header is in the correct format. "Bearer <token>"
if (!authHeader.startsWith("Bearer") || authHeader.split(" ").length !== 2) {
return res.status(401).json({ error: "Invalid token" });
}
// Get the token from the authorization header
const token = authHeader.split(" ")[1];
try {
// Verify the token and get the user's id from it
const { id } = jwt.verify(token, process.env.JWT_SECRET);
// Get the user from the database
const user= await pool.query("select * from users where uid=$1",[id]);
// Check if the user exists
if (user.length==0) {
return res.status(404).json({ error: "User not found" });
}
// Attach the user to the request object
req.body.user = user.rows[0];
// Call the next middleware

next();
} catch (err) {
console.log(err);
if (err.name === "TokenExpiredError") {
return res.status(401).json({ error: "Your token has expired. Please log in again." });
}
res.status(401).json({ error: "Invalid token" });
}
};
module.exports = authMiddleware ;