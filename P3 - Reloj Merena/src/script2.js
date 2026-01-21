const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

function calcularHora() {
  const ahora = Temporal.Now.plainDateTimeISO();
  const merena = ahora.with({ hour: 23, minute: 55, second: 0 });
  const diferencia = ahora.until(merena);

  if (Temporal.PlainTime.compare(ahora, merena) > 0) {
    horas.textContent = "00";
    minutos.textContent = "00";
    segundos.textContent = "00";
    return;
  }
    horas.textContent = String(diferencia.hours).padStart(2, "0");
    minutos.textContent = String(diferencia.minutes).padStart(2, "0");
    segundos.textContent = String(diferencia.seconds).padStart(2, "0");
  
}

calcularHora();
setInterval(calcularHora, 1000);
