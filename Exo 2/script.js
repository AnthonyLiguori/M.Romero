// let n = prompt("Saisie un nombre");
// let boite = Math.floor(n / 6);

// let oeuf = n % 6;

// console.log(boite + "boite");
// console.log(oeuf + "oeuf");

// let namee = prompt("Votre nom ")
// let msg = "Bonjour " + namee
// console.log(msg)

// let message = prompt("Votre Message ")
// let isQuestion = message.endsWith("?")
// console.log(isQuestion)
// let type = typeof isQuestion
// console.log(type)

// let age = prompt("Votre Age ");

// if (age > 17) {
//   console.log("Majeur");
// } else {
//   console.log("Mineur");
// }

// let date = prompt("Quans souhaitez-vous venir");

// if (
//     date == "Samedi" || date == "Dimanche")
//     {
//     console.log("Ferme")
// }else{
//     console.log("Ouvert")
// }

// Récupération des variables avec des prompts
// var a = Number(prompt("Entrez la valeur de a :"));
// var b = Number(prompt("Entrez la valeur de b :"));
// var c = Number(prompt("Entrez la valeur de c :"));

// // Vérification des égalités
// if (a == b && b == c) {
//   console.log("Les trois variables sont égales");
// } else if (a == b || b == c || a == c) {
//   console.log("Deux variables sont égales");
// } else {
//   console.log("Aucune variable n'est égale");
// }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }

const btn = document.querySelector("input");

btn.addEventListener("click", function () {
  const img = document.querySelector("img");

  img.style.display = "none";
});

function verifier() {
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;
  if (login == "Web" && password == "1234") {
    alert("Connexion réussie !");
  } else {
    alert("Nom d'utilisateur ou mot de passe incorrect.");
  }
}
