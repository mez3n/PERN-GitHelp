


CREATE TABLE group_table
(
  GID SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,
  UNIQUE (name),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
  Photo BYTEA ,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_name)
);
CREATE TABLE Profile
(
  pfid SERIAL PRIMARY KEY,
  uid INT NOT NULL,
  FOREIGN KEY (uid) REFERENCES Users(uid),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Admin_table
(
  A_ID SERIAL PRIMARY KEY,
  Password TEXT NOT NULL,
  Username VARCHAR(50) NOT NULL,
  UNIQUE (Username),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admin_manages_groups
(
  A_ID int not null,
  GID int not null,
  PRIMARY KEY (A_ID, GID),
  FOREIGN KEY (A_ID) REFERENCES Admin_table(A_ID),
  FOREIGN KEY (GID) REFERENCES Group_table(GID),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE Patient
(
  uid int PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (uid) REFERENCES Users(uid) ON DELETE CASCADE
);

CREATE TABLE Organization
(
  uid int PRIMARY KEY,
  Location TEXT NOT NULL,   
  A_ID int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (uid) REFERENCES Users(uid),
  FOREIGN KEY (A_ID) REFERENCES Admin_table(A_ID)
);

CREATE TABLE Chats
(
  chid SERIAL PRIMARY KEY,
  GID int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (GID) REFERENCES Group_table(GID)
);

CREATE TABLE personal_posts
(
  ppid SERIAL,
  Photo BYTEA ,
  Text TEXT NOT NULL,
  pfid int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ppid, pfid),
  FOREIGN KEY (pfid) REFERENCES Profile(pfid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE milestones
(
  msid SERIAL PRIMARY KEY,
  streak INT NOT NULL,
  uid int not null,
  GID int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (uid) REFERENCES Patient(uid) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (GID) REFERENCES Group_table(GID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE personal_comments
(
  pcid SERIAL PRIMARY KEY,
  Text TEXT NOT NULL,
  ppid int not null,
  pfid int not null,
  uid int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ppid, pfid) REFERENCES personal_posts(ppid, pfid) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (uid) REFERENCES Users(uid)
);

CREATE TABLE service
(
  service_id SERIAL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  service_type Text NOT NULL,
  ppid int not null,
  pfid int not null,
  uid int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (service_id, ppid, pfid),
  FOREIGN KEY (ppid, pfid) REFERENCES personal_posts(ppid, pfid) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (uid) REFERENCES Organization(uid)
);

CREATE TABLE Representatives
(
  rep_id SERIAL PRIMARY KEY,
  rep_Name TEXT NOT NULL,
  Phone_number INT NOT NULL,
  uid int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (uid) REFERENCES Organization(uid)
);

CREATE TABLE patient_joins_group
(
  uid int not null,
  GID int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (uid, GID),
  FOREIGN KEY (uid) REFERENCES Patient(uid),
  FOREIGN KEY (GID) REFERENCES Group_table(GID)
);

CREATE TABLE messages
(
  mid SERIAL PRIMARY KEY,
  Text TEXT NOT NULL,
  Photo BYTEA,
  chid int not null,
  uid int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (chid) REFERENCES Chats(chid),
  FOREIGN KEY (uid) REFERENCES Users(uid)
);

CREATE TABLE group_posts
(
  gpid SERIAL,
  Text TEXT NOT NULL,
  Photo BYTEA ,
  GID int not null,
  uid int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (gpid, GID),
  FOREIGN KEY (GID) REFERENCES Group_table(GID),
  FOREIGN KEY (uid) REFERENCES Patient(uid)
);

CREATE TABLE group_comments
(
  gcid SERIAL PRIMARY KEY,
  Text TEXT NOT NULL,
  gpid int not null,
  GID int not null,
  uid int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (gpid, GID) REFERENCES group_posts(gpid, GID),
  FOREIGN KEY (uid) REFERENCES Users(uid)
);

CREATE TABLE Volunteer
(
  uid int PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (uid) REFERENCES Users(uid),
  
);

CREATE TABLE volunteer_joins_groups
(
  uid int not null,
  GID int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (uid, GID),
  FOREIGN KEY (uid) REFERENCES Volunteer(uid),
  FOREIGN KEY (GID) REFERENCES Group_table(GID)
);

CREATE TABLE volunteer_apply_service
(
  amount INT NOT NULL,
  service_id int not null,
  ppid int not null,
  pfid int not null,
  uid int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (service_id, ppid, pfid, uid),
  FOREIGN KEY (service_id, ppid, pfid) REFERENCES service(service_id, ppid, pfid) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (uid) REFERENCES Organization(uid)
);



