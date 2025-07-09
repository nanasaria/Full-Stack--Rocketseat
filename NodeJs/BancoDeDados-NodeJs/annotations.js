/*
Introdução a Banco de Dados

Dado -> Material bruto
Informação -> Percepção concreta que se pode extrair dos
dados.

Um banco de dados é uma coleção organizada de dados.

Por que usar Banco de dados?
- Facilitar gestão.
- Acesso e manipulação de dados.
- Escalabilidade.
- Eficiência.
- Organização e Acesso Rápido.
- Integridade e Confiabilidade.

Banco de Dados Relacional
Organiza dados em tabelas estruturadas, com linhas e colunas.
Estabelece relações lógicas entre tabelas com base em chaves
comuns.

Tabela
É uma estrutura de armazenamento fundamental em um banco 
de dados relacional.
Cada tabela guarda dados de um assunto.
Tabelas também podem ser chamadas de Entidades.

Exemplos:
Tabela produtos -> Dados de produtos
Tabela de usuários -> Dados de usuários

Cada tabela é composta por linhas (registros ou tuplas) e
colunas (campos ou atributos).

Primary Keys
Chaves primárias identifica exclusivamente cada registro
em uma tabela. A chave primária garante que cada registro
seja único dentro da tabela.

SQLite
É um banco de dados relacional, leve, auto suficiente e 
totalmente funcional. 

Arquivo único: Todos os dados, incluindo definições de tabelas,
índices e a própria informação armazenada, são mantidos em
um único arquivo de disco.

Auto suficiente: O SQLite não depende de nenhuma instalação
externa ou configuração de servidor, e pode ser incorporado
diretamente em uma aplicação.

.db -> Convenção para banco de dados.

SQL
SQL é a linguagem padrão para gerenciar e manipular bancos 
de dados relacionais.

Tipos de Dados
Determina qual tipo de dado cada coluna irá armazenar.

Tipos de dados do SQLite:
NULL - Representa o valor nulo ou inexistente.
INTEGER - Um valor numérico inteiro que pode ser positivo 
ou negativo.
REAL - Uma valor numérico de ponto flutuante.
TEXT - Uma sequência de caracteres de texto
BLOB - Dados binários grandes. Armazena dados como imagens,
arquivos ou qualquer tipo de dados que não seja convertido
automaticamente.

Criar tabela com SQL
Exemplo:

CREATE TABLE products (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  category TEXT NULL DEFAULT 'general'
)

Nesse caso estamos dizendo: 
Crie uma tabela com os campos:
id que é um número inteiro, não pode ser nulo, é uma chave 
primária e com valor que incrementa automaticamente;
name que é um texto e não pode ser nulo;
price que é um número real (ponto flutuante) e não pode ser
nulo;
category que é um texto, pode ser nulo e o valor padrão é
general.

Adicionar e remover coluna
ALTER TABLE products ADD quantity INTEGER NOT NULL
Nesse caso dizemos:
Altere a tabela products adicionando o campo quantity
que recebe números inteiros e não pode ser nulo.

ALTER TABLE products DROP COLUMN quantity
Nesse caso dizemos:
Altere a tabela products dropando (removendo) a coluna 
quantity.

Renomear Coluna
ALTER TABLE products RENAME COLUMN name TO description
Nesse caso dizemos:
Altere a tabela products renomeando a coluna name para
description

Renomear Tabela
ALTER TABLE products RENAME TO items
Nesse caso dizemos:
Altere a tabela products renomeando para items.

REMOVER TABELA
DROP TABLE products

Nesse caso dizemos:
Drope (Remova) a tabela products.

Inserindo dados
INSERT INTO products (name, price) VALUES ('Teclado', 50)

Nesse caso dizemos:
Insira dentro de products nas colunas name e price os valores
teclado (name) e 50 (price).

Selecionar dados de uma tabela
SELECT * FROM products
Nesse caso dizemos:
Selecione todas as colunas da tabela products.

SELECT name FROM products
Nesse caso dizemos:
Selecione uma coluna específica (name) da tabela products.

SELECT name, price FROM products
Nesse caso, seleciona as colunas name e price, a ordem de
seleção influencia a forma como são visualizados.

Atualizar dados de uma tabela
UPDATE products SET price = 745.90, category = 'accessory' where id = 1

Nesse caso dizemos:
Atualize na tabela products os campos price com o valor 745.90
e category com o valor accessory onde o id for igual a 1.

Deletar registro
Quando deletamos precisamos utilizar o WHERE se não deletamos
tudo e utilizamos o id que é o identificador único.

DELETE FROM products WHERE id = 3
Nesse caso dizemos:
Delete de products onde o id é igual a 3.

Selecionar registros com filtros
A utilização da palavra WHERE indica um filtro.
WHERE COM IGUAL-> SELECT * FROM products WHERE name = 'Monitor'
O igual procura pelo filtro exato.

WHERE COM LIKE-> SELECT * FROM products WHERE name LIKE '%tor'
O Like procura por semelhantes. Se utilizamos % no inicio, 
procuramos por palavras que terminem com tal palavra.

SELECT * FROM products WHERE name LIKE 'Mo%'
Se utilizarmos % no final ele procura por palavras que 
iniciem com esse texto.

SELECT * FROM products WHERE name LIKE '%Mo%'
Se utilizarmos % no inicio e final, ´procuramos por palavras 
que contenham esse texto em qualquer parte.

Tabela sqlite_sequence
Tabela gerada automaticamente quando uma coluna é definida
como auto-incremento.


*/
