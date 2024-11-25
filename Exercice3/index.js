// Créez votre fonction ici
function calculateAverage(numbers) {
  // Si aucun paramètre ou un paramètre non défini est passé
if(!numbers || !Array.isArray(numbers) || numbers.length === 0){
    return "No numbers to calculate average";
}
  // Convertir les éléments en nombres et filtrer les valeurs non numériques
const convertedNumbers = numbers.map(Number)  
const validNumbers = convertedNumbers.filter(num => !isNaN(num));

// Vérifier si tous les éléments étaient invalides
if(validNumbers.length === 0){
    return "No numbers to calculate average";
}
  // Calculer la somme et la moyenne
const sum = validNumbers.reduce((acc, num)=> acc + num, 0);
return sum / validNumbers.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
