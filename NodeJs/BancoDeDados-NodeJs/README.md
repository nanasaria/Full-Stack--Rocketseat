# Banco de Dados - Node.js

## Introdução

**Dado** → Material bruto  
**Informação** → Percepção concreta extraída dos dados

Um banco de dados é uma coleção organizada de dados.

## Por que usar Banco de Dados?

- Facilita gestão
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
- Compostas por linhas (registros) e colunas (campos)

### Primary Keys

Chaves primárias identificam exclusivamente cada registro, garantindo unicidade.

## SQLite

Banco de dados relacional leve, auto-suficiente e funcional:

- **Arquivo único**: Todos os dados em um arquivo `.db`
- **Auto-suficiente**: Sem dependências externas

## Tipos de Dados SQLite

- `NULL` - Valor nulo
- `INTEGER` - Número inteiro
- `REAL` - Número de ponto flutuante
- `TEXT` - Sequência de caracteres
- `BLOB` - Dados binários

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
SELECT * FROM products WHERE price > 300       -- maior que
SELECT * FROM products WHERE price <> 'Monitor' -- diferente
```

### Operadores Lógicos

```sql
-- AND
SELECT * FROM products WHERE price > 500 AND price < 1000

-- OR
SELECT * FROM products WHERE price > 500 OR category = 'audio'

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
SELECT COUNT(*) AS 'TOTAL DE PRODUTOS' FROM products

-- Agrupar
SELECT category, COUNT(*) AS total FROM products GROUP BY category
```

## Relacionamentos

- **1 para 1**: Um carro pertence a uma pessoa
- **1 para muitos**: Um restaurante possui vários pratos

**Chave Primária (PK)**: Identificador único  
**Chave Estrangeira (FK)**: Campo que referencia a chave primária de outra tabela
