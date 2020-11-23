let storage = localStorage.getItem('favoritos')
console.log(storage);

if (storage === null) {
    localStorage.setItem('favoritos',"[]")
}

let container = document.querySelector ('.favoritos')
let storageJs = JSON.parse (storage)
let movies = ''

storageJs.forEach( id => {
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ca4449919efcaf3d7e435fc10a0a0b0b&language=en-US`)

    .then (datos => datos.json() )

    .then (respuesta => {

        movies = `<article>
                    <h2>${respuesta.title}</>
                    <img scr=https://image.tmdb.org/t/p/w500/${respuesta.poster_path}">
                </article>`;

        container.innerHTML += movies;
    })

    .catch(function(error){
        console.log(error)
    })

});

