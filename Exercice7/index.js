function convertToBinary(){
    // récupérer la valeur de l'input
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryResult = document.getElementById('binaryResult');

    // vérifier si l'entrée est un nombre valide
    if(isNaN(decimalInput) || decimalInput === ''){
        binaryResult.textContent= '';
    } else {
        // convertir le nombre decimal en binaire
        const decimalNumber = parseInt(decimalInput, 10);
        const binaryString = decimalNumber.toString(2); // convertir en binaire

        // Afiicher le résultat dans l'élément #binaryResult
        binaryResult.textContent = binaryString;
    }

    
}