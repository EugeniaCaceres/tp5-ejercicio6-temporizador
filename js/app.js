let h1_hora = document.getElementById("hora");
let minutos_por_defecto = 15;
let segundos_por_defecto = 0;
let horas_por_defecto = 0;

h1_hora.innerHTML =
  formatTime(0) + ":" + formatTime(minutos_por_defecto) + ":" + formatTime(0);

let timerInterval;

function startTimer() {
  //h1
  let time = 0;

  document.getElementById("inicio").disabled = true; // Deshabilitamos el botón de inicio
  document.getElementById("detener").disabled = false;

  timerInterval = setInterval(function () {
    time++;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;
    h1_hora.innerHTML =
      formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

    if (
      time >=
      parseInt(minutos_por_defecto) * 60 +
        parseInt(segundos_por_defecto) +
        parseInt(horas_por_defecto) * 3600
    ) {
      stopTimer(); // Detenemos el temporizador
      h1_hora.innerHTML = "Tiempo Agotado"; // Cambiamos el mensaje en el elemento HTML
    }
  }, 1000);
}

function stopTimer() {
  document.getElementById("inicio").disabled = false; // Habilitamos el botón de inicio
  document.getElementById("detener").disabled = true; // Deshabilitamos el botón de detener
  clearInterval(timerInterval); // Detenemos el temporizador
}

function stopTimer() {
  clearInterval(timerInterval);
}

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

function modificar_valores_por_defecto() {
  let input_hora = document.getElementById("input_hora");
  let input_minutos = document.getElementById("input_minutos");
  let input_segundos = document.getElementById("input_segundos");

  minutos_por_defecto = input_minutos.value;
  segundos_por_defecto = input_segundos.value;
  horas_por_defecto = input_hora.value;

  h1_hora.innerHTML =
    formatTime(minutos_por_defecto) +
    ":" +
    formatTime(minutos_por_defecto) +
    ":" +
    formatTime(segundos_por_defecto);
}
