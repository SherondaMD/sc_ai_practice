function handleClick() {
  let heading = document.querySelector("h1");
  heading.classList.add("hidden");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
