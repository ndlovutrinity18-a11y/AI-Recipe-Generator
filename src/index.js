function displayRecipe(response) {
    new Typewriter('#recipe', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
    });
}
function generateRecipe(event) {
    event.preventDefault();
    let inputElement = document.querySelector("#search-input");
    let apikey="4o3f7f642638142f8fcf994tc99ba709"
    let prompt=`Create a detailed recipe for ${inputElement.value}. Include ingredients, measurements, and step-by-step instructions.`;
    let context="you are a professional chef. generate clear, step by step recipe instructions based on the user's input. be concise and easy to follow. write in html(do not include <html>) format and break lines between sections. include a title, ingredients list, and numbered steps. avoid unnecessary commentary. start with a title, then ingredients, then instructions. write in simple language/English." ;
    let apiurl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`

    axios.get(apiurl).then(displayRecipe);
}
let formElement = document.querySelector("#recipe-form");
formElement.addEventListener("submit", generateRecipe);