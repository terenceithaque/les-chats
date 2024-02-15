

let bonnes_reponses = ["Animalia", "Carnivores", "Vénérés", "Diabolisés"]; // Liste des bonnes réponses




function validerQuizz(){ // Fonction pour valider le quizz
    let reponses_stockees = sessionStorage.getItem("reponses")
    let reponses_selectionnees = reponses_stockees.split(","); // Liste des réponses sélectionnées par le joueur

    console.log("Réponses :", reponses_selectionnees);
    console.log("Bonnes réponses :", bonnes_reponses);
    let score = 0;

    //console.log("Réponses dans stock.local :", reponses_selectionnees);

    

    
    for(let i=0; i < reponses_selectionnees.length; i++){
        if(reponses_selectionnees[i] === bonnes_reponses[i]){
            score++;
        }
    }

    if(score === bonnes_reponses.length){
        console.log("Score vaut ", bonnes_reponses.length)
        return true;
    } else{
        return false;
    }

}    
