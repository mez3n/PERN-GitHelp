
CREATE TABLE Images (
  image_id SERIAL PRIMARY KEY,
  image_data BYTEA
);

CREATE TABLE "Group" (
  GID SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,
  UNIQUE (name)
);

CREATE TABLE Users (
  uid SERIAL PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  bio TEXT NOT NULL,
  image_id INT,
  type varchar(50),
  FOREIGN KEY (image_id) REFERENCES Images(image_id) on DELETE restrict,
  UNIQUE (user_name)
);


CREATE table group_user(
  uid int PRIMARY KEY,
  FOREIGN KEY (uid) REFERENCES Users(uid) on DELETE restrict
);

-- CREATE TABLE Profile (
--   pfid SERIAL PRIMARY KEY,
--   uid INT NOT NULL,
--   FOREIGN KEY (uid) REFERENCES Users(uid)
-- );

CREATE TABLE Admin (
  uid INT PRIMARY KEY,
  FOREIGN KEY (uid) REFERENCES Users(uid) 
);

CREATE TABLE admin_manages_groups (
  A_ID INT NOT NULL,
  GID INT NOT NULL,
  PRIMARY KEY (A_ID, GID),
  FOREIGN KEY (A_ID) REFERENCES Admin(uid) on DELETE restrict,
  FOREIGN KEY (GID) REFERENCES "Group"(GID) on DELETE restrict
);

CREATE TABLE Patient (
  uid SERIAL PRIMARY KEY,
  FOREIGN KEY (uid) REFERENCES group_user(uid) on DELETE restrict
);

CREATE TABLE Organization (
  uid PRIMARY KEY,
  location TEXT NOT NULL,
  A_ID INT ,
  approved bit default 0,
  FOREIGN KEY (uid) REFERENCES Users(uid) on DELETE CASCADE ,
  FOREIGN KEY (A_ID) REFERENCES Admin(uid) on DELETE restrict
);

CREATE TABLE postman (
  p_id int PRIMARY KEY,
  oid INT NOT NULL,
  FOREIGN KEY (p_id) REFERENCES users(uid) on DELETE CASCADE,
  FOREIGN KEY (oid) REFERENCES Organization(uid) on DELETE restrict
);

-- CREATE TABLE Chats (
--   chid SERIAL NOT NULL,
--   GID INT NOT NULL,
--   PRIMARY KEY (chid, GID),
--   FOREIGN KEY (GID) REFERENCES "Group"(GID)
-- );

CREATE TABLE personal_posts (
  ppid SERIAL NOT NULL,
  date TIMESTAMP NOT NULL,
  text TEXT NOT NULL,
  uid INT NOT NULL,
  image_id INT,
  PRIMARY KEY (ppid, uid),
  FOREIGN KEY (image_id) REFERENCES Images(image_id) on DELETE restrict,
  FOREIGN KEY (uid) REFERENCES users(uid) on DELETE restrict
);

CREATE TABLE milestones (
  msid SERIAL PRIMARY KEY,
  streak INT NOT NULL,
  uid INT NOT NULL,
  GID INT NOT NULL,
  FOREIGN KEY (uid) REFERENCES Patient(uid) on DELETE restrict,
  FOREIGN KEY (GID) REFERENCES "Group"(GID) on DELETE restrict
);

CREATE TABLE personal_comments (
  date TIMESTAMP NOT NULL,
  text TEXT NOT NULL,
  pcid SERIAL,
  ppid INT NOT NULL,
  post_owner_uid INT NOT NULL,
  commenter_uid INT NOT NULL,
  PRIMARY key (ppid,pcid),
  FOREIGN KEY (ppid, post_owner_uid) REFERENCES personal_posts(ppid, uid) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (commenter_uid) REFERENCES Users(uid) on DELETE restrict
);


CREATE TABLE events(
  eid SERIAL NOT NULL,
  content TEXT NOT NULL,
  event_owner_id INT NOT NULL,
  image_id INT,
  PRIMARY KEY (eid, event_owner_id),
  FOREIGN KEY (image_id) REFERENCES Images(image_id) on DELETE restrict,
  FOREIGN KEY (event_owner_id) REFERENCES Organization(uid)  on DELETE restrict
);

CREATE TABLE service (
  service_id SERIAL NOT NULL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  event_owner_id int not null,
  type INT NOT NULL,  
  eid INT NOT NULL,
  PRIMARY KEY (service_id, eid, event_owner_id),
  FOREIGN KEY (eid, event_owner_id) REFERENCES events(eid, event_owner_id) ON DELETE CASCADE ON UPDATE CASCADE
);

--------------------------------------------------------------------------------




CREATE TABLE orders (
  orderid SERIAL,
  oid INT NOT NULL,
  uid INT NOT NULL,
  content TEXT,
  Type VARCHAR(50) NOT NULL,
  delivery_date TIMESTAMP NOT NULL,
  priority INT NOT NULL,
  postman_id INT,
  state INT NOT NULL,
  PRIMARY KEY (orderid, oid),
  FOREIGN KEY (oid) REFERENCES Organization(uid) on DELETE CASCADE,
  FOREIGN KEY (uid) REFERENCES users(uid) on DELETE CASCADE,
  FOREIGN KEY (postman_id) REFERENCES postman(p_id) on DELETE SET NULL
);


