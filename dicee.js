let randomNumber1 = Math.random()
// console.log(randomNumber1)
randomNumber1 = randomNumber1 * 6
randomNumber1 = Math.floor(randomNumber1) 
console.log(randomNumber1)

let imgAttributes = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
let imgAttributes2 = ["images/dice3.png", "images/dice6.png", "images/dice1.png", "images/dice4.png", "images/dice5.png", "images/dice2.png"]
let randomDice = imgAttributes[randomNumber1]
let randomDice2 = imgAttributes2[randomNumber1]

let imgDocument = document.querySelector(".img1").setAttribute("src", randomDice);
console.log(imgDocument)

let imgDocument2 = document.querySelector(".img2").setAttribute("src", randomDice2)

let headText = document.querySelector("h1")

if(randomDice === randomDice2){
    headText.textContent = "Draw"
}else if(randomDice === "images/dice6.png"){
    headText.textContent = "Player 1 Wins"
}else if(randomDice2 === "images/dice6.png"){
    headText.textContent = "Player 2 Wins"
}else{
    headText.textContent = "Refresh Me"
}


 


























































































































