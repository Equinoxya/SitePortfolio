document.addEventListener("DOMContentLoaded", async () => {
    // 1️⃣ Animation du titre
    const emergency = document.querySelector(".emergencyTitle");
    if (emergency) {
        emergency.animate(
            { 
                transform: [
                    "translateY(50px) scale(0.8)", 
                    "translateY(-10px) scale(1.1)", 
                    "translateY(0) scale(1)"
                ],
                opacity: [0, 1, 1]
            },
            { 
                duration: 2500,
                easing: "ease-out",
                direction: "alternate",
                iterations: Infinity
            }
        );
    }

    // 2️⃣ Génération du carrousel
    const response = await fetch("/Projects/portfolio.json");
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
    let startX = 0;

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

    leftButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + lastThreeWorks.length) % lastThreeWorks.length;
        renderImage(currentIndex);
    });

    rightButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % lastThreeWorks.length;
        renderImage(currentIndex);
    });

    track.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
    track.addEventListener("touchend", (e) => {
        const deltaX = e.changedTouches[0].clientX - startX;
        const threshold = 50;
        if (deltaX > threshold) currentIndex = (currentIndex - 1 + lastThreeWorks.length) % lastThreeWorks.length;
        else if (deltaX < -threshold) currentIndex = (currentIndex + 1) % lastThreeWorks.length;
        renderImage(currentIndex);
    });
});
