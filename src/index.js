function handleClick() {}

let buttonElement = document.querySelector("#challenge-1");
buttonElement.addEventListener("click", handleClick);
buttonElement.setAttribute("disabled", "disabled");

let box = document.querySelector("#challenge-2");
box.style.backgroundColor = "green";

let three = document.querySelector("#challenge-3");
three.classList.add("danger");
