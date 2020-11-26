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
   
    let movieDetail = document.querySelector('.peliculas');
    console.log(movieDetail);

    
        movieDetail.innerHTML += ` <article class="gridContainer">
                                    <div>
                                    <img class="foto" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                                    </div>
                                    <div>
                                    <h2 class="tituloSeries">${movie.title}</h2>
                                    <p class="textoSeries"> ${movie.overview}</p>
                                    <p class="textoSeries"> Votes: ${movie.vote_average}</p>
                                    <button type="Agregar" class="favorito1">Favorites</button>
                                    </div>

                                  </article>`
                                  
                                  let storage = localStorage.getItem('favoritos')
                                  console.log(storage);
                                  if (storage===null){
                                      localStorage.setItem('favoritos', '[]')
                                  }

            
                                  let button =document.querySelector('.favorito1')
                                  console.log(button);
                                  // Este if es para que cambie el texto el boton // 
                                  let storageJs =JSON.parse(storage)
                                  if (storageJs.includes(id)){
                                    button.innerHTML = '<i class="removove"> </i> Remove from favorites'
                            
                                   
                                  }
                                  button.addEventListener('click', function(event){
                                    this.style.color="purple";
                                    console.log(event);
                                    
                                    

                                      // este if es para que modifique // 
                                      if(!storageJs.includes(id)){
                                          storageJs.push(id)
                                          button.innerHTML = '<i class="removove"> </i> Remove from favorites'
                                
                                         
                                      }else{
                                          storageJs = storageJs.filter (function(movie){
                                              return movie != id
                                          })
                                          button.innerHTML = '<i class="removove"> </i> Add to favorites'
                                      }
                                      localStorage.setItem('favoritos',JSON.stringify(storageJs))
                                      
                                  })
                                })

.catch(function(error){
    console.log(error);
})


// REVIEW Corregir

let urlReview = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`;

fetch(urlReview)

.then (function(respuesta){
    return respuesta.json()
})

.then(function(comentario){
    // console.log(comentario);

    let review = document.querySelector('.review');
    // console.log(review);

    for(let i=0; i<comentario.results.length; i++){

        if(comentario.results.content == "") {
            review.innerHTML += `<p class="reviewTexto"> No reviews available </p>`
        }
        else {
            review.innerHTML += `<p class="reviewTexto"> Review: ${comentario.results[i].content}</p>`
        }
    }

})

.catch(function(error){
    console.log(error);
})