CREATE TABLE Representative (
  uid INT NOT NULL,
  experiences Text,
  GID INT ,
  FOREIGN KEY (GID) REFERENCES "Group"(GID) on DELETE restrict,
  FOREIGN KEY (uid) REFERENCES group_user(uid) on DELETE restrict
);

CREATE TABLE patient_joins_group (
  uid INT NOT NULL,
  GID INT NOT NULL,
  PRIMARY KEY (uid, GID),
  FOREIGN KEY (uid) REFERENCES Patient(uid) on DELETE restrict,
  FOREIGN KEY (GID) REFERENCES "Group"(GID) on DELETE restrict
);



--************************************-----


--************************************-----
CREATE TABLE tasks (
  task_id SERIAL,
  content Text NOT NULL,
  PRIMARY KEY (task_id)
);


--------------------------------------------------------------------------------
CREATE TABLE rep_patient_group (
  patient_id INT NOT NULL,
  GID INT NOT NULL,
  rep_id INT NOT NULL,
  PRIMARY KEY (patient_id, GID, rep_id),
  FOREIGN KEY (patient_id, GID) REFERENCES patient_joins_group(uid, GID) on DELETE restrict
);

CREATE TABLE patient_has_task (
  uid INT NOT NULL,
  GID INT NOT NULL,
  state bit NOT NUll,
  task_id INT NOT NULL,
  rep_id INT NOT NULL,
  PRIMARY KEY (uid, GID, task_id, rep_id),
  FOREIGN KEY (uid, GID, rep_id) REFERENCES rep_patient_group(patient_id, GID, rep_id) on DELETE restrict,
  FOREIGN KEY (task_id) REFERENCES tasks(task_id) on DELETE restrict
);

--------------------------------------------------------------------------------
CREATE TABLE messages (
  mid SERIAL NOT NULL,
  date TIMESTAMP NOT NULL,
  text TEXT NOT NULL,
  chid INT NOT NULL,
  gid INT NOT NULL,
  uid INT NOT NULL,
  image_id INT,
  PRIMARY KEY (mid),
  FOREIGN KEY (image_id) REFERENCES Images(image_id) on DELETE restrict,
  FOREIGN KEY (gid) REFERENCES "Group"(gid) on DELETE restrict,
  FOREIGN KEY (uid) REFERENCES Users(uid) on DELETE restrict
);

CREATE TABLE group_posts (
  gpid SERIAL NOT NULL,
  date TIMESTAMP NOT NULL,
  text TEXT NOT NULL,
  GID INT NOT NULL,
  uid INT NOT NULL,
  image_id INT,
  PRIMARY KEY (gpid, GID),
  FOREIGN KEY (image_id) REFERENCES Images(image_id) on DELETE restrict,
  FOREIGN KEY (GID) REFERENCES "Group"(GID) on DELETE restrict,
  FOREIGN KEY (uid) REFERENCES group_user(uid) on DELETE restrict
);

CREATE TABLE group_comments (
  gcid SERIAL PRIMARY KEY,
  date TIMESTAMP NOT NULL,
  text TEXT NOT NULL,
  gpid INT NOT NULL,
  GID INT NOT NULL,
  uid INT NOT NULL,
  FOREIGN KEY (gpid, GID) REFERENCES group_posts(gpid, GID) on DELETE restrict,
  FOREIGN KEY (uid) REFERENCES group_user(uid) on DELETE restrict
);

CREATE TABLE Volunteer (
  uid SERIAL PRIMARY KEY,
  FOREIGN KEY (uid) REFERENCES Users(uid) on DELETE restrict
);

--------------------------------------------------------------------------------


CREATE TABLE groups_requests (
  group_user_id INT NOT NULL,
  GID INT NOT NULL,
  state bit,
  PRIMARY KEY (group_user_id, GID),
  FOREIGN KEY (group_user_id) REFERENCES group_user(uid) on DELETE restrict ,
  FOREIGN KEY (GID) REFERENCES "Group"(GID) on DELETE restrict
);

CREATE TABLE admin_groups_requests (
  group_user_id INT NOT NULL,
  GID INT NOT NULL,
  A_ID INT NOT NULL,
  state bit,
  PRIMARY KEY (group_user_id, GID, A_ID),
  FOREIGN KEY (group_user_id) REFERENCES group_user(uid) on DELETE restrict,
  FOREIGN KEY (GID, A_ID) REFERENCES admin_manages_groups(GID, A_ID) on DELETE restrict
);

--------------------------------------------------------------------------------
CREATE TABLE volunteer_apply_service (
  amount int,
  blood_type varchar(10),
  service_id INT NOT NULL,
  eid INT NOT NULL,
  event_owner_id INT NOT NULL,
  uid INT NOT NULL,
  PRIMARY KEY (service_id, eid, event_owner_id, uid),
  FOREIGN KEY (service_id, eid, event_owner_id) REFERENCES service(service_id, eid, event_owner_id) on DELETE restrict,
  FOREIGN KEY (uid) REFERENCES Volunteer(uid) on DELETE restrict
);

--------------------------------------------------------------------------------
CREATE TABLE volunteer_requests_postman (
  uid INT NOT NULL,
  p_id INT NOT NULL,
  PRIMARY KEY (uid, p_id),
  FOREIGN KEY (uid) REFERENCES Volunteer(uid) on DELETE restrict,
  FOREIGN KEY (p_id) REFERENCES postman(p_id) on DELETE restrict
);