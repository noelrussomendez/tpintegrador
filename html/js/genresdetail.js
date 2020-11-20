let query = location.search;
let queryString = new URLSearchParams(query);

let id = queryString.get("id");

let apiKey ='ca4449919efcaf3d7e435fc10a0a0b0b'
let url =`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;

fetch(url)


.then (function(respuesta){
    return respuesta.json()
})

.then(function(generos){
    console.log(generos);
    // let trending = data.results

    // let sectionTrending = document.querySelector('.recomendadas');
    // console.log(sectionTrending);

    // for(let i=0; i<trending.length; i++){
    //     sectionTrending.innerHTML += `<article class="media">
    //                                         <img src="https://image.tmdb.org/t/p/w500/${trending[i].poster_path}" alt="reemplazar">
    //                                         <p class="titulo"> <a href="./moviedetail.html">${trending[i].title}</a> </p>
    //                                 </article>`;
    // }
})

.catch(function(error){
    console.log(error)
})
