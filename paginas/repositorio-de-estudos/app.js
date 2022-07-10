'use strict';

const chaveClasseSection1 = document.querySelector(".seletor-1n1");
const chaveClasseSection2 = document.querySelector(".seletor-2n1");
const chaveClasseSection3 = document.querySelector(".seletor-3n1");
const chaveClasseSection4 = document.querySelector(".seletor-4n1");
const chaveClasseSection5 = document.querySelector(".seletor-5n1");
const chaveClasseSection6 = document.querySelector(".seletor-6n1");

const nomeClasse = document.body.classList;


chaveClasseSection1.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-section-2"){
        document.body.classList.remove("selecao-section-2");
        document.body.classList.toggle("selecao-section-1");
    } 
    else if (nomeClasse == "selecao-section-3")
    {
        document.body.classList.remove("selecao-section-3");
        document.body.classList.toggle("selecao-section-1");
    } 
    else if (nomeClasse == "selecao-section-4")
    {
        document.body.classList.remove("selecao-section-4");
        document.body.classList.toggle("selecao-section-1");
    } 
    else if (nomeClasse == "selecao-section-5")
    {
        document.body.classList.remove("selecao-section-5");
        document.body.classList.toggle("selecao-section-1");
    } 
    else if (nomeClasse == "selecao-section-6")
    {
        document.body.classList.remove("selecao-section-6");
        document.body.classList.toggle("selecao-section-1");
    } 
    else
    {
        document.body.classList.remove("selecao-section-1");
        document.body.classList.toggle("selecao-section-2");
    }
});

chaveClasseSection2.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-section-1"){
        document.body.classList.remove("selecao-section-1");
        document.body.classList.toggle("selecao-section-2");
    }
    else if (nomeClasse == "selecao-section-3")
    {
        document.body.classList.remove("selecao-section-3");
        document.body.classList.toggle("selecao-section-2");
    } 
    else if (nomeClasse == "selecao-section-4")
    {
        document.body.classList.remove("selecao-section-4");
        document.body.classList.toggle("selecao-section-2");
    } 
    else if (nomeClasse == "selecao-section-5")
    {
        document.body.classList.remove("selecao-section-5");
        document.body.classList.toggle("selecao-section-2");
    } 
    else if (nomeClasse == "selecao-section-6")
    {
        document.body.classList.remove("selecao-section-6");
        document.body.classList.toggle("selecao-section-2");
    } 
    else
    {
        document.body.classList.remove("selecao-section-2");
        document.body.classList.toggle("selecao-section-3");
    }
});

chaveClasseSection3.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-section-1"){
        document.body.classList.remove("selecao-section-1");
        document.body.classList.toggle("selecao-section-3");
    } 
    else if (nomeClasse == "selecao-section-2"){
        document.body.classList.remove("selecao-section-2");
        document.body.classList.toggle("selecao-section-3");
    }
    else if (nomeClasse == "selecao-section-4")
    {
        document.body.classList.remove("selecao-section-4");
        document.body.classList.toggle("selecao-section-3");
    } 
    else if (nomeClasse == "selecao-section-5")
    {
        document.body.classList.remove("selecao-section-5");
        document.body.classList.toggle("selecao-section-3");
    } 
    else if (nomeClasse == "selecao-section-6")
    {
        document.body.classList.remove("selecao-section-6");
        document.body.classList.toggle("selecao-section-3");
    } 
    else
    {
        document.body.classList.remove("selecao-section-3");
        document.body.classList.toggle("selecao-section-4");
    }
});

chaveClasseSection4.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-section-1"){
        document.body.classList.remove("selecao-section-1");
        document.body.classList.toggle("selecao-section-4");
    } 
    else if (nomeClasse == "selecao-section-2"){
        document.body.classList.remove("selecao-section-2");
        document.body.classList.toggle("selecao-section-4");
    } 
    else if (nomeClasse == "selecao-section-3")
    {
        document.body.classList.remove("selecao-section-3");
        document.body.classList.toggle("selecao-section-4");
    } 
    else if (nomeClasse == "selecao-section-5")
    {
        document.body.classList.remove("selecao-section-5");
        document.body.classList.toggle("selecao-section-4");
    } 
    else if (nomeClasse == "selecao-section-6")
    {
        document.body.classList.remove("selecao-section-6");
        document.body.classList.toggle("selecao-section-4");
    } 
    else
    {
        document.body.classList.remove("selecao-section-4");
        document.body.classList.toggle("selecao-section-5");
    }
});

chaveClasseSection5.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-section-1"){
        document.body.classList.remove("selecao-section-1");
        document.body.classList.toggle("selecao-section-5");
    } 
    else if (nomeClasse == "selecao-section-2"){
        document.body.classList.remove("selecao-section-2");
        document.body.classList.toggle("selecao-section-5");
    } 
    else if (nomeClasse == "selecao-section-3")
    {
        document.body.classList.remove("selecao-section-3");
        document.body.classList.toggle("selecao-section-5");
    } 
    else if (nomeClasse == "selecao-section-4")
    {
        document.body.classList.remove("selecao-section-4");
        document.body.classList.toggle("selecao-section-5");
    }
    else if (nomeClasse == "selecao-section-6")
    {
        document.body.classList.remove("selecao-section-6");
        document.body.classList.toggle("selecao-section-5");
    } 
    else
    {
        document.body.classList.remove("selecao-section-5");
        document.body.classList.toggle("selecao-section-6");
    }
});

chaveClasseSection6.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-section-1"){
        document.body.classList.remove("selecao-section-1");
        document.body.classList.toggle("selecao-section-6");
    } 
    else if (nomeClasse == "selecao-section-2"){
        document.body.classList.remove("selecao-section-2");
        document.body.classList.toggle("selecao-section-6");
    } 
    else if (nomeClasse == "selecao-section-3")
    {
        document.body.classList.remove("selecao-section-3");
        document.body.classList.toggle("selecao-section-6");
    } 
    else if (nomeClasse == "selecao-section-4")
    {
        document.body.classList.remove("selecao-section-4");
        document.body.classList.toggle("selecao-section-6");
    } 
    else if (nomeClasse == "selecao-section-5")
    {
        document.body.classList.remove("selecao-section-5");
        document.body.classList.toggle("selecao-section-6");
    }
    else
    {
        document.body.classList.remove("selecao-section-6");
        document.body.classList.toggle("selecao-section-1");
    }
});