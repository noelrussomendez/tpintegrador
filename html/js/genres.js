let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b'
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`


fetch(url) 

.then (function(respuesta){
    return respuesta.json()
})

.then(function(data){
    console.log(data);
    let generos = data.genres

    let sectionGenres = document.querySelector('main');
    console.log(sectionGenres);

    for(let i=0; i<generos.length; i++){
        sectionGenres.innerHTML += `<div class="generos"> 
                                    <a href="./genresdetail.html?genres=${generos[i].id}" ${generos[i].id} > 
                                    <h2 class="titulo">${generos[i].name}</h2>
                                    </a>
                                    </div>`;
    }
})


.catch(function(error){
    console.log(error);
})

