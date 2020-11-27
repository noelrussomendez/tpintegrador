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
    
        let serieDetail = document.querySelector('main');
        console.log(serieDetail);

        let imagen = document.querySelector('.foto');
        imagen.src = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;

        let titulo = document.querySelector('.tituloSeries');
        titulo.innerText = serie.name;

        let texto = document.querySelector('.textoSeries1');
        texto.innerText = serie.overview;

        let disponible = document.querySelector('.textoSeries2');
        disponible.innerText = serie.first_air_date;

        let genero = document.querySelector('.textoSeries3');

        for ( i=0;i<serie.genres.length; i++) {
        genero.innerHTML += ` <a href="./genresdetail.html?genres=${serie.genres[i].id}"> ${serie.genres[i].name} </a>`

        }

    })

    
    .catch(function(error){
        console.log(error);
    })


    

