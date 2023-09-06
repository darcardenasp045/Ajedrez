document.addEventListener('DOMContentLoaded', function () {

    const whitePawns = document.getElementsByClassName('whitePawn');

    for (let i = 0; i < whitePawns.length; i++) {
        whitePawns[i].addEventListener('click', function () {
            const element = whitePawns[i];
    
            // Obtiene la posición actual en X e Y del elemento
            const currentX = element.offsetLeft;
            const currentY = element.offsetTop;
    
            // Calcula las nuevas coordenadas sumando 10px
            const newX = currentX + 1;
            const newY = currentY + 90;
    
            // Mueve el elemento a las nuevas coordenadas
            element.style.left = newX + 'px';
            element.style.top = newY + 'px';
    
            console.log("Click en Peón Blanco");
        });
    }
    
    
    

    const whiteBishop = document.getElementsByClassName('whiteBishop')
    for (let i = 0; i < whiteBishop.length; i++) {
        whiteBishop[i].addEventListener("click", function () {
            
        })
    }

    const whiteHorse = document.getElementsByClassName('whiteHorse')
    for (let i = 0; i < whiteHorse.length; i++) {
        whiteHorse[i].addEventListener("click", function () {
            console.log("Click en caballo Blanco");
        })
    }

    const whiteTower = document.getElementsByClassName('whiteTower')
    for (let i = 0; i < whiteTower.length; i++) {
        whiteTower[i].addEventListener("click", function () {
            console.log("Click en Torre Blanca");
        })
    }





});
