/*subconsultas*/
SELECT * FROM productos
WHERE idCategoria = 2 and precio > 10 and  existencia between 5 and 20 and fecha_alta is not null;

SELECT * FROM productos;

SELECT * FROM productos;
SELECT * FROM categoria;

SELECT * FROM productos
where idCategoria
in(SELECT id FROM categoria WHERE id > 2);



