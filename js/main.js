function botao(){
 document.getElementById("agradecido").innerHTML="<b>VAI RESPONDER NÃO, PUTA???</b>";
    console.log(document.getElementById("agradecido"));
}
function botao2(){
    window.open("https://www.youtube.com"); //outra janela.
  
    //window.location.href = "https://www.youtube.com"; Mesma janela
}
function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar seu mouse."
}
function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("A pagina Carregou.");
}
function funcaoChange(elemento){
    console.log(elemento.value)
} 
/*
function soma(n1,n2) {
    return n1 + n2;
}
function validarIdade(idade){
    if (idade >= 18){
        var validar
        validar = true
    } else {
        validar = false
            }
            return validar;
        }
var idade = 0;
var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));
console.log(idade);
*/

/*
alert(soma(10,10));
alert(setReplace("Vai Bode","Bode", "Bione"));
*/

/*
var nome = "Carlos Neto";
var n2 = 21;
var n1 = 10;
var frase = "O japão é bom!"
alert ( nome + " tem " + idade + " anos" );
alert (idade + idade2);
console.log(nome);
console.log(n1);
console.log(n2);
console.log(frase.replace("Japão","Brasil"));
alert("Bem Vinda:"nome.replace("Carlos Neto", "Pedro Henrique"))
console.log(n1%n2);
*/
/*
var v1 = ("S");
var v2 = ("L");
console.log(v1 + "-" +  v2 + " 1425-1519 ");
*/


/*var fruta = {nome:"maça", cor:"verrmelho"};
console.log(fruta);
alert(fruta.cor+"A cor da fruta mudou");*/