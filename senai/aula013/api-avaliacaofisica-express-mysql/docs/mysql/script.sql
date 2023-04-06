DROP DATABASE IF EXISTS avaliacao_fisica;

CREATE DATABASE avaliacao_fisica CHARSET = UTF8 COLLATE utf8_general_ci;

USE avaliacao_fisica;

CREATE TABLE
  paciente (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(255) NOT NULL,
    nascimento DATE NOT NULL,
    peso FLOAT (5, 2) NOT NULL,
    altura FLOAT (5, 2) NOT NULL,
    idade INT,
    imc FLOAT (5, 2),
    diagnostico VARCHAR(255)
  );

SELECT
  *
FROM
  paciente;