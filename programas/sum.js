const range_funcion = () => {
    let inicio = document.querySelector(".inicio").value; 
    let fin = document.querySelector(".fin").value; 

    function range(inicio,fin){
        var ans = [];
        for (let i = inicio; i <= fin; i++){
            ans.push(parseInt(i));
        }
        return ans;
    }

    const rango = range(inicio,fin);
    const suma2 = rango.reduce((inicio,fin) => inicio + fin, 0);
    //console.log(rango);

    document.querySelector("#titulo").innerHTML = `Array`;
    document.querySelector("#resultado").innerHTML = `${rango}`;
    document.querySelector("#suma").innerHTML = `Suma total`;
    document.querySelector("#resultado1").innerHTML = `${suma2}`;

}