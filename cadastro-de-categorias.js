

        var imprime = document.getElementById("nomeCliente");
        var bloco = document.getElementById("blocoDeNotas");
        var contador = 1;

        function salvar() {

            if (imprime.value.trim() !== "") {
                var novoParagrafo = document.createElement('p');
                var texto = document.createTextNode("Codigo: " + contador + " Nome: " + imprime.value);
                novoParagrafo.appendChild(texto);

                bloco.appendChild(novoParagrafo);

                contador++;

                imprime.value = "";
            } else {
                alert("Digite!");
            }
        }