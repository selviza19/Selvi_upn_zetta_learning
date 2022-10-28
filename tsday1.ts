let myTypesscripts = function (sentence: String, firstNumber: number, secondNumber: number): String {
    return sentence.slice(firstNumber, secondNumber);
}

const sentence = "Learning Typescript is different than Javascript";
const firstnum = 9;
const secondNum = 19;

let results = myTypesscripts (sentence, firstnum, secondNum);
console.log(results);