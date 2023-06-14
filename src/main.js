

import data from './data/ghibli/ghibli.js';

//GUARDA LOS DATOS DE BOTON PERSONAJE
//const btnPersonaje = document.getElementById("botonPersonaje");

//una variable para leer los datos del array de la data.
//una variable para ver los datos de la data pero no en la consola.
//Mostrar los datos de la data en el div de la página. 



//BOTON DE PERSONAJE
/*btnPersonaje.addEventListener("click", function () {
  let datapersonaje = document.getElementById("botonPersonaje").value;
   
document.getElementById("datoPersonaje").value = //funcion que va regresar los datos de la data; 
}, true);*/

/* variable. forEach: iteracion recorrer el array. Por cada elemento/objeto hace algo*/
/*funcion flecha*/
// data es el nombre de la "data"
//flims es el nombre del array 
//.forEach es el metodo que ayuda a ver los datos del arreglo ya que hace una iteración por cada c

/*let peliculas = document.getElementById(peliculas-conteiner)element =>
data.films.forEach(function (films, release_date) {
  let anios = films.filter(films = films.release_date < 2000);
  console.log(anios);

});
*/
//let peliculas = document.getElementById(peliculas-conteiner)

//personajes 

const open= document.getElementById("botonPersonaje");
const contenedorGeneral= document.getElementById("contenedor_general");

open.addEventListener("click", () => {
  contenedorGeneral.classList.add("show");
  //alert("prueba");
});

close.addEventListener("click", () => {
  contenedorGeneral.classList.remove("show");
});

//let personajesPorGenero = data.queryselectorAll(".gender");
//console.log(personajesPorGenero);  
