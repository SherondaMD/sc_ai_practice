function handleClick() {
  alert("hooray");
}

let buttonElement = document.querySelector("#challenge-1");
buttonElement.addEventListener("click", handleClick);
buttonElement.setAttribute("disabled", "disabled");

function changeColor() {
  let boxElement = document.querySelector("challenge-2");
  boxELement.style.color = "green";
}

let boxElement = document.querySelector("#challenge-2");
boxElement.addEventListener("click", "changeColor");
