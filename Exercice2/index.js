// Créez votre fonction ici

function calculate(num1, num2, operator) {
  // Convertir les entrées en nombres pour gérer le cas où ellessont des chaînes
  const number1 = Number(num1);
  const number2 = Number(num2);
  // Vérifier que les entrées sont des nombres valides
  if (isNaN(number1) || isNaN(number2)) {
    return "Invalid input";
  }
  // Vérifier l'opérateur et effectuer l'opération correspondante
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      if (number2 === 0) {
        return "Division by zero is not allowed";
      }
      return number1 / number2;
    default:
      return "Invalid operator";
  }
//   return operator === '+' ? number1 + number2
//   : operator === '-' ? number1 - number2
//   : operator === '*' ? number1 * number2
//   : operator === '/' ? (number2 === 0 ? 'Division by zero is not allowed' : number1 / number2)
//   : 'Invalid operator'
}

export default calculate;
