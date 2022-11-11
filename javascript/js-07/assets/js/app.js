const titulo = document.getElementById("titulo")
const parrafos = document.getElementsByClassName("parrafo")

titulo.textContent = "Hola"
parrafos[0].innerHTML = "Soy un parrafo"

console.log(titulo.textContent);
console.log(parrafos[1]);

/* parrafos[1].style.color = "red";
parrafos[1].style.backgroundColor = "yellow"; */

/* console.log(parrafos[1].classList.contains("coloresFeos")); */

console.log(parrafos[1].classList.add("coloresFeos"));


// Crear elementos HTML

const padre = document.getElementById("padre");

const enlace = document.createElement("a");
enlace.href = "https://www.google.com";
enlace.textContent = "Ir a Google";

/* document.body.appendChild(enlace) */

/* document.body.insertAdjacentElement("afterbegin",enlace); */

padre.appendChild(enlace)


console.log(document.body);



const cartaPokemon = document.getElementById("pokemon");
const nombrePokemon = document.getElementById("nombre")
const imagen = document.getElementById(img)

const url = "https://pokeapi.co/api/v2/pokemon/25";

const pokedex = async () => {
    try {

        const respuesta = await fetch(url).json;
        const pokemon = await respuesta.json();

        console.log(pokemon.name);

        nombrePokemon.textContent = pokemon.name;

        const datos = {
            nombre: pokemon.name,
            imagen: pokemon.sprites.other.official-artwork.front_default,
        }

    } catch (error) {
        
    }
}

pokedex();