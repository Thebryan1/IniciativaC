// Obtenemos todas las imágenes de la sección izquierda
const leftImages = document.querySelectorAll('.left-image');

// Obtenemos el carrusel
const carousel = document.querySelector('#miCarrousel');

// Escuchamos el evento 'slid.bs.carousel' del carrusel para detectar los cambios de imagen
carousel.addEventListener('slid.bs.carousel', function () {
    // Obtenemos el índice de la imagen activa en el carrusel
    const activeIndex = document.querySelector('.carousel-item.active').getAttribute('data-slide-to');

    // Mostramos la imagen correspondiente en la sección izquierda
    leftImages.forEach((image, index) => {
        if (index == activeIndex) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
});
