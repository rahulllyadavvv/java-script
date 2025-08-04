const score = 100
const balance = new Number(500)
console.log(balance)

console.log(typeof(balance));
console.log(typeof(score.toString()))
console.log(score.toString().length);
const finalammount= 68.48479854
console.log(finalammount.toFixed(2));
//toFixed() function is used to limit the percissoin value (the value after point)
const num3 = 23.456
console.log(num3.toPrecision(3));
// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(Math);
// console.log(Math.abs(-4))  //abs is absalute it converts negative values into positive and postive values remains same
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // it rounds of to the upper value 
// console.log(Math.floor(4.9)); //it round of to the lower value 
// console.log(Math.sqrt(4));
// console.log(Math.min(2,3,4,5));
// console.log(Math.max(4,5,6,7,8));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
const min =10;
const max =20;
console.log(Math.floor(Math.random()*(max -min +1)) + min);
