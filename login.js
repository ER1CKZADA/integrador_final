function login(){

    var e = document.getElementById('cad-email').value;
    var s = document.getElementById('cad-senha').value;
  

    var url = './login.php';

    var objetoJson = {
        "email": e,
        "senha": s

    }

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, false);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(objetoJson));
    console.log(xhttp.responseText);
    
    var access_key = xhttp.responseText;

    if (access_key == ''){
        geraErro(2);
    }
    else{
        document.cookie = 'access_key='+access_key;
        window.location.replace("./index.html");
    }
}

const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span-control");
const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const cpfregex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/



form.addEventListener('submit', (event) => {  
    event.preventDefault ();  
    var soma = (validaEmail() + validaSenha())
    
    if (soma == 0){
        login()
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

function validaSenha () {
    if (campos[1].value.length < 8)
    {
        geraErro(1);
        return (1)
    }
    else {
        removeErro(1)
        return (0)
    }

}