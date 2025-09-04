async function email() {
    const response = await fetch('presentation.json');
    const data = await response.json();
    const email = data.email;
    const mailBtn = document.querySelector('.fa-envelope');
    mailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(email).then(() => {
            alert('Adresse e-mail copiée dans le presse-papiers ');
        }).catch(err => {
            console.error('Erreur lors de la copie de l\'adresse e-mail : ', err);
        });
    }
);}
email();