import data from './data/ghibli/ghibli.js';


let datosPelicula = data.films;
//Mostrar los titulos de las peliculas 
//Vamos a mostrar los titulos de las peliculas con la manipulación del DOM y la creacion de eventos 
//crear elementos

//CREAR UN BOTON CON LA FUNCION DE FILTRAR LOS DATOS POR AÑO
//SUMA DEL LOS DATOS DEL ARREGLO NUMERO DE PELICULAS DIRIGIDAS POR CADA DIRECTOR.

 const botonDirectores = document.getElementById("directoresPelis");
 botonDirectores.addEventListener("click", function(){
let sumaNew = {};

datosPelicula.forEach((datosPelicula)=> {
   if(sumaNew[datosPelicula.director]){
       sumaNew[datosPelicula.director]++
   }else{
       sumaNew[datosPelicula.director] = 1;
   }
   console.log(sumaNew);

   for(let i=0; i<sumaNew.lenght; i++){
    if(sumaNew[i]){
        let directorEspecifico = datosPelicula => datosPelicula.director === "Isao Takahata";
        let filtroED = datosPelicula.find(directorEspecifico);

        let comparacion = sumaNew[i] == filtroED;
        console.log(comparacion);
    }else{
        console.log("aun no se que va aqui");
    }
   }

});

 })



/*const tituloPelisNode = document.getElementById("tituloPelicula");
const directoresNode = document.getElementById("director");



 //Crear un boton que muestre la data de los titulos 
 const botonTitlee = document.getElementById("peliculaTitle");
 botonTitlee.addEventListener("click", function(){
  
for (let i = 0; i<datosPelicula.length; i++){
    const movilCarNode = document.createElement("div");
    movilCarNode.classList.add("movieCard");
    const image = document.createElement("img")
    image.src  = datosPelicula[i].poster;
    const titlee = document.createElement("p");
    titlee.textContent = datosPelicula[i].title;
    tituloPelisNode.appendChild(titlee);
    tituloPelisNode.appendChild(image);
}
 })

//crear un boton que muestre la data de los directores
const botonDirec = document.getElementById("director");
botonDirec.addEventListener("click", function(){
   const direc =document.createElement("p");
   direc.textContent = datosPelicula.map((datosPelicula) => datosPelicula.director)
   directoresNode.appendChild(direc);
})


//CREANDO ELEMENTOS CON EL DOM

 //entrar a la etiqueta del HTML desde el DOM
 /*const impresionData = document.getElementById('demo');

 //Usando el dom 
 const botonPersonaje = document.getElementById("mensaje");
  botonPersonaje.addEventListener("click", function(){
        //BUSQUEDA DE UN DATO ESPECIFICO
let btotoro = datosPelicula => datosPelicula.title === 'The Tale of the Princess Kaguya';
let totoro = datosPelicula.find(btotoro); //METODO FIND
console.log(totoro);
//creación del div
/*const div = document.createElement("div");
impresionData.appendChild(div);

const dataResulado = document.querySelector(".resultado")
dataResulado.textContent = dataResulado.appendChild(totoro);
})*/

//peliculaArray = datosPelicula[1].description;

//let mostarDato = document.getElementById("demo1");

//mostarDato = peliculaArray;

/*let dataFilms = [];
for (let i; i<data.length; i++){
    if(data[i].films === dataFilms){
        dataFilms.push(data[i]);
    }
}

console.log(data);*/

//FILTRADO DE ARRAY CON METODO MAP ESPECIFICO 
/*const nombredirector = datosPelicula.map((datosPelicula)=> datosPelicula.director)

console.log(nombredirector);

//FILTRADO CON METODO forEach
 datosPelicula.forEach((datosPelicula) =>console.log(datosPelicula.title) )*/


