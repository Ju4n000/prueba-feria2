const buscadorIcono = document.getElementById('search');
const miDiv = document.getElementById('miDiv');

buscadorIcono.addEventListener('click', () => {
    miDiv.classList.toggle('visible'); // Alterna la clase 'visible'
    miDiv.classList.toggle('oculto'); // Alterna la clase 'oculto'
});
