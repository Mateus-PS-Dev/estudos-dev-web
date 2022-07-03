'use strict';


/*Codigo para navegar entre seções em destaque*/
const chaveClasseDestaques = document.querySelector(".sele-1");
const chaveClasseRepositorio = document.querySelector(".sele-2");
const chaveClasseQualificacoes = document.querySelector(".sele-3");

const nomeClasse = document.body.classList;

chaveClasseRepositorio.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-destaques"){
        document.body.classList.remove("selecao-destaques");
        document.body.classList.toggle("selecao-repositorio");
    } 
    else if (nomeClasse == "selecao-qualificacoes")
    {
        document.body.classList.remove("selecao-qualificacoes");
        document.body.classList.toggle("selecao-repositorio");
    } 
    else
    {
        document.body.classList.remove("selecao-repositorio");
        document.body.classList.toggle("selecao-destaques");
    }
});

chaveClasseQualificacoes.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-repositorio"){
        document.body.classList.remove("selecao-repositorio");
        document.body.classList.toggle("selecao-qualificacoes");
    } 
    else if (nomeClasse == "selecao-destaques")
    {
        document.body.classList.remove("selecao-destaques");
        document.body.classList.toggle("selecao-qualificacoes");
    }
    else 
    {
        document.body.classList.remove("selecao-qualificacoes");
        document.body.classList.toggle("selecao-repositorio"); 
    }   
});

chaveClasseDestaques.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-repositorio"){
        document.body.classList.remove("selecao-repositorio");
        document.body.classList.toggle("selecao-destaques");
    } 
    else if (nomeClasse == "selecao-qualificacoes")
    {
        document.body.classList.remove("selecao-qualificacoes");
        document.body.classList.toggle("selecao-destaques");
    }
    else 
    {
        document.body.classList.remove("selecao-destaques");
        document.body.classList.toggle("selecao-repositorio");
    }
    
});


