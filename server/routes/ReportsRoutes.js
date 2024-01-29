const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
    isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const reportsController =require("../controllers/ReportsController.js")
const ReportRouter = Router();

ReportRouter.get("/users",authMiddleware,isAdminMiddleware,reportsController.getAllUsersGroupedByType);
ReportRouter.get("/orders",authMiddleware,isAdminMiddleware,reportsController.getAllOrdersorderdByDate);
ReportRouter.get("/services",authMiddleware,isAdminMiddleware,reportsController.getAllServicesGroupedByType);
ReportRouter.get("/patient/task",authMiddleware,isAdminMiddleware,reportsController.getCountOfTasksForEachPatient);
ReportRouter.get("/postmen",authMiddleware,isAdminMiddleware,reportsController.getCountOfPostmenOfEachOrganization);
ReportRouter.get("/events",authMiddleware,isAdminMiddleware,reportsController.getCountOfEventsOfeachOrganization);




module.exports = ReportRouter;
