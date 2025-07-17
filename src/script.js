const poem = (response) => {
    const result = document.getElementById("generated-poem")
    answer = response.data.answer;
    new Typewriter(result, {
    strings: answer,
    autoStart: true,
});
} 
const generatePoem = () => {
    const userInput = document.getElementById("user-input").value;

    let apiKey = "1c716bbf1f913c803d3d7b147d0baaot";
    let context = "Make sure to provide a clear, short and precise answer";
    let prompt = `Please generate a tech related poem ${userInput}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    document.getElementById("generated-poem").textContent = `Generating a poem about ${userInput} ...`


    axios.get(apiUrl).then(poem);
};

const buttonElement = document.querySelector("#generate-btn");
buttonElement.addEventListener("click", generatePoem);

