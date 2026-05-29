const buscador = document.getElementById('buscador');
const itemsEquipo = document.querySelectorAll('.item');

buscador.addEventListener('input', (event) => {
const textoBuscado = event.target.value.toLowerCase();

  itemsEquipo.forEach(item => {
    const nombreEquipo = item.textContent.toLowerCase();

   if (nombreEquipo.includes(textoBuscado)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

itemsEquipo.forEach(item => {
  item.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('cargado');
  });
});