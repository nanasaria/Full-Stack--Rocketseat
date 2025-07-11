# Banco de Dados - Node.js

## Introdução

**Dado** → Material bruto  
**Informação** → Percepção concreta extraída dos dados

Um banco de dados é uma coleção organizada de dados.

## Por que usar Banco de Dados?

- Facilitar gestão
- Acesso e manipulação de dados
- Escalabilidade
- Eficiência
- Organização e acesso rápido
- Integridade e confiabilidade

## Banco de Dados Relacional

Organiza dados em tabelas estruturadas com linhas e colunas, estabelecendo relações lógicas entre tabelas através de chaves comuns.

### Tabelas

- Estrutura fundamental de armazenamento
- Cada tabela guarda dados de um assunto específico
- Tabelas também podem ser chamadas de Entidades
- Compostas por linhas (registros ou tuplas) e colunas (campos ou atributos)

**Exemplos:**
- Tabela produtos → Dados de produtos
- Tabela de usuários → Dados de usuários

### Primary Keys

Chaves primárias identificam exclusivamente cada registro, garantindo unicidade.

## SQLite

Banco de dados relacional leve, auto-suficiente e totalmente funcional:

- **Arquivo único**: Todos os dados, incluindo definições de tabelas, índices e informações, são mantidos em um único arquivo de disco
- **Auto-suficiente**: Não depende de instalação externa ou configuração de servidor, pode ser incorporado diretamente em uma aplicação
- **Convenção**: Arquivos `.db` para banco de dados

## Tipos de Dados SQLite

- `NULL` - Valor nulo
- `INTEGER` - Número inteiro
- `REAL` - Número de ponto flutuante
- `TEXT` - Sequência de caracteres
- `BLOB` - Dados binários grandes (imagens, arquivos ou qualquer tipo de dados não convertido automaticamente)

## Comandos SQL Essenciais

### Criar Tabela

```sql
CREATE TABLE products (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  category TEXT NULL DEFAULT 'general'
)
```

### Alterar Tabela

```sql
-- Adicionar coluna
ALTER TABLE products ADD quantity INTEGER NOT NULL

-- Remover coluna
ALTER TABLE products DROP COLUMN quantity

-- Renomear coluna
ALTER TABLE products RENAME COLUMN name TO description

-- Renomear tabela
ALTER TABLE products RENAME TO items
```

### Remover Tabela

```sql
DROP TABLE products
```

### Inserir Dados

```sql
INSERT INTO products (name, price) VALUES ('Teclado', 50)
```

### Selecionar Dados

```sql
-- Todas as colunas
SELECT * FROM products

-- Colunas específicas
SELECT name, price FROM products
```

### Atualizar Dados

```sql
UPDATE products SET price = 745.90, category = 'accessory' WHERE id = 1
```

### Deletar Dados

```sql
DELETE FROM products WHERE id = 3
```

## Filtros e Consultas

### WHERE com operadores

```sql
-- Igual
SELECT * FROM products WHERE name = 'Monitor'

-- LIKE (busca por padrão)
SELECT * FROM products WHERE name LIKE '%tor'  -- termina com 'tor'
SELECT * FROM products WHERE name LIKE 'Mo%'   -- inicia com 'Mo'
SELECT * FROM products WHERE name LIKE '%Mo%'  -- contém 'Mo'

-- Comparações
SELECT * FROM products WHERE price > 300        -- maior que
SELECT * FROM products WHERE price < 300        -- menor que
SELECT * FROM products WHERE price >= 300       -- maior ou igual
SELECT * FROM products WHERE price <= 300       -- menor ou igual
SELECT * FROM products WHERE name <> 'Monitor'   -- diferente
```

### Operadores Lógicos

```sql
-- AND
SELECT * FROM products WHERE price > 500 AND price < 1000

-- OR (pelo menos um critério)
SELECT * FROM products WHERE price > 500 OR price < 1000

-- AND e OR juntos
SELECT * FROM products WHERE price > 45 AND price < 1000 OR category = 'image'

-- Parênteses (grupos)
SELECT * FROM products WHERE (price > 45 AND price < 1000) AND (category = 'audio' OR category = 'image')

-- BETWEEN
SELECT * FROM products WHERE price BETWEEN 600 AND 1200

-- IN
SELECT * FROM products WHERE price IN (800, 550)
```

### Ordenação e Limitação

```sql
-- Ordenar
SELECT * FROM products ORDER BY price DESC  -- decrescente
SELECT * FROM products ORDER BY price ASC   -- crescente

-- Limitar resultados
SELECT * FROM products ORDER BY price DESC LIMIT 1

-- WHERE com ORDER BY (ordem obrigatória)
SELECT * FROM products WHERE category = 'audio' ORDER BY price ASC
```

## Funções de Agregação

```sql
-- Contar registros
SELECT COUNT(*) FROM products

-- Somar valores
SELECT SUM(price) FROM products

-- Calcular média
SELECT AVG(price) FROM products

-- Usar aliases
SELECT COUNT(*) AS TOTAL FROM products
SELECT COUNT(*) AS 'TOTAL DE PRODUTOS' FROM products
SELECT COUNT(*) AS [TOTAL DE PRODUTOS] FROM products

-- Agrupar
SELECT category, COUNT(*) AS total FROM products GROUP BY category
```

## Relacionamentos

Os relacionamentos definem como as tabelas se conectam e interagem entre si.

**Chave Primária (PK)**: Identificador único  
**Chave Estrangeira (FK)**: Campo que referencia a chave primária em outra tabela, estabelecendo ligação entre tabelas

### Tipos de Relacionamentos

**Um para Um (1:1)**: Um registro associado a um único registro em outra tabela
- Exemplo: Um carro pertence a uma pessoa

```sql
CREATE TABLE student_address (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER UNIQUE NOT NULL,
  street TEXT NOT NULL,
  city TEXT NOT NULL,
  
  FOREIGN KEY (student_id) REFERENCES students(id)
)
```

**Um para Muitos (1:N)**: Um registro pode estar associado a muitos registros em outra tabela
- Exemplo: Um restaurante possui vários pratos

```sql
CREATE TABLE course_modules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  course_id INTEGER NOT NULL,
  
  FOREIGN KEY (course_id) REFERENCES courses(id)
)
```

**Muitos para Muitos (N:M)**: Muitos registros podem estar associados a muitos registros em outra tabela

### INNER JOIN

Traz dados de duas tabelas relacionadas:

```sql
-- Um para Muitos
SELECT m.id, m.name, m.course_id, c.name
FROM course_modules AS m
INNER JOIN courses AS c ON c.id = m.course_id

-- Muitos para Muitos
SELECT sc.id, sc.students_id, s.name AS 'student', sc.course_id, c.name AS 'course'
FROM students_courses AS sc
INNER JOIN students AS s ON s.id = sc.students_id
INNER JOIN courses AS c ON c.id = sc.course_id
```

## Observações

- **sqlite_sequence**: Tabela gerada automaticamente quando uma coluna é definida como auto-incremento
