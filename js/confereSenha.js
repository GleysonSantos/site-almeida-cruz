function check_senha() {
    if (document.getElementById('inputSenha').value ==
        document.getElementById('inputSenhaConfirma').value) {
        document.getElementById("inputSenha").style.bordercolor = "green";
        document.getElementById('message').innerHTML = ""
    } else {
        document.getElementById("inputSenha").style.bordercolor = "red";
        document.getElementById('message').innerHTML = "As senhas estão diferentes"
    }
}