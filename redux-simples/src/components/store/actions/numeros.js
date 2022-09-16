export function alterarNumeroMinimo(novoNumero) {
    return {
        type: 'NumeroMinimoAlterado',
        payload: novoNumero
    }
}
export function alterarNumeroMaximo(novoNumero) {
    return {
        type: 'NumeroMaximoAlterado',
        payload: novoNumero
    }
}