// creazione array 
var listaSpesa = ["pane", "pasta", "acqua"];

// riferimento di stampa 
var stampaLista = document.getElementById('lista-spesa');
var i =0;

// ciclo while 
while (i < listaSpesa.length){
    var elementLI=document.createElement('li');
    elementLI.textContent= listaSpesa[i];

    // aggiungo alla lista 
    stampaLista.appendChild(elementLI);

    i++
}




