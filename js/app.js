const modalImagen = document.querySelector('#modal-imagen');

if (modalImagen) {
    modalImagen.addEventListener('show.bs.modal', function (event) {
        const enlace = event.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-img');

        const imagen = document.createElement('IMG');

        imagen.src = `img/${rutaImagen}.jpg`;
        imagen.classList.add('img-fluid');
        imagen.alt = 'Imagen Galeria';

        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.appendChild(imagen);

    });

    modalImagen.addEventListener('hidden.bs.modal', function () {
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.removeChild(contenidoModal.firstChild);
    });
}

// Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap
const forms = document.querySelectorAll('.needs-validation');

// Recorrer los formularios y evitar el envío si no están validados
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false);
});