CREATE DATABASE IF NOT EXISTS desafiodb;
USE desafiodb;
CREATE TABLE IF NOT EXISTS pessoa (
  id int(11) NOT NULL auto_increment,
  nome varchar (255),
  PRIMARY KEY (id)
);