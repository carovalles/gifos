const div_container_sugerencia = document.getElementById("sugerencias");

// Obteniendo las Sugerencias 

async function getGifos_suggest(texto) {
    var datos = await fetch(`http://api.giphy.com/v1/gifs/search?q=${texto}&api_key=MHXgBSnqv66AVnRiOtHADDlaobcU91iP&limit=1`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        return error;
    });
    return datos;
}

const things = 
['Reese Whitherspoon', 
'Jonathan van ness', 
'Sailor Mars', 
'Sailor Mercury', 
'Demi Lovato', 
'Jessie J',
'Big Bang Theory', 
'Friends Unagi', 
'Sailor Moon', 
'Justin Timbarlake', 
'Lizzo', 
'Adventure time',
'Jennifer Lopez',
'Rick and morty',
'The office',
'How i meet your mother',
'Taylor Swift',
'sara bareilles',
'ellen',
'The simpsons',
'Yes queen',
'Monica Geller']; 

for (let i = 0; i < 4; i++) { 
    var thing = things[Math.floor(Math.random()*things.length)]; 
    var position_thing = things.indexOf(thing)
    things.splice(position_thing, 1);
    let title_div = document.createTextNode("#" + thing)

getGifos_suggest(thing).then (response => {
        var gif = response.data;
        gif.forEach(element => {
            var url = element.images.original.url;
            
            const div_container = document.createElement("div");
            const title_sugerencias = document.createElement("h3");
            const close_gif = document.createElement("img");
            const image_container_sugerencia = document.createElement("img");
            const button_sugerencias = document.createElement("button")
            const texto_button = document.createTextNode("Ver más...")
            
            div_container.setAttribute("class", "gif_container");
            title_sugerencias.setAttribute("class", "title_sugerencia");
            close_gif.setAttribute("class", "close_gif");
            close_gif.setAttribute("src", "./assets/button3.svg");
            button_sugerencias.setAttribute("class", "button_gif");
            image_container_sugerencia.setAttribute("class", "gif_image_sugerencia");
            
            // Append Elementos al DOM 
            
            div_container_sugerencia.appendChild(div_container);
            div_container.appendChild(title_sugerencias);
            title_sugerencias.appendChild(close_gif);
            title_sugerencias.appendChild(title_div)
            div_container.appendChild(button_sugerencias);  
            div_container.appendChild(image_container_sugerencia);
            image_container_sugerencia.setAttribute("src", url);
            button_sugerencias.appendChild(texto_button);

            // Evento en Boton de VER MAS 

            button_sugerencias.addEventListener("click",function() {
                var texto = element.title;
                div_container_sugerencia.setAttribute("class", "none");
                div_trending.setAttribute("class", "none");
                id_tendencia .setAttribute("class", "none");
                id_sugerencia .setAttribute("class", "none");
                
                getGifos(texto).then(gifos => {
                    var array_gif = gifos.data;
                    array_gif.forEach(element => {
            
                        var url = element.images.original.url;
                        
                        const div_container = document.createElement("div");
                        const image_container = document.createElement("img");
            
                        div_container.setAttribute("class", "gif_container_search");
                        image_container.setAttribute("class", "gif_image_search");
                        image_container.setAttribute("src", url);
                        search_status.setAttribute("class", "none");
            
                        /* Append Elementos al DOM */
            
                        search_div.appendChild(div_container); 
                        search_div.style.marginTop = 64 + "px";
                        div_container.appendChild(image_container);

                        // Evento Close

                        close_gif.addEventListener("click", function() {
                            div_container.style.display = "none";
                            return
                        })
                        
                    })
                })
            })
        });
    });
}

