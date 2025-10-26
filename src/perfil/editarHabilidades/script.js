const span = document.getElementById('editableValue');

// Função para validar o formato: até 2 dígitos inteiros + ponto + 2 dígitos decimais
function validarFormato(valor) {
    const regex = /^\d{0,2}(\.\d{0,2})?$/; // 0 a 2 dígitos antes, opcional ponto, até 2 decimais
    return regex.test(valor);
}

// Limitar input enquanto digita
span.addEventListener('input', () => {
    let texto = span.textContent;

    // Remove tudo que não é número ou ponto
    texto = texto.replace(/[^0-9.]/g, '');

    // Permite somente um ponto
    const partes = texto.split('.');
    if (partes.length > 2) {
        texto = partes[0] + '.' + partes[1];
    }

    // Aplica o texto corrigido
    if (validarFormato(texto)) {
        span.textContent = texto;
        setCursorToEnd(span);
    } else {
        // Se inválido, remove o último caractere digitado
        span.textContent = texto.slice(0, -1);
        setCursorToEnd(span);
    }
});

// Função para colocar o cursor no final após alteração do conteúdo
function setCursorToEnd(element) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
}

// No blur, ajustar para mostrar 2 casas decimais sempre
span.addEventListener('blur', () => {
    let valor = span.textContent;
    if (!valor) {
        valor = '0.00';
    }
    if (!valor.includes('.')) {
        valor += '.00';
    } else {
        const decimais = valor.split('.')[1];
        if (decimais.length === 0) valor += '00';
        else if (decimais.length === 1) valor += '0';
        else if (decimais.length > 2) valor = valor.slice(0, valor.indexOf('.') + 3);
    }

    // Limita parte inteira a 2 dígitos
    const parteInteira = valor.split('.')[0].slice(0, 2);
    const parteDecimal = valor.split('.')[1];
    span.textContent = parteInteira + '.' + parteDecimal;
});
