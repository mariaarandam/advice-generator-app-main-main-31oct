// ¡Buena suerte!
const button = document.querySelector("#get-advice-button");
const quote = document.querySelector("#card-quote");
const advice = document.querySelector("#advice-number");

async function updateNewAdvice() {

    const response = await fetch("https://api.adviceslip.com/advice");
    const randomAdvice = await response.json();

    // console.log("Nuevo consejo!", randomAdvice);

    quote.textContent = randomAdvice.slip.advice;
    advice.textContent = randomAdvice.slip.id;
}

button.addEventListener("click", updateNewAdvice);