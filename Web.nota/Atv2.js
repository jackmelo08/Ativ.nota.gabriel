var entrada = require("readline-sync");
var escolha;

while (true) {
     escolha = entrada.question('Digite a operação (+ | - | * | % | / | ** | sair): ').toLowerCase();

    if (escolha == 'sair') {
        console.log('Saindo...');
        break;

    }

    if (escolha == '+') {
        var num1 = parseFloat(entrada.question('1º Número: '));
        var num2 = parseFloat(entrada.question('2º Número: '));
        console.log(`Adição: ${num1 + num2}`);

    }else if (escolha == '-') {
        var num1 = parseFloat(entrada.question('1º Número: '));
        var num2 = parseFloat(entrada.question('2º Número: '));
        console.log(`Subtração: ${num1 - num2}`);

    }
    else if (escolha == '*') {
        var num1 = parseFloat(entrada.question('1º Número: '));
        var num2 = parseFloat(entrada.question('2º Número: '));
        console.log(`Multiplicação: ${num1 * num2}`);

    }
    else if (escolha == '/') {
        var num1 = parseFloat(entrada.question('1º Número: '));
        var num2 = parseFloat(entrada.question('2º Número: '));
        console.log(`Divisão ${num1 / num2}`);
    }
    else if (escolha == '**') {
        var num1 = parseFloat(entrada.question('1º Número: '));
        var num2 = parseFloat(entrada.question('2º Número: '));
        console.log(`Potenciação: ${Math.pow(num1 , num2)}`);

    }
    else if (escolha == '%') {
        var num1 = parseFloat(entrada.question('1º Número: '));
        var num2 = parseFloat(entrada.question('2º Número: '));
        console.log(`Radiciação: ${Math.sqrt(num1 , 2)}`);
    }
    else {
        console.log('Operação Inválida');
    }
}










