// TS faz uma verificação para você e se aquele objeto que você deseja manipular pode ser null ou não, ele não permite que faça alterações ou o utilize sem realizar trativas
// Ex
// const body = document.querySelector('body')
// body.style.backgroundColor = 'red'

// Quando não temos certeza que o body existe ou qualquer outro elemento que pode nos retornar um valor null, é necessário fazer uma validação de antemão
// const body2 = document.querySelector('body')
// if (body2) body2.style.backgroundColor = 'red' // Dessa forma, ele verifica antes se o body é diferente de null para depois realizar a ação ou modificar seus valores

// Para casos que você tem certeza que existe o componente, pode se realizar um Alias para um tipo que já é de se esperar, forçando ele a não ser null, porém só é utilizando em casos que você tem extrema certeza.
// const body3 = document.querySelector('body') as HTMLBodyElement
// body3.style.backgroundColor = 'red'

// Condicional
const body1 = document.querySelector('body')
if (body1) body1.style.backgroundColor = 'red'

// Non-null assertion (!) | NÃO RECOMENDADO
const body2 = document.querySelector('body')!
if (body2) body2.style.backgroundColor = 'blue'

// Type Assertion
const body3 = document.querySelector('body') as HTMLBodyElement
if (body3) body3.style.backgroundColor = 'blue'

