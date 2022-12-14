/*listas*/
SELECT * FROM productos;

SELECT * FROM productos
WHERE precio 
in (5,6,7,8,9,10);

SELECT * FROM productos
WHERE precio 
not in (5,6,7,8,9,10);

SELECT * FROM productos
WHERE date (fecha_alta) 
between '2015-01-01' and '2016-07-24';

SELECT * FROM productos
WHERE precio = 15 - 3;
/*avg()*/
SELECT nombre, avg(precio) as promedio_precios FROM productos
where idProducto = 1 group by idCategoria;

