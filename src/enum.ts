enum Cores {
    VERMELHO,
    AZUL,
    AMARELO
}
console.log('-'.repeat(100))
console.log('Antes do merge')
console.log('Na posição "VERMELHO" valor: ' + Cores.VERMELHO)
console.log('Na posição "[0]" valor: ' + Cores[0])
console.log('Enum completo')
console.log(Cores)

// Merge de Enums
enum Cores {
    ROXO = 3,
    BRANCO,
    LARANJA = 'Laranja', // Essa opção após ser usada é necessario passar um localização para que o enum possa continuar a contagem para os próximos valores
    LILAS = 5
}
console.log('-'.repeat(100))
console.log('Após o merge')
console.log('Na posição "BRANCO" valor: ' + Cores.BRANCO)
console.log('Na posição "[3]" valor: ' + Cores[3])
console.log('Enum completo')
console.log(Cores)
