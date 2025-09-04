async function generateCarrousel() {
    const response = await fetch("portfolio.json");
    const works = await response.json();

    const leftButton = document.querySelector(".carousel-button.left");
    const rightButton = document.querySelector(".carousel-button.right");
    const track = document.querySelector(".carousel-track");

    if (!leftButton || !rightButton || !track) return;

    // Filtrer et trier
    const filteredWorks = works
        .filter(work => work.category.id !== "nsfw")
        .sort((a, b) => a.index - b.index);

    const lastThreeWorks = filteredWorks.slice(-3);
    if (lastThreeWorks.length === 0) return;

    let currentIndex = 0;

    // Précharger les images
    lastThreeWorks.forEach((work, i) => {
        const img = document.createElement("img");
        img.src = work.imageUrl;
        img.alt = work.alt || "";
        img.classList.add("carousel-image");
        img.style.display = i === 0 ? "block" : "none"; // afficher la première
        track.appendChild(img);
    });

    const images = track.querySelectorAll("img");

    // Fonction pour afficher l'image courante
    function renderImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    // Boutons avec boucle infinie
    leftButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + lastThreeWorks.length) % lastThreeWorks.length;
        renderImage(currentIndex);
    });

    rightButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        currentIndex = (currentIndex + 1) % lastThreeWorks.length;
        renderImage(currentIndex);
    });
}

// DOM prêt
document.addEventListener("DOMContentLoaded", generateCarrousel);
