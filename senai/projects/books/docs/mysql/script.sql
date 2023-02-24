DROP DATABASE IF EXISTS books;

CREATE DATABASE books CHARSET=UTF8 COLLATE utf8_general_ci;
USE books;

CREATE TABLE book(
  id VARCHAR(45) NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  price FLOAT(5,2) NOT NULL,
  date_emprest DATE NOT NULL,
  date_prev_dev DATE NOT NULL,
  date_devolution DATE
);
