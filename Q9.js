// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

const pares = [["nome", "Ana"], ["idade", 30]]
function paresParaObjeto(pares) {
  const obj = {}
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i]
    obj[chave] = valor
  }
  return obj
}

function objetoParaPares(obj) {
  const pares = []
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]])
    }
  }
  return pares
}

const obj = paresParaObjeto(pares);
console.log(obj)

const novoPares = objetoParaPares(obj);
console.log(novoPares)
