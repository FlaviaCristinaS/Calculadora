function insert(mum){

    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

function deletar(){
    var resultado = document.getElementById('resultado').innerHTML;        // ver todos os valores que estão dentro de "resultdado" e apagar um
    document.getElementById('resultado');innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado); //
    }
    else{
        document.getElementById('resultado').innerHTML = ""; 
    }
}