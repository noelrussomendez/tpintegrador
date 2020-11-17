let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b'
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`


fetch(url) 

.then (function(respuesta){
    return respuesta.json()
})

.then(function(data){
    console.log(data.results);
    let genres = data.results

    let sectionGenres = document.querySelector('.generos');
    console.log(sectionGenres);

    for(let i=0; i<genres.length; i++){
        sectionGenres.innerHTML += `<article class="media">
                                        <img src="https://image.tmdb.org/t/p/w500/${genres[i].poster_path}" alt="reemplazar">
                                        <p class="titulo"> <a href="./moviedetail.html">${genres[i].title}</a> </p>
                                    </article>`;
    }
})


.catch(function(error){
    console.log(error);
})

