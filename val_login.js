function validar_login(){

    var cookie = document.cookie.split('=');
    var access_key = cookie[1];


    if (access_key =='' || access_key == undefined){
        alert("Para poder comprar, por favor, faça login.")
        window.location.replace('./login.html')

    }
    else{
        cart = []
        console.log(cart)
        window.location.replace('./finalizarCompra.html')


}
}
function logout(){
    document.cookie = 'access_key='
    window.location.replace('./login.html')
}