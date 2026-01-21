const boton_tema = document.querySelector(".boton-tema");
const root = document.documentElement;

function aplicarTema(tema){
    if(tema === "dark"){
        root.setAttribute("theme","dark")
        boton_tema.innerHTML = "Cambiar a claro"
    }
    else{
        root.removeAttribute("theme")
        boton_tema.innerHTML = "Cambiar a oscuro"
    }
}

function guardarTema(tema){
    localStorage.setItem("tema", tema);
}

const temaGuardado = localStorage.getItem("tema") || "light"
aplicarTema(temaGuardado)

boton_tema.addEventListener("click", () => {
    const temaActual =document.documentElement.getAttribute("theme") === "dark"? "dark" : "light";

    const nuevoTema = temaActual === "light" ? "dark" : "light";

    aplicarTema(nuevoTema)
    guardarTema(nuevoTema)
})