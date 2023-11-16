const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const iemail = document.querySelector(".email.");
const ipassaword = document.querySelector(".passaword");
const inome = document.querySelector(".nome");
const iendereco = document.querySelector(".endereco");
const itelefone = document.querySelector(".telefone");
const idate = document.querySelector(".date");


function cadastrar() {
    fetch("http://localhost:8080/users",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
        },
            method: "Post",
            body: JSON.stringify({
                email: iemail.Value,
                password: ipassaword.Value,
                nome: inome.Value,
                endereco: iendereco.Value,
                telefone: itelefone.Value,
                date: idate.Value
        })
    })
    .then(function (res)  { console.log(res) })
    .catch(function (res) { console.log(res) })
}

function limpar() {
    inome.Value = "",
        iemail.Value = "",
        ipassaword.Value = "",
        inome.Value = "",
        iendereco.Value = "",
        itelefone.Value = "",
        idate.Value = ""
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrar();
    limpar();

}



)