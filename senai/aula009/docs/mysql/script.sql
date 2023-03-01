DROP DATABASE IF EXISTS imobiliaria;

CREATE DATABASE imobiliaria CHARSET = UTF8 COLLATE utf8_general_ci;

USE imobiliaria;

CREATE TABLE
  corretor (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    salario FLOAT (6, 2) NOT NULL
  );

CREATE TABLE
  imovel (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    corretor_id INT NOT NULL,
    codigo VARCHAR(45) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    valor FLOAT (10, 2) NOT NULL,
    FOREIGN KEY (corretor_id) REFERENCES corretor (id)
  );