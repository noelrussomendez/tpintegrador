let query = location.search;
let queryString = new URLSearchParams(query);
let idMovie = queryString.get('id')

let storage = localStorage.getItem('favoritos')
console.log(storage);

if (storage === null) {
    localStorage.setItem('favoritos',"[]")
}

let container = document.querySelector('.containerContent')

fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=ca4449919efcaf3d7e435fc10a0a0b0b&language=en-US`)

    .then (datos => datos.json() )

    .then (respuesta => {

        console.log (respuesta);
        container.innerHTML = `<article class="detail">
                                    <div>
                                        <h2 class="titulo"> ${respuesta.title} </h2>
                                        <img scr=https://image.tmdb.org/t/p/w500/${respuesta.backdrop_path}">
                                    </div>
                                    <button class="favorite"> Agregar </button>
                                </article>`

        let button = document.querySelector('.favorite')
        console.log(button);

        button.addEventListener('click',function() {

            let storage = localStorage.getItem('favoritos')
            let storageJs = JSON.parse (storage)

            if (!storageJs.includes(idMovie)) {
                storageJs.push(idMovie)
            }
            else {
                storageJs = storageJs.filter(function(movie) {
                    return movie != idMovie
                })
            }

            localStorage.getItem('favoritos', JSON.stringify(storangeJs))

        })
        
    })

    .catch(function(error){
        console.log(error)
    })