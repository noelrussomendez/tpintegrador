//1 construir la url (endpoint). url con APIKey
let apiKey = 'ca4449919efcaf3d7e435fc10a0a0b0b'
let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`

//2 construir fetch con la url de datos que queremos mostrar en el html
fetch(url) 

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
                                                <p class="titulo"> <a href="./moviedetail.html">${trending[i].title}</a> </p>
                                        </article>`;
        }
    })

    .catch(function(error){
        console.log(error)
    })


    fetch(url) 

    .then (function(respuesta){
        return respuesta.json()
    })

    .then(function(data){
        console.log(data.results);
        let trending = data.results

        let sectionTrending = document.querySelector('.recomendadas');
        console.log(sectionTrending);

        for(let i=0; i<trending.length; i++){
            sectionTrending.innerHTML += `<article class="media">
                                                <img src="https://image.tmdb.org/t/p/w500/${trending[i].poster_path}" alt="reemplazar">
                                                <p class="titulo"> <a href="./moviedetail.html">${trending[i].title}</a> </p>
                                        </article>`;
        }
    })

    .catch(function(error){
        console.log(error)
    })

    fetch(url) 

    .then (function(respuesta){
        return respuesta.json()
    })

    .then(function(data){
        console.log(data.results);
        let trending = data.results

        let sectionTrending = document.querySelector('.nuevamente');
        console.log(sectionTrending);

        for(let i=0; i<trending.length; i++){
            sectionTrending.innerHTML += `<article class="media">
                                                <img src="https://image.tmdb.org/t/p/w500/${trending[i].poster_path}" alt="reemplazar">
                                                <p class="titulo"> <a href="./moviedetail.html">${trending[i].title}</a> </p>
                                        </article>`;
        }
    })

    .catch(function(error){
        console.log(error)
    })


    