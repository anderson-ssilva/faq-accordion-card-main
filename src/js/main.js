const iteraItem = document.querySelectorAll('.container__FaqItem')

iteraItem.forEach(elemento => {
    elemento.addEventListener('click', () => {

        const mostrarConteudo = document.querySelector('.ativo');

        if(mostrarConteudo) {
            mostrarConteudo.classList.remove('ativo')
        }
        elemento.classList.add('ativo')
    })
})