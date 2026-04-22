let salariobruto = parseFloat(prompt("Digite o seu salário bruto mensal (ex: 15000.00)"));
let imposto = 0;
let aliquota = "";

// Começamos do maior valor para o menor
if (salariobruto > 8000.00) {
    imposto = salariobruto * 0.275;
    aliquota = "27.5%";
} else if (salariobruto > 6500.00) {
    imposto = salariobruto * 0.15; // Ajustei para 15% conforme seu texto
    aliquota = "15%";
} else if (salariobruto > 5000.00) {
    imposto = salariobruto * 0.075;
    aliquota = "7.5%";
} else {
    imposto = 0;
    aliquota = "Isento";
}

let salarioliquido = salariobruto - imposto;

// Corrigindo a string e o fechamento do alert
alert(`---------------Recibo de pagamento--------------------
Salário Bruto: R$ ${salariobruto.toFixed(2)}
Alíquota aplicada: ${aliquota}
Valor desconto do IR: R$ ${imposto.toFixed(2)}
Salário Líquido: R$ ${salarioliquido.toFixed(2)}`);