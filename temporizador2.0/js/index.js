import Sound from"./sounds.js"
import TimerSound from "./timerSound.js"
import{
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonFlorest,
    buttonFlorestBlue,
    buttonRain,
    buttonRainBlue,
    buttonCoffee,
    buttonCoffeeBlue,
    buttonFire,
    buttonFireBlue,
    buttonUp,
    buttonDown,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

const timer = TimerSound({
    minutesDisplay,
    secondsDisplay,
    buttonFlorest,
    buttonFlorestBlue,
    buttonRain,
    buttonRainBlue,
    buttonCoffee,
    buttonCoffeeBlue,
    buttonFire,
    buttonFireBlue,
})

const sound = Sound()


buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    timer.countdown()
})


buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    timer.hold()
})

buttonStop.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    timer.resetTimer()

})

buttonUp.addEventListener('click', function() {
    timer.UpTimer()
})

buttonDown.addEventListener('click', function() {
    timer.DownTimer()
})

buttonFlorest.addEventListener('click', function() {
    buttonFlorest.classList.add('hide')
    buttonFlorestBlue.classList.remove('hide')
    timer.buttonFlorestOff()
    sound.pressFlorest()
    sound.pressRainBlue()
    sound.pressCoffeeBlue()
    sound.pressFireBlue()
})

buttonFlorestBlue.addEventListener('click', function() {
    buttonFlorestBlue.classList.add('hide')
    buttonFlorest.classList.remove('hide')
    sound.pressFlorestBlue()
})

buttonRain.addEventListener('click', function() {
    buttonRain.classList.add('hide')
    buttonRainBlue.classList.remove('hide')
    timer.buttonRainOff()
    sound.pressRain()
    sound.pressFlorestBlue()
    sound.pressCoffeeBlue()
    sound.pressFireBlue()
})

buttonRainBlue.addEventListener('click', function() {
    buttonRainBlue.classList.add('hide')
    buttonRain.classList.remove('hide')
    sound.pressRainBlue()
})

buttonCoffee.addEventListener('click', function() {
    buttonCoffee.classList.add('hide')
    buttonCoffeeBlue.classList.remove('hide')
    timer.buttonCoffeeOff()
    sound.pressCoffee()
    sound.pressFlorestBlue()
    sound.pressRainBlue()
    sound.pressFireBlue()
})

buttonCoffeeBlue.addEventListener('click', function() {
    buttonCoffeeBlue.classList.add('hide')
    buttonCoffee.classList.remove('hide')
    sound.pressCoffeeBlue()
})

buttonFire.addEventListener('click', function() {
    buttonFire.classList.add('hide')
    buttonFireBlue.classList.remove('hide')
    timer.buttonFireOff()
    sound.pressFire()
    sound.pressFlorestBlue()
    sound.pressRainBlue()
    sound.pressCoffeeBlue()
})

buttonFireBlue.addEventListener('click', function() {
    buttonFireBlue.classList.add('hide')
    buttonFire.classList.remove('hide')
    sound.pressFireBlue()
})