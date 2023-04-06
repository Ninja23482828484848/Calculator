var textContainer = "";
var replaceCross;
var replaceDivide;
var replaceMinus;  
var errorIteration = 0;
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
    textContainer = $("#displayText").text();
}
function clearText() {
    errorIteration = 0;
    $("#displayText").text("");
}
function setBracket() {
    let leftBracket = countString(textContainer, "(");
    let rightBracket = countString(textContainer, ")");
    if (leftBracket == rightBracket) {
        if (textContainer == "" || textContainer.endsWith("−") || textContainer.endsWith("+") || textContainer.endsWith("÷") || textContainer.endsWith("×")) {
            $("#displayText").append("(");
        }
        else {
            $("#displayText").append("×(");
        }
    } 
    else {
        $("#displayText").append(")");
    }
}  
function backSpace() {  
    textContainer = textContainer.substring(0, textContainer.length - 1);
    $("#displayText").text(textContainer);
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
            $("#displayText").text("Invalid Input");
            errorIteration += 1;
        }
    }
    if (errorIteration == 0) {
        $("#displayText").text(String(eval(replaceMinus)));
    }
}