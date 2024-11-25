// Sélectionner le bouton par son id
const button = document.getElementById("myButton");

// Ajouter un écouteur d'événement pour gérer le clic
button.addEventListener("click", () => {
  // Vérifier si le message n'a pas déjà été affiché
  if (!document.querySelector("p")) {
    // Créer un élément <p>
    const paragraph = document.createElement("p");
    // Ajouter le texte dans le paragraphe
    paragraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    // Ajouter le paragraphe à la page (dans le body)
    document.body.appendChild(paragraph);
  }
});
