CREATE TABLE Images (
  image_id SERIAL PRIMARY KEY,
  image_data BYTEA NOT NULL
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
  uid SERIAL PRIMARY KEY,
  location TEXT NOT NULL,
  A_ID INT NOT NULL,
  approved bit,
  FOREIGN KEY (uid) REFERENCES Users(uid) on DELETE CASCADE,
  FOREIGN KEY (A_ID) REFERENCES Admin(uid) on DELETE restrict
);

CREATE TABLE postman (
  p_id int PRIMARY KEY,
  oid INT NOT NULL,
  FOREIGN KEY (p_id) REFERENCES users(uid) on DELETE CASCADE,
  FOREIGN KEY (oid) REFERENCES Organization(uid) on DELETE restrict
);

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

CREATE TABLE personal_comments (
  date TIMESTAMP NOT NULL,
  text TEXT NOT NULL,
  pcid SERIAL,
  ppid INT NOT NULL,
  post_owner_uid INT NOT NULL,
  commenter_uid INT NOT NULL,
  PRIMARY key (ppid, pcid),
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
  FOREIGN KEY (event_owner_id) REFERENCES Organization(uid) on DELETE restrict
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
  FOREIGN KEY (postman_id) REFERENCES postman(p_id) on DELETE
  SET
    NULL
);

