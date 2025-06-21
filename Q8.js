// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 150 },
  { cliente: "Maria", total: 300 }
];

function somarVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;

    if (acumulador[cliente]) {
      acumulador[cliente] += total;
    } else {
      acumulador[cliente] = total;
    }

    return acumulador;
  }, {});
}

const resultado = somarVendasPorCliente(vendas);
console.log(resultado);

