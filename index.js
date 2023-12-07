function showAnswer(response) {
  console.log(response);
}

let apiKey = "b8b61a4d34f03tcbf3192f94o59a0ba4";
let context = "be polite and prove a very short answer.";
let prompt = "when was the first AI created?";
let apiUrl =
  "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}";

axios.get(apiUrl).then(showAnswer);
