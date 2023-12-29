const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// require Routes
const adminGroupsRequestsRoutes = require("./routes/adminGroupsRequestsRoutes.js");
const adminManagesGroupsRoutes = require("./routes/adminManagesGroupsRoutes");
const adminRoutes = require("./routes/adminRoutes");
const eventsRoutes = require("./routes/eventsRoutes.js");
const groupCommentsRoutes = require("./routes/groupCommentsRoutes");
const groupPostsRoutes = require("./routes/groupPostsRoutes");
const groupRoutes = require("./routes/groupRoutes");
const groupUserRoutes = require("./routes/groupUserRoutes.js");
const groupsRequestsRoutes = require("./routes/groupsRequestsRoutes.js");
const imagesRoutes = require("./routes/imagesRoutes");
const messagesRoutes = require("./routes/messagesRoutes");
const milesstonesRoutes = require("./routes/milesstonesRoutes");
const ordersRoutes = require("./routes/ordersRoutes.js");
const organizationRoutes = require("./routes/organizationRoutes");
const patientHasTaskRoutes = require("./routes/patientHasTaskRoutes.js");
const patientJoinsGroupRoutes = require("./routes/patientJoinsGroupRoutes");
const patientRoutes = require("./routes/patientRoutes");
const personalCommentsRoutes = require("./routes/personalCommentsRoutes");
const personalPostRoutes = require("./routes/personalPostRoutes");
const postmanRoutes = require("./routes/postmanRoutes.js");
const repPatientGroupRoutes = require("./routes/repPatientGroupRoutes.js");
const representativesRoutes = require("./routes/representativesRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const tasksRoutes = require("./routes/tasksRoutes.js");
const userRoutes = require("./routes/userRoutes");
const volunteerApplyServiceRoutes = require("./routes/volunteerApplyServiceRoutes");
const volunteerRequestsPostmanRoutes = require("./routes/volunteerRequestsPostmanRoutes.js");
const volunteerRoutes = require("./routes/volunteerRoutes");
const authRouter = require("./routes/auth.route.js");
const authMiddleware = require("./middlewares/auth.middleware.js");

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
// Middleware
app.use(bodyParser.json());

// Routes
app.use("/auth", authRouter);
app.use("/adminManagesGroups", adminManagesGroupsRoutes);
app.use("/admin", adminRoutes);
app.use("/groupComments", groupCommentsRoutes);
app.use("/groupPosts", groupPostsRoutes);
app.use("/groupsRequests", groupsRequestsRoutes);
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
app.use("/groupUser", groupUserRoutes);
app.use("/users", userRoutes);
app.use("/volunteerApplyService", volunteerApplyServiceRoutes);
app.use("/volunteer", volunteerRoutes);
app.use("/adminGroupsRequests", adminGroupsRequestsRoutes);
app.use("/volunteerRequestsPostman", volunteerRequestsPostmanRoutes);
app.use("/tasks", tasksRoutes);
app.use("/repPatientGroup", repPatientGroupRoutes);
app.use("/postman", postmanRoutes);
app.use("/patientHasTask", patientHasTaskRoutes);
app.use("/orders", ordersRoutes);
app.use("/events", eventsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
