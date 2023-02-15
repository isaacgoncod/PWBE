DROP DATABASE IF EXISTS escola;

CREATE DATABASE escola CHARSET=UTF8 COLLATE utf8_general_ci;
USE escola;

CREATE TABLE professor(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  especialidade VARCHAR(50) NOT NULL
);

CREATE TABLE turma(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  sigla VARCHAR(10) NOT NULL
);

CREATE TABLE aluno(
  ra INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  nascimento DATE NOT NULL,
  idade INT NOT NULL,
  id_turma INT NOT NULL,
  FOREIGN KEY (id_turma) REFERENCES turma(id)
);

CREATE TABLE leciona(
  id_prof INT NOT NULL,
  id_turma INT NOT NULL,
  FOREIGN KEY (id_prof) REFERENCES professor(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (id_turma) REFERENCES turma(id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO professor VALUES
(null, "Wellington", "Desenvolvimento"),
(null, "Rennye", "Desenvolvimento"),
(null, "Carlos", "Eletrônica"),
(null, "Kazu", "Eletrônica");

INSERT INTO turma VALUES
(10200, "Análise e Desenvolvimento de Sistemas", "1DES"),
(null, "Análise e Desenvolvimento de Sistemas", "2DES"),
(null, "Eletrônica", "3EA"),
(null, "Eletrônica", "2EA");

INSERT INTO aluno VALUES
(1000, "Isaac", "2002-05-01", 21, 10200),
(null, "Gustavo", "2003-10-18", 19, 10200),
(null, "Bruno", "1996-03-25", 27, 10200),
(null, "Lucas", "2000-10-01", 23, 10200);

INSERT INTO leciona VALUES
(1, 10200),
(1, 10201),
(2, 10200),
(2, 10201), 
(3, 10202),
(3, 10203),
(4, 10202),
(4, 10203);