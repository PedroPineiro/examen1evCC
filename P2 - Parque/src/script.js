const boton_parque = document.querySelector(".boton-parque");
const contador_casa = document.querySelector(".contador-casa");
const contador_parque = document.querySelector(".contador-parque");
const tarjetas_container = document.querySelector(".tarjetas-container");

let nenosCasa = [];
let nenosParque = [];

async function obtenerNenos() {
  try {
    const response = await fetch("http://localhost:3000/api/girasoles");
    const nenos = await response.json();
    nenosCasa = nenos;
    console.log(nenos);
    actualizarContadores();
    return nenos;
  } catch (error) {
    console.error("Error al obtener nenos:", error);
  }
}
obtenerNenos();

function actualizarContadores() {
  contador_casa.textContent = nenosCasa.length;
  contador_parque.textContent = nenosParque.length;
}

function crearTarjeta(neno) {
  const tarjetaDiv = document.createElement("div");
  const tarjetaNombre = document.createElement("p");
  const tarjetaImg = document.createElement("img");

  tarjetaDiv.classList.add("tarjeta");
  tarjetaNombre.textContent = neno.nombre;
  tarjetaImg.src = neno.img;

  tarjetaDiv.appendChild(tarjetaNombre);
  tarjetaDiv.appendChild(tarjetaImg);
  tarjetas_container.appendChild(tarjetaDiv);

  tarjetaDiv.addEventListener("click", () => {
    const indice = nenosParque.indexOf(neno);

    console.log(neno.nombre + " á casa!")
    nenosParque.splice(indice, 1);
    nenosCasa.push(neno);
    tarjetaDiv.remove();
    actualizarContadores();
  });
  actualizarContadores();
}

function moverAlParque(neno) {
  const indice = nenosCasa.indexOf(neno);

  nenosCasa.splice(indice, 1);
  nenosParque.push(neno);
  actualizarContadores();
}

boton_parque.addEventListener("click", () => {
  const random = Math.floor(Math.random() * nenosCasa.length);
  if (nenosCasa.length > 0) {
    
    console.log(nenosCasa[random].nombre + " ao parque!")
    crearTarjeta(nenosCasa[random]);
    moverAlParque(nenosCasa[random]);
  }
  else{
    console.log("Xa estan todos os nenos no parque")
  }
});
