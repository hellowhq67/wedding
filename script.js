function playAudio() {
    var audio = document.getElementById('audio-player');
    audio.volume = 0.4;
    audio.play();
}

// Función para abrir el modal
function openModal() {
    document.getElementById("myModal").style.display = "flex";
    document.getElementById("modalBackground").classList.remove("hidden");
    document.body.classList.add("modal-open"); // Añade la clase para bloquear el scroll
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("modalBackground").classList.add("hidden");
    document.body.classList.remove("modal-open"); // Elimina la clase para permitir el scroll
}

// Función para reproducir audio y cerrar el modal
function playAudioAndClose() {
    var audio = document.getElementById('audio-player');
    if (!audio.src) {
        audio.src = 'Musica.mp3'; // Set the source only after user interaction
    }
    audio.play().then(() => {
        audio.volume = 0.4;
        closeModal();
    }).catch(error => {
        console.log('Audio playback failed:', error);
    });
}

// Abre el modal automáticamente al cargar la página
window.onload = openModal;
