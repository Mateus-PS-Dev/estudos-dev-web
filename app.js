'use strict';


/*Codigo para navegar entre seções em destaque*/
const chaveClasseDestaques = document.querySelector(".sele-1");
const chaveClasseRepositorio = document.body.querySelector(".sele-2");
const chaveClasseQualificacoes = document.querySelector(".sele-3");

const nomeClasse = document.body.className;

chaveClasseDestaques.addEventListener( 'click', function() {    
    
    switch (true)
    {
        case (nomeClasse == "selecao-repositorio"):
            document.body.classList.toggle("selecao-destaques");
        break;
        case (nomeClasse == "selecao-qualificacoes"):
            document.body.classList.toggle("selecao-destaques");
        break;
        case (nomeClasse =! "selecao-destaques"):
            document.body.classList.toggle("selecao-destaques");
        break;
        default :
        document.body.classList.toggle("selecao-destaques");//inutil até o momento
    }
});

chaveClasseRepositorio.addEventListener( 'click', function() {

    switch (true)
    {
        case (nomeClasse == "selecao-destaques"):
            document.body.classList.toggle("selecao-repositorio");
        break;
        case (nomeClasse == "selecao-qualificacoes"):
            document.body.classList.toggle("selecao-repositorio");
        break;
        case (nomeClasse =! "selecao-repositorio"):
            document.body.classList.toggle("selecao-repositorio");
        break;
        default :
        document.body.classList.toggle("selecao-repositorio");//inutil até o momento
    }   
});

chaveClasseQualificacoes.addEventListener( 'click', function() {

    switch (true)
    {
        case (nomeClasse == "selecao-destaques"):
            document.body.classList.toggle("selecao-qualificacoes");
        break;
        case (nomeClasse == "selecao-repositorio"):
            document.body.classList.toggle("selecao-qualificacoes");
        break;
        case (nomeClasse =! "selecao-qualificacoes"):
            document.body.classList.toggle("selecao-qualificacoes");
        break;
        case (nomeClasse == "selecao-qualificacoes"):
            document.body.classList.toggle("selecao-qualificacoes");
        break;
    }
});
