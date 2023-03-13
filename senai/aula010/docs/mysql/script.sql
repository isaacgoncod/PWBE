DROP DATABASE IF EXISTS tarefa;

CREATE DATABASE tarefa CHARSET = UTF8 COLLATE utf8_general_ci;

USE tarefa;

CREATE TABLE
  status (
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
  );

CREATE TABLE
  tarefa (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tarefa VARCHAR(255) NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE,
    status_id INT NOT NULL,
    FOREIGN KEY (status_id) REFERENCES status (id) ON UPDATE CASCADE
  );

INSERT INTO
  status
VALUES
  (1, "Aberto"),
  (2, "Executando"),
  (3, "Finalizado");