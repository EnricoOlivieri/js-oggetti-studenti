
//creazione proprietà studente e stampo
var studente = {
  'nome': 'Enrico',
  'cognome': 'Olivieri',
  'etá': 25
}

for(var key in studente){
  console.log("La proprietá "+key+" ha come valore" +studente[key]);
}

//creazione array di studenti e stampo nome e cognome
var studenti = {
  'nome': 'Enrico',
  'cognome': 'Olivieri',
}

var studenti = {
  'nome': 'Luca',
  'cognome': 'Rossi',
}

var studenti = {
  'nome': 'Marco',
  'cognome': 'Coda',
}

for(var i = 0; 0 < studenti.length; i++){
  console.log('Il nome dello studente è: '+studenti[i].nome);
  console.log('Il nome dello studente è: '+studenti[i].cognome);
}

//inserimento nuovo oggetto studente e inserimento nome, cognome e età
var nuovoStudente = {}

nuovoStudente.nome = prompt('Nome studente :');
nuovoStudente.cognome = prompt('Cognome studente :');
nuovoStudente.età = parseInt(prompt('Età studente :'));
