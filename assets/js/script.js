console.log("script charge");
// let date =  new Date();
// console.log(date);
// let day = date.getDate();
// console.log(day);
// let month = date.getMonth()+1;
// console.log(month); 
// 

document.getElementById('anniversaire').addEventListener('submit', function (e) {
    e.preventDefault();
    const maintenant = new Date();
    console.log(maintenant);
     const jour = parseInt(document.getElementById('saisie_jour').value);
     const mois = parseInt(document.getElementById('saisie_mois').value) - 1;
     const anniversaire = new Date(maintenant.getFullYear(), mois, jour);
     

     if (maintenant > anniversaire) {
        anniversaire.setFullYear(anniversaire.getFullYear() + 1);
        console.log(anniversaire);
     }

     const unJour = 1000 * 60 * 60 * 24;
     const diff = Math.ceil((anniversaire.getTime() - maintenant.getTime()) / unJour);
      console.log(diff);
      document.getElementById('resultat').textContent = `Il reste ${diff} jours jusqu'à votre anniversaire !`;
 })