CREATE TABLE Representative (
  uid INT NOT NULL,
  experiences Text,
  GID INT,
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

CREATE TABLE milestones (
  msid SERIAL PRIMARY KEY,
  streak INT NOT NULL,
  uid INT NOT NULL,
  GID INT NOT NULL,
  FOREIGN KEY (uid, GID) REFERENCES patient_joins_group(uid, GID) on DELETE restrict,
);

CREATE TABLE tasks (
  task_id SERIAL,
  content Text NOT NULL,
  PRIMARY KEY (task_id)
);

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

CREATE TABLE groups_requests (
  group_user_id INT NOT NULL,
  GID INT NOT NULL,
  state bit,
  PRIMARY KEY (group_user_id, GID),
  FOREIGN KEY (group_user_id) REFERENCES group_user(uid) on DELETE restrict,
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

-- CREATE TABLE volunteer_requests_postman (
--   uid INT NOT NULL,
--   p_id INT NOT NULL,
--   PRIMARY KEY (uid, p_id),
--   FOREIGN KEY (uid) REFERENCES Volunteer(uid) on DELETE restrict,
--   FOREIGN KEY (p_id) REFERENCES postman(p_id) on DELETE restrict
-- );
--------------------------------procedures-------------------------------------------------------
CREATE
OR REPLACE FUNCTION get_user_by_id(p_user_id INT) RETURNS SETOF Users AS $ $ BEGIN RETURN QUERY
SELECT
  uid,
  user_name,
  name,
  email,
  phone_number,
  bio,
  image_id,
  type
FROM
  Users
WHERE
  uid = p_user_id;

END;

$ $ LANGUAGE plpgsql;

--done
-------------------------------------------------------------------------------------------------
CREATE
OR REPLACE FUNCTION update_user_bio(p_user_id INT, p_new_bio TEXT) RETURNS VOID AS $ $ BEGIN
UPDATE
  Users
SET
  bio = p_new_bio
WHERE
  uid = p_user_id;

END;

$ $ LANGUAGE plpgsql;

--done
-------------------------------------------------------------------------------------------------
CREATE
OR REPLACE FUNCTION insert_event(
  p_content TEXT,
  p_event_owner_id INT,
  p_image_id INT
) RETURNS VOID AS $ $ BEGIN
INSERT INTO
  events (content, event_owner_id, image_id)
SELECT
  p_content,
  p_event_owner_id,
  p_image_id
FROM
  organization
WHERE
  uid = p_event_owner_id;

END;

$ $ LANGUAGE plpgsql;

--done
-------------------------------------------------------------------------------------------------------------------
CREATE
OR REPLACE FUNCTION get_organization_location(p_organization_id INT) RETURNS TEXT AS $ $ DECLARE org_location TEXT;

BEGIN
SELECT
  location INTO org_location
FROM
  Organization
WHERE
  uid = p_organization_id;

RETURN org_location;

END;

$ $ LANGUAGE plpgsql;

--done
-------------------------------------------------------------------------------------------------
CREATE
OR REPLACE FUNCTION assign_postman_to_order(
  p_order_id INT,
  p_postman_id INT,
  p_organization_id INT
) RETURNS VOID AS $ $ BEGIN
UPDATE
  orders
SET
  postman_id = p_postman_id
WHERE
  orderid = p_order_id
  AND oid = p_organization_id;

END;

$ $ LANGUAGE plpgsql;

--done
-------------------------------------------------------------------------------------------------
CREATE
OR REPLACE FUNCTION get_patients_by_gid(p_gid INT) RETURNS TABLE (
  uid INT,
  GID INT,
  name TEXT,
  email TEXT,
  phone_number VARCHAR(20),
  bio TEXT,
  image_id INT
) AS $ $ BEGIN RETURN QUERY
SELECT
  pjp.*,
  u.name,
  u.email,
  u.phone_number,
  u.bio,
  u.image_id
FROM
  patient_joins_group AS pjp
  JOIN users AS u ON u.uid = pjp.uid
  JOIN "Group" AS g ON g.GID = pjp.GID
WHERE
  pjp.GID = p_gid;

END;

$ $ LANGUAGE plpgsql;
--done
-------------------------------------------------------------------------------------------------
CREATE
OR REPLACE FUNCTION insert_user(
  p_user_name VARCHAR(50),
  p_name TEXT,
  p_password TEXT,
  p_email TEXT,
  p_phone_number VARCHAR(20),
  p_bio TEXT,
  p_image_id INT,
  p_type VARCHAR(50)
) RETURNS VOID AS $ $ BEGIN
INSERT INTO
  Users (
    user_name,
    name,
    password,
    email,
    phone_number,
    bio,
    image_id,
    type
  )
VALUES
  (
    p_user_name,
    p_name,
    p_password,
    p_email,
    p_phone_number,
    p_bio,
    p_image_id,
    p_type
  );

END;

$ $ LANGUAGE plpgsql;

--done
----------------------------------------------------------------------------------------------------
-- CREATE
-- OR REPLACE FUNCTION get_volunteer_requests() RETURNS TABLE (uid INT, p_id INT) AS $ $ BEGIN RETURN QUERY
-- SELECT
--   uid,
--   p_id
-- FROM
--   volunteer_requests_postman;
-- END;
-- $$ LANGUAGE plpgsql;
-----------------------------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION update_service_end_date(
  p_service_id INT,
  p_new_end_date TIMESTAMP,
  i_eid INT,
  i_event_owner_id INT
) RETURNS VOID AS $$
BEGIN
  UPDATE
    service
  SET
    end_date = p_new_end_date
  WHERE
    service_id = p_service_id
    AND eid = i_eid
    AND event_owner_id = i_event_owner_id;

END;
$$ LANGUAGE plpgsql;


-------------------------------------------------------------------------------------------------
CREATE
OR REPLACE FUNCTION count_comments(p_pid INT, p_owner_uid INT) RETURNS INT AS $ $ DECLARE comment_count INT;

BEGIN
SELECT
  COUNT(*) INTO comment_count
FROM
  personal_comments
WHERE
  ppid = p_pid
  AND post_owner_uid = p_owner_uid;

RETURN comment_count;

END;

$ $ LANGUAGE plpgsql;

--done
--------------------------------------------------must be reviewed-------------------------------
-- Insert for "Group" table
INSERT INTO
  "Group" (description, name)
VALUES
  ('Sample group description 1', 'Group 1'),
  ('Sample group description 2', 'Group 2');

-- Insert for Users table
INSERT INTO
  Users (
    user_name,
    name,
    password,
    email,
    phone_number,
    bio,
    type
  )
VALUES
  (
    'user1',
    'John Doe',
    'password1',
    'user1@example.com',
    '1234567890',
    'Bio for user 1',
    'Regular'
  ),
  (
    'user2',
    'Jane Doe',
    'password2',
    'user2@example.com',
    '9876543210',
    'Bio for user 2',
    'Admin'
  ),
  (
    'user3',
    'John Doe',
    'password3',
    'user3@example.com',
    '1234567890',
    'Bio for user 3',
    'organization'
  ),
  (
    'user4',
    'Jane Doe',
    'password4',
    'user4@example.com',
    '9876543210',
    'Bio for user 4',
    'organization'
  ),
  (
    'user9',
    'John Doe',
    'password9',
    'user9@example.com',
    '1234567890',
    'Bio for user 9',
    'volunteer'
  ),
  (
    'user10',
    'Jane Doe',
    'password10',
    'user10@example.com',
    '9876543210',
    'Bio for user 10',
    'volunteer'
  ),
  (
    'user5',
    'John Doe',
    'password5',
    'user5@example.com',
    '1234567890',
    'Bio for user 5',
    'patient'
  ),
  (
    'user6',
    'Jane Doe',
    'password6',
    'user6@example.com',
    '9876543210',
    'Bio for user 6',
    'representative'
  ),
  (
    'user7',
    'Jane Doe',
    'password7',
    'user7@example.com',
    '9876543210',
    'Bio for user 7',
    'postman'
  ),
  (
    'user8',
    'John Doe',
    'password8',
    'user8@example.com',
    '1234567890',
    'Bio for user 8',
    'postman'
  );

-- Insert for group_user table
NSERT INTO group_user (uid)
VALUES
  (7),
  (8);

I -- Insert for Admin table
INSERT INTO
  Admin (uid)
VALUES
  (2);

-- Insert for admin_manages_groups table
INSERT INTO
  admin_manages_groups (A_ID, GID)
VALUES
  (2, 1),
  (2, 2);

-- Insert for Patient table
INSERT INTO
  Patient (uid)
VALUES
  (1),
  (2);

-- Insert for Organization table
INSERT INTO
  Organization (uid, location, A_ID, approved)
VALUES
  (3, 'Location 1', 2, true),
  (4, 'Location 2', 2, false);

-- Insert for postman table
INSERT INTO
  postman (p_id, oid)
VALUES
  (1, 3),
  (2, 4);

-- Insert for personal_posts table
INSERT INTO
  personal_posts (date, text, uid)
VALUES
  ('2023-01-01', 'Post by user 1', 1),
  ('2023-01-02', 'Post by user 2', 2);

-- Insert for milestones table
INSERT INTO
  milestones (streak, uid, GID)
VALUES
  (5, 1, 1),
  (3, 2, 2);

-- Insert for personal_comments table
INSERT INTO
  personal_comments (date, text, ppid, post_owner_uid, commenter_uid)
VALUES
  ('2023-01-03', 'Comment on post 1', 1, 1, 2),
  ('2023-01-04', 'Comment on post 2', 2, 2, 1);

-- Insert for events table
INSERT INTO
  events (content, event_owner_id)
VALUES
  ('Event 1', 3),
  ('Event 2', 4);

-- Insert for service table
INSERT INTO
  service (start_date, end_date, event_owner_id, type, eid)
VALUES
  ('2023-02-01', '2023-02-10', 3, 1, 1),
  ('2023-03-01', '2023-03-10', 4, 2, 2);

-- Insert for orders table
INSERT INTO
  orders (
    oid,
    uid,
    content,
    Type,
    delivery_date,
    priority,
    postman_id,
    state
  )
VALUES
  (
    3,
    3,
    'Order content 1',
    'Type 1',
    '2023-02-05',
    1,
    1,
    1
  ),
  (
    4,
    4,
    'Order content 2',
    'Type 2',
    '2023-03-05',
    2,
    2,
    2
  );

-- Insert for Representative table
INSERT INTO
  Representative (uid, experiences, GID)
VALUES
  (1, 'Experience 1', 1),
  (2, 'Experience 2', 2);

-- Insert for patient_joins_group table
INSERT INTO
  patient_joins_group (uid, GID)
VALUES
  (1, 1),
  (2, 2);

-- Insert for tasks table
INSERT INTO
  tasks (content)
VALUES
  ('Task 1'),
  ('Task 2');

-- Insert for rep_patient_group table
INSERT INTO
  rep_patient_group (patient_id, GID, rep_id)
VALUES
  (1, 1, 1),
  (2, 2, 2);

-- Insert for patient_has_task table
INSERT INTO
  patient_has_task (uid, GID, state, task_id, rep_id)
VALUES
  (1, 1, true, 1, 1),
  (2, 2, false, 2, 2);

-- Insert for messages table
INSERT INTO
  messages (date, text, chid, gid, uid)
VALUES
  ('2023-01-05', 'Message in group 1', 1, 1, 1),
  ('2023-01-06', 'Message in group 2', 2, 2, 2);

-- Insert for group_posts table
INSERT INTO
  group_posts (date, text, GID, uid)
VALUES
  ('2023-01-07', 'Post in group 1', 1, 1),
  ('2023-01-08', 'Post in group 2', 2, 2);

-- Insert for group_comments table
INSERT INTO
  group_comments (date, text, gpid, GID, uid)
VALUES
  ('2023-01-09', 'Comment on group post 1', 1, 1, 2),
  ('2023-01-10', 'Comment on group post 2', 2, 2, 1);

-- Insert for Volunteer table
INSERT INTO
  Volunteer (uid)
VALUES
  (5),
  (6);

-- Insert for groups_requests table
INSERT INTO
  groups_requests (group_user_id, GID, state)
VALUES
  (1, 1, true),
  (2, 2, false);

-- Insert for admin_groups_requests table
INSERT INTO
  admin_groups_requests (group_user_id, GID, A_ID, state)
VALUES
  (1, 1, 2, true),
  (2, 2, 2, false);

-- Insert for volunteer_apply_service table
INSERT INTO
  volunteer_apply_service (
    amount,
    blood_type,
    service_id,
    eid,
    event_owner_id,
    uid
  )
VALUES
  (100, 'A+', 1, 1, 3, 5),
  (150, 'B-', 2, 2, 4, 6);

-- Insert for volunteer_requests_postman table
INSERT INTO
  volunteer_requests_postman (uid, p_id)
VALUES
  (5, 1),
  (6, 2);