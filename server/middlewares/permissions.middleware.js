const pool = require("../DB/db.js");


const isAdminMiddleware = async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  id = req.body.user.uid;
  const user = await pool.query("select type from users where uid =$1", [
    id,
  ]);
  const type = user.rows[0].type;
  if(type!="admin") {
    return res.status(403).json({ error: "Forbidden. You are not an admin." });
  }
  next();
};

const isVolunteerMiddleware = async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  id = req.body.user.uid;
  const user = await pool.query("select type from users where uid= $1", [
    id,
  ]);
  const type = user.rows[0].type;
  if(type!="volunteer") {
    return res.status(403).json({ error: "Forbidden. You are not a volunteer." });
  }
  next();
};
const isPatientMiddleware = async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  id = req.body.user.uid;
  const user = await pool.query("select type from users where uid= $1", [
    id,
  ]);
  const type = user.rows[0].type;
  if(type!="patient") {
    return res.status(403).json({ error: "Forbidden. You are not a patient." });
  }
  next();
};
const isOrganizationMiddleware = async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  id = req.body.user.uid;
  const user = await pool.query("select type from users where uid= $1", [
    id,
  ]);
  const type = user.rows[0].type;
  if(type!="organization") {
    return res.status(403).json({ error: "Forbidden. You are not an organization." });
  }
  next();
};
const isPatientOrRepresentativeMiddleware = async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  id = req.body.user.uid;
  const user = await pool.query("select type from users where uid= $1", [
    id,
  ]);
  const type = user.rows[0].type;
  if(type!="patient"||type!="representative") {
    return res.status(403).json({ error: "Forbidden. You are not a Patient or a Representative" });
  }
  next();
};

const isRepresentativeMiddleware = async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  id = req.body.user.uid;
  const user = await pool.query("select type from users where uid= $1", [
    id,
  ]);
  const type = user.rows[0].type;
  if(type!="representative") {
    return res.status(403).json({ error: "Forbidden. You are not a representative." });
  }
  next();
};

const isGroupAdmin=async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  aid = req.body.user.uid;
  gid = req.body.gid;   // will need to be updated
  const gp_admin = await pool.query("select * from admin_manages_groups where A_ID=$1 and GID=$2", [
    aid,gid
  ]);
  if(gp_admin.rows==0)
  {
    return res.status(403).json({ error: "you are not an admin in this group" });
  }
  next();
};

const isPostmanMiddleware=async (req, res, next) => {
  if (!req.body.user) {
    return res.status(401).json({ error: "Unauthorized. You need to login." });
  }
  id = req.body.user.uid;
  const user = await pool.query("select type from users where uid= $1", [
    id,
  ]);
  const type = user.rows[0].type;
  if(type!="postman") {
    return res.status(403).json({ error: "Forbidden. You are not a postman." });
  }
  next();
};
module.exports = {
  isOrganizationMiddleware,
  isPatientMiddleware,
  isPatientOrRepresentativeMiddleware,
  isVolunteerMiddleware,
  isAdminMiddleware,
  isRepresentativeMiddleware,
  isGroupAdmin
};
