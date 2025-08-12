const randomnumber = Math.floor((Math.random()*100 +1));
const input = document.querySelector('#guessfield').value;
const submit = document.querySelector('#submitguess');
const previousguess = document.querySelector('#pguess');
const remainingguess = document.querySelector('#rguess');
const loworhigh = document.querySelector('#loworhigh');
const startover = document.querySelector('.resultpage');

const p = document.createElement('p');
let prevguess =[]
let numguess =1;

let playgame = true;
if(playgame){
    submit.addEventListener('click',(e)=>{
        validateguess(input);
    })
}

function validateguess(guess){
    if(isNAN(guess) ){
        alert(`Please enter a valid number`)
    }
    else if(guess > 100){
        alert(`Please enter a number between 0 and 100 `);
    }
     else if(guess < 0){
        alert(`Please enter a number between 0 and 100`);
    }
    else{
       if (numguess ==11){
        displayguess(guess);
        displaymessage(`Game Over`)
        endgame()
       }
       else{
        checkguess(guess);
       }
    }

}
function checkguess(guess){
    if(guess === randomnumber){
        displaymessage(`You guessed right ${guess} ==${randomnumber}`);
        endgame()
    }
    else if (guess < randomnumber){
        displaymessage(`Number is low`);
    }
    else if (guess > randomnumber){
        displaymessage(`number is high`);
    }

}
function cleanupguess(guess){
    input.value=''
    previousguess.innerHTML += `${guess}, `
    numguess++;
    remainingguess.innerHTML =`${11-numguess}`

}
function displaymessage(message){
   loworhigh.innerHTML=`<h2>${message}</h2>`;

}
function endgame(){
  input ='' 
  input.setAttribute('disabled','');  //key value pair
    p.classList.add('button');
    p.innerHTML=`<h2 id ='newgame'> Start new game</h2>`;
    startover.appendChild(p)
    playgame=false
    newgame();

}
function newgame(){

}
