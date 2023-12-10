function showAnswer(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 15,
  });
}

function jokeGenerator(event) {
  event.preventDefault();
  let apiKey = "b8b61a4d34f03tcbf3192f94o59a0ba4";
  let context = "Please be clear and polite.";
  let prompt = "Please tell me a joke that is family-friendly.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeGeneratorElement = document.querySelector("#joke");
  jokeGeneratorElement.innerHTML =
    "Thinking of a family-friendly joke, one moment please...";

  axios.get(apiUrl).then(showAnswer);
}
let buttonElement = document.querySelector("#question");
buttonElement.addEventListener("click", jokeGenerator);
