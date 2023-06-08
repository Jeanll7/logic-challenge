// Calcular a média de três números:
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}
console.log(Math.round(calcularMedia(4, 7, 9)));

// Verificar se um número é par:
function verificarNumeroPar(number) {
  return number % 2 === 0 ? true : false;

  // if (number % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}
console.log(verificarNumeroPar(10));

// Inverter uma string:
function inverterString(texto) {
  return texto.split("").reverse().join("");

  // let resultado = '';
  // for (let i = texto.length - 1; i >= 0; i--) {
  //   resultado += texto.charAt(i);
  // }
  // return resultado;
}
console.log(inverterString("Hello"));

// Inverter uma número:
function inverterNumero() {
  let number = [5, 6, 8, 7];
  let reverseNumber = number.toString();
  let invertedNumber = reverseNumber
    .split("")
    .reverse()
    .join("")
    .replace(/[\D]+/g, " | ");
  return invertedNumber;
}
console.log(inverterNumero());

// Verificar se uma palavra é um palíndromo:
function verificarPalindromo(palavra) {
  var palavraInvertida = palavra.split("").reverse().join("");
  return palavra === palavraInvertida ? true : false;
}
console.log(verificarPalindromo("radar"));

// Verificar se um número é primo:
function verificarPrimo(number) {
  if (number <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    return number % i === 0 ? false : true;
  }
  return true;
}

console.log(verificarPrimo(6));
// console.clear()

// Gerar numero aleatório de 0 a 60:
const numeroAleatorio = Array(6)
  .fill(0)
  .map(() => parseInt(Math.random() * 60 + 1));

console.log(numeroAleatorio);

// forma 2
const numerosAleatorios = Array.from({ length: 6 }, () =>
  Math.floor(Math.random() * 61)
);

console.log(numerosAleatorios);

// forma 3: crescente
const crescente = Array(6)
  .fill(0)
  .map(() => Math.floor(Math.random() * 60 + 1))
  .sort((a, b) => a - b);

console.log(crescente);

// forma 4: crescente sem duplicar numero mais clean
const numCrescenteArray = Array.from({ length: 6 }, () =>
  Math.floor(Math.random() * 60 + 1)
).sort((a, b) => a - b);
console.log(numCrescenteArray);

// forma 5: crescente sem duplicar numero function()
function numerosMegaSena() {
  const crescente = new Set();

  while (crescente.size < 6) {
    crescente.add(Math.floor(Math.random() * 60 + 1));
  }
  return [...crescente].sort((a, b) => a - b);
}
const resultado = numerosMegaSena();
console.log(resultado);
