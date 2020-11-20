let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b'
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`


fetch(url) 

.then (function(respuesta){
    return respuesta.json()
})

.then(function(data){
    console.log(data.genres);
    let genres = data.genres

    let sectionGenres = document.querySelector('.generos');
    console.log(sectionGenres);

    for(let i=0; i<genres.length; i++){
        sectionGenres.innerHTML += `<div class="generos"><h2 class="titulo"></h2>${genres[i].name}</div>
                                 <section class="containerContent>
                                    <article>
                                    <div class="contenido">
                                    <h4 class="contenidoGeneros">${genres[i].id}</h4>
                                    <img src="https://image.tmdb.org/t/p/w500/${genres[i].poster_path}" alt="reemplazar">
                                        <p class="titulo"> <a href="./moviedetail.html">${genres[i].title}</a> </p>
                                    </div>
                                 </article>
                                 </section>`;
    }
})


.catch(function(error){
    console.log(error);
})

