const formulario = document.querySelector("form");
const inome = document.querySelector(".nome");
const iemail = document.querySelector(".email");
const isenha = document.querySelector(".senha");

function cadastrar(nome, email, senha) {
    fetch("https://localhost:8080/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })
    .then(function (res) {
        if (res.ok) {
            console.log("Cadastro realizado com sucesso!");
        } else {
            console.error("Erro no cadastro:", res.status);
        }
    })
    .catch(function (error) {
        console.error("Erro na requisição:", error);
    });
}


function limpar() {
    inome.value = ""; // corrigido de itext para inome
    iemail.value = "";
    isenha.value = "";
}

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector("form");
    const inome = document.querySelector(".nome");
    const iemail = document.querySelector(".email");
    const isenha = document.querySelector(".senha");

    // Restante do seu código aqui
});





