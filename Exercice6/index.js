// Variable globale pour gérer l'entrée de l'utilisateur
let currentInput = '';

// Fonction pour ajouter un caractère à l'affichage
window.appendToDisplay = function(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
};

// Fonction pour effacer l'affichage
window.clearDisplay = function() {
    currentInput = '';
    document.getElementById('display').value = '';
};

// Fonction pour calculer le résultat de l'opération
window.calculateResult = function() {
    try {
        // Vérifier si une division par zéro a été tentée
        if (currentInput.includes('/0')) {
            document.getElementById('display').value = 'Division by zero is not allowed';
            currentInput = ''; // Réinitialiser après l'erreur
        } else {
            // Calculer l'expression mathématique
            const result = eval(currentInput);
            document.getElementById('display').value = result;
            currentInput = result.toString(); // Garder le résultat pour les prochaines entrées
        }
    } catch (error) {
        // En cas d'erreur dans l'évaluation
        document.getElementById('display').value = 'Error';
        currentInput = ''; // Réinitialiser l'entrée après une erreur
    }
};