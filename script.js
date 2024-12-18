document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.querySelector('.stars');
    const numStars = 200; // Número de estrellas

    // Generar las estrellas
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Asignar valores aleatorios para la posición y la animación
        star.style.setProperty('--random-x', Math.random());
        star.style.setProperty('--random-y', Math.random());
        star.style.setProperty('--random-delay', Math.random() * 2 + 's'); // Retraso aleatorio

        starsContainer.appendChild(star);
    }
});