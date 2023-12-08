function handleClick() {
  alert("hooray");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
buttonElement.setAttribute("id", "goodbye");
