let query = location.search;
let queryString = new URLSearchParams(query);
let id = queryString.get("id")
let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b';
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;

fetch(url)

    .then (function(respuesta){
        return respuesta.json()
    })

    .then(function(serie){
        console.log(serie);
    
        let serieDetail = document.querySelector('main');
        console.log(serieDetail);
    


        let imagen = document.querySelector('.foto');
        imagen.src = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;

        let titulo = document.querySelector('.tituloSeries');
        titulo.innerText = serie.name;

        let texto = document.querySelector('.textoSeries1');
        texto.innerText = serie.overview;

        let disponible = document.querySelector('.textoSeries2');
        disponible.innerText = serie.first_air_date;

        let genero = document.querySelector('.textoSeries3');

        for ( i=0;i<serie.genres.length; i++) {
        genero.innerHTML += ` <a href="./genresdetail.html?genres=${serie.genres[i].id}"> ${serie.genres[i].name} </a>`

        }
       let boton = document.querySelector('.SerieInfo');
       boton.innerHTML += ` <button type="Agregar" class="favorito1">Favorites</button> `


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

