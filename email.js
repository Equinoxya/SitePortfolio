async function email() {
    const response = await fetch('presentation.json');
    const data = await response.json();
    const email = data.email;
    const mailBtn = document.querySelector('.fa-envelope');

    mailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                // Création du message temporaire
                const message = document.createElement('div');
                message.textContent = 'Adresse e-mail copiée dans le presse-papiers';
                // Style simple, tu peux personnaliser
                message.style.position = 'fixed';
                message.style.top = '30%';
                message.style.left = '42%';
                message.style.backgroundColor = '#333';
                message.style.color = '#fff';
                message.style.padding = '10px 15px';
                message.style.borderRadius = '5px';
                message.style.opacity = '0.9';

                document.body.appendChild(message);

                // Supprime le message après 2 secondes
                setTimeout(() => {
                    document.body.removeChild(message);
                }, 2000);
            })
            .catch(err => {
                console.error('Erreur lors de la copie de l\'adresse e-mail : ', err);
            });
    });
}

email();
