DROP DATABASE IF EXISTS imobiliaria;

CREATE DATABASE imobiliaria CHARSET = UTF8 COLLATE utf8_general_ci;

USE imobiliaria;

CREATE TABLE
  corretor (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL,
    salario FLOAT (6, 2) NOT NULL
  );

CREATE TABLE
  status (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255)
  );

CREATE TABLE
  imovel (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    corretor_id INT NOT NULL,
    codigo VARCHAR(45) NOT NULL UNIQUE,
    endereco VARCHAR(255) NOT NULL,
    valor_venda FLOAT (10, 2),
    valor_aluguel FLOAT (10, 2),
    status_id INT NOT NULL,
    FOREIGN KEY (corretor_id) REFERENCES corretor (id),
    FOREIGN KEY (status_id) REFERENCES status (id)
  );

INSERT INTO
  corretor
VALUES
  (DEFAULT, "Melissa", "1256", "admin", 2500),
  (DEFAULT, "Gustavo", "1258", "admin", 2200);

INSERT INTO
  status
VALUES
  (DEFAULT, "Disponivel"),
  (DEFAULT, "Alugado"),
  (DEFAULT, "Vendido");

INSERT INTO
  imovel
VALUES
  (
    DEFAULT,
    1,
    "KSA7894",
    "Rua das ruas, 8",
    400000,
    850,
    1
  ),
  (
    DEFAULT,
    1,
    "APT4613",
    "Rua dos Bueiro, 8, AP 41",
    250000,
    500,
    1
  ),
  (
    DEFAULT,
    1,
    "KSA7418",
    "Rua das Avenidas, 12",
    1250000,
    5500,
    2
  );