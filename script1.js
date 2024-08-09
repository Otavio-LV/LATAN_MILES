function converterPontos() {
    const pontos = document.getElementById('pontos').value;
    const taxa = 70; // 1000 pontos = 70 dinheiros
    const dinheiro = (pontos / 1000) * taxa;
    document.getElementById('dinheiro').innerText = dinheiro.toFixed(2);

     // Formatar o valor com ponto como separador de milhares
     const dinheiroFormatado = dinheiro.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

     document.getElementById('dinheiro').innerText = dinheiroFormatado;

}

