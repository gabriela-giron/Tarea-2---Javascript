const Conversion = () => {
    let gradosFahrenheit = document.querySelector(".grados").value; 

    var centigrados;
    var kelvin;

    centigrados = (gradosFahrenheit - 32)*(5/9);
    kelvin = (gradosFahrenheit - 32)*(5/9) + 273.15;

    document.querySelector("#titulo").innerHTML = `Resultado`;
    document.querySelector("#resultado1").innerHTML = `Grados Centigrados: ${centigrados}`;
    document.querySelector("#resultado2").innerHTML = `Grados Kelvin: ${kelvin}`;

    /*console.log('grados centigrados', centigrados);
    console.log('grados Kelvin', kelvin);*/

}
