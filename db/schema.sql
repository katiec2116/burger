DROP DATABASE IF EXISTS burgers_db; 
CREATE database burgers_db;

USE burgers_db;
CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(25),
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);