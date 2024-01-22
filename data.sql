-- Inserir Categorias
INSERT INTO CATEGORIA (NOME) VALUES
    ('INFO'),
    ('MÓVEIS'),
    ('LIVROS'),
    ('CELULARES'),
    ('AUTOMOTIVA');

--------------------------------------------------------------------------------------------------------

-- TABELA PRODUTOS
INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA_ID) VALUES
    ('Notebook Samsung', 3523.00, 1),
    ('Sofá 3 lugares', 2500.00, 2),
    ('Clean Architecture', 102.90, 3),
    ('Mesa de jantar 6 lugares', 3678.98, 2),
    ('iPhone 13 Pro', 9176.00, 4),
    ('Monitor Dell 27"', 1889.00, 1),
    ('Implementing Domain-Driven Design', 144.07, 3),
    ('Jogo de pneus', 1276.79, 5),
    ('Clean Code', 95.17, 3),
    ('Galaxy S22 Ultra', 8549.10, 4),
    ('Macbook Pro 16', 31752.00, 1),
    ('Refactoring Improving the Design of Existing Code', 173.90, 3),
    ('Cama queen size', 3100.00, 2),
    ('Central multimidia', 711.18, 5),
    ('Building Microservices', 300.28, 3),
    ('Galaxy Tab S8', 5939.10, 1);

-----------------------------------------------------------------------------------------------------------------

-- TABELA CLIENTES
INSERT INTO CLIENTE (NOME) VALUES
    ('ANA'),
    ('ELI'),
    ('DANI'),
    ('GABI'),
    ('BIA'),
    ('CAIO');

--------------------------------------------------------------------------------------------------------------------

-- TABELA PEDIDO
INSERT INTO PEDIDO (DATA, CLIENTE_ID) VALUES
    ('2022-01-01', 1),
    ('2022-01-05', 1),
    ('2022-01-08', 1),
    ('2022-01-06', 2),
    ('2022-01-13', 1),
    ('2022-01-04', 3),
    ('2022-01-10', 4),
    ('2022-01-15', 5),
    ('2022-01-09', 5),
    ('2022-01-14', 3),
    ('2022-01-03', 6),
    ('2022-01-12', 3),
    ('2022-01-07', 3),
    ('2022-01-16', 6),
    ('2022-01-11', 6),
    ('2022-01-02', 5);

-----------------------------------------------------------------------------------------------------------------------

-- TABELA PEDIDOS
INSERT INTO ITEM_PEDIDO (PEDIDO_ID, PRODUTO_ID, PRECO_UNITARIO, QUANTIDADE) VALUES
    (1, 1, 3523.00, 1),
    (2, 2, 2500.00, 1),
    (3, 3, 102.90, 2),
    (4, 4, 3678.98, 1),
    (5, 5, 9176.00, 6),
    (6, 6, 1889.00, 3),
    (7, 7, 144.07, 3),
    (8, 8, 1276.79, 1),
    (9, 9, 95.17, 1),
    (10, 10, 8549.10, 5),
    (11, 11, 31752.00, 1),
    (12, 12, 173.90, 1),
    (13, 13, 3100.00, 2),
    (14, 14, 711.18, 1),
    (15, 15, 300.28, 2),
    (16, 16, 5939.10, 4);
