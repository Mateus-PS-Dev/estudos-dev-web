'use strict';

const chave = document.querySelector('.botao');

chave.addEventListener( 'click', function() {
    document.body.classList.toggle('tema-claro');
    document.body.classList.toggle('tema-escuro');

    const nomeclasse = document.body.className;
    if(nomeclasse == "tema-claro") 
    {
        this.textContent = "Escuro";
    }
    else
    {
        this.textContent = "Claro";
    }

    console.log('Nome da classe atual: ' + nomeclasse);
});



