let query = location.search;
let queryString = new URLSearchParams(query);

let id = queryString.get("id")

let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b';
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

fetch(url)

.then (function(respuesta){
    return respuesta.json()
})

.then(function(movie){
    console.log(movie);
   
    let movieDetail = document.querySelector('.gridContainer');
    console.log(movieDetail);

   
        movieDetail.innerHTML += `<article class="gridContainer">

                                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                                    <h2 class="titulo">${movie.title}</h2>
                                    <p> Votes: ${movie.vote_average}</p>

                                  </article>`
                                  let storage = localStorage.getItem('favoritos')
                                  console.log(storage);
                                  if (storage===null){
                                      localStorage.setItem('favoritos', '[]')
                                  }
                                  let button =document.querySelector('.favorito')
                                  console.log(button);
                                  button.addEventListener('click', function(){
                                      
                                      let storageJs =JSON.parse(storage)
                                      if(!storageJs.includes(id)){
                                          storageJs.push(id)
                                      }else{
                                          storageJs = storageJs.filter (function(movie){
                                              return movie != id
                                          })
                                      }
                                      localStorage.setItem('favoritos',JSON.stringify(storageJs))
                                      
                                  })
                                })



// Falta hacer el REVIEW

.catch(function(error){
    console.log(error);
})

