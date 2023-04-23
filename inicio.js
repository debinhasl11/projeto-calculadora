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
//Resto
function rest() {
    var rest1 = document.getElementById("rest1").value;
    var rest2 = document.getElementById("rest2").value;
    var rest = Number(rest1) % Number(rest2);
    document.getElementById("resultado5").innerHTML = rest;
}
//Porcentagem
function port(){
var port1 = document.getElementById("porcen1").value;
var port2 = document.getElementById("porcen2").value;
var porc  = 100;
var porcent = Number(port2) * Number(porc) / Number(port1);
document.getElementById("resultado6").innerHTML = porcent + " %";
}
//Raiz
function raiz() {
    var num = document.getElementById("raiz1").value;
    var result = Math.sqrt(Number(num));
    document.getElementById("resultado7").innerHTML = result;
  }
//Potenciação
function potent(){
    var poten1 = document.getElementById("potent1").value;
    var poten2 = document.getElementById("potent2").value;
    var poten = poten1 ** poten2;
    document.getElementById("resultado8").innerHTML = poten ;
}
//Calcular Idade
function idade(){
    var dataNascimento = document.getElementById("idade1").value;
    var anoNascimento = new Date(dataNascimento).getFullYear();
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNascimento;
    document.getElementById("resultado9").innerHTML = idade + " anos.";
}
//Calcular Ano de Nascimento
function ano(){
    var nasc = document.getElementById("ano1").value;
    var atual = new Date().getFullYear();
    var calc = atual - nasc;
    document.getElementById("resultado10").innerHTML = calc;
}
//Equaçao Simples
function equa(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var x = document.getElementById("x").value;
    var result = Number(a) * Number(x) + Number(b);
    document.getElementById("resultado11").innerHTML = result;
}
// Equação do 2º Grau
function equa2(){

    //obter valores dos coeficinetes
    var a = parseFloat(document.getElementById("a1").value);
    var b = parseFloat(document.getElementById("b1").value);
    var c = parseFloat(document.getElementById("c1").value);

    //calcular dela
    var delta = b ** 2 - 4 * a * c;

    //verificar o tipo de raiz
    if (delta < 0){
        document.getElementById("resultado12").innerHTML = 'A equação não possui raízes reais.'
    }else if (delta == 0) {
        var raiz = -b / (2 * a);
        document.getElementById("resultado12").innerHTML = 'A equação possui única raiz : ' + raiz;
    }else {
        var raiz1 = (- b + Math.sqrt(delta)) / (2 * a);
        var raiz2 = (- b + Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado12").innerHTML = 'A equação possui duas raizes : ' + raiz1 + ' e ' + raiz2 ;
    }
}
function tab(){
    var tab = parseInt(document.getElementById("tab").value);
    var tabela = document.getElementById('tabua');

    //limpar a tabela antes de add novos valores
    tabela.innerHTML = '';

    //cria cabeçalho da tabela
    var cabecalho = '<tr><th>Resultado:</th></tr>';

    //criar linhas da tabela
    var linhas = '';
    for (var i = 1; i <= 10; i++){
        var resultado = tab * i ;
        linhas += '<tr><td>' + tab + '  x  ' + i + '  =  ' + '</td><td>' + resultado + '</td></tr>'
    }

    //adiciona o cabeçalho e as linhas na tabela
    tabela.innerHTML = cabecalho + linhas;
}