let query = location.search;
let queryString = new URLSearchParams(query);

let id = queryString.get("id");

let apiKey ='ca4449919efcaf3d7e435fc10a0a0b0b'
let url =`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;

fetch(url)


.then (function(respuesta){
    return respuesta.json()
})

.then(function(data){
    console.log(data);

   let generosDetalle = data.generosDetalle;

    let sectionGeneros = document.querySelector('.generosDetalle');
    console.log(sectionGeneros);

    for(let i=0; i<generosDetalle.length; i++){
    
        sectionGeneros.innerHTML += `<section class="detalle">
                                            <img src="https://image.tmdb.org/t/p/w500/${generosDetalle[i].poster_path}" alt="reemplazar">
                                            <p class="titulo"> <a href="./moviedetail.html?id="${generosDetalle[i].genres_ids}></a> </p>
                                    </section>`;
     }
})

.catch(function(error){
    console.log(error)
})


// <a href="./moviedetail.html?id=${trending[i].id}">${trending[i].title}</a>
