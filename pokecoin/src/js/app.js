let contadorCara = 0;
let contadorCruz = 0;

const resultado = document.getElementById("resultado");
const contadores = document.getElementById("contadores");
const moneda = document.getElementById("moneda-imagen");

contadores.innerHTML = "Contador de cara: 0 <br> Contador de cruz: 0";

function lanzarMoneda() {
  const resultado = Math.random(); 
  if (resultado < 0.5) {
    contadorCara++;
    resultado.textContent = "Cara"; 
    moneda.src = "./src/img/cara.png"; 
  } else {
    contadorCruz++; 
    resultado.textContent = "Cruz"; 
    moneda.src = "./src/img/cruz.png";
  }

  moneda.classList.add("rotating");

  setTimeout(function () {
    moneda.classList.remove("rotating");
  }, 1000);

  contadores.innerHTML = `<span class="contador-text">Contador de cara: ${contadorCara} <br> Contador de cruz: ${contadorCruz}</span>`;

}

function resetear() {
  contadorCara = 0;
  contadorCruz = 0;
  moneda.src = "./src/img/cara.png";
  contadores.innerHTML = "Contador de cara: 0 <br> Contador de cruz: 0";
}
