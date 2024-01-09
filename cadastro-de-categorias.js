

var imprime = document.getElementById("nomeCliente");
var bloco = document.getElementById("blocoDeNotas");
var contador = 1;
var categorias = [];
var categoriasContainer = document.getElementById("categoriasContainer"); 

function salvar() {
    if (imprime.value.trim() !== "") {
        
        if (categorias.includes(imprime.value.trim())) {
            alert("Cliente já cadastrado!");
            return; 
        }

        var novoParagrafo = document.createElement('p');
        var texto = document.createTextNode("Codigo: " + contador + " Nome: " + imprime.value);
        novoParagrafo.appendChild(texto);

        bloco.appendChild(novoParagrafo);
        categorias.push(imprime.value.trim()); 

        contador++;
        imprime.value = "";
    } else {
        alert("Digite!");
    }
}

function exibirCategorias() {
    
    var categoriasElement = document.createElement('p');
    categoriasElement.textContent = "Categorias cadastradas: " + categorias.join(', ');
    categoriasContainer.innerHTML = "";
    categoriasContainer.appendChild(categoriasElement);
}