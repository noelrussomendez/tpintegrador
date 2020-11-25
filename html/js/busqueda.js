window.addEventListener('load',function(){

 
   

    buscadorQuery = location.search
    buscadorQueryObj = new URLSearchParams(buscadorQuery)
    console.log(buscadorQueryObj);

    let search = buscadorQueryObj.get('.searchData')
    console.log(search);
    let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b'


    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
    )
    .then(function(respuesta){
        return respuesta.json()
    })



    .then (function (data){
        let results = document.querySelector ('.resultado');
        let info = data.results;
        console.log(data)

        info.forEach(buscador => {
        
            console.log(buscador);

            //let articulo = document.createElement('article')
            info.forEach((buscador => {
                if (buscador.media_type == "tv"){
                    results.innerHTML += `<article class="gridContainer">
                    <a href= "seriedetail.js?id={multi.id}">
                    <article class="gridContainer">
                    <img src="https://image.tmdb.org/t/p/w500/${buscador.poster_path}">
                    <h2 class="titulo">${buscador.name}</h2>
                   <p> Genero: <a href="./genresdetail.html?genres=${buscador.genres[i].id}"> ${buscador.genres[i].name} </a> </p>
                    <p> Disponible desde: ${buscador.first_air_date} </p>
                    </article>`
                } else if (buscador.media_type == "movie"){
                    results.innerHTML += `<article class="gridContainer">
              
                    <img src="https://image.tmdb.org/t/p/w500/${buscador.poster_path}">
                    <h2 class="titulo">${buscador.title}</h2>
                    <p> Votes: ${buscador.vote_average}</p>
              
                  </article>`
              
                }
            
            
        })
        

    .catch(function(error){
        console.log(error);
    }))
