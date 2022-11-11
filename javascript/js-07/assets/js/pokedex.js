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