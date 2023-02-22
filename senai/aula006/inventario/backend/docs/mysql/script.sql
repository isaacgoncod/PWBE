  DROP DATABASE IF EXISTS inventario;

  CREATE DATABASE inventario CHARSET=UTF8 COLLATE utf8_general_ci;
  USE inventario;

  CREATE TABLE item(
    id VARCHAR(45) NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    valor FLOAT(10,2) NOT NULL
  );

INSERT INTO item VALUES
('i001','Mesa','Mesa de escritório',100.00),
('i002','Computador','Desktop DEL i5, 8GB RAM, SSD 500GB',2200.00),
('i003','Cadeira','Cadeira giratória de escritório',500.00),
('i004','Longarina','Longarina de três cadeiras',450.00),
('i005','Prateleira','Prateleira de vidro',2500.00),
('i006','Prateleira','Prateleira de Madeira',1600.00);
