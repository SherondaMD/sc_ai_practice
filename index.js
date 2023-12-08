function handleClick() {
  alert("hooray");
  let heading = document.querySelector("h1");
  heading.style.color = "green";
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
