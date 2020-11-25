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
   
    let movieDetail = document.querySelector('main');
    console.log(movieDetail);

   
        movieDetail.innerHTML += ` <article class="gridContainer">
                                    <div>
                                    <img class="foto" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                                    </div>
                                    <div>
                                    <h2 class="tituloSeries">${movie.title}</h2>
                                    <p class="textoSeries"> ${movie.overview}</p>
                                    <p class="textoSeries"> Votes: ${movie.vote_average}</p>
                                    <button type="Agregar" class="favorito1">Favoritos</button>
                                    <button type="Quitar" class="view">Quitar de favoritos</button>
                                    </div>

                                  </article>`
                                  
                                  let storage = localStorage.getItem('favoritos')
                                  console.log(storage);
                                  if (storage===null){
                                      localStorage.setItem('favoritos', '[]')
                                  }
                                  let button =document.querySelector('.favorito1')
                                  console.log(button);
                                  button.addEventListener('click', function(){
                                    // this.style.color="purple";
                                    // console.log(event);
                                      
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

