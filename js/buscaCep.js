$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#inputEndereco").val("");
        $("#inputCidade").val("");
        $("#inputEstado").val("");
        $("#inputBairro").val("");
    }

    //Quando o campo cep perde o foco.
    $("#inputCep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#inputEndereco").val("...");
                $("#inputCidade").val("...");
                $("#inputEstado").val("...");
                $("#inputBairro").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#inputEndereco").val(dados.logradouro);
                        $("#inputBairro").val(dados.bairro);
                        $("#inputCidade").val(dados.localidade);
                        $("#inputEstado").val(dados.uf);
                        document.getElementById("inputNumero").focus();
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});

$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#inputEnderecoPortador").val("");
        $("#inputCidadePortador").val("");
        $("#inputEstadoPortador").val("");
        $("#inputBairroPortador").val("");
    }

    //Quando o campo cep perde o foco.
    $("#inputCepPortador").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#inputEnderecoPortador").val("...");
                $("#inputCidadePortador").val("...");
                $("#inputEstadoPortador").val("...");
                $("#inputBairroPortador").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#inputEnderecoPortador").val(dados.logradouro);
                        $("#inputBairroPortador").val(dados.bairro);
                        $("#inputCidadePortador").val(dados.localidade);
                        $("#inputEstadoPortador").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});