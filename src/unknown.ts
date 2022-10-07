/* UNKNOWN é um tipo mais seguro do que eny que permite você fazer calculos com
valores de string fazendo que haja erros em meu código */
// Ex que o any permitiria

let variavelQualquer: any
variavelQualquer = 'Laranja'
variavelQualquer = 10
variavelQualquer = ['1', 2, '3']
variavelQualquer = { props: 'string' }

const outraVariavelQualquer = 10

console.log(variavelQualquer + outraVariavelQualquer) // Dessa forma o ts permitira você realizar execuções que não são válidos, podendo gerar erros ou valores aleatórios

// Com UNKNOWN o ts já não permitira realizar essa execução

let variavelQualquerComUnknown: unknown
variavelQualquerComUnknown = 10
variavelQualquerComUnknown = 'string qualquer'
// variavelQualquerComUnknown = 50

// dessa forma o ts valida e não permite essa execução, pois o último valor setado para a variavelQualquerComUnknown é string, não podendo realizar uma soma
// console.log(variavelQualquerComUnknown + outraVariavelQualquer)

// Realizando validação
if (typeof variavelQualquerComUnknown === 'number') console.log(variavelQualquerComUnknown + outraVariavelQualquer)

export default 1
