let queryString = location.search;
let queryObject = new URLSearchParams(queryString);

let genres = queryObject.get("genres");

let apiKey ='ca4449919efcaf3d7e435fc10a0a0b0b'
let url =`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres}`;

fetch(url)


.then (function(respuesta){
    return respuesta.json()
})

.then(function(data){
    console.log(data);

   let generosDetalle = data.results;

    let sectionGeneros = document.querySelector('.generosDetalle');
    console.log(sectionGeneros);

    for(let i=0; i<generosDetalle.length; i++){
    
        sectionGeneros.innerHTML += `<section class="detalle">
                                            <a href="./moviedetail.html?id=${generosDetalle[i].id}&media_type=movie"> <img src="https://image.tmdb.org/t/p/w500/${generosDetalle[i].poster_path}" alt="reemplazar">
                                            <h2 class="titulo">${generosDetalle[i].title}</h2>
                                    </section>`;
     }
})

.catch(function(error){
    console.log(error)
})

