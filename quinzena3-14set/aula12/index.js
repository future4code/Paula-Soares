//Exercício 1
//O código está somando os números menores q 5
//> 10

//Exercício 2
// Imprime os numeros do array q forem maiores q 18

//DESAFIO 1
// Imprime 4 linhas tendo de 1 até 4 zeros

// //Exercício 3
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// //a.
// for (let num of array) {
//     console.log(num);
// }
// //b.
// for (let num of array) {
//     console.log(num/10);
// }
// //c.
// let novo = []
// for (let num of array) {
//     if (num%2===0) {
//         novo.push(num)
//     }    
// }
// console.log(novo);
// //d.
// novo = []
// for (let [i, num] of array.entries()) {
//     novo.push(`O elemento do índex ${i} é: ${num}`);
// }
// console.log(novo);
// //e.
// let menor = 1000
// let maior = 0
// for (let num of array) {
//     if (num<menor) {
//         menor = num;
//     }
//     if (num > maior) {
//         maior = num;
//     }
// }
// console.log(`Maior: ${maior}. Menor: ${menor}`);

//DESAFIO 2
// let num1 = Number(prompt("vamos jogar!! Digite um número: "))
// let num2
// let cont = 0
// while (num1 !== num2) {
//     num2 =  Number(prompt("Chute um número: "))
//     cont++
//     if (num1 < num2) {
//         console.log(`O número chutado foi: ${num2} \nErrrrrou, é menor`);
//     } else if (num1 > num2){
//         console.log(`O número chutado foi: ${num2} \nErrrrrou, é maior`);
//     } else {
//         console.log(`O número chutado foi: ${num2} \nAcertou!!!!\nO número de tentativas foi: ${cont}`);
//     }
// }

//DESAFIO 3
let num1 = Math.floor((Math.random() * 10) + 1)
let num2
let cont = 0

while (num1 !== num2) {
    num2 =  Number(prompt("Chute um número: "))
    cont++
    if (num1 < num2) {
        console.log(`O número chutado foi: ${num2} \nErrrrrou, é menor`);
    } else if (num1 > num2){
        console.log(`O número chutado foi: ${num2} \nErrrrrou, é maior`);
    } else {
        console.log(`O número chutado foi: ${num2} \nAcertou!!!!\nO número de tentativas foi: ${cont}`);
    }
}