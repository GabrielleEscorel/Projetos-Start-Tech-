
--CONSULTA 1
SELECT
    CATEGORIA.ID AS CategoriaID,
    CATEGORIA.NOME AS CategoriaNome,
    PRODUTO.ID AS ProdutoID,
    PRODUTO.NOME AS ProdutoNome,
    PRODUTO.PRECO AS PrecoProduto
FROM
    CATEGORIA
JOIN PRODUTO ON CATEGORIA.ID = PRODUTO.CATEGORIA_ID;

---------------------------------------------------------------------------------------------------

--CONSULTA 2
SELECT
    CLIENTE.NOME AS NomeCliente,
    CATEGORIA.NOME AS NomeCategoria,
    PRODUTO.NOME AS NomeProduto,
    ITEM_PEDIDO.PRECO_UNITARIO AS PrecoUnitario,
    ITEM_PEDIDO.QUANTIDADE AS QuantidadeVendida,
    PEDIDO.DATA AS DataPedido
FROM
    ITEM_PEDIDO
JOIN PEDIDO ON ITEM_PEDIDO.PEDIDO_ID = PEDIDO.ID
JOIN PRODUTO ON ITEM_PEDIDO.PRODUTO_ID = PRODUTO.ID
JOIN CATEGORIA ON PRODUTO.CATEGORIA_ID = CATEGORIA.ID
JOIN CLIENTE ON PEDIDO.CLIENTE_ID = CLIENTE.ID;

----------------------------------------------------------------------------------------------------------

--- CONSULTA 3 TOTAL

SELECT
    CATEGORIA.NOME AS NomeCategoria,
    SUM(ITEM_PEDIDO.PRECO_UNITARIO * ITEM_PEDIDO.QUANTIDADE) AS TotalVendido
FROM
    CATEGORIA
JOIN PRODUTO ON CATEGORIA.ID = PRODUTO.CATEGORIA_ID
JOIN ITEM_PEDIDO ON PRODUTO.ID = ITEM_PEDIDO.PRODUTO_ID
GROUP BY
    CATEGORIA.NOME;