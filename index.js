console.log("Hello Boolean!");


//faccio in modo che js accetti un argomento 


//prendo gli argomenti dal terminale
const args = process.argv.slice(2);

//stampo ''World'' se non c'è nulla
const name = args[0] || 'World';

console.log(`Hello ${name}`);