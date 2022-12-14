/*joins*/
SELECT * FROM productos;

SELECT * FROM productos, categoria
WHERE idCategoria = id;

SELECT * FROM productos as p INNER join categoria as c
ON p.idCategoria = c.id;

SELECT p.nombre, p.precio, p.existencia, c.nombre FROM productos as p INNER join categoria as c
ON p.idCategoria = c.id;

SELECT p.nombre, p.precio, p.existencia, t.nombre FROM productos as p RIGHT join temporal as t
ON p.idCategoria = t.id;

SELECT * FROM proveedores;


SELECT * FROM categoria UNION
SELECT nombre, precio FROM productos;

/*multi consulta*/
SELECT p.nombre AS nom_producto, c.nombre AS nom_categoria, pv.nombre AS proveedor 
FROM productos AS p
inner join categoria AS c
ON p.idCategoria = c.id
inner join detalle_producto_proveedor as det
on p.idProducto = det.idProducto
inner join proveedores as pv
on det.idProveedor =pv.id
where p.existencia > 5;


SELECT idCategoria FROM productos;


