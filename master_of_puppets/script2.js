const botonesSonido = document.querySelectorAll('.sound-btn');
const pantalla = document.getElementById('pantalla');
const sliderDistorsion = document.getElementById('distorsion');
const valorPantallaDistorsion = document.getElementById('valorDistorsion');

botonesSonido.forEach(boton => {
  boton.addEventListener('click', (event) => {
    
    botonesSonido.forEach(b => {
      b.classList.remove('bg-yellow-500', 'text-black', 'hover:bg-yellow-400');
      b.classList.add('bg-gray-800', 'text-white', 'hover:bg-gray-700');
    });
    
    const botonPresionado = event.currentTarget;
    botonPresionado.classList.remove('bg-gray-800', 'text-white', 'hover:bg-gray-700');
    botonPresionado.classList.add('bg-yellow-500', 'text-black', 'hover:bg-yellow-400');
    
    const nombreEfecto = botonPresionado.getAttribute('data-sound');
    pantalla.textContent = `Reproduciendo: ${nombreEfecto}`;
  });
});

sliderDistorsion.addEventListener('input', (event) => {
  const nivel = event.target.value;
  valorPantallaDistorsion.textContent = `${nivel}%`; 
});