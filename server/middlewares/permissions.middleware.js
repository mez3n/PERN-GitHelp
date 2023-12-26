const db = require("../db/connection");

const isvolunteerMiddleware = async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  id = req.body.user.uid;
  const volunteer = await db.query("select * from volunteer where uid $1", [
    id,
  ]);
  if (volunteer.length != 0) {
    next();
  } else {
    return res.status(403).json({ error: "Forbidden. You are not a volunteer." });
  }
};
const isPatientMiddleware = async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  id = req.body.user.uid;
  const patient = await db.query("select * from patient where uid $1", [
    id,
  ]);
  if (patient.length != 0) {
    next();
  } else {
    return res.status(403).json({ error: "Forbidden. You are not a patient." });
  }
};
const isOrganizationMiddleware = async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  id = req.body.user.uid;
  const organization = await db.query("select * from organization where uid= $1", [
    id,
  ]);
  
  if (organization.length != 0) {
    next();
  } else {
    return res.status(403).json({ error: "Forbidden. You are not an organization." });
  }
};
const isVolunteerOrPatientMiddleware = async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  id = req.body.user.uid;
  const volunteer = await db.query("select * from volunteer where uid $1", [
    id,
  ]);
  if (volunteer.length != 0) {
    next();
  } else {
    const patient = await db.query("select * from patient where uid $1", [
      id,
    ]);
    if (patient.length != 0) {
      next();
    } else {
      return res.status(403).json({ error: "Forbidden. You are not a patient or a volunteer." });
    }
  }
};
module.exports = {
  isOrganizationMiddleware,
  isPatientMiddleware,
  isVolunteerOrPatientMiddleware,
  isvolunteerMiddleware
};
