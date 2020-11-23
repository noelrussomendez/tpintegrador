let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b';
// obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el resultado de la busqueda 
let resultado = objetoQuery.get('titulo');
let media = objetoQuery.get('media')

let urlBuscador = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`;
let image_url = "https://image.tmdb.org/t/p/w500"

// construir una URL dinámica, que permite 
let newUrl = urlBuscador + 'query=' + resultado

fetch(urlBuscador)

.then (function(respuesta){
    return respuesta.json()
})

.then(function(urlBuscador){
    console.log(urlBuscador);
   
    let busqueda = document.querySelector('.form-group my-4 text-center');
    console.log(busqueda);

})
.catch(function(error){
    console.log(error);
})

