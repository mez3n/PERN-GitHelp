CREATE DATABASE project;

\c project;

CREATE TABLE Images (
  image_id SERIAL PRIMARY KEY,
  image_data BYTEA
);

CREATE TABLE "Group"
(
  GID SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,
  UNIQUE (name)
);

CREATE TABLE Users
(
  uid SERIAL PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  bio TEXT NOT NULL,
  image_id INT,
  FOREIGN KEY (image_id) REFERENCES Images(image_id),
  UNIQUE (user_name)
);

CREATE TABLE Profile
(
  pfid SERIAL PRIMARY KEY,
  uid INT NOT NULL,
  FOREIGN KEY (uid) REFERENCES Users(uid)
);

CREATE TABLE Admin
(
  A_ID SERIAL PRIMARY KEY,
  password TEXT NOT NULL,
  username VARCHAR(50) NOT NULL,
  UNIQUE (username)
);

CREATE TABLE admin_manages_groups
(
  A_ID INT NOT NULL,
  GID INT NOT NULL,
  PRIMARY KEY (A_ID, GID),
  FOREIGN KEY (A_ID) REFERENCES Admin(A_ID),
  FOREIGN KEY (GID) REFERENCES "Group"(GID)
);

CREATE TABLE Patient
(
  uid SERIAL PRIMARY KEY,
  FOREIGN KEY (uid) REFERENCES Users(uid) ON DELETE CASCADE
);

CREATE TABLE Organization
(
  uid SERIAL PRIMARY KEY,
  location TEXT NOT NULL,
  A_ID INT NOT NULL,
  FOREIGN KEY (uid) REFERENCES Users(uid),
  FOREIGN KEY (A_ID) REFERENCES Admin(A_ID)
);

CREATE TABLE Chats
(
  chid SERIAL NOT NULL,
  GID INT NOT NULL,
  PRIMARY KEY (chid, GID),
  FOREIGN KEY (GID) REFERENCES "Group"(GID)
);

