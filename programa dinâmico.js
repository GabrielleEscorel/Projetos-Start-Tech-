var visaoDoProduto = "1. Visão do produto";
        var entidadesImportantes = "2. Entidades Importantes";
        var requisitosNaoFuncionais = "3. Requisitos não funcionais";
        var requisitosFuncionais = "4. Requisitos funcionais";

        alert("*** Bem vindo ao COMEX ***");

        function cabecalho(){
            document.write("<h1>>> COMEX <<</h1>");
            document.write("<hr>");
        }
     
        function conteudo(){
            document.write("<h3>" + visaoDoProduto + "</h3>");
            document.write("<p>O projeto <strong>Comex</strong> é um sistemade e-commercemarket place. Seu objetivo é permitir que a sua base de clientes tenhaacesso a vários vendedores e, assim, consolidar-se como o shopping eletrônico mais popular da internet.</p>");
        
            document.write("<h3>" + entidadesImportantes + "</h3>");
            document.write("<ul>");
            document.write("<li><strong>Produto</strong></li>");
            document.write("<li><strong>Categoria</strong></li>");
            document.write("<li><strong>Cliente</strong></li>");
            document.write("<li><strong>Pedido</strong></li>");
            document.write("<li><strong>ItemDePedido</strong></li>");
            document.write("</ul>");
    
            document.write("<h3>" + requisitosNaoFuncionais + "</h3>");
            document.write("<p><li><strong>Manutenibilidade</strong></li></p>");
    
            document.write("<h3>" + requisitosFuncionais + "</h3>");
            document.write("<p>Os requisitos funcionais são classificados em três categorias do Comex:</p>");
            document.write("<p><strong>Essencial:</strong> implementação obrigatória para o sistema atingir seu objetivo principal;</p>");
            document.write("<p><strong>Importante:</strong> acrescentam muito valor ao negócio;</p>");
            document.write("<p><strong>Desejável:</strong> incrementam usabilidade e funcionalidades.</p>");
            document.write("<hr>");
        }
        
        function rodape(){
            document.write("<h3>.:: Alura LEVEL UP ::.</h3>");
        }

        cabecalho();
        conteudo();
        rodape();