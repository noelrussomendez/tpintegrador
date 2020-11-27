//1 construir la url (endpoint). url con APIKey
let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b'
let urlTrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
let urlSeries = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
let urlOriginal = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_count.desc&certification_country=en-us&include_adult=false&include_video=false&page=1`

window.addEventListener('load',function(){
    let spinner = document.querySelector('.ruedita')
    spinner.style.display="none"
})

//TRENDING
//2 construir fetch con la url de datos que queremos mostrar en el html
fetch(urlTrending) 

    .then (function(respuesta){
        return respuesta.json()
    })

    .then(function(data){
        //3. Identificar donde estaá la informacion
        console.log(data.results);
        let trending = data.results

        //3.1 Capturar el destino a donde queremos mostrar los datos.
        let sectionTrending = document.querySelector('.estrenos');
        console.log(sectionTrending);

        //4 Recorrer el array de datos reemplazando la inforamción estátiuca por la data variable.
        for(let i=0; i<trending.length; i++){
            sectionTrending.innerHTML += `<article class="media">
                                                <img src="https://image.tmdb.org/t/p/w500/${trending[i].poster_path}" alt="reemplazar">
                                                <p class="titulo"> <a href="./moviedetail.html?id=${trending[i].id}">${trending[i].title}</a> </p>
                                        </article>`;
        }
    })

    .catch(function(error){
        console.log(error)
    })

// SERIES
 fetch(urlSeries) 

    .then (function(respuesta){
        return respuesta.json()
    })

    .then(function(data){
        console.log(data.results);
        let series = data.results

        let sectionSeries = document.querySelector('.series');
        console.log(sectionSeries);

        for(let i=0; i<series.length; i++){
            sectionSeries.innerHTML += `<article class="media">
                                                <img src="https://image.tmdb.org/t/p/w500/${series[i].poster_path}" alt="reemplazar">
                                                <p class="titulo"> <a href="./seriedetail.html?id=${series[i].id}">${series[i].name}</a> </p>
                                        </article>`;
        }
    })

    .catch(function(error){
        console.log(error)
    })

// ORIGINAL 
    fetch(urlOriginal) 

    .then (function(respuesta){
        return respuesta.json()
    })

    .then(function(data){
        console.log(data.results);
        let originales = data.results

        let sectionOriginales = document.querySelector('.originales');
        console.log(sectionOriginales);

        for(let i=0; i<originales.length; i++){
            sectionOriginales.innerHTML += `<article class="media">
                                                <img src="https://image.tmdb.org/t/p/w500/${originales[i].poster_path}" alt="reemplazar">
                                                <p class="titulo"> <a href="./moviedetail.html?id=${originales[i].id}">${originales[i].title}</a> </p>
                                        </article>`;
        }
    })

    .catch(function(error){
        console.log(error)
    })


    