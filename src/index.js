let apiKey = "b8b61a4d34f03tcbf3192f94o59a0ba4";
let context = "Please be clear and polite.";
let prompt = "Please tell me a joke that is family-friendly.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Let me think...one moment please...");

let buttonElement = document.querySelector("#joke");
buttonElement.addEventListener("click", showAnswer);

function showAnswer(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 15,
  });
}
