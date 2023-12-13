alert("Bem Vindo!")


let anoAtual = prompt("Digite o ano atual"); 
function testeIdade(idade){
    if (idade <= 17 ) {
            return "ADOLESCENTE";
        }; 
    
       if (idade >= 18 && idade <= 29) {
            return "JOVEM";
        }; 
        if (idade >=30 && idade <=59) {
            return "ADULTO";
        }; 
        if ( idade >= 60) {
            return "IDOSO"
        };

}

document.write("<h1>>> COMEX <<</h1>");
document.write("<h2>:: Lista de Clientes</h2>");
document.write("<hr>");

document.write("<h3>Cliente: 1</h3>");

var lupita = (anoAtual - 2006);
document.write("<p>Nome: Lupita</p>");
document.write("<p>Mês de nascimento: Fevereiro</p>")
document.write("<p>Ano de Nascimento: 2006</p>");
document.write("Classificação da Idade: " + testeIdade(lupita));

document.write("<hr>");

document.write("<h3>Cliente: 2</h3>");

var claire = (anoAtual - 2000);
document.write("<p>Nome: Claire</p>");
document.write("<p>Mês de nascimento: Janeiro</p>");
document.write("<p>Ano de Nascimento: 2000</p>");
document.write("Classificação da Idade: " + testeIdade(claire));

document.write("<hr>");

var jade = (anoAtual - 1992);
document.write("<h3>Cliente: 3</h3>");
document.write("<p>Nome: Jade</p>");
document.write("<p>Mês de nascimento: Outubro</p>");
document.write("<p>Ano de Nascimento: 1992</p>");
document.write("Classificação da Idade: " + testeIdade(jade));

document.write("<hr>");

var luis = (anoAtual - 1950);
document.write("<h3>Cliente: 4</h3>");
document.write("<p>Nome: Luis</p>");
document.write("<p>Mês de nascimento: Novembro</p>");
document.write("<p>Ano de Nascimento: 1950</p>");
document.write("Classificação da Idade: " + testeIdade(luis));

document.write("<hr>");

document.write("<h4>.:: Alura LEVEL UP::.</h4>")
