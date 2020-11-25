window.addEventListener('load',function(){

   
   let buscadorQuery = location.search
   let buscadorQueryObj = new URLSearchParams(buscadorQuery)
    console.log(buscadorQueryObj);


    let search = buscadorQueryObj.get('.searchData')
    console.log(search);
    let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b'


    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
    )
        .then(function(respuesta){
            return respuesta.json()
        })
    .then (function(data){
        console.log(data)

        let info = data.results;
        let movies = document.querySelector ('.movies');
        console.log(movies);
       
        
for(let i= 0; i<info.length; i++){

if(info[i].media_type =="tv"){
          movies.innerHTML +=
                    ` <article class="gridContainer">
                    <div>
                    <img class="foto" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}">
                    </div>
                    <div>
                    <h2 class="tituloSeries">${info[i].title}</h2>
                    <p class="textoSeries"> ${info[i].overview}</p>
                    <p class="textoSeries"> Votes: ${info[i].vote_average}</p>
                    </div>
                  </article>`
                } else if (info[i].media_type == "movie"){
                    movies.innerHTML += 
                    ` <article class="gridContainer">
                    <div>
                    <img class="foto" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}">
                    </div>
                    <div>
                    <h2 class="tituloSeries">${info[i].title}</h2>
                    <p class="textoSeries"> ${info[i].overview}</p>
                    <p class="textoSeries"> Votes: ${info[i].vote_average}</p>
                    </div>
                  </article>`
              
                }  
            }
    })
    .catch(function(error){
        console.log(error);
    })
})