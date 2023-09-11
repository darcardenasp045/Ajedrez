document.addEventListener('DOMContentLoaded', function () {


    function moverFichas(fichas, deltaX, deltaY) {
        for (let i = 0; i < fichas.length; i++) {
            fichas[i].addEventListener('click', function () {
                const element = fichas[i];
    
                // Obtiene la posición actual en X e Y del elemento
                const currentX = element.offsetLeft;
                const currentY = element.offsetTop;
    
                // Calcula las nuevas coordenadas sumando deltaX y deltaY
                const newX = currentX + deltaX;
                const newY = currentY + deltaY;
    
                // Mueve el elemento a las nuevas coordenadas
                element.style.left = newX + 'px';
                element.style.top = newY + 'px';
    
                console.log("Click en una ficha");
            });
        }
    }
    
    // Ejemplo de uso para mover peones blancos 1 píxel hacia la derecha y 90 píxeles hacia abajo
    const whitePawns = document.getElementsByClassName('whitePawn');
    moverFichas(whitePawns, 1, 90);
    
    // Ejemplo de uso para mover alfiles blancos 1 píxel hacia la derecha y 1 píxel hacia abajo
    const whiteBishops = document.getElementsByClassName('whiteBishop');
    moverFichas(whiteBishops, 1, 90);
    
    
    
    

    
    // for (let i = 0; i < whiteBishop.length; i++) {
    //     whiteBishop[i].addEventListener("click", function () {
            
    //     })
    // }

    // const whiteHorse = document.getElementsByClassName('whiteHorse')
    // for (let i = 0; i < whiteHorse.length; i++) {
    //     whiteHorse[i].addEventListener("click", function () {
    //         console.log("Click en caballo Blanco");
    //     })
    // }

    // const whiteTower = document.getElementsByClassName('whiteTower')
    // for (let i = 0; i < whiteTower.length; i++) {
    //     whiteTower[i].addEventListener("click", function () {
    //         console.log("Click en Torre Blanca");
    //     })
    // }





});
