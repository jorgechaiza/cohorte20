SELECT * FROM tiendita.categoria;
SELECT * FROM tiendita.productos;
SELECT nombre, precio, existencia, idCategoria FROM productos WHERE idCategoria <= 2;
/* max(), min()*/
SELECT min(existencia) as existencia_minima, max(existencia) as existencia_maxima FROM productos; 
/*limit*/
SELECT * FROM productos limit 6, 3;
/* order asc, desc */
SELECT * FROM productos order by nombre asc, existencia asc;

/* Operadores */
SELECT * FROM productos;
SELECT * FROM productos WHERE idCategoria = 1 and precio = 10;
SELECT * FROM productos WHERE idCategoria = 1 or precio = 10;
/* != diferente
<> diferente
*/
SELECT * FROM productos WHERE idCategoria != 3;
/* los null y not null */
SELECT * FROM productos WHERE precio is null;
SELECT * FROM productos WHERE precio is not null;
/* between and */
SELECT * FROM productos 
WHERE precio
between 5 and 10;

SELECT * FROM productos 
WHERE precio
not between 5 and 10;