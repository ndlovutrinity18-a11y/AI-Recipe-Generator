function generateRecipe(event) {
    event.preventDefault();
    new Typewriter('#recipe', {
  strings: "Here is a delicious recipe for you!",
  autoStart: true,
  DelayNode: 75,
  
});

}
let formElement = document.querySelector("#recipe-form");
formElement.addEventListener("submit", generateRecipe);