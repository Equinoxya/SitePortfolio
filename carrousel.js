async function generateCarrousel() {
    const response = await fetch("portfolio.json");
    const works = await response.json();

    const leftButton = document.querySelector(".carousel-button.left");
    const rightButton = document.querySelector(".carousel-button.right");
    const track = document.querySelector(".carousel-track");

    if (!leftButton || !rightButton || !track) return;

    const filteredWorks = works
        .filter(work => work.category.id !== "nsfw")
        .sort((a, b) => a.index - b.index);

    const lastThreeWorks = filteredWorks.slice(-3);
    if (lastThreeWorks.length === 0) return;

    let currentIndex = 0;
    let startX = 0; // ajouté
    let endX = 0;   // ajouté

    // Précharger les images
    lastThreeWorks.forEach((work, i) => {
        const img = document.createElement("img");
        img.src = work.imageUrl;
        img.alt = work.alt || "";
        img.classList.add("carousel-image");
        img.style.display = i === 0 ? "block" : "none";
        track.appendChild(img);
    });

    const images = track.querySelectorAll("img");

    function renderImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

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

    // Swipe tactile sur le track
    track.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        const deltaX = endX - startX;
        const threshold = 50;

        if (deltaX > threshold) {
            // swipe droite → précédent
            currentIndex = (currentIndex - 1 + lastThreeWorks.length) % lastThreeWorks.length;
            renderImage(currentIndex);
        } else if (deltaX < -threshold) {
            // swipe gauche → suivant
            currentIndex = (currentIndex + 1) % lastThreeWorks.length;
            renderImage(currentIndex);
        }
    });
}

document.addEventListener("DOMContentLoaded", generateCarrousel);
