export default function TimerSound (
    {minutesDisplay,
     secondsDisplay, 
     buttonFlorest,
     buttonFlorestBlue,
     buttonRain,
     buttonRainBlue,
     buttonCoffee,
     buttonCoffeeBlue,
     buttonFire,
     buttonFireBlue,}){

let minutes
let timerTimeOut

function countdown() {
    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0
        
        if ( isFinished ) {
            buttonPause.classList.add('hide')
            buttonPlay.classList.remove('hide')
            return
        }


    if( seconds <= 0 ) {
        seconds = 10

        minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    

        countdown()
    }, 1000)
}

function hold() {
    clearTimeout(timerTimeOut)
}

function resetTimer() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    if (seconds > 0 || minutes > 0) {
        secondsDisplay.textContent = String(0).padStart(2, "0")
        minutesDisplay.textContent = String(0).padEnd(2, "0")
    }
    hold()
}

function UpTimer() {
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
}

function DownTimer() {
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
    if (minutes <= 0) {
      minutesDisplay.textContent = String(minutes = 0).padStart(2, "0")
    }

}

function buttonFlorestOff() {
    buttonRainBlue.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonCoffeeBlue.classList.add('hide')
    buttonCoffee.classList.remove('hide')
    buttonFireBlue.classList.add('hide')
    buttonFire.classList.remove('hide')
}

function buttonRainOff() {
    buttonFlorestBlue.classList.add('hide')
    buttonFlorest.classList.remove('hide')
    buttonCoffeeBlue.classList.add('hide')
    buttonCoffee.classList.remove('hide')
    buttonFireBlue.classList.add('hide')
    buttonFire.classList.remove('hide')
}

function buttonCoffeeOff() {
    buttonFlorestBlue.classList.add('hide')
    buttonFlorest.classList.remove('hide')
    buttonRainBlue.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonFireBlue.classList.add('hide')
    buttonFire.classList.remove('hide')
}

function buttonFireOff() {
    buttonFlorestBlue.classList.add('hide')
    buttonFlorest.classList.remove('hide')
    buttonRainBlue.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonCoffeeBlue.classList.add('hide')
    buttonCoffee.classList.remove('hide')
}
 return{
    countdown,
    buttonCoffeeOff,
    buttonFireOff,
    buttonFlorestOff,
    buttonRainOff,
    DownTimer,
    UpTimer,
    resetTimer,
    hold
 }
}