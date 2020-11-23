 // JS search 


let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b';
// obtengo el query string
let queryString = location.search;

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);
console.log (objetoQuery);

//ahora si obtengo el resultado de la busqueda 
let search = objetoQuery.get('searchData');
console.log (search)

let urlBuscador = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`;

let results = document.querySelector ('.resultados');
let searchTitulo = document.querySelector ('.searchTitle')


// construir una URL dinámica

let newUrl = urlBuscador + 'query=' + resultado

fetch(urlBuscador)
.then (datos=>datos.json() )
.then (respuesta => {

    let spinner = document.querySelector ('.cargando')

    spinner.style.display = "none"
    console.log (respuesta);
    let results = ''

respuesta.results.forEach ((multi, index)) => {
    if (multi.media_type == "tv"){
        results += `<article class="gridContainer">
        <a href= "seriedetail.js?id={multi.id}">
        <article class="gridContainer">
        <img src="https://image.tmdb.org/t/p/w500/${serie.poster_path}">
        <h2 class="titulo">${serie.name}</h2>
        <p> Genero: <a href="./genresdetail.html?genres=${serie.genres[i].id}"> ${serie.genres[i].name} </a> </p>
        <p> Disponible desde: ${serie.first_air_date} </p>
        </article>`
    } else if (multi.media_type == "movie"){
        results += `<article class="gridContainer">
        <a href= "moviedetail.js?id={multi.id}">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
        <h2 class="titulo">${movie.title}</h2>
        <p> Votes: ${movie.vote_average}</p>
        </article>`

    
    }
}


})

.catch(function(error){
    console.log(error);
})

