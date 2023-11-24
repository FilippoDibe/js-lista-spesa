// creazione array 
var listaSpesa = ["pane", "pasta", "acqua"];

// inizializzo e visualizzo la lista
function start(){
    var item = document.getElementById("lista-spesa");
    var i = 0;
    while (i < listaSpesa.length){
        var listaItem= document.createElement('li');
        listaItem.appendChild(document.createTextNode(listaSpesa[i]));
        item.appendChild(listaItem);
    }
   
}



