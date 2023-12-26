const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./DB/db");
const dotenv = require('dotenv');
// require Routes
const adminManagesGroupsRoutes = require("./routes/adminManagesGroupsRoutes");
const adminRoutes = require("./routes/adminRoutes");
const chatsRoutes = require("./routes/chatsRoutes");
const groupCommentsRoutes = require("./routes/groupCommentsRoutes");
const groupPostsRoutes = require("./routes/groupPostsRoutes");
const groupRoutes = require("./routes/groupRoutes");
const imagesRoutes = require("./routes/imagesRoutes");
const messagesRoutes = require("./routes/messagesRoutes");
const milesstonesRoutes = require("./routes/milesstonesRoutes");
const organizationRoutes = require("./routes/organizationRoutes");
const patientJoinsGroupRoutes = require("./routes/patientJoinsGroupRoutes");
const patientRoutes = require("./routes/patientRoutes");
const personalCommentsRoutes = require("./routes/personalCommentsRoutes");
const personalPostRoutes = require("./routes/personalPostRoutes");
const profileRoutes = require("./routes/profileRoutes");
const representativesRoutes = require("./routes/representativesRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const userRoutes = require("./routes/userRoutes");
const volunteerApplyServiceRoutes = require("./routes/volunteerApplyServiceRoutes");
const volunteerJoinsGroupsRoutes = require("./routes/volunteerJoinsGroupsRoutes");
const volunteerRequestsRepresentativesRoutes = require("./routes/volunteerRequestsRepresentativesRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");
const authRouter = require('./routes/auth.route.js');
const authMiddleware = require('./middlewares/auth.middleware.js');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRouter);
app.use("/adminManagesGroups", adminManagesGroupsRoutes);
app.use("/admin", adminRoutes);
app.use("/chats", chatsRoutes);
app.use("/groupComments", groupCommentsRoutes);
app.use("/groupPosts", groupPostsRoutes);
app.use("/groups", groupRoutes);
app.use("/images", imagesRoutes);
app.use("/messages", messagesRoutes);
app.use("/milesstones", milesstonesRoutes);
app.use("/organization", organizationRoutes);
app.use("/patientJoinsGroup", patientJoinsGroupRoutes);
app.use("/patient", patientRoutes);
app.use("/personalComments", personalCommentsRoutes);
app.use("/personalPost", personalPostRoutes);
app.use("/representatives", representativesRoutes);
app.use("/service", serviceRoutes);
app.use("/groups", groupRoutes);
app.use("/profiles", profileRoutes);
app.use("/users", userRoutes);
app.use("/volunteerApplyService", volunteerApplyServiceRoutes);
app.use("/volunteerJoinsGroups", volunteerJoinsGroupsRoutes);
app.use(
  "/volunteerRequestsRepresentatives",
  volunteerRequestsRepresentativesRoutes
);
app.use("/volunteer", volunteerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
