import  React, { Fragment } from "react"

const micomponente = ()=>{
    let nombre = "pedroVar";
    let web = "generation.org";
    return (
        
        /*<p>Este es mi primer componente</p>
    <></> <Fragment></Fragment> <div></div>*/
<>
<header>
    <h1>Componente creado</h1>
    <p> mi primer comentario</p>
    <ul>
        <li>Angular: {nombre}</li>
        <li>React. {web}</li>
        <li>Vue</li>
    </ul>
</header>
</>
);
}

export default micomponente;
