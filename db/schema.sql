CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "burgers" 
CREATE TABLE burgers
(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(30),
  devoured BOOLEAN DEFAULT 0,
  PRIMARY KEY
  (id)
);