import { calculadora } from "../calculadora"
/* const indexTest = require ("./"); */
test ("test suma", () =>{
    const r = calculadora.suma(1,2)
    expect (r).toBe(3)

    
})
test ("test resta", () =>{
    const r = calculadora.resta(3,2)
    expect (r).toBe(1)

    
})
test.todo("test de multiplicacion")
test.todo("test de division")