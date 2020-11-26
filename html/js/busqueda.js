//1 Obtener la queryString
let queryString = window.location.search;

//2 Transformarla en un obejto literal
let queryObject = new URLSearchParams(queryString);

//3 Obtener EL dato para completar el end point.
let searchData = queryObject.get('searchData'); //Cambie segun lo que tengo en la url
let mediaType = queryObject.get('mediaType'); //Cambie segun lo que tengo en la url


let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b'


if(mediaType == "movie"){

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchData}&page=1&include_adult=false` //Viene de la API de TMDB

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
            //Aca operamos con los datos.
            console.log(data);

            let info = data.results //Esto es un array.
            let movies = document.querySelector('.movies');
            console.log(movies);

            for (let i = 0; i < 4; i++) {
                movies.innerHTML += `<article class="card-wrapper col-sm-3">
                                    <div class="card my-3">
                                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${info[i].title}</h5>
                                                <p class="card-text">${info[i].overview}</p>
                                                <a href="moviedetail.html?id=${info[i].id}" class="btn btn-primary">Ver más</a>
                                            </div>
                                        </div>
                                    </article>` 
            }

        })
        .catch(function (error) {
            console.log(error);
        })

}

if(mediaType == "tv"){

    let url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=${searchData}1&include_adult=false` //Viene de la API de TMDB

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
            //Aca operamos con los datos.
            console.log(data);

            let info = data.results //Esto es un array.
            let movies = document.querySelector('.movies');
            console.log(movies);

            for (let i = 0; i < 4; i++) {
                movies.innerHTML += `<article class="card-wrapper col-sm-3">
                                    <div class="card my-3">
                                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${info[i].title}</h5>
                                                <p class="card-text">${info[i].overview}</p>
                                                <a href="moviedetail.html?id=${info[i].id}" class="btn btn-primary">Ver más</a>
                                            </div>
                                        </div>
                                    </article>`
            }

        })
        .catch(function (error) {
            console.log(error);
        })
}

if(mediaType == "person"){
    let url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&page=${searchData}1&include_adult=false`
}

if(mediaType == "all"){
    //fetch a multisearch

    let url = ` https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchData}&page=1&include_adult=false` //Viene de la API de TMDB

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
            //Aca operamos con los datos.
            console.log(data);

            let info = data.results //Esto es un array.
            let movies = document.querySelector('.movies');
            console.log(movies);

            for (let i = 0; i < info.length; i++) {
                if(info[i].media_type == "movie"){
                    movies.innerHTML += `<article class="card-wrapper col-sm-3">
                                        <div class="card my-3">
                                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                                <div class="card-body">
                                                    <h5 class="card-title">${info[i].title}</h5>
                                                    <p class="card-text">${info[i].overview}</p>
                                                    <a href="moviedetail.html?id=${info[i].id}" class="btn btn-primary">Ver más</a>
                                                </div>
                                            </div>
                                        </article>`
                } else if (info[i].media_type == "tv"){
                    movies.innerHTML += `<article class="card-wrapper col-sm-3">
                                        <div class="card my-3">
                                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                                <div class="card-body">
                                                    <h5 class="card-title">${info[i].original_name}</h5>
                                                    <p class="card-text">${info[i].overview}</p>
                                                    <a href="moviedetail.html?id=${info[i].id}" class="btn btn-primary">Ver más</a>
                                                </div>
                                            </div>
                                        </article>`
                } else {
                    movies.innerHTML += `<article class="card-wrapper col-sm-3">
                                    <div class="card my-3">
                                        <img src="https://image.tmdb.org/t/p/w500${info[i].profile_path}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${info[i].name}</h5>
                                                <p class="card-text"> Popularidad: ${info[i].popularity}</p>
                                                <a href="moviedetail.html?id=${info[i].id}" class="btn btn-primary">Ver más</a>
                                            </div>
                                        </div>
                                    </article>`
                }
            }

        })
        .catch(function (error) {
            console.log(error);
        })
}