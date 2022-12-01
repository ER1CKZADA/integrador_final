function cadastro(){
    var n = document.getElementById('cad-nome').value;
    var e = document.getElementById('cad-email').value;
    var c = document.getElementById('cad-cpf').value;
    var s = document.getElementById('cad-senha').value;
    var na = document.getElementById('cad-nascimento').value;

    var url = './cadastro.php';

    var objetoJson = {
        "nome": n,
        "email": e,
        "cpf": c,
        "senha": s,
        "nascimento": na
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, false);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(objetoJson));
    console.log(xhttp.responseText);

    var access_key = xhttp.responseText;

    if (access_key == ''){
        alert("Erro ao criar conta, por favor, tente novamente.");
    }
    else{
        document.cookie = 'access_key'+access_key;
        window.location.replace("./login.html");
    }
}

const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span-control");
const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const cpfregex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/



form.addEventListener('submit', (event) => {  
    event.preventDefault ();  
    var soma = (validaNome() + validaEmail() + validaCPF() + validaData() + validaSenha() + dataVazia())
    
    console.log(soma)
    console.log(validaData())
    if (soma == 0){
        cadastro ()
    }

});

function geraErro(index){
    campos[index].style.border = "1px solid #e63636"
    span[index].style.display = "block"
}

function removeErro(index){
    campos[index].style.border = ""
    span[index].style.display = "none"
}

function validaEmail () {
    if(!emailregex.test(campos[0].value))
    {
        geraErro(0);
        return (1)
    }
    else
    {
        removeErro(0);
        return (0)
    }
}

function validaNome () {
    if (campos[1].value.length < 3)
    {
        geraErro(1);
        return (1)
    }
    else {
        removeErro(1)
        return (0)
    }

}

function validaCPF() {
    if(!cpfregex.test(campos[2].value))
    {
        geraErro(2);
        return (1)
    }
    else
    {
        removeErro(2);
        return (0)
    }
}


function buscaIdade() {
    console.log("busca idade = " + campos[3].value)
    const hoje = new Date();
    const dataAniver = new Date(campos[3].value);
    let idade = hoje.getFullYear() - dataAniver.getFullYear();
    const m = hoje.getMonth() - dataAniver.getMonth();
    
    if (m < 0 || (m === 0 && hoje.getDate() < dataAniver.getDate())) {
        idade--;
    }
    
    return idade;
}

function validaData () {
    if (buscaIdade() < 18)
    {
        geraErro(3);
        return (1)
    }
    else {
        removeErro(3)
        return (0)
    }

}

function validaSenha () {
    if (campos[4].value.length < 8)
    {
        geraErro(4);
        return (1)
    }
    else {
        removeErro(4)
        return (0)
    }

}

function dataVazia() {
    if (campos[3].value.length < 1)
    {
        geraErro(3);
        return (1)
    }
    else {
        removeErro(3)
        return (0)
    }
}
