//Les images back et front -----------------------------------------
const backImage = 'images/back.jpg';

const frontImages = [
    'images/carte1.jpg',
    'images/carte2.jpg',
    'images/carte3.jpg',
    'images/carte4.jpg',
    'images/carte5.jpg',
    'images/carte6.jpg',
    'images/carte7.jpg',
    'images/carte8.jpg',
    'images/carte9.jpg',
    'images/carte10.jpg',
    ];

//récupérer le nombre choisi par le joueur --------------------------
let cardsNumberChoice = 2;


// Génération de l'affichage aléatoire ------------------------------
function randomDisplay(cardsNumber){
    let cardsPlayed = cardsNumber/2

    let randomNumbers =[];

    cardsElt = document.getElementById('cards');
        //Génération d'un tableau de nombres aléatoires de 1 à cardsNumber
    for(let i = 0; i < cardsNumber ; i++){
        let number = Math.round((Math.random() * (cardsNumber-1)) + 1);
        while(randomNumbers.includes(number)){
            number = Math.round((Math.random() * (cardsNumber-1)) + 1);
        }
        randomNumbers.push(number);
    }
        //On divise par 2 
    for(let i = 0; i < cardsNumber; i++){
        if (randomNumbers[i] > (cardsNumber/2)){
            randomNumbers[i] = randomNumbers[i] - (cardsNumber/2);       
        }
        //affichage aléatoire des cartes
        cardsElt.innerHTML += `<div class="card" id="card">
            <div class="flip-card-inner" id="cardinner${i}">
                <div class="back">
                    <img src="${backImage}" class="border">
                </div>
                <div class="front">
                    <img src="images/carte${randomNumbers[i]}.jpg" class="border" id="card${i}">
                </div>
            </div>
        </div>`;}
        
}

randomDisplay(cardsNumberChoice);


// Fonction Flip -------------------------------------------------

let cardinnerElt = [];
for (let i=0; i<cardsNumberChoice; i++){
    cardinnerElt[i] = document.getElementById(`cardinner${i}`);
}

for (let i=0; i<cardsNumberChoice; i++){
    cardinnerElt[i].addEventListener('click', function flip(){ 
        cardinnerElt[i].style.transform = "rotateY(180deg)";
        
        let srcImg = document.getElementById('card'+i).src;
           srcImgTab.push(srcImg);
            console.log(srcImgTab);

            if(srcImgTab.length===2){
                // A partir de 2 cartes retournées, une alert apparaît
                 if(srcImgTab[0]===srcImgTab[1]){
                     alert('bravo !');
                     score += 1;}
                 else{
                     alert('bouh!');
                     cardinnerElt[i].style.transform = "rotateY(180deg)";

                 }
             }
                 // Plus de 2 cartes, une alerte averti que c'est 2 maxi !
             else if (srcImgTab.length>2){
                 alert('2 cartes maxi SVP !');
             }    

    
        });
    }
