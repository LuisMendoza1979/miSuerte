

        
// Definimos una función que se ejecutará cuando el DOM esté completamente cargado
        let numeros = [];
        //Actualización hasta el 05 de enero de 2026 sinuano día
        let numerosSorteados = [95,58,66,85,42,89,65,48,9,84,66,1,41,80,92,72,86,46,62,30,49,2,27,47,88,92,23,78,79,40,13,9,84,39,7,25,42,51,22,95,97,3,85,75,6,31,
            21,20,71,30,68,33,26,95,11,11,19,74,49,14,18,86,96,49,46,3,75,18,39,8,49,37,88,32,29,19,84,23,3,3,0,44,72,80,56,3,38,68,77,41,51,40,16,91,6,49,92,86,
            71,18,16,35,78,80,20,16,17,43,41,44,83,12,76,43,25,55,3,69,69,82,27,73,14,4,11,16,33,57,71,9,54,12,28,23,57,52,52,30,14,37,97,43,97,81,29,17,51,9,42,
            96,38,82,5,44,99,72,0,1,61,28,38,41,53,42,97,0,83,97,73,2,33,41,52,6,48,4,49,83,58,44,79,53,37,70,66,42,8,89,54,65,49,61,73,22,8,21,61,77,24,82,61,29,32,36,78,95,85,98,32,40,14,31,96,70,52,15,22,97,31,78,26,26,37,12,3,83,86,45,27,13,69,78,40,1,11,28,92,94,76,11,22,24,4,31,5,61,58,35,83,53,79,40,57,80,0,44,99,77,67];
        
            let sinuanoNoche = [65,82,75,31,98,87,97,28,94,92,21,69,69,77,57,1,17,47,5,39,82,12,13,22,14,12,83,56,0,78,3,13,32,20,50,29,21,73,70,72,38,16,44,33,56,82,48,7,49,
            84,10,22,1,74,31,92,23,8,5,3,52,61,99,25,6,44,93,1,15,58,64,16,70,49,83,92,50,4,55,92,57,44,58,46,28,91,11,3,55,53,69,92,90,49,69,
            86,64,61,96,18,95,84,67,73,38,13,88,42,99,18,9,0,38,75,64,20,37,83,4,59,75,87,13,25,14,68,77,62,19,0,78,60,1,54,6,33,55,78,27,27,35,28,43,
            84,4,29,43,86,98,15,46,96,7,18,52,5,92,61,69,34,92,90,52,19,8,43,87,30,28,85,8,38,43,52,75,3,57,98,75,10,62,63,10,72,20,37,99,82,67,53,1,47,27,85,17,92,47,82,0,59,3,73,63,58,56,58,88,76,63,15,0,36,87,98,71,47,78,47,34,32,82,11,86,89,52,0,69,8,91,86,73,19,70,15]
        // Creamos una nueva lista para almacenar los números que no están en numerosSorteados
        let nuevaLista = [];
        let numerosAjugarHoy = [];
        let numerosRepetidos = [];
        const contenidoOriginal = document.getElementById("lista");
        const textoOriginalLista = document.getElementById("lista").textContent;
        
        console.log(nuevaLista.length)
        console.log(nuevaLista);
        console.log(numerosAjugarHoy);
        console.log(numerosSorteados.length);
        
        //Creamos una lista del 0 al 99
        
        let numeroInicial =0;
        while (numeroInicial <=99){
            numeros.push(numeroInicial);
            numeroInicial++;
        }


        // Iteramos sobre la lista numeros
        for (i=0 ; i < numeros.length; i++) {

            let num = numeros[i];
            // Si el número no está en numerosSorteados, lo agregamos a nuevaLista
            if (!numerosSorteados.includes(num)) {
                nuevaLista.push(num);
            }
        }

        function guardarNumero(){
            let numeroAguardar = document.getElementById("numeroDigitado").value;
            let sorteoAguardar = document.getElementById("loterias");

            if(numeroAguardar !="" && sorteoAguardar.value =="Sinuano Día"){
                //console.log(numeroAguardar);
            numerosSorteados.push(numeroAguardar);
            //console.log(numerosRepetidos);
            alert("¡numero guardado correctamente!");
            limpiar();
            
            }else{
                alert("Ingrese un número");
            }
        
        }
        
        function limpiar(){
            let numeroAguardar = document.getElementById("numeroDigitado");
            numeroAguardar.value =""; 
        }

        function SugerirNumerosAJugar (){
            let contador =0;
            let numerosAmostrar = 5;

            while (contador < numerosAmostrar){
            let indiceNumero = Math.floor(Math.random()*nuevaLista.length);
            let numeroAjugar = nuevaLista[indiceNumero];
            if(!numerosAjugarHoy.includes(numeroAjugar)){
            numerosAjugarHoy.push(numeroAjugar);
            contador++;
            contenidoOriginal.innerHTML = `${numerosAjugarHoy}`;
    

        }
        }
        }

        function nuevoSorteo() {

            numerosAjugarHoy.splice(0);
            contenidoOriginal.innerHTML = textoOriginalLista;
            
            
        }

        




        
        
    
