
const myImageOptions = document.querySelector(".myPlay")

const machImageOptions = document.querySelector(".playMachine")  

const result = document.querySelector(".result")

const myScoreboard = document.querySelector(".me")
const machScoreboard = document.querySelector(".it")

let scoreboard = 0
let itScoreboard = 0




const options = (select) => {    
  
gameOn(select , machOptions()) 
  

if(select === 'rock' ) {  
myImageOptions.innerHTML = "&#x270A;"
}
else if  (select === 'paper') {  
myImageOptions.innerHTML = "&#x1F91A;"
}

 else if(select === 'scissors') {  
myImageOptions.innerHTML = "&#x270C;"
}

 else if(select === 'lizzards') {  
myImageOptions.innerHTML = "&#x1F44C;"
}

  else  {  
myImageOptions.innerHTML = "&#x1F596;"
}
 

myImageOptions.style.opacity = 1

machImageOptions.style.opacity = 1  
  
}







const machOptions = () => { 
  
  const machList = ['rock', 'paper', 'scissors', 'lizzards', 'spock']

  const max = Math.floor(4);
  const min = Math.ceil(0);
   
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;  
 

  if(randomNumber === 0) {  
machImageOptions.innerHTML = "&#x270A;"
}

  else if(randomNumber === 1) {  
machImageOptions.innerHTML = "&#x1F91A;"
}

  else if(randomNumber === 2) {  
machImageOptions.innerHTML = "&#x270C;"
}

   else if(randomNumber === 3) {  
machImageOptions.innerHTML = "&#x1F44C;"
}

 else {  
machImageOptions.innerHTML = "&#x1F596;"
}

  return machList[randomNumber]
  
 
}
  


const gameOn = (human, machine) => {



  
if (human === machine) {
  result.innerHTML = "Empate"
  
} 
else  if (human === 'rock' && machine === 'scissors'
           || human === 'rock' && machine === 'lizzards'
           || human === 'paper' && machine === 'rock'
           || human === 'paper' && machine === 'spock'
           || human === 'scissors' && machine === 'paper'
           || human === 'scissors' && machine === 'lizzards'
           || human === 'lizzards' && machine === 'spock'
           || human === 'lizzards' && machine === 'paper'
           || human === 'spock' && machine === 'scissors'
           || human === 'spock' && machine === 'rock'){
  result.innerHTML = "Vitória"
  scoreboard++
  myScoreboard.innerHTML= scoreboard
} else {
  result.innerHTML = "Derrota"
  itScoreboard++
machScoreboard.innerHTML = itScoreboard 

}
  



  
}




