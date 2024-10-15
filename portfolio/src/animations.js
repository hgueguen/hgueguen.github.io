// src/animations.js
export const addAnimation = () => {
    const elements = document.querySelectorAll('.titleHomePage, .imageHortenseGueguen');
    elements.forEach(element => {
        element.classList.add('show'); // Ajoute la classe 'show' pour activer l'animation
    });
};
