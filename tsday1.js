var myTypesscripts = function (sentence, firstNumber, secondNumber) {
    return sentence.slice(firstNumber, secondNumber);
};
var sentence = "Learning Typescript is different than Javascript";
var firstnum = 9;
var secondNum = 19;
var results = myTypesscripts(sentence, firstnum, secondNum);
console.log(results);
