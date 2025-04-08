
        let numeros = [];
        let numerosSorteados = [95,58,66,85,42,89,65,48,9,84,66,1,41,80,92,72,86,46,62,30,49,2,27,47,88,92,23,78,79,40,13,9,84,39,7,25,42,51,22,95,97,3,85,75,6,31,21,20,71,30,68,33,26,95,11,11,19,74,49,14,18,86,96,49,46,3,75,18,39,8,49,37,88,32,29,19,84,23,3,3,0,44,72,80,56,3,38,68,77,41,51,40];
        let sinuanoNoche = [65,82,75,31,98,87,97,28,94,92,21,69,69,77,57,1,17,47,5,39,82,12,13,22,14,12,83,56,0,78,3,13,32,20,50,29,21,73,70,72,38,16,44,33,56,82,48,7,49,84,10,22,1,74,31,92,23,8,5,3,52,61,99,25,6,44,93,1,15,58];
        // Creamos una nueva lista para almacenar los números que no están en numerosSorteados
        let nuevaLista = [];
        let numerosAjugarHoy = [];
        let numerosRepetidos = [];
        
        console.log(nuevaLista);
        //Creamos una lista del 0 al 99
        console.log(numerosAjugarHoy);
        console.log(numerosSorteados.length);

        let numeroInicial =0;
        while (numeroInicial <=99){
            numeros.push(numeroInicial);
            numeroInicial++;
        }


        // Iteramos sobre la lista numeros
        for (i=0 ; i <numeros.length; i++) {

            let num = numeros[i];
            // Si el número no está en numerosSorteados, lo agregamos a nuevaLista
            if (!numerosSorteados.includes(num)) {
                nuevaLista.push(num);
            }
        }

    function guardarNumero(){
        let numeroAguardar = document.getElementById("numeroDigitado").value;

        if(numeroAguardar ==""){
        alert("Ingrese un número");
        }else{
        //console.log(numeroAguardar);
        numerosSorteados.push(numeroAguardar);
        //console.log(numerosRepetidos);
        alert("¡numero guardado correctamente!");
        let listaHtml = document.querySelector("li");
        listaHtml.innerHTML = `${numerosSorteados}`;

        limpiar();
        }
        
        }
        
        function limpiar(){
            let numeroAguardar = document.getElementById("numeroDigitado");
            numeroAguardar.value =""; 
        }

    
    

    

        function SugerirNumerosAJugar (){
            let contador =0;

            while (contador <10){
            let indiceNumero = Math.floor(Math.random()*nuevaLista.length);
            let numeroAjugar = nuevaLista[indiceNumero];
            if(!numerosAjugarHoy.includes(numeroAjugar)){
            numerosAjugarHoy.push(numeroAjugar);
            contador++;
            let listaHtml = document.querySelector("li");
            listaHtml.innerHTML = `${numerosAjugarHoy}`;
    

        }
    }
}

function nuevoSorteo(){
    numerosAjugarHoy.splice(0);
    let listaHtml = document.querySelector("li");
    listaHtml.innerHTML = `${numerosAjugarHoy}`;
    console.log(numerosAjugarHoy);
}

    





        
        
    
