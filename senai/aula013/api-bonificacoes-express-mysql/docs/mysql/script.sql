DROP DATABASE IF EXISTS bonificacoes;

CREATE DATABASE bonificacoes CHARSET = UTF8 COLLATE utf8_general_ci;

USE bonificacoes;

CREATE TABLE
  funcionario (
    matricula INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(255) NOT NULL,
    data_admissao DATE NOT NULL,
    salario FLOAT (6, 2) NOT NULL,
    data_pagto DATE NOT NULL,
    desempenho INT NOT NULL,
    bonificacao FLOAT (6, 2)
  );

SELECT
  *
FROM
  funcionario;