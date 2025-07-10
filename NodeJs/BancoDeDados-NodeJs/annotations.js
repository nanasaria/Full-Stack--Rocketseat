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

Filtrando Valores
Diferente de -> SELECT * FROM products WHERE name <> 'Monitor'
Ou seja, se name for diferente de "Monitor". O sinal para 
diferente é: <>

Maior que -> SELECT * FROM products WHERE price > 300
Menor que -> SELECT * FROM products WHERE price < 300
Maior ou igual -> SELECT * FROM products WHERE price >= 300
Menor ou igual -> SELECT * FROM products WHERE price <= 300

Operadores AND ou OR
Podemos utilizar mais de um filtro com AND ou OR:
SELECT * FROM products WHERE price > 500 AND price < 1000
Nesse caso, selecionamos produtos onde o preço é maior que
500 e menor que 1000.

O operador OR garante que o SELECT vai atingir pelo menos
um critério:
SELECT * FROM products WHERE price > 500 OR price < 1000

Operadores AND e OR juntos
SELECT * FROM products WHERE price > 45 AND price < 1000 
OR category = 'image'

Parênteses
Com os parênteses criamos grupos:
SELECT * FROM products WHERE (price > 45 AND price < 1000) 
AND (category = 'audio' OR category = 'image')
Quando fazemos um parênteses, verifica-se primeiro os
parênteses e depois retorna um "veredito"

Between
Filtro em um intervalo
SELECT * FROM products WHERE price BETWEEN 600 AND 1200
Outra forma de dizer que quer selecionar os itens com preço
entre 600 e 1200

IN
SELECT * FROM products WHERE price IN (800, 550)
Aqui dizemos que queremos selecionar os itens com price 800 
e 550.

ORDER BY
Ordenar por uma coluna:
SELECT * FROM products ORDER BY price

DESC -> Decrescente
ASC -> Ascendente

Ordenar por uma coluna do maior para o menor
SELECT * FROM products ORDER BY price DESC

Ordenar por uma coluna do menor para o maior
SELECT * FROM products ORDER BY price ASC

Para utilizar Order By com Where precisamos seguir a ordem
que é WHERE -> ORDER BY
SELECT * FROM products WHERE category = 'audio' 
ORDER BY price ASC

LIMIT
Define o número máximo de registros a serem retornados.
SELECT * FROM products ORDER BY price DESC LIMIT 1

COUNT
Retorna a soma dos registros encontrados de acordo com os
critérios definidos.

SELECT COUNT(*) FROM products
Esse asterisco é uma referência.

SUM
Soma valores em uma tabela.
SELECT SUM(price) FROM products

AVG
Calcula a média de valores.
SELECT AVG(price) FROM products

ALIASES
Utilizar alias em consultas SQL para renomear colunas na
exibição dos resultados. O alias é um nome temporário que 
não altera a estrutura da tabela.

SELECT COUNT(*) AS TOTAL FROM products

Com nomes compostos:
SELECT COUNT(*) AS 'TOTAL DE PRODUTOS' FROM products 
ou
SELECT COUNT(*) AS [TOTAL DE PRODUTOS] FROM products 

GROUP BY
Agrupar registros.
SELECT category, COUNT(*) AS total FROM products GROUP BY category
Retorna o total de produtos em cada categoria
________________________________________________________________________________

RELACIONAMENTOS
Um CARRO pertence a uma pessoa -> 1 para 1
Um restaurante possui vários pratos -> 1 para muitos

Os relacionamentos definem como as tabelas se conectam e
interagem entre si.

Chave Primária (PK): Identificador único.
Chave Estrangeira (FK): Campo que referencia a chave 
primária em outra tabela, estabelecendo uma ligação entre
as duas tabelas.

Tipos de Relacionamentos


________________________________________________________________________________

TABELA sqlite_sequence no SQLite
Tabela gerada automaticamente quando uma coluna é definida
como auto-incremento.




*/
