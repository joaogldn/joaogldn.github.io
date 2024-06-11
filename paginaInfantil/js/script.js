document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os itens do menu
    const menuItems = document.querySelectorAll('.nav-bar ul li');
    // Seleciona a div underline que servirá como indicador de posição
    const indicador = document.querySelector('.indicador');

    // Itera sobre cada item do menu
    menuItems.forEach(item => {
        // Adiciona um event listener para o evento 'mouseenter'
        item.addEventListener('mouseenter', (e) => {
            // Obtém as coordenadas e dimensões do item que acionou o evento
            const itemRect = e.target.getBoundingClientRect();
            // Obtém as coordenadas e dimensões do contêiner pai (ul)
            const parentRect = e.target.parentElement.getBoundingClientRect();
            
            // Ajusta a largura da underline para a largura do item
            indicador.style.width = `${itemRect.width}px`;
            // Ajusta a posição da underline para alinhar com o item
            indicador.style.left = `${itemRect.left - parentRect.left}px`;
        });

        // Adiciona um event listener para o evento 'mouseleave'
        item.addEventListener('mouseleave', () => {
            // Retorna a underline ao estado inicial
            indicador.style.width = '0';
            indicador.style.left = '0';
        });
    });
});