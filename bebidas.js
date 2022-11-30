function bebidas(){ 
    var url = './bebidas.php';
  
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    pizzaJson =  JSON.parse(xhttp.responseText);
    
    console.log(pizzaJson)
 

}

let pizzaJson = []
bebidas();