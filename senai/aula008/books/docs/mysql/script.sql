DROP DATABASE IF EXISTS biblioteca;

CREATE DATABASE biblioteca CHARSET = UTF8 COLLATE utf8_general_ci;

USE biblioteca;

CREATE TABLE
  livro (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    price FLOAT (5, 2) NOT NULL,
    date_emprest DATE NOT NULL,
    date_prev_dev DATE NOT NULL,
    date_devolution DATE,
    tax_day FLOAT (5, 2)
  );

INSERT INTO
  livro
VALUES
  (
    DEFAULT,
    "Férias de Veirão",
    "Melissa Próspero",
    80.55,
    "2023-02-25",
    "2023-03-10",
    NULL,
    NULL
  ),
  (
    DEFAULT,
    "Férias de Inverno",
    "Melissa Próspero",
    90.55,
    "2023-02-25",
    "2023-03-10",
    NULL,
    NULL
  );