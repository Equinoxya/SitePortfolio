async function pricingPlans() {
    const response = await fetch("/Data/pricing.json");
    const pricingData = await response.json();
    console.log(pricingData);
    const pricingSection = document.querySelector(".pricing");
    document.querySelector("#pricing").innerHTML = "<h1>Pricing</h1>";
    const pricingPlansContainer = document.createElement("div");
    pricingPlansContainer.classList.add("pricing-plans");
    pricingSection.appendChild(pricingPlansContainer);

    pricingData.pricing.forEach(plan => {
        const article = document.createElement("article");
        article.classList.add("plan");

        // Nom
        const title = document.createElement("h3");
        title.textContent = plan.name;
        article.appendChild(title);

        // Prix
        const price = document.createElement("p");
        price.textContent = plan.price;
        article.appendChild(price);

        // Exemples d’images
        if (plan.exemple) {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("examples");

            plan.exemple.forEach(imgSrc => {
                const img = document.createElement("img");
                img.src = imgSrc;
                img.alt = plan.name;
                imgContainer.appendChild(img);
            });

            article.appendChild(imgContainer);
        }

        // Features (si c’est le cas)
        if (plan.features) {
            const featContainer = document.createElement("div");
            featContainer.classList.add("features");

            plan.features.forEach(imgSrc => {
                const img = document.createElement("img");
                img.src = imgSrc;
                img.alt = plan.name + " feature";
                featContainer.appendChild(img);
            });

            article.appendChild(featContainer);
        }

        pricingPlansContainer.appendChild(article);
    });
}

pricingPlans();
