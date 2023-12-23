
-- Users
-- Users -- pass = pass123
INSERT INTO Users (user_name, name, password, email, phone_number, bio, Photo) VALUES
('volunteer1', 'Volunteer 1', '$2b$10$OrvYBJB.8Xstlv9/wYYUE.4cQxPxv3nbW9YSCPMPf95H/WB./iD.q', 'volunteer1@email.com', '123-456-7890', 'Passionate about helping others', null),
('volunteer2', 'Volunteer 2', '$2b$10$OrvYBJB.8Xstlv9/wYYUE.4cQxPxv3nbW9YSCPMPf95H/WB./iD.q', 'volunteer2@email.com', '987-654-3210', 'Committed to making a difference', null),
('patient1', 'Patient 1', '$2b$10$OrvYBJB.8Xstlv9/wYYUE.4cQxPxv3nbW9YSCPMPf95H/WB./iD.q', 'patient1@email.com', '555-123-4567', 'Seeking support for addiction recovery', null),
('patient2', 'Patient 2', '$2b$10$OrvYBJB.8Xstlv9/wYYUE.4cQxPxv3nbW9YSCPMPf95H/WB./iD.q', 'patient2@email.com', '111-222-3333', 'Struggling with weight management', null),
('charityorg1', 'Charity Organization 1', '$2b$10$OrvYBJB.8Xstlv9/wYYUE.4cQxPxv3nbW9YSCPMPf95H/WB./iD.q', 'charity1@email.com', '999-888-7777', 'Dedicated to supporting addiction recovery programs', null);

-- Profile
INSERT INTO Profile (uid) VALUES
(1),
(2),
(3),
(4),
(5);


-- Patient
INSERT INTO Patient (uid) VALUES
(3),
(4),

-- Admin_table
INSERT INTO Admin_table (Password, Username) VALUES
('adminpass', 'admin1'),
('adminpassword', 'admin2'),

-- Organization
INSERT INTO Organization (Location, A_ID, uid) VALUES
('Houston', 1, 5),






-- Volunteer
INSERT INTO Volunteer (uid) VALUES
(1, 1),
(2, 2);



