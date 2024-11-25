function pairNumbers(start, end) {
  // Convertir les paramètres en nombres (au cas où ils seraient passés en tant que chaînes)
  const startNum = Number(start);
  const endNum = Number(end);

  // Vérifier que les valeurs sont bien des nombres et que start est inférieur ou égal à end
  if (isNaN(startNum) || isNaN(endNum) || startNum > endNum) {
    return "";
  }

  // Initialiser un tableau pour stocker les nombres pairs
  const evenNumbers = [];
  // Boucler de start à end
  for (let i = startNum; i <= endNum; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  // Retourner les nombres pairs sous forme de chaîne séparée par des virgules
  return evenNumbers.join(",");
}

export default pairNumbers;
