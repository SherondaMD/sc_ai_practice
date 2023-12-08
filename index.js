function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "b8b61a4d34f03tcbf3192f94o59a0ba4";
let context = "be polite and provide a very short answer.";
let prompt = "who was the first female president?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Processing...");
axios.get(apiUrl).then(showAnswer);

