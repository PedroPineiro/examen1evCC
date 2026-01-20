const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function actualizarCuentaAtras() {
  const ahora = Temporal.Now.plainDateTimeISO();
  const merena = ahora.with({ hour: 17, minute: 0, second: 0 });

  // Si ya son las 17:00 o más tarde
  if (Temporal.PlainDateTime.compare(ahora, merena) >= 0) {
    horas.textContent = "00";
    minutos.textContent = "00";
    segundos.textContent = "00";
    return;
  }

  const diferencia = ahora.until(merena);

  horas.textContent = String(diferencia.hours).padStart(2, "0");
  minutos.textContent = String(diferencia.minutes).padStart(2, "0");
  segundos.textContent = String(diferencia.seconds).padStart(2,"0",);
}

actualizarCuentaAtras();
setInterval(actualizarCuentaAtras, 1000);
