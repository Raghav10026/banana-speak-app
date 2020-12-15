var btntranslate = document.querySelector("#btntranslate")
var txtinput = document.querySelector("#txtinput")
var outputDiv = document.querySelector("#output")

var serverURl = "https://api.funtranslations.com/translate/minion.json"



function getTranslationURL(input) {
    return serverURl + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occurred", error);
    alert("something went wrong with the server")
}

function clickHandler() {
    var inputText = txtinput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputDiv.innerText = translatedTxt;
        })

    .catch(errorHandler)
};

btntranslate.addEventListener("click", clickHandler)