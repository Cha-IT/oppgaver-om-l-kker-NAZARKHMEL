//Oppgave 1
let i = 1;
while (i <= 10) {
    document.getElementById("oppgave1.1").innerHTML += i + " ";
    i++;
}

for (let i = 1; i <= 10; i++) {
    document.getElementById("oppgave1.2").innerHTML += i + " ";
}

//Oppgave 2
const correctPassword = "passord123";
let attempts = 0;
let userInput = "";
let maxAttempts = 3;

while (userInput !== correctPassword && attempts < maxAttempts) {
    userInput = prompt("Skriv inn passord:");
    attempts++;
}

if (userInput === correctPassword) {
    alert("Riktig passord!");
} else {
    alert("Du har brukt opp alle forsøkene dine.");
}

//Oppgave 3
let choice = prompt("Vil du se oddetall eller partall fra 0 til 100? (skriv 'oddetall' eller 'partall')");

if (choice === "oddetall") {
    for (let i = 1; i <= 100; i += 2) {
        document.getElementById("oppgave3").innerHTML += i + " ";
    }
} else if (choice === "partall") {
    for (let i = 0; i <= 100; i += 2) {
        document.getElementById("oppgave3").innerHTML += i + " ";
    }
} else {
    console.log("Ugyldig valg.");
}

//Oppgave 4
let tbody = document.getElementById("oppgave4");

for (let i = 0; i <= 10; i++) {
    let row = "<tr>";
    for (let j = 0; j <= 10; j++) {
        if (i === 0 && j === 0) {
            row += "<td></td>";
        } else if (i === 0) {
            row += `<td><strong>${j}</strong></td>`;
        } else if (j === 0) {
            row += `<td><strong>${i}</strong></td>`;
        } else {
            row += `<td>${i * j}</td>`;
        }
    }
    row += "</tr>";
    tbody.innerHTML += row;
}
