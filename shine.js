function afficheDesc(){
    let text=document.getElementById("Description");
    let text1=document.getElementById("Ingrédients");
    if(text.style.display == "none" ||text.style.display == " "){
         text.style.display = "block"; // Change son style pour l'afficher
         text1.style.display = "none";

    } else  {
        text.style.display = "none"
    }
}
function affichIng(){
    let text1=document.getElementById("Ingrédients");
    let text2=document.getElementById("Description");
    if(text1.style.display == "none" ||text1.style.display == " "){
         text1.style.display = "block"; // Change son style pour l'afficher
          text2.style.display = "none"
    } else  {
        text1.style.display = "none"
    }
}
function afficheDesc2(){
    let text=document.getElementById("Description2");
    let text1=document.getElementById("Ingrédients2");
    if(text.style.display == "none" ||text.style.display == " "){
         text.style.display = "block"; // Change son style pour l'afficher
         text1.style.display = "none";

    } else  {
        text.style.display = "none"
    }
}
function affichIng2(){
    let text1=document.getElementById("Ingrédients2");
    let text2=document.getElementById("Description2");
    if(text1.style.display == "none" ||text1.style.display == " "){
         text1.style.display = "block"; // Change son style pour l'afficher
          text2.style.display = "none"
    } else  {
        text1.style.display = "none"
    }
}function afficheDesc3(){
    let text=document.getElementById("Description3");
    let text1=document.getElementById("Ingrédients3");
    if(text.style.display == "none" ||text.style.display == " "){
         text.style.display = "block"; // Change son style pour l'afficher
         text1.style.display = "none";

    } else  {
        text.style.display = "none"
    }
}
function affichIng3(){
    let text1=document.getElementById("Ingrédients3");
    let text2=document.getElementById("Description3");
    if(text1.style.display == "none" ||text1.style.display == " "){
         text1.style.display = "block"; // Change son style pour l'afficher
          text2.style.display = "none"
    } else  {
        text1.style.display = "none"
    }
}
function acheter(idSection){
    
    // Fonction qui permet de faire défiler la page vers une section spécifique
    let section = document.getElementById(idSection);
    section.scrollIntoView({ behavior: 'smooth' }); // Défilement fluide   
}
let boutonSelectionne = null;
 function selectionnerBouton(bouton) {
      boutonSelectionne = bouton;
    }
//verification les input
function verifierInputV(){

    let nom=document.getElementById("fname").value;
    let prenom=document.getElementById("prenom").value;
    let email=document.getElementById("Email").value;
    let adresse=document.getElementById("Adresse").value;
    let tel=document.getElementById("telephone").value;
    let message=document.getElementById("message").value;

   
}













function commander(){

// Vérification si un bouton a été sélectionné
if (boutonSelectionne === null) {
    alert("Veuillez sélectionner un produit avant de commander !");
    return; /* document.querySelector("form").reset();*/

  }
  // Récupérer les informations du formulaire
  let nom = document.getElementById("fname").value;
  let prenom = document.getElementById("prenom").value;
  let email = document.getElementById("Email").value;
  let adresse = document.getElementById("Adresse").value;
  let telephone = document.getElementById("telephone").value;
 
if(nom.trim()===""||prenom.trim()===""||email.trim()===""||adresse.trim()===""||telephone.trim()===""){
    tabb.style.display = "none";
}
        // Afficher le tableau après ajout
        let tabb = document.getElementById("tab");
        tabb.style.display = "block";

        // Ajouter une nouvelle ligne au tableau
        let tbody = tabb.querySelector("tbody");
        let newRow = tbody.insertRow();

        // Insérer les cellules avec les valeurs du formulaire
        newRow.insertCell(0).textContent = nom;
        newRow.insertCell(1).textContent = prenom;
        newRow.insertCell(2).textContent = email;
        newRow.insertCell(3).textContent = adresse;
        newRow.insertCell(4).textContent = telephone;
    
  // Calcul des totaux en fonction du bouton sélectionné
  let total, qte;
  
  if (boutonSelectionne === 1) {
    let prix11 = parseFloat(document.getElementById("prix1").textContent);
    qte = parseInt(document.getElementById("qt1").value);
    total = prix11 * qte;
    
  } else if (boutonSelectionne === 2) {
    let prix2 = parseFloat(document.getElementById("prix2").textContent);
    qte = parseInt(document.getElementById("qt1").value);
    total = prix2 * qte;

  } else if (boutonSelectionne === 3) {
    let prix3 = parseFloat(document.getElementById("prix3").textContent);
    qte = parseInt(document.getElementById("qt1").value);
    total = prix3 * qte;
  }

  // Insérer la quantité et le total dans les cellules
  newRow.insertCell(5).textContent = qte;
  newRow.insertCell(6).textContent = total.toFixed(2) + " DH";

  // Réinitialiser le formulaire après la commande
 document.querySelector("form").reset();
  boutonSelectionne = null;
}
function envoyer(){

document.getElementById('env').addEventListener('click', function(event) {
    // Récupérer les valeurs des champs
    let nom = document.querySelector('.nom').value.trim();
    let email = document.querySelector('.email').value.trim();
    let sujet = document.querySelector('.sujet').value.trim();
    let message = document.querySelector('.msg').value.trim();

    // Vérifier si les champs sont vides
    if (nom === "" || email === "" || sujet === "" || message === "") {
        alert("Veuillez remplir tous les champs obligatoires.");
        event.preventDefault(); // Empêche l'envoi du formulaire
    }else{
        document.querySelector('.nom').value = "";
        document.querySelector('.email').value = "";
        document.querySelector('.sujet').value = "";
        document.querySelector('.msg').value = "";
        window.location.href = "shineBeauty.html";
    }
});
}document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');
  
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active'); // Toggles the visibility of the menu
    });
  });