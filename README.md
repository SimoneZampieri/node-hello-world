Esercizio 
===
Hello World!
## Consegna

1. Creiamo la prima applicazione con NodeJs e inizializziamola con `npm init`
2. Scriviamo un file `index.js` che dovrà stampare nel terminale “Hello World”. Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.
3. Impostiamo ora uno script “start” in `package.json` e facciamo in modo di lanciare il nostro script con `npm run start`
4. Impostiamo un nuovo script “watch” in `package.json` che possa essere lanciato con `npm run dev` e che aggiorni in tempo reale le modifiche ai nostri file. Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. Dovremmo vedere il terminale senza fermare e rilanciare il server.
5. Proviamo a passare da terminale una parola come argomento. da mostrare dopo “Hello”. Dovremo quindi stampare “Hello *parola_passata”*

## Procedimento e Logica

- Inizio impostando un `console.log('Hello World')`
- Eseguendo `node index.js`, Node leggerà il file e stamperà il console log
- Imposto poi `process.argv`, il quale è un array contenente i comandi scritti nel terminale. Nel caso in cui scrivessimo `node index.js Boolean`, argv conterrà: 

1. `process.argv[0]`: percorso di node.js
2. `process.argv[1]`: percorso del file js
3. `process.argv[2]`: l'argomento passato

- Con `slice(2)` si saltano i primi due argomenti, prendendo solo quelli utili, facendo diventare `args` un array contenente solo ''Boolean''
- Con `args[0] || 'World'`, impostiamo una condizione secondo la quale, se non viene passato nulla, allora verrà visualizzato Hello World
- Infine, con `console.log('Hello ${name})`, usiamo il template literal per combinare il testo con il valore della variabile.