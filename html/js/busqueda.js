let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let search = queryObject.get ('.searchData');
console.log(search);


let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b'
let url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`

let resultados = document.querySelector('.resultados')

fetch(url)
.then(function (respuestas){
    return respuestas.json()
})
.then(function(data){
    console.log(data);
    let info = data.results;
    if (info.length != 0){ 
    for (let i=0; i<info.length; i++){
        if(info[i].media_type == "tv"){
            /* resultados.innerHTML += `<li>Serie: ${info[i].original_name}</li>` */
            let resultados = document.querySelector(".resultados")
            resultados.innerHTML += `<article class="gridContainer">

            <img src="https://image.tmdb.org/t/p/w500/${info.poster_path}">
            <h2 class="titulo">${info.name}</h2>
            <p> Genero: <a href="./genresdetail.html?genres=${info.genres[i].id}"> ${info.genres[i].name} </a> </p>
            <p> Disponible desde: ${info.first_air_date} </p>
        
        </article>`}
         else if (info[i].media_type == "movie"){
            /* resultados.innerHTML += `<li>Pelicula: ${info[i].title}</li>` */
            let resultados = document.querySelector(".resultados")
            resultados.innerHTML += `<article class="gridContainer">

            <img src="https://image.tmdb.org/t/p/w500/${info.poster_path}">
            <h2 class="titulo">${info.title}</h2>
            <p> Votes: ${info.vote_average}</p>

          </article>`
        }
        
    }}
    else{
        let alertas = document.querySelector('h2');
        alertas.innerText = "There are no results for: " + search
    }
    })


.catch(function(error){
    console.log(error);
})


