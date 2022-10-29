var Typescript_day2 = function (param) {
    var results = '';
    param.map(function (text, index) {
        results += (index ? ' ' : '') + text;
    });
    return results;
};
var case1 = [1, 'data', 3, 'result'];
var case2 = ['Bejo', 'has', 4, 'sport', 'car'];
console.log(Typescript_day2(case1));
console.log(Typescript_day2(case2));
