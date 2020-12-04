// Getting the required elements
var userInput = document.querySelector("#input-text");
var btnTrans = document.querySelector("#btnTranslate");
var outputText = document.querySelector("#output-text");
var clearBtn = document.querySelector("#clrBtn");

var valyrianURL = 'https://api.funtranslations.com/translate/valyrian.json';
//function to append userInput to url
function urlGenerator(text) {
    return valyrianURL + '?text=' + text;
};
//Function Error
function catchError(e) {
    window.location.replace('/servererror.html');
    return;
}
// TranslateBtn Click Event
btnTrans.addEventListener('click', () => {
    var userText = userInput.value;
    if (userText.length === 0) {
        alert("Oops! Please enter some text...");
        return;
    }

    fetch(urlGenerator(userText.trim()))
        .then(response => response.json())
        .then(jsonResponse => {
            outputText.innerText = jsonResponse.contents.translated;
        })
        .catch(e => catchError(e))
    outputText.style.color = '#272932';
    clearBtn.style.visibility = 'visible';
});

// Clear Button Click Event
clearBtn.addEventListener('click', () => {
    userInput.value = '';
    outputText.innerText = "Valyrian translation here!";
    outputText.style.color = 'gray';
    clearBtn.style.visibility = 'hidden';
});



