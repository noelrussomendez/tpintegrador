let query = location.search;
let queryString = new URLSearchParams(query);

let id = queryString.get("id")

let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b';
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;

fetch(url)

    .then (function(respuesta){
        return respuesta.json()
    })

    .then(function(serie){
        console.log(serie);
    
        let serieDetail = document.querySelector('.gridContainer');
        console.log(serieDetail);

            serieDetail.innerHTML += `<article class="gridContainer">

                                        <img src="https://image.tmdb.org/t/p/w500/${serie.poster_path}">
                                        <h2 class="titulo">${serie.name}</h2>
                                        <p> Genero: <a href="./genresdetail.html?id=${serie.genres}"> ${serie.genres} </a> </p>
                                        <p> Disponible desde: ${serie.first_air_date} </p>
                                
                                    </article>`
    
    })

    // Arreglar el hipervinculo a los generos
    
    .catch(function(error){
        console.log(error);
    })

