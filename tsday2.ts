type combination =(number | string)[];

const Typescript_day2 = function(param: combination): string {
    let results: string = '';
    param.map((text, index) => {
        results += (index ? ' ' : '')+text;
    })
    return results;
}

const case1 = [1,'data',3, 'result'];
const case2 = ['Bejo', 'has', 4, 'sport', 'car'];

console.log(Typescript_day2(case1));
console.log(Typescript_day2(case2));