const inputNombre = document.getElementById('nombreGafete');
const contadorTexto = document.querySelector('.char-counter span');
const selectZona = document.getElementById('zona');
const precioTotal = document.querySelector('.price-total');
const btnComprar = document.querySelector('.btn-submit');

inputNombre.addEventListener('input', (event) => {
  const longitud = event.target.value.length;
  
  contadorTexto.textContent = `${longitud} / 20 caracteres`;

 if (longitud > 20) {
    contadorTexto.style.color = '#ef4444';
    contadorTexto.style.fontWeight = 'bold';
  } else {
    contadorTexto.style.color = '#6b7280';
    contadorTexto.style.fontWeight = 'normal';
  }
});

const preciosPorZona = {
  general: 1900.00,
  gradas: 3000.00,
  gradasVip: 3800.00,
  pit: 7600.00,
  pitVip: 9000.00
};

selectZona.addEventListener('change', (event) => {
  const zonaSeleccionada = event.target.value;
  
  const precio = preciosPorZona[zonaSeleccionada];
  
  precioTotal.innerHTML = `$${precio.toFixed(2)} <span class="currency">MXN</span>`;
});

btnComprar.addEventListener('click', (event) => {
  event.preventDefault();

  const nombreLimpio = inputNombre.value.trim();

  if (nombreLimpio === '') {
    alert('Error: El "Nombre en el Gafete" no puede estar vacío.');
  } else if (nombreLimpio.length > 20) {
    alert('Error: El nombre es demasiado largo. Máximo 20 caracteres.');
  } else if (selectZona.value === '') {
    alert('Error: Debes seleccionar una Zona para continuar.');
  } else {
    alert(`Tu compra ha sido confirmada a nombre de: ${nombreLimpio}.`);
  }
});