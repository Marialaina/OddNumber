// const nums = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10];
// const a = [5, 5, 5, 5, 2, 2, 2, 2, 4];
// const aCount = new Map([...new Set(a)].map(x => [x, a.filter(y => y === x).length]));

// console.log(aCount)

const a = [5, 5, 5, 5, 2, 2, 2, 2, 7, 7,7, 7,7,4,4,4];
const oddNum =[]

const aCount = [...new Set(a)].map(x => [x, a.filter(y => y === x).length]);


aCount.forEach(num => {if (num[1] % 2 !== 0){oddNum.push(num[0])}})
let n = oddNum[0];

console.log(oddNum)
// console.log("7");
