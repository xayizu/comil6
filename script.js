// Función para mostrar una imagen en el modal
function mostrarImagen(elemento) {
    // Obtiene el elemento del modal usando su ID
    const modal = document.getElementById('modal');

    // Obtiene la imagen dentro del modal donde se mostrará la imagen seleccionada
    const modalImg = document.getElementById('imagenModal');

    // Obtiene el elemento de texto donde se mostrará la descripción de la imagen
    const captionText = document.getElementById('caption');

    // Asigna la fuente de la imagen seleccionada al elemento de la imagen en el modal
    modalImg.src = elemento.querySelector('img').src;

    // Asigna el texto del pie de foto (figcaption) al texto del modal
    captionText.innerHTML = elemento.querySelector('figcaption').innerHTML;

    // Muestra el modal con una pequeña animación de opacidad
    modal.style.display = 'flex'; // Cambiar de 'block' a 'flex' para centrar
    modal.classList.add('mostrar');
}

// Función para cerrar el modal
function cerrarModal() {
    // Obtiene el elemento del modal usando su ID
    const modal = document.getElementById('modal');

    // Oculta el modal con una transición de opacidad
    modal.classList.remove('mostrar');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Coincide con la duración de la transición CSS
}
