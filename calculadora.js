const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Digite a operação (+, -, *, /): ', (operator) => {
      const result = eval(`${num1} ${operator} ${num2}`);
      console.log(`O resultado é: ${result}`);
      rl.close();
    });
  });
});
