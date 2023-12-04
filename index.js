let buttons = document.querySelectorAll(".btn")
let resetBtn = document.querySelector("#reset")
let choices = ["rock", "paper", "scissors"]
button = false
if (buttons.onlick){
    button = true
}
let random = Math.floor(Math.random()* 6)
buttons.forEach(buttons => {
    if (button == true){
        
    }
})
function getComputerChoice(random, choices){
    document.getElementById("computerText").innerHTML = choices[random]
}
function getPlayerChoice(){

}

