
// var name = document.getElementById("name").value;
// let firstName = document.getElementById("first-name").value;
// let age = document.getElementById("age").value;
// let permitTime = document.getElementById("permit-time").value;
// let nbAccidents = document.getElementById("number-accidents").value;
// let timeAssu = document.getElementById("time-assu").value;
// let formulaire = document.querySelector("#formulaire");

// var nonJeuneConducteur = (age<25);
// var ouiJeuneConducteur = (dureePermis<2) ;
// var assuranceBonus = (dureeAssurance>1);
// var malus = nbreAccidents
// var tarif = "";


form.addEventListener("submit", function(e){
    e.preventDefault();
let name = document.getElementById("name").value;
let firstName = document.getElementById("first-name").value;
let age = document.getElementById("age").value;
let permitTime = document.getElementById("permit-time").value;
let nbAccidents = document.getElementById("number-accidents").value;
let timeAssu = document.getElementById("time-assu").value;


console.log(name);
console.log(firstName);
console.log("votre age "+ age + " ans");
console.log("votre temps de permis "+ permitTime + " ans");
console.log("vos nb d'accidents "+ nbAccidents);
console.log("votre temps chez nous " + timeAssu + " ans");

let young = age >= 25;
console.log(young);

let youngDriver = permitTime >= 2;
console.log(youngDriver);

let assuBonus = timeAssu >= 1;
console.log(assuBonus);

let points = 0;
console.log(points);

if(nbAccidents >=3){
    document.querySelector("h1#result").textContent = "Refus"
    console.log(tarif="Refus")
}
else{
    if(young === true){
        points++
    }
    if(youngDriver === true){
        points++
    }
    if(assuBonus === true){
        points++
    }
    points = points - nbAccidents
    switch(points)
{
    case (points=3):
        document.querySelector("h1#result").textContent = "Bleu"
        console.log(tarif="Bleu")
    break;
    case (points=2):
        document.querySelector("h1#result").textContent = "Vert"
        console.log(tarif="Vert")
    break;
    case (points=1):
        document.querySelector("h1#result").textContent = "orange"
        console.log(tarif="Orange")
    break;
    case (points=0):
        document.querySelector("h1#result").textContent = "rouge"
        console.log(tarif="rouge")
    break;
    default:
        document.querySelector("h1#result").textContent = "Refus"
        console.log(tarif="Refus")
}
}



// if(young === true){
//     ptsMalus++
//     console.log(ptsMalus)
// }
// if(youngDriver === true){
//     ptsMalus++
//     console.log(ptsMalus)
// }
// if(ptsMalus<=3 && assuBonus > 1){
//     ptsMalus--
//     console.log(ptsMalus)
// }


// switch(ptsMalus)
// {
//     case (ptsMalus=-1):
//         console.log(tarif="Bleu")
//     break;
//     case (ptsMalus=0):
//         console.log(tarif="Vert")
//     break;
//     case (ptsMalus=1):
//         console.log(tarif="Orange")
//     break;
//     case (ptsMalus=2):
//         console.log(tarif="Rouge")
//     break;
//     default:
//         console.log(tarif="Refus")
// }

});



// if(nonJeuneConducteur===true)
// {
//     malus = malus+1
// }
// if(ouiJeuneConducteur===true)
// {
//     malus = malus+1
// }
// if(malus<3 && assuranceBonus===true)
// {
//     malus = malus-1
// }
// switch(malus)
// {
//     case (malus=-1):
//         console.log(tarif="Bleu")
//     break;
//     case (malus=0):
//         console.log(tarif="Vert")
//     break;
//     case (malus=1):
//         console.log(tarif="Orange")
//     break;
//     case (malus=2):
//         console.log(tarif="Rouge")
//     break;
//     default:
//         console.log(tarif="Refus")
// }