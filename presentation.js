async function genererPresentation() {
    const reponse = await fetch("presentation.json");
    const presentations = await reponse.json();

    const article = document.querySelector(".presentation") 
    const img = document.createElement("img");
        img.src = presentations.pp;
        img.classList.add("pp");

    const pseudo = document.createElement("h2");
        pseudo.innerText = presentations.pseudo;
        pseudo.classList.add("pseudo");

    const role = document.createElement("h3");
        role.innerText = presentations.role;
        role.classList.add("role");
    
    const description = document.createElement("p");
        description.innerText = presentations.description;
        description.classList.add("description");
    

    article.append(img, pseudo, role, description);
}

genererPresentation();