CREATE TABLE personal_posts
(
  ppid SERIAL NOT NULL,
  date TIMESTAMP NOT NULL,
  text TEXT NOT NULL,
  pfid INT NOT NULL,
  image_id INT,
  PRIMARY KEY (ppid, pfid),
  FOREIGN KEY (image_id) REFERENCES Images(image_id),
  FOREIGN KEY (pfid) REFERENCES Profile(pfid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE milestones
(
  msid SERIAL PRIMARY KEY,
  streak INT NOT NULL,
  uid INT NOT NULL,
  GID INT NOT NULL,
  FOREIGN KEY (uid) REFERENCES Patient(uid) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (GID) REFERENCES "Group"(GID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE personal_comments
(
  date TIMESTAMP NOT NULL,
  text TEXT NOT NULL,
  pcid SERIAL PRIMARY KEY,
  ppid INT NOT NULL,
  pfid INT NOT NULL,
  uid INT NOT NULL,
  FOREIGN KEY (ppid, pfid) REFERENCES personal_posts(ppid, pfid) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (uid) REFERENCES Users(uid)
);

CREATE TABLE service
(
  service_id SERIAL NOT NULL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  type INT NOT NULL,
  ppid INT NOT NULL,
  pfid INT NOT NULL,
  uid INT NOT NULL,
  PRIMARY KEY (service_id, ppid, pfid),
  FOREIGN KEY (ppid, pfid) REFERENCES personal_posts(ppid, pfid) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (uid) REFERENCES Organization(uid)
);

CREATE TABLE Representatives
(
  rep_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone_number INT NOT NULL,
  uid INT NOT NULL,
  FOREIGN KEY (uid) REFERENCES Organization(uid)
);

CREATE TABLE patient_joins_group
(
  uid INT NOT NULL,
  GID INT NOT NULL,
  PRIMARY KEY (uid, GID),
  FOREIGN KEY (uid) REFERENCES Patient(uid),
  FOREIGN KEY (GID) REFERENCES "Group"(GID)
);

CREATE TABLE messages
(
  mid SERIAL NOT NULL,
  date TIMESTAMP NOT NULL,
  text TEXT NOT NULL,
  chid INT NOT NULL,
  gid INT NOT NULL,
  uid INT NOT NULL,
  image_id INT,
  PRIMARY KEY (mid, chid),
  FOREIGN KEY (image_id) REFERENCES Images(image_id),
  FOREIGN KEY (chid, gid) REFERENCES Chats(chid, gid),
  FOREIGN KEY (uid) REFERENCES Users(uid)
);

CREATE TABLE group_posts
(
  gpid SERIAL NOT NULL,
  date TIMESTAMP NOT NULL,
  text TEXT NOT NULL,
  GID INT NOT NULL,
  uid INT NOT NULL,
  image_id INT,
  PRIMARY KEY (gpid, GID),
  FOREIGN KEY (image_id) REFERENCES Images(image_id),
  FOREIGN KEY (GID) REFERENCES "Group"(GID),
  FOREIGN KEY (uid) REFERENCES Patient(uid)
);

CREATE TABLE group_comments
(
  gcid SERIAL PRIMARY KEY,
  date TIMESTAMP NOT NULL,
  text TEXT NOT NULL,
  gpid INT NOT NULL,
  GID INT NOT NULL,
  uid INT NOT NULL,
  FOREIGN KEY (gpid, GID) REFERENCES group_posts(gpid, GID),
  FOREIGN KEY (uid) REFERENCES Users(uid)
);

CREATE TABLE Volunteer
(
  uid SERIAL PRIMARY KEY,
  gcid INT NOT NULL,
  FOREIGN KEY (uid) REFERENCES Users(uid),
  FOREIGN KEY (gcid) REFERENCES group_comments(gcid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE volunteer_joins_groups
(
  uid INT NOT NULL,
  GID INT NOT NULL,
  PRIMARY KEY (uid, GID),
  FOREIGN KEY (uid) REFERENCES Volunteer(uid),
  FOREIGN KEY (GID) REFERENCES "Group"(GID)
);

CREATE TABLE volunteer_apply_service
(
  amount INT NOT NULL,
  service_id INT NOT NULL,
  ppid INT NOT NULL,
  pfid INT NOT NULL,
  uid INT NOT NULL,
  PRIMARY KEY (service_id, ppid, pfid, uid),
  FOREIGN KEY (service_id, ppid, pfid) REFERENCES service(service_id, ppid, pfid),
  FOREIGN KEY (uid) REFERENCES Volunteer(uid)
);

CREATE TABLE volunteer_requests_representatives
(
  uid INT NOT NULL,
  rep_id INT NOT NULL,
  PRIMARY KEY (uid, rep_id),
  FOREIGN KEY (uid) REFERENCES Volunteer(uid),
  FOREIGN KEY (rep_id) REFERENCES Representatives(rep_id)
);

-- Insert data into "Group" table
INSERT INTO "Group" (GID, description, name) VALUES
  (1, 'Group 1 Description', 'Group 1'),
  (2, 'Group 2 Description', 'Group 2');

-- Insert data into Users table
INSERT INTO Users (uid, user_name, name, password, email, phone_number, bio) VALUES
  (1, 'user1', 'User 1', 'password1', 'user1@example.com', '1234567890', 'Bio 1'),
  (2, 'user2', 'User 2', 'password2', 'user2@example.com', '9876543210', 'Bio 2'),
  (3, 'user3', 'User 3', 'password3', 'user3@example.com', '1234567890', 'Bio 3'),
  (4, 'user4', 'User 4', 'password4', 'user4@example.com', '9876543210', 'Bio 4');

-- Insert data into Profile table
INSERT INTO Profile (pfid, uid) VALUES
  (1, 1),
  (2, 2);

-- Insert data into Admin table
INSERT INTO Admin (A_ID, password, username) VALUES
  (1, 'admin1pass', 'admin1'),
  (2, 'admin2pass', 'admin2');

-- Insert data into admin_manages_groups table
INSERT INTO admin_manages_groups (A_ID, GID) VALUES
  (1, 1),
  (2, 2);

-- Insert data into Patient table
INSERT INTO Patient (uid) VALUES
  (1),
  (2);

-- Insert data into Organization table
INSERT INTO Organization (uid, location, A_ID) VALUES
  (3, 'Location 1', 1),
  (4, 'Location 2', 2);

-- Insert data into Chats table
INSERT INTO Chats (chid, GID) VALUES
  (1, 1),
  (2, 2);

-- Insert data into personal_posts table
INSERT INTO personal_posts (ppid, date, text, pfid) VALUES
  (1, NOW(), 'Post 1', 1),
  (2, NOW(), 'Post 2', 2);

-- Insert data into milestones table
INSERT INTO milestones (msid, streak, uid, GID) VALUES
  (1, 10, 1, 1),
  (2, 20, 2, 2);

-- Insert data into personal_comments table
INSERT INTO personal_comments (pcid, date, text, ppid, pfid, uid) VALUES
  (1, NOW(), 'Comment 1', 1, 1, 1),
  (2, NOW(), 'Comment 2', 2, 2, 2);

-- Insert data into service table
INSERT INTO service (service_id, start_date, end_date, type, ppid, pfid, uid) VALUES
  (1, NOW(), NOW(), 1, 1, 1, 1),
  (2, NOW(), NOW(), 2, 2, 2, 2);
