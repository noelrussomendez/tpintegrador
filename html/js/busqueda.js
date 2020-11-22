// obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el resultado de la busqueda 
let resultado = objetoQuery.get('titulo');
let media = objetoQuery.get('media')

const api_key = 'ca4449919efcaf3d7e435fc10a0a0b0b';
const urlBuscador = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;
const image_url = "https://image.tmdb.org/t/p/w500"

// construir una URL dinámica, que permite 
const newUrl = urlBuscador + 'query=' + resultado

