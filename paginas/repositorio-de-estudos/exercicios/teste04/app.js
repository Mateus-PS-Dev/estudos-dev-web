'use strict';

//Declaração das Constantes de Cor de Fundo:
const switcherBgBlue = document.querySelector('.btn-blue');
const switcherBgRed = document.querySelector('.btn-red');
const switcherBgYellow = document.querySelector('.btn-yellow');
const switcherBgGreen = document.querySelector('.btn-green');
const switcherBgOrange = document.querySelector('.btn-orange');
const switcherBgPurple = document.querySelector('.btn-purple');
const switcherBgBlack = document.querySelector('.btn-black');
const switcherBgWhite = document.querySelector('.btn-white');

//Declarção das Constantes de Cor de Fonte:
const switcherFontBlue = document.querySelector('.btn-font-blue');
const switcherFontRed = document.querySelector('.btn-font-red');
const switcherFontYellow = document.querySelector('.btn-font-yellow');
const switcherFontGreen = document.querySelector('.btn-font-green');
const switcherFontOrange = document.querySelector('.btn-font-orange');
const switcherFontPurple = document.querySelector('.btn-font-purple');
const switcherFontBlack = document.querySelector('.btn-font-black');
const switcherFontWhite = document.querySelector('.btn-font-white');

//Declaração das Constantes de Estilo de Fonte:
const switcherFontFamilyMono = document.querySelector('.btn-mono');
const switcherFontFamilyTimes = document.querySelector('.btn-times');
const switcherFontFamilyArial = document.querySelector('.btn-arial');

//Declaração das Constantes de Tamanho do Site:
const switcherSiteSizeS = document.querySelector('.btn-small');
const switcherSiteSizeN = document.querySelector('.btn-normal');
const switcherSiteSizeB = document.querySelector('.btn-big');
const switcherSiteSizeG = document.querySelector('.btn-giant');

//Declaração das Constantes de Tamanho de Borda:
const switcherBdrSizeNone = document.querySelector('.btn-bdr-none');
const switcherBdrSizeSmall = document.querySelector('.btn-bdr-small');
const switcherBdrSizeBig = document.querySelector('.btn-bdr-big');

//Declaração das Constantes de Cor de Borda:
const switcherBdrBlue = document.querySelector('.btn-bdr-blue');
const switcherBdrRed = document.querySelector('.btn-bdr-red');
const switcherBdrYellow = document.querySelector('.btn-bdr-yellow');
const switcherBdrGreen = document.querySelector('.btn-bdr-green');
const switcherBdrOrange = document.querySelector('.btn-bdr-orange');
const switcherBdrPurple = document.querySelector('.btn-bdr-purple');
const switcherBdrBlack = document.querySelector('.btn-bdr-black');
const switcherBdrWhite = document.querySelector('.btn-bdr-white');

//Declaração das Constantes de Estilo de Borda:
const switcherBdrSquare = document.querySelector('.btn-square');
const switcherBdrRound = document.querySelector('.btn-round');

//Declaração das Constantes de Sombra de Box:
const switcherBoxShadow = document.querySelector('.btn-box-shadow');
const switcherBoxNormal = document.querySelector('.btn-box-normal');

/* Para criar que eu estou querendo eu tenho que criar uma classe nas CCS com cada variavel possível para trabalhar na forma que eu aprendi, mas é valido pois preciso aprender de uma forma antes de ver os próximos metodos para melhorar a forma de fazer isso se eu nã sei fazer de outras formas ainda. */

//Switchers Cores de fundo:
switcherBgBlue.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-blue');
    //document.body.classList.toggle('tema-escuro');

    // const nomeclasse = document.body.className;
    // if(nomeclasse == "tema-claro") 
    // {
    //     this.textContent = "Escuro";
    // }
    // else
    // {
    //     this.textContent = "Claro";
    // }

    //console.log('Nome da classe atual: ' + nomeclasse);
});

switcherBgRed.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-red');
});

switcherBgYellow.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-yellow');
});

switcherBgGreen.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-green');
});

switcherBgOrange.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-orange');
});

switcherBgPurple.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-purple');
});

switcherBgBlack.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-black');
});

switcherBgWhite.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-white');
});

//Switchers Cores de Fonte:
switcherFontBlue.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-font-blue');
});

switcherFontRed.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-font-red');
});

switcherFontYellow.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-font-yellow');
});

switcherFontGreen.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-font-green');
});

switcherFontOrange.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-font-orange');
});

switcherFontPurple.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-font-purple');
});

switcherFontBlack.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-font-black');
});

switcherFontWhite.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-font-white');
});

//Switchers Estilo de Fonte:
switcherFontFamilyMono.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-mono');
});

switcherFontFamilyTimes.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-times');
});

switcherFontFamilyArial.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-arial');
});

//Switchers Tamanhos do Site:
switcherSiteSizeS.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-small');
});

switcherSiteSizeN.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-normal');
});

switcherSiteSizeB.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-big');
});

switcherSiteSizeG.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-giant');
});

//Switchers de Tamanho de Borda:
switcherBdrSizeNone.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-bdr-none');
});

switcherBdrSizeSmall.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-bdr-small');
});

switcherBdrSizeBig.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-bdr-big');
});

//Switchers Cores de borda:
switcherBdrBlue.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-bdr-blue');
});

switcherBdrRed.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-bdr-red');
});

switcherBdrYellow.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-bdr-yellow');
});

switcherBdrGreen.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-bdr-green');
});

switcherBdrOrange.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-bdr-orange');
});

switcherBdrPurple.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-bdr-purple');
});

switcherBdrBlack.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-bdr-black');
});

switcherBdrWhite.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-bdr-white');
});

//Switchers de Estilo de Borda:
switcherBdrSquare.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-square');
});

switcherBdrRound.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-round');
});

//Switchers de Sombra de Box:
switcherBoxShadow.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-box-shadow');
});

switcherBoxNormal.addEventListener( 'click', function() {
    document.body.classList.toggle('btn-box-normal');
});

