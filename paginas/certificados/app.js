'use strict';

const chaveClasseCursos = document.querySelector(".seletor-1n0");
const chaveClasseCertificados = document.querySelector(".seletor-2n0");
const chaveClasseTrabalhos = document.querySelector(".seletor-3n0");
const chaveClasseCursosA1 = document.querySelector(".seletor-1n1");
const chaveClasseCursosA2 = document.querySelector(".seletor-2n1");
const chaveClasseCursosA3 = document.querySelector(".seletor-3n1");
const chaveClasseCursosA4 = document.querySelector(".seletor-4n1");
const chaveClasseCursosA5 = document.querySelector(".seletor-5n1");
const chaveClasseCursosA6 = document.querySelector(".seletor-6n1");
const chaveClasseCertificadosA1 = document.querySelector(".seletor-1n2");
const chaveClasseCertificadosA2 = document.querySelector(".seletor-2n2");
const chaveClasseCertificadosA3 = document.querySelector(".seletor-3n2");
const chaveClasseCertificadosA4 = document.querySelector(".seletor-4n2");
const chaveClasseCertificadosA5 = document.querySelector(".seletor-5n2");
const chaveClasseCertificadosA6 = document.querySelector(".seletor-6n2");
const chaveClasseTrabalhosA1 = document.querySelector(".seletor-1n3");
const chaveClasseTrabalhosA2 = document.querySelector(".seletor-2n3");
const chaveClasseTrabalhosA3 = document.querySelector(".seletor-3n3");
const chaveClasseTrabalhosA4 = document.querySelector(".seletor-4n3");
const chaveClasseTrabalhosA5 = document.querySelector(".seletor-5n3");
const chaveClasseTrabalhosA6 = document.querySelector(".seletor-6n3");

const nomeClasse = document.body.className;


chaveClasseCursos.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else
    {
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-certificado-atg1");
    }
});


chaveClasseCursosA1.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-cursos-atg1");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
    else
    {
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
});

chaveClasseCursosA2.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-cursos-atg2");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-cursos-atg2");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-cursos-atg2");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-cursos-atg2");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-cursos-atg2");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-cursos-atg2");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
    else
    {
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
});

chaveClasseCursosA3.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-cursos-atg3");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-cursos-atg3");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-cursos-atg3");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-cursos-atg3");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-cursos-atg3");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-cursos-atg3");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
    else
    {
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-cursos-atg2");
    }
});

chaveClasseCursosA4.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-cursos-atg4");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-cursos-atg4");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-cursos-atg4");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-cursos-atg4");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-cursos-atg4");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-cursos-atg4");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
    else
    {
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-cursos-atg3");
    }
});

chaveClasseCursosA5.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-cursos-atg5");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-cursos-atg5");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-cursos-atg5");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-cursos-atg5");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-cursos-atg5");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-cursos-atg5");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
    else
    {
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-cursos-atg4");
    }
});

chaveClasseCursosA6.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-cursos-atg6");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-cursos-atg6");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-cursos-atg6");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-cursos-atg6");
    }
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-cursos-atg6");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-cursos-atg6");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-cursos-atg6");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-cursos-atg6");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-cursos-atg6");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-cursos-atg6");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-cursos-atg6");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-cursos-atg6");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-cursos-atg6");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-cursos-atg6");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-cursos-atg6");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-cursos-atg6");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-cursos-atg6");
    }
    else
    {
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-cursos-atg5");
    }
});

chaveClasseCertificados.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    // else if (nomeClasse == "selecao-certificados-atg1"){
    //     document.body.classList.remove("selecao-certificados-atg1");
    //     document.body.classList.toggle("selecao-cursos-atg6");
    // } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else
    {
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-cursos-atg1");
    }
});

chaveClasseCertificadosA1.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    // else if (nomeClasse == "selecao-certificados-atg1"){
    //     document.body.classList.remove("selecao-certificados-atg1");
    //     document.body.classList.toggle("selecao-cursos-atg6");
    // } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-certificados-atg1");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
    else
    {
        document.body.classList.remove("selecao-certificado-atg1");
        document.body.classList.toggle("selecao-certificado-atg2");
    }
});

chaveClasseCertificadosA2.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-certificados-atg2");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-certificados-atg2");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-certificados-atg2");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-certificados-atg2");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-certificados-atg2");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-certificados-atg2");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
    else
    {
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
});

chaveClasseCertificadosA3.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-certificados-atg3");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-certificados-atg3");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-certificados-atg3");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-certificados-atg3");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-certificados-atg3");
    } 
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-certificados-atg3");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-certificados-atg3");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
    else
    {
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-certificados-atg2");
    }
});

chaveClasseCertificadosA4.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-certificados-atg4");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-certificados-atg4");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-certificados-atg4");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-certificados-atg4");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-certificados-atg4");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-certificados-atg4");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-certificados-atg4");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-certificados-atg4");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-certificados-atg4");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-certificados-atg4");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-certificados-atg4");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-certificados-atg4");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-certificados-atg4");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-certificados-atg4");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-certificados-atg4");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-certificados-atg4");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-certificados-atg4");
    }
    else
    {
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
});

chaveClasseCertificadosA5.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-certificados-atg5");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-certificados-atg5");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-certificados-atg5");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-certificados-atg5");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-certificados-atg5");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-certificados-atg5");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-certificados-atg5");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-certificados-atg5");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-certificados-atg5");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-certificados-atg5");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-certificados-atg5");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-certificados-atg5");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-certificados-atg5");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-certificados-atg5");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-certificados-atg5");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-certificados-atg5");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-certificados-atg5");
    }
    else
    {
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-certificados-atg4");
    }
});

chaveClasseCertificadosA6.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-certificados-atg6");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-certificados-atg6");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-certificados-atg6");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-certificados-atg6");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-certificados-atg6");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-certificados-atg6");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-certificados-atg6");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-certificados-atg6");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-certificados-atg6");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-certificados-atg6");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-certificados-atg6");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-certificados-atg6");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-certificados-atg6");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-certificados-atg6");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-certificados-atg6");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-certificados-atg6");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-certificados-atg6");
    }
    else
    {
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-certificados-atg3");
    }
});

chaveClasseTrabalhos.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else
    {
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-certificados-atg1");
    }
});

chaveClasseTrabalhosA1.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
    else
    {
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
});

chaveClasseTrabalhosA2.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
    else
    {
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg1");
    }
});

chaveClasseTrabalhosA3.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
    else
    {
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg2");
    }
});

chaveClasseTrabalhosA4.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    }
    else
    {
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg3");
    }
});

chaveClasseTrabalhosA5.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg5")
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    }
    else if (nomeClasse == "selecao-trabalhos-atg6"){
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    }
    else
    {
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg4");
    }
});

chaveClasseTrabalhosA6.addEventListener( 'click' , function() {
    if (nomeClasse == "selecao-cursos-atg1"){
        document.body.classList.remove("selecao-cursos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    } 
    else if (nomeClasse == "selecao-cursos-atg2"){
        document.body.classList.remove("selecao-cursos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    } 
    else if (nomeClasse == "selecao-cursos-atg3"){
        document.body.classList.remove("selecao-cursos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    } 
    else if (nomeClasse == "selecao-cursos-atg4"){
        document.body.classList.remove("selecao-cursos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    }
    else if (nomeClasse == "selecao-cursos-atg5"){
        document.body.classList.remove("selecao-cursos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    }
    else if (nomeClasse == "selecao-cursos-atg6"){
        document.body.classList.remove("selecao-cursos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    }
    else if (nomeClasse == "selecao-certificados-atg1"){
        document.body.classList.remove("selecao-certificados-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    } 
    else if (nomeClasse == "selecao-certificados-atg2"){
        document.body.classList.remove("selecao-certificados-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    } 
    else if (nomeClasse == "selecao-certificados-atg3"){
        document.body.classList.remove("selecao-certificados-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    }
    else if (nomeClasse == "selecao-certificados-atg4"){
        document.body.classList.remove("selecao-certificados-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    }
    else if (nomeClasse == "selecao-certificados-atg5"){
        document.body.classList.remove("selecao-certificados-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    }
    else if (nomeClasse == "selecao-certificados-atg6"){
        document.body.classList.remove("selecao-certificados-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    }
    else if (nomeClasse == "selecao-trabalhos-atg1"){
        document.body.classList.remove("selecao-trabalhos-atg1");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg2"){
        document.body.classList.remove("selecao-trabalhos-atg2");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    } 
    else if (nomeClasse == "selecao-trabalhos-atg3"){
        document.body.classList.remove("selecao-trabalhos-atg3");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    }
    else if (nomeClasse == "selecao-trabalhos-atg4"){
        document.body.classList.remove("selecao-trabalhos-atg4");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    }
    else if (nomeClasse == "selecao-trabalhos-atg5"){
        document.body.classList.remove("selecao-trabalhos-atg5");
        document.body.classList.toggle("selecao-trabalhos-atg6");
    }
    else
    {
        document.body.classList.remove("selecao-trabalhos-atg6");
        document.body.classList.toggle("selecao-trabalhos-atg5");
    }
});