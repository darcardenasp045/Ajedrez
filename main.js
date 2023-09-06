document.addEventListener('DOMContentLoaded', function () {

    const whitePawn = document.getElementsByClassName('whitePawn');
    for (let i = 0; i < whitePawn.length; i++) {
        whitePawn[i].addEventListener('click', function () {
            console.log('Clic en un peón blanco');
        });
    }

    const whiteBishop = document.getElementsByClassName('whiteBishop')
    for(let i = 0; i < whiteBishop.length; i++){
        whiteBishop[i].addEventListener("click",function(){
            console.log("Click en Alfil BLanco")
        })
    }

    const whiteHorse = document.getElementsByClassName('whiteHorse')
    for(let i = 0; i < whiteHorse.length; i++ ){
        whiteHorse[i].addEventListener("click",function() {
            console.log("Click en caballo Blanco");
            })
    }

    const whiteTower = document.getElementsByClassName('whiteTower')
    for( let i=0 ; i< whiteTower.length ; i ++){
        whiteTower[i].addEventListener("click", function(){
            console.log ("Click en Torre Blanca");
        })
    }





});
