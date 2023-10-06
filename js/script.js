

let nome = prompt("Quale è il tuo nome?");
let cognome = prompt("Quale è il tuo cognome?");
let colorePref = prompt("Quale è il tuo colore preferito?");
const numerofisso = 21

let password = `

    la tua nuova password è ${nome}${cognome}${colorePref}${numerofisso}
`
console.log(nome);
document.getElementById('testo').innerHTML = password;

