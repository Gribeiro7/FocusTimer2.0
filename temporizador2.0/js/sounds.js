export default function() {
    const buttonSoundFlorest = new Audio("sound/Floresta.mp3")
    const buttonSoundRain = new Audio("sound/Chuva.mp3")
    const buttonSoundCoffee = new Audio("sound/Cafeteria.mp3")
    const buttonSoundFire = new Audio("sound/Lareira.mp3")

    function pressFlorest() {
        buttonSoundFlorest.play()
    }

    function pressFlorestBlue() {
        buttonSoundFlorest.pause()
    }

    function pressRain() {
        buttonSoundRain.play()
    }

    function pressRainBlue() {
        buttonSoundRain.pause()
    }

    function pressCoffee() {
        buttonSoundCoffee.play()
    }

    function pressCoffeeBlue() {
        buttonSoundCoffee.pause()
    }

    function pressFire() {
        buttonSoundFire.play()
    }

    function pressFireBlue() {
        buttonSoundFire.pause()
    }

    return {
        pressFlorest,
        pressFlorestBlue,
        pressRain,
        pressRainBlue,
        pressCoffee,
        pressCoffeeBlue,
        pressFire,
        pressFireBlue
    }
}
