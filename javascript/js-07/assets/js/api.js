/* const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"),2000);
const baz = () => console.log("third");

bar();
foo();
baz(); */


//SERVIDOR
const nombre = () =>{
    const nombres = ["Pepe","Pancho","Maria"];
    
    /* setTimeout(() => {
        return nombres;
    },3000) */

    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if(true){
                resolve(nombres)
            }
            else{
                reject("No hay nombres")
            }
        },3000)
    });
}

//SERVIDOR

/* Nuestra PC */


/* console.log(nombre()[0]);
 */

//PROMESAS EN CADENA
/* nombre().then(nombres => console.log(nombres)).catch(error => console.warn(error)); */

/* forEach((element) => {
}); */
    
//azucar sintáctica
//código que se creo para facilitar el trabajo de los programadores

//async -- await

const obtenerNombre = async () => {

    try {
        let nombres = await nombre();
        console.log(nombres); 

    } catch (error) {
        console.log(error);
        alert(error)
    } 
    
}

obtenerNombre();



/* console.log(nombre()); */

/* const url = "https://pokeapi.co/api/v2/pokemon/25";

const pokedex = () => {
    fetch(url)
    .then(datos => datos.json())
    .then(pokemon => console.log(pokemon))
    .catch(error => console.log(error))      
    
};

pokedex(); */

// () => {return}

const cartaPokemon = document.getElementById('pokemon');
const nombrePokemon = document.getElementById('nombre');
const imagen = document.getElementById('img');
const form = document.getElementById("form")



const pokedex = async (numero) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;

    try {

        const respuesta = await fetch(url);
        const pokemon = await respuesta.json();
        
        console.log(pokemon.name);

        const datos = {
            nombre: pokemon.name,
            imagen: pokemon.sprites.other['official-artwork'].front_default,
        }

        console.log(datos.imagen);

        nombrePokemon.textContent = datos.nombre;
        imagen.innerHTML = `
            <img src="${datos.imagen}" alt="imagen de ${datos.nombre}" width="250"/>
        `;
        
        
    } catch (error) {


        
    }
}


form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const valor = document.getElementById("idp").value;

    console.log(valor);

    pokedex(valor);
    /* console.log(evento.target); */

    form.reset();
});