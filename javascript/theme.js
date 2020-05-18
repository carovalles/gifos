// Conservando el Theme Color

window.onload = () => {
    if (localStorage.getItem("theme") === "dark_theme") {
        window.onload = body.classList.add("dark");
        logo.setAttribute("src", "/assets/gifOF_logo_dark.png");
        dark_button.setAttribute("class","button_night");
    } else {
        logo.setAttribute("src", "/assets/gifOF_logo.png");
        light_button.classList.add("button_day");
    }
}

// Seleccionador de Theme - Menu

dropdown.addEventListener("click", () => {
    nav_menu.style.display = "block";
})

theme_button.addEventListener("click", () => {
    nav_menu.style.display = "block";
})

dropdown.addEventListener("dblclick", () => {
    nav_menu.style.display = "none";
})

dark_button.addEventListener("click", () => {
    body.classList.add("dark");
    logo.setAttribute("src", "./assets/gifOF_logo_dark.png");
    nav_menu.style.display = "none";
    dark_button.setAttribute("class","button_night");
    localStorage.setItem("theme", "dark_theme")
})

light_button.addEventListener("click", () => {
    body.classList.remove("dark");
    logo.setAttribute("src", "./assets/gifOF_logo.png");
    dropdown.setAttribute("src", "./assets/dropdown.svg");
    nav_menu.style.display = "none";
    light_button.classList.add("button_day");
    dark_button.setAttribute("class","theme_item");
    localStorage.setItem("theme", "light_theme")
    localStorage.removeItem("theme", "dark_theme")
})



