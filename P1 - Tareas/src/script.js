const botonTareas = document.querySelector(".boton-tareas");
const coladaImg = document.querySelector(".hacer-colada img");
const hermanaImg = document.querySelector(".cuidar-hermana img");
const perroImg = document.querySelector(".pasear-perro img");

function hacerColada() {
  return new Promise((resolve) => {
    console.log("Iniciando tarea: Hacer la colada");
    setTimeout(() => {
      resolve("Tarea finalizada: Hacer la colada");
    }, 3000);
  });
}

function cuidarHermana() {
  return new Promise((resolve) => {
    console.log("Iniciando tarea: Cuidar hermana");
    setTimeout(() => {
      resolve("Tarea finalizada: Cuidar hermana");
    }, 3000);
  });
}

function pasearPerro() {
  return new Promise((resolve) => {
    console.log("Iniciando tarea: Pasear perro");
    setTimeout(() => {
      resolve("Tarea finalizada: Pasear perro");
    }, 3000);
  });
}

async function hacerTareas() {
  const colada = await hacerColada();
  console.log(colada);
  coladaImg.classList.replace("blanco-negro", "color");

  const hermana = await cuidarHermana();
  console.log(hermana);
  hermanaImg.classList.replace("blanco-negro", "color");

  const perro = await pasearPerro();
  console.log(perro);
  perroImg.classList.replace("blanco-negro", "color");

  resetear();
  console.log("Tareas Finalizadas");
}

function resetear() {
  setTimeout(() => {
    coladaImg.classList.replace("color", "blanco-negro");
    hermanaImg.classList.replace("color", "blanco-negro");
    perroImg.classList.replace("color", "blanco-negro");
  }, 5000);
}

botonTareas.addEventListener("click", function (event) {
  hacerTareas();
});

// ___________________________________________________________ Ej P5

const root = document.documentElement;
const btnTema = document.querySelector(".boton-tema");

// Aplica el tema usando atributo en :root
function aplicarTema(tema) {
  if (tema === "dark") {
    root.setAttribute("theme", "dark");
    btnTema.textContent = "Cambiar a tema claro";
  } else {
    root.removeAttribute("theme");
    btnTema.textContent = "Cambiar a tema oscuro";
  }
}

// Guardar preferencia
function guardarTema(tema) {
  localStorage.setItem("tema", tema);
}

// Recuperar tema al cargar la página
const temaGuardado = localStorage.getItem("tema") || "light";
aplicarTema(temaGuardado);

// Click del botón
btnTema.addEventListener("click", () => {
  let temaActual;

  if (root.getAttribute("theme") === "dark") {
    temaActual = "dark";
  } else {
    temaActual = "light";
  }

  let nuevoTema;

  if (temaActual === "light") {
    nuevoTema = "dark";
  } else {
    nuevoTema = "light";
  }

  aplicarTema(nuevoTema);
  guardarTema(nuevoTema);
});
