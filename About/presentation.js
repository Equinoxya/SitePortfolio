async function genererPresentation() {
    const reponse = await fetch("presentation.json");
    const presentations = await reponse.json();

    const article = document.querySelector(".presentation") 
    const img = document.createElement("img");
        img.src = presentations.pp;
        img.alt = presentations.alt;
        img.classList.add("pp");

    const pseudo = document.createElement("h1");
        pseudo.innerText = presentations.pseudo;
        pseudo.classList.add("pseudo");

    const role = document.createElement("h2");
        role.innerText = presentations.role;
        role.classList.add("role");
    
    const description = document.createElement("p");
        description.innerText = presentations.description;
        description.classList.add("description");
    

    article.append(img, pseudo, role, description);
    // 👉 animation stylée
    animate(
        pseudo,
        { 
            y: [50, -10, 0],   // monte puis descend un peu
            scale: [0.8, 1.1, 1],  // petit zoom dramatique
            opacity: [0, 1]    // fade-in
        },
        { 
            duration: 2.5,
            easing: "ease-out"
        }
    );
}
genererPresentation();

// Récupération des liens des réseaux sociaux
async function genererReseaux() {
    const reponse = await fetch("presentation.json");
    const presentations = await reponse.json();
    const x = document.querySelector(".x");
    const instagram = document.querySelector(".instagram");
    const bluesky = document.querySelector(".bluesky");
    const patreon = document.querySelector(".patreon");
    x.addEventListener("click", function() {
        window.open(presentations.x, "_blank");
    });
    instagram.addEventListener("click", function() {
        window.open(presentations.instagram, "_blank");
    });
    bluesky.addEventListener("click", function() {
        window.open(presentations.bluesky, "_blank");
    });
    patreon.addEventListener("click", function() {
        window.open(presentations.patreon, "_blank");
    });
}
genererReseaux();