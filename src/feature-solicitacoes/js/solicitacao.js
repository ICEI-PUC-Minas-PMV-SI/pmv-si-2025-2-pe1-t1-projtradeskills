// Toggle entre abas
document.querySelectorAll('.btn-tab').forEach(botao => {
    botao.addEventListener('click', function() {
        // Remove active de todos os botões e conteúdos
        document.querySelectorAll('.btn-tab, .tab-conteudo').forEach(el => el.classList.remove('active'));
        
        // Adiciona active no botão clicado
        this.classList.add('active');
        
        // Mostra o conteúdo correspondente
        document.getElementById('conteudo-' + this.dataset.tab).classList.add('active');
    });
});