// Array di partenza con elementi predefiniti
var listaSpesa = ["pane", "pasta", "acqua"];

// Riferimento all'elemento UL dove verrà stampata la lista
var stampaLista = document.getElementById('lista-spesa');

// Inizializzazione dell'indice per il ciclo while
var i = 0;

// Ciclo while per stampare gli elementi della lista al caricamento della pagina
while (i < listaSpesa.length) {
    // Creazione di un nuovo elemento LI
    var elementLI = document.createElement('li');
    elementLI.textContent = listaSpesa[i];
    stampaLista.appendChild(elementLI);
    i++;
}

// Funzione che viene chiamata al click del bottone "Aggiungi"
function aggiungiItem() {
    // Ottenimento del valore dell'input
    var newItem = document.getElementById('text').value;
    // Verifica se l'input non è vuoto prima di aggiungere l'elemento alla lista
    if (newItem.trim() !== '') {
        // Aggiunta del nuovo elemento all'array
        listaSpesa.push(newItem);
        // Chiamata alla funzione per aggiornare la lista
        refreshLista();
        // Pulizia del campo di input
        document.getElementById('text').value = '';
    } else {
        // Avviso se l'utente cerca di aggiungere un elemento vuoto
        alert('Inserisci un elemento valido');
    }
}

// Funzione per aggiornare la lista
function refreshLista() {
    var listaAggiornata = document.getElementById('lista-spesa');
    
    listaAggiornata.innerHTML = '';

    // Inizializzazione dell'indice per il ciclo while
    var k = 0;

    // Ciclo while per aggiornare la lista con gli elementi dell'array
    while (k < listaSpesa.length) {
        // Creazione di un nuovo elemento LI
        var listItem = document.createElement('li');
        listItem.textContent = listaSpesa[k];
        listaAggiornata.appendChild(listItem);

        k++;
    }
}










