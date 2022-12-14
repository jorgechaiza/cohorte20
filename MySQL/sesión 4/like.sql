/*Like*/
SELECT * FROM productos
where nombre Like 'limonada';

SELECT * FROM productos
where nombre Like 'limon%';

SELECT * FROM productos
where nombre Like '%limon';

SELECT * FROM productos
where nombre not Like '%limon%';

