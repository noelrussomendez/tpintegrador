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
    
        let serieDetail = document.querySelector('.gridContainer');
        console.log(serieDetail);
for (i=0;i<serie.genres.length; i++){
    serieDetail.innerHTML += `<article class="gridContainer">

    <img src="https://image.tmdb.org/t/p/w500/${serie.poster_path}">
    <h2 class="titulo">${serie.name}</h2>
    <p> Genero: <a href="./genresdetail.html?genres=${serie.genres[i].id}"> ${serie.genres[i].name} </a> </p>
    <p> Disponible desde: ${serie.first_air_date} </p>

</article>`
}


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
  

    // Arreglar el hipervinculo a los generos
    
    .catch(function(error){
        console.log(error);
    })

