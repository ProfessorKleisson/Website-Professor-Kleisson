const scriptURL = 'https://script.google.com/macros/s/AKfycbzfd_2PZbeSUF43qNkb1LXR8CsjFDyIxGEZhUmDSPgrFwa9dt_NYbAlP7grKk2neUvleg/exec'
const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success');
//barra superior
let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

let classList = profileDropdownList.classList;

const toggle = () => classList.toggle("active");

window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) classList.remove("active");
});

//escuta do botão de enviar
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('aqui');
            success.innerHTML = "citação lançada";

            setTimeout(function () {
                success.innerHTML = "";
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

//escuta dos botões de enviar: autor/obra e tags
function adicionarOpcaoAutor() {
    var novaOpcao = prompt("Digite o nome da novo Autor:");

    if (novaOpcao) {
        var select = document.getElementById("Autor");
        var option = document.createElement("option");
        option.text = novaOpcao;
        option.value = novaOpcao.toLowerCase();
        select.appendChild(option);
    }
}

function adicionarOpcaoObra() {
    var novaOpcao = prompt("Digite o nome da novo Autor:");

    if (novaOpcao) {
        var select = document.getElementById("Obra");
        var option = document.createElement("option");
        option.text = novaOpcao;
        option.value = novaOpcao.toLowerCase();
        select.appendChild(option);
    }
}

function adicionarOpcaoTagEstruturante() {
    var novaOpcao = prompt("Digite a nova Tag Estruturante:");

    if (novaOpcao) {
        var select = document.getElementById("Tag Estruturante");
        var option = document.createElement("option");
        option.text = novaOpcao;
        option.value = novaOpcao.toLowerCase();
        select.appendChild(option);
    }
}

function adicionarOpcaoTagEspecífica() {
    var novaOpcao = prompt("Digite a nova Tag Específica:");

    if (novaOpcao) {
        var select = document.getElementById("Tag Específica");
        var option = document.createElement("option");
        option.text = novaOpcao;
        option.value = novaOpcao.toLowerCase();
        select.appendChild(option);
    }
}
