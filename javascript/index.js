// Declarando Variables

const apikey = "MHXgBSnqv66AVnRiOtHADDlaobcU91iP";

const light_button = document.getElementById("light");
const dark_button = document.getElementById("dark");
const logo = document.getElementById("logo");
const body = document.body;
const dropdown = document.getElementById("dropdown");
const nav_menu = document.getElementById("theme");

const input_search = document.getElementById("input_search");
const lupa_search = document.getElementById("lupa");
const boton = document.getElementById("search_button");
const search_status = document.getElementById("search_status"); 
const formulario = document.getElementById("search");
const search_div = document.getElementById("search_div");
const theme_button = document.getElementById("theme_button");
const div_trending = document.getElementById("tendencias");
const id_tendencia = document.getElementById("id_tendencia");
const id_sugerencia = document.getElementById("id_sugerencia");


// Generando Tendencias

async function getGifos_trend() {
    let resp = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=12`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        return error;
    });
    return resp;
}


getGifos_trend().then (response => {
    var gif = response.data;
    gif.forEach(element => {
        var url = element.images.original.url;
        var title_texto = element.title;
        //console.log(title_texto)

        let texto_split = title_texto.split(" ");
        //console.log(texto_split)
        let texto_array = [];

        for (let i = 0; i < texto_split.length; i++) {
            texto_array.push("#" + texto_split[i]);
        }

        let text_limited = texto_array.filter((element, i)=>i < 4);
        let title = text_limited.join(' ')
        //console.log(text_limited);

        const div_container = document.createElement("div");
        const image_container_sugerencia = document.createElement("img");
        const title_hover = document.createElement("h3");
        const texto_title = document.createTextNode(title);

        div_container.setAttribute("class", "gif_container");
        image_container_sugerencia.setAttribute("class", "gif_image");
        title_hover.setAttribute("class", "title_hover");
        title_hover.style.display = "none"
        
        /* Append Elementos al DOM */
        
        div_trending.appendChild(div_container);
        div_container.appendChild(image_container_sugerencia);
        image_container_sugerencia.setAttribute("src", url);
        div_container.appendChild(title_hover);
        title_hover.appendChild(texto_title)

        
        div_container.addEventListener("mouseover", function() {
            title_hover.style.display = "block"
        })

        div_container.addEventListener("mouseleave", function() {
            title_hover.style.display = "none"
        })
    });
});





