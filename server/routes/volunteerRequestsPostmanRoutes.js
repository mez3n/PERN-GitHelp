// const express = require("express");
// const volunteerRequestsPostmanController = require("../controllers/volunteerRequestsPostmanController");
// const volunteerRequestsPostmanValidations = require("../models/volunteerRequestsPostmanValidations");
// const handleValidationErrors = require("../middlewares/handleValidationErrors");
// const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
//   isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
// const router = express.Router();
// const authMiddleware = require("../middlewares/auth.middleware.js");
// // Create a new volunteer-requests-postman
// router.post(
//   "/",
//   volunteerRequestsPostmanValidations,
//   handleValidationErrors,
//   authMiddleware,
//   isVolunteerMiddleware,
//   volunteerRequestsPostmanController.createVolunteerRequestsPostman
// );

// module.exports = router;
