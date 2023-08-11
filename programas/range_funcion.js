const range_funcion = () => {
    let inicio = document.querySelector(".inicio").value; 
    let fin = document.querySelector(".fin").value; 

    function range(inicio,fin){
        var ans = [];
        for (let i = inicio; i <= fin; i++){
            ans.push(i);
        }
        return ans;
    }

    const rango = range(inicio,fin);
    //console.log(rango);

    document.querySelector("#titulo").innerHTML = `Array`;
    document.querySelector("#resultado").innerHTML = `${rango}`;

}