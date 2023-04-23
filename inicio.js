//soma
function soma(){
    var num1 = document.getElementById("um").value;
    var num2 = document.getElementById("dois").value;
    var soma = Number(num1) + Number(num2);
    document.getElementById("resultado").innerHTML =  soma;
}
//Subtração
function subtracao(){
    var dim1 = document.getElementById("dim1").value;
    var dim2 = document.getElementById("dim2").value;
    var dimi = Number(dim1) - Number(dim2);
    document.getElementById("resultado1").innerHTML =  dimi;
}
//Divisão
function divisao(){
    var div1 = document.getElementById("div1").value;
    var div2 = document.getElementById("div2").value;
    var divi = Number(div1) / Number(div2);
    document.getElementById("resultado3").innerHTML = divi;
}
//Multiplição
function multiplicacao(){
    var mult1 = document.getElementById("mult1").value;
    var mult2 = document.getElementById("mult2").value;
    var multi = Number(mult1) * Number(mult2);
    document.getElementById("resultado4").innerHTML = multi;
}