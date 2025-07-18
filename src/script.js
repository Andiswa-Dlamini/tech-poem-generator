const poem = (response) => {
    const result = document.getElementById("generated-poem")
    answer = response.data.answer;
    new Typewriter(result, {
    strings: answer,
    autoStart: true,
});
} 
const generatePoem = (event) => {
    event.preventDefault();

    const userInput = document.getElementById("user-input").value;
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";

    let apiKey = "1c716bbf1f913c803d3d7b147d0baaot";
    let context = "You are a poem expert who loves generating poems. Your mission is to generate a 3 line poem basic HTML and separate each line with a <br />.Don't include a title. Don't display html writimg. Make sure to follow the user instructions.";
    let prompt = `Please generate a tech related poem ${userInput}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    document.getElementById("generated-poem").textContent = `Generating a poem about ${userInput} ...`
    document.getElementById("generated-poem").classList.toggle("hidden");

    axios.get(apiUrl).then(poem);
};

const buttonElement = document.querySelector(".generate-btn");
buttonElement.addEventListener("click", generatePoem);

// everytime a button is clicked it must display a block