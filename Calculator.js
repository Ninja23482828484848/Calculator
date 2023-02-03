var textContainer = "";
var replaceCross;
var replaceDivide;
var replaceMinus;
var errorIteration;
setInterval(valueSet,10);
function countString(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}
function valueSet() {
    textContainer = displayText.textContent;
}
function clearText() {
    errorIteration = 0;
    displayText.textContent = "";
}
function setBracket() {
    let leftBracket = countString(textContainer, "(");
    let rightBracket = countString(textContainer, ")");
    if (leftBracket == rightBracket) {
        if (textContainer == "" || textContainer.endsWith("−") || textContainer.endsWith("+") || textContainer.endsWith("÷") || textContainer.endsWith("×")) {
            displayText.textContent += "(";
        }
        else {
            displayText.textContent += "×(";
        }
    } 
    else {
        displayText.textContent += ")";
    }
}
function backSpace() {
    textContainer = textContainer.substring(0, textContainer.length - 1);
    displayText.textContent = textContainer;
}
function getResult() {
    replaceCross = textContainer.replace(/×/g, "*");
    replaceDivide = replaceCross.replace(/÷/g, "/");
    replaceMinus = replaceDivide.replace(/−/g, "-");
    try {
        eval(replaceMinus);
    } 
    catch (e) {
        if (e instanceof SyntaxError) {
            displayText.textContent = "Invalid Input";
            errorIteration += 1;
        }
    }
    if (errorIteration == 0) {
        displayText.textContent = String(eval(replaceMinus));
    }
}
