const numbers = [1,2,3,4,5];
const isAllOdd = numbers.every(e=>e%2);// && 개념.
const isSomeOdd = numbers.some(e=>e%2);// || 개념.
console.log(isAllOdd,isSomeOdd); // 결과 false, true.