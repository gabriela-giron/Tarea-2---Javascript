const Jugador1 = () => {
    let opcion = document.getElementsByName('objeto');
    let objeto;
    let objeto_computadora;

    for(i = 0; i < opcion.length; i++){
        if(opcion[i].checked){
            var num_opcion = opcion[i].value;
            switch(parseInt(num_opcion)){
                case 0:
                        objeto = 'piedra';
                        document.querySelector(".resultado").innerHTML = `Inicia el juego!`;
                        document.querySelector(".info").innerHTML = `${objeto}`;
                    break;
                case 1:
                        objeto = 'papel';
                        document.querySelector(".resultado").innerHTML = `Inicia el juego!`;
                        document.querySelector(".info").innerHTML = `${objeto}`;
                    break;
                case 2:
                        objeto = 'tijera';
                        document.querySelector(".resultado").innerHTML = `Inicia el juego!`;
                        document.querySelector(".info").innerHTML = `${objeto}`;
                    break;
                default:
                        console.log(num_opcion);
                        objeto = 'x';
                        console.log(objeto);
                    break;
            }
        }
    }

    //FUNCION PARA DEVOLVER NUMEROS RANDOM ENTRE 0 Y 2
    var computadora = Math.floor(Math.random() * 3);
    
    switch(computadora){
        case 0:
            objeto_computadora = 'piedra';
            document.querySelector(".resultado1").innerHTML = `Computadora`;
            document.querySelector(".info2").innerHTML = `${objeto_computadora}`;
            break;
        case 1:
            objeto_computadora = 'papel';
            document.querySelector(".resultado1").innerHTML = `Computadora`;
            document.querySelector(".info2").innerHTML = `${objeto_computadora}`;
            break;
        case 2:
            objeto_computadora = 'tijera';
            document.querySelector(".resultado1").innerHTML = `Computadora`;
            document.querySelector(".info2").innerHTML = `${objeto_computadora}`;
            break;
        default:
            objeto_computadora = 'error';
            document.querySelector(".resultado1").innerHTML = `Computadora`;
            document.querySelector(".info2").innerHTML = `${objeto_computadora}`;
            break;
    }

    //piedra y tijera
    if(num_opcion == 0 && computadora == 2){
        document.querySelector(".ganador").innerHTML = `gana el usuario!`;
    //tijera y piedra
    }else if(num_opcion == 2 && computadora == 0){
        document.querySelector(".ganador").innerHTML = `rayos, gano la computadora! suerte a la proxima!`;
    //papel y piedra
    }else if(num_opcion == 1 && computadora == 0){
        document.querySelector(".ganador").innerHTML = `gana el usuario!`;
    //piedra y papel
    }else if(num_opcion == 0 && computadora == 1){
        document.querySelector(".ganador").innerHTML = `rayos, gano la computadora! suerte a la proxima!`;
    //tijeras y papel
    }else if(num_opcion == 2 && computadora == 1){
        document.querySelector(".ganador").innerHTML = `gana el usuario!`;
    //papel y tijeras
    }else if(num_opcion == 1 && computadora == 2){
        document.querySelector(".ganador").innerHTML = `rayos, gano la computadora! suerte a la proxima!`;
    //papel y tijeras
    }else if(num_opcion == 1 && computadora == 2){
        document.querySelector(".ganador").innerHTML = `rayos, gano la computadora! suerte a la proxima!`;
    //papel y papel
    }else if(num_opcion == 1 && computadora == 1){
        document.querySelector(".ganador").innerHTML = `empate! selecciona otra opcion!`;
    //piedra y piedra
    }else if(num_opcion == 0 && computadora == 0){
        document.querySelector(".ganador").innerHTML = `empate! selecciona otra opcion!`;
    //tijera y tijera
    }else if(num_opcion == 2 && computadora == 2){
        document.querySelector(".ganador").innerHTML = `empate! selecciona otra opcion!`;
    }
}
