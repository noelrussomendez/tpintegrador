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
    
        // for (i=0;i<serie.genres.length; i++){

        // serieDetail.innerHTML += `<article class="gridContainer">
        //                                 <div>
        //                                 <img class="foto" src="https://image.tmdb.org/t/p/w500/${serie.poster_path}">
        //                                 </div>
        //                                 <div>
        //                                 <h2 class="tituloSeries">${serie.name}</h2>
        //                                 <p class="textoSeries"> ${serie.overview}</p>
        //                                 <p class="textoSeries"> Genero: <a href="./genresdetail.html?genres=${serie.genres[i].id}"> 
        //                                 ${serie.genres[i].name} </a> </p>
        //                                 <p class="textoSeries"> Disponible desde: ${serie.first_air_date} </p>
        //                                 <button type="Agregar" class="favorito">Favoritos</button>   
        //                                 <button type="Quitar" class="view">Quitar de favoritos</button>
        //                                 </div>
        //                             </article>`

        //  }


        let imagen = document.querySelector('.foto');
        imagen.src = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;

        let titulo = document.querySelector('.tituloSeries');
        titulo.innerText = serie.name;

        let texto = document.querySelector('.textoSeries1');
        texto.innerText = serie.overview;

        let disponible = document.querySelector('.textoSeries2');
        disponible.innerText = serie.first_air_date;

        let genero = document.querySelector('.textoSeries3');

        for (i=0;i<serie.genres.length; i++) {
        genero.innerHTML += ` <a href="./genresdetail.html?genres=${serie.genres[i].id}"> ${serie.genres[i].name} </a>`

        }

       
        let storage = localStorage.getItem('favoritos')
            console.log(storage);
        
            if (storage === null) {
                localStorage.setItem('favoritos', '[]')
            }
                                    
            let button =document.querySelector('.favorito')
                console.log(button);
                button.addEventListener('click', function(event){
                    this.style.color="purple";
                    console.log(event);
                                        
            let storageJs =JSON.parse(storage)
                
            if(!storageJs.includes(id)){
                storageJs.push(id)
            }
            
            else {
                storageJs = storageJs.filter (function(movie){
                return movie != id
            })
                                        
        }
    
        localStorage.setItem('favoritos',JSON.stringify(storageJs))
                                        
        })
    })
  

    // Arreglar el hipervinculo a los generos
    
    .catch(function(error){
        console.log(error);
    })

