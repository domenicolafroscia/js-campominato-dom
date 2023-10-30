### ESERCIZIO
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

**BONUS:**
1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
**2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

### SOLUZIONE 

**Dati**
1. Creare la struttura html e css
2. Creare un bottone con un eventlistener che al click fa apparire la cella

**Logica**
1. Con una funzione generare i numeri da 1 a 100
2. Con un'altra funzione creare l'ordine sparso dei numeri generati da 1 a 100
3. Sempre con una funzione generare le celle della griglia in modo da inserirci all'interno i numeri generati e collegarla alla griglia dell'html
4. Infine sempre con una funzione creare il click sulle caselle in modo che quando si preme su queste ultime il colore della casella diventi azzurro e stampi in console il numero della casella cliccato.
5. Invocare le funzioni


*********
### Seconda parte esercizio

1. [x]Generare 16 bombe con un array;
2. [x]Definire il numero massimo di tentativi consentiti;
3. [x]Creare un array di numeri "non bombe" cliccate dall'utente per avere il punteggio;
4. [x]Al click sulla cella della griglia:
- [x] SE il numero cliccato è nell'array di bombe
    - [x] la cella diventa rossa
    - [x] fine gioco, hai perso
- [x] ALTRIMENTI 
    - [x] la cella diventa azzurra
    - [x] SE questo numero non è stato cliccato precedentemente 
        - [x] aggiungere il numero all'array di numeri "non bombe" cliccati
    - [x] SE la lunghezza dell'array "non bombe" è uguale al numero massimo di tentativi
        - [x] fine gioco, hai vinto