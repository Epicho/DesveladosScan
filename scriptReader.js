// Ruta de la carpeta donde están las imágenes
const folderPath = "Individual/";
const totalPages = 51; // Número total de páginas en la carpeta

const mangaContainer = document.getElementById("cascada");

// Función para cargar imágenes dinámicamente
function loadImages() {
    for (let i = 0; i <= totalPages; i++) {
        const img = document.createElement("img");
        img.src = `${folderPath}RL${i}.jpg`;
        img.alt = `RL${i}`;
        mangaContainer.appendChild(img);
    }
}

// Cargar imágenes cuando la página esté lista
document.addEventListener("DOMContentLoaded", loadImages);