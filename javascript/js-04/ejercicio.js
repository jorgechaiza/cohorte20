let m1 = [
    [2, 5, 6],
    [5, 9, 7],
    [6, 4, 3]
];

let m2 = [
    [5, 3, 2],
    [8, 5, 4],
    [1, 4, 9]
];

let m3 = [
    [,,],
    [,,],
    [,,]
]


for (let i = 0; i < m1.length; i++) {
    /* console.log("i", i); */
    for (let j=0; j<3; j++){
        m3 [i][j] = (m1[i][j]*m2[j][i])
        /* console.log("j", j); */
    }
    
}
console.table(m1);
console.table(m2);
console.table(m3);
/* fil_m1 = m1.length;
col_m1 = m1[0].length;
fil_m2 = m2.length;
col_m2 = m2[0].length;

if (col_m1 != fil_m2)
  throw "No se pueden multiplicar las matrices";

  let multiplicacion = new Array(fil_m1);
  for (x=0; x<multiplicacion.length;x++)
      multiplicacion[x] = new Array(col_m2).fill(0);

for (x=0; x < multiplicacion.length; x++) {
    for (y=0; y < multiplicacion[x].length; y++) {                                
        for (z=0; z<col_m1; z++) {
            multiplicacion [x][y] = multiplicacion [x][y] + m1[x][z]*m2[z][y]; 
        }
    }
}
console.log(multiplicacion); */



