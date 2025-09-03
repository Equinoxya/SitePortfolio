async function genererWork() {
    const reponse = await fetch("portfolio.json");
    const works = await reponse.json();

    const sectionGallery = document.querySelector(".gallery");
    const fragment = document.createDocumentFragment();

    works.forEach(article => {
        const figure = document.createElement("figure");
        figure.dataset.categoryId = article.category.id;
        figure.dataset.id = article.id;
        figure.classList.add("projet");

        const img = document.createElement("img");
        img.src = article.imageUrl;
        img.crossOrigin = "anonymous";

        const caption = document.createElement("figcaption");
        caption.innerText = article.title;

        figure.append(img, caption);

        // Masquer les NSFW par défaut
        if (article.category.id === "nsfw") {
            figure.style.display = "none";
        }

        fragment.appendChild(figure);
    });

    sectionGallery.appendChild(fragment);
}


// Génération + filtre
genererWork().then(filter);

function setupWarning() {
    const warning = document.querySelector(".Warning");
    const btnYes = warning ? warning.querySelector("button:nth-of-type(1)") : null;
    const btnNo = warning ? warning.querySelector("button:nth-of-type(2)") : null;
    const portfolioSection = document.querySelector(".portfolio");
    const btnNSFW = document.querySelector(".nsfw");

    if (!warning || !btnYes || !btnNo || !portfolioSection || !btnNSFW) return;

    // Remove previous listeners to avoid duplicates
    btnYes.onclick = function () {  
        warning.style.display = "none";
        // Afficher directement les NSFW
        const projets = document.querySelectorAll(".projet");
        projets.forEach(projet => {
            if (projet.dataset.categoryId === "nsfw") {
                projet.style.display = "block";
            }
        });
    };

    btnNo.onclick = function () {
        warning.style.display = "none";
        btnNSFW.style.display = "none"; // Cacher le bouton NSFW si l'utilisateur n'a pas 18 ans
    };
}


// Toggle NSFW au clic
function filter() {
    const btn = document.querySelector(".nsfw");

    setupWarning(); // Initialize warning dialog and its buttons

    if (!btn) return;
    btn.addEventListener('click', function () {
        const warning = document.querySelector(".Warning");
        if (warning && warning.style.display !== "none") {
            warning.style.display = "flex";
        } else {
            const projets = document.querySelectorAll(".projet");
            projets.forEach(projet => {
                if (projet.dataset.categoryId === "nsfw") {
                    projet.style.display = projet.style.display === "none" ? "flex" : "none";
                }
            });
        }
    });
}


