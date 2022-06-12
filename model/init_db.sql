-- DROP TABLE IF EXISTS projects;
CREATE TABLE `projects` (
	`project_id` int NOT NULL AUTO_INCREMENT,
	`project_files` varchar(100),
	`file_name` varchar(100),
	`contact_person` varchar(40) NOT NULL,
	`business_name` varchar(40) NOT NULL,
	`email` varchar(40) NOT NULL,
	`phone` varchar(15) NOT NULL,
	`created_at` DATETIME NOT NULL,
	`completed` BOOLEAN NOT NULL,
	`accepted` BOOLEAN NOT NULL,
	`assigned` BOOLEAN ,
	PRIMARY KEY (`project_id`)
);

-- DROP TABLE IF EXISTS bootcamp_students;
CREATE TABLE `bootcamp_students` (
	`student_id` int NOT NULL AUTO_INCREMENT,
	`first_name` varchar(40) NOT NULL,
	`last_name` varchar(40) NOT NULL,
	`email` varchar(40) NOT NULL,
	`project_id` int,
	`instructor_id` int,
	PRIMARY KEY (`student_id`)
);

-- DROP TABLE IF EXISTS bootcamp_instructors;
CREATE TABLE `bootcamp_instructors` (
	`instructor_id` int NOT NULL AUTO_INCREMENT,
	`first_name` varchar(40) NOT NULL,
	`last_name` varchar(40) NOT NULL,
	`email` varchar(40) NOT NULL,
	PRIMARY KEY (`instructor_id`)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL
);

ALTER TABLE `bootcamp_students` ADD CONSTRAINT `bootcamp_students_fk0` FOREIGN KEY (`project_id`) REFERENCES `projects`(`project_id`);

ALTER TABLE `bootcamp_students` ADD CONSTRAINT `bootcamp_students_fk1` FOREIGN KEY (`instructor_id`) REFERENCES `bootcamp_instructors`(`instructor_id`);

INSERT INTO `users` VALUES 
    (1,'user1','$2b$12$eFzMWbS9SogNtxkmo3J7aO8FQMFQSKbtpwLMIOVsF6GGKpTQdgq.W','user1@acme.com'),
    (2,'user2','$2b$12$WZcGPyrkCvD5e8m0Qz/nFOdBryUcsp6uDlE2MDo/AjuBhPrQBCfI6','user2@acme.com'),
    (3,'user3','$2b$12$tiAz4eaXlpU.CdltUVvw6udLA2BWsitk5zXM2XOm2IpAeAiFfMCdy','user3@acme.com');

