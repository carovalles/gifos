// Declarando Variables
const search_button = document.getElementById("search_button");
const div_section = document.getElementsByClassName("div_section");
const item_search = document.getElementsByClassName("item_search");
const ul_sugerencia = document.getElementById("ul_sugerencia");

// Habilitando el botón de búsqueda 

function habilitar_busqueda() {
        search_button.setAttribute("class", "search_active")
        input_search.classList.add("input_active");
        lupa_search.setAttribute("src", "./assets/lupa.svg");
}

// Desabilitando el botón de búsqueda 

function deshabilitar_busqueda() {
    search_button.setAttribute("class","search_button");
    lupa_search.setAttribute("src", "./assets/Combined Shape.svg");
}

function crear_busquedas() { 
    const item_search = document.createElement("p")
    item_search.setAttribute("class","item_search");
    search_status.appendChild(item_search);
}

//const apikey = "MHXgBSnqv66AVnRiOtHADDlaobcU91iP";

// Comunicación con la API Busquedas

async function getGifos(texto) {
    var datos = await fetch(`http://api.giphy.com/v1/gifs/search?q=${texto}&api_key=${apikey}&limit=25`);
    const resultado = await datos.json()
    return resultado;
}

// Haciendo la busqueda 

boton.addEventListener("click",function() {
    search_status.style.display = "none";
    var input_search_value = document.getElementById("input_search").value;
    div_trending.setAttribute("class", "none");
    getGifos(input_search_value).then(gifos => {
        var array_gif = gifos.data;
        //console.log(array_gif)
        array_gif.forEach(element => {

            const div_container = document.createElement("div");
            const image_container = document.createElement("img");

            div_container.setAttribute("class", "gif_container_search");
            image_container.setAttribute("class", "gif_image_search");
            image_container.setAttribute("src",element.images.original.url);
            div_container_sugerencia.setAttribute("class", "none");
            search_status.setAttribute("class", "none");

            // Append Elementos al DOM

            search_div.appendChild(div_container); 
            div_container.appendChild(image_container);
        
        });

        input_search.value = "";
        deshabilitar_busqueda();
    })
}) 

// Vaciando el Formulario

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

})

// Generando la Ventana de Búsqueda 

input_search.addEventListener('keyup', e =>{
    search_value = e.target.value;
    search_status.style.display = "block";
    if (input_search != '') {
    habilitar_busqueda();

    } else {
    deshabilitar_busqueda()
    }
})


// Palabras Similares Buscador

async function buscarPalabras(keyword) {
    let url = `https://api.giphy.com/v1/tags/related/${keyword}?api_key=${apikey}`;
    const resp = await fetch(url);
    const datos = await resp.json();
    //console.log(datos)
    return datos;
}

input_search.addEventListener("keyup", e => {
    var term = document.getElementById("input_search").value;
    var array_name = [];
    buscarPalabras(term).then (response => {
        var data = response.data;
        data.forEach(element => {
            var name = element.name;
            array_name.push(name)
        })
        
        let palabrasSimilares = array_name.slice(0, 3);
        console.log(palabrasSimilares)
        
    if (term.length >= 3) {
            
            for (let i = 0; i < palabrasSimilares.length; i++) {
                const sugerencia_name = palabrasSimilares[i];
                const texto_name = document.createTextNode(sugerencia_name);
                const li_sugerencia = document.createElement("li");
                li_sugerencia.setAttribute("class", "item_search");
                li_sugerencia.appendChild(texto_name);
                ul_sugerencia.appendChild(li_sugerencia)
            }
        }
    })
})


