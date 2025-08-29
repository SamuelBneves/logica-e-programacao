function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularAMediaDeDoisNumeros(valor1, valor2) {
    // Soma todos os valores
    const resultadoDaSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
    // Divide pela quantidade de números passados
    const mediaDeDoisValores = resultadoDaSomaDeDoisValores / 2;
    // Retorna o resultado
    return mediaDeDoisValores;
}
