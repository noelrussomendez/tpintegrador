 // JS search 


let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b';
// obtengo el query string
let queryString = window.location.search;

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);
console.log (objetoQuery);

//ahora si obtengo el resultado de la busqueda 
let search = objetoQuery.get('searchData');
console.log (search)

let urlBuscador = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`;

let results = document.querySelector ('.resultado');
let searchTitulo = document.querySelector ('.searchTitle')


// construir una URL dinámica

let newUrl = urlBuscador + 'query=' + resultado

fetch(urlBuscador)
.then (function (respuesta){
    return respuesta.json()
})

.then (function (data){
let results = document.querySelector ('.resultado');
let info = data.results;
console.log(data)


info.forEach((seriesypelis => {
    if (seriesypelis.media_type == "tv"){
        results += `<article class="gridContainer">
        <a href= "seriedetail.js?id={multi.id}">
        <article class="gridContainer">
        <img src="https://image.tmdb.org/t/p/w500/${seriesypelis.poster_path}">
        <h2 class="titulo">${seriesypelis.name}</h2>
       <p> Genero: <a href="./genresdetail.html?genres=${seriesypelis.genres[i].id}"> ${seriesypelis.genres[i].name} </a> </p>
        <p> Disponible desde: ${seriesypelis.first_air_date} </p>
        </article>`
    } else if (seriesypelis.media_type == "movie"){
        results += `<article class="gridContainer">

        <img src="https://image.tmdb.org/t/p/w500/${seriesypelis.poster_path}">
        <h2 class="titulo">${seriesypelis.title}</h2>
        <p> Votes: ${seriesypelis.vote_average}</p>

      </article>`

    }
    })
)





.catch(function(error){
    console.log(error);
})
})
