const  marvel_heroes =["thor","spiderman"]
const dc_heroes =['superman','flash','batman']
const main_heroe=["Rahul"]
// console.log(marvel_heroes);
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes[3][1]);
//push work on the exesting array and changes are made in the exesting array.
//concat merges two arrays and the provides a new array holding the elemnts of the two array.
const allheroes = marvel_heroes.concat(dc_heroes);
console.log(allheroes);
//in industry we prefer to use spread method as in thsi we can combine n no of arrays
const all_new_heroes =[...marvel_heroes,...dc_heroes,...main_heroe]
console.log(all_new_heroes);
const arrayinarray = [2,3,4,[3,4,[5,6]]]
//now here we will see the usecase of flat operator,it give a new array with and we provide the level of depth as input ,it ocnctinates are subarray in the single array
// const fix_arrayinarray = arrayinarray.flat(1);
// const fix_arrayinarray2 = arrayinarray.flat(2);
// const fix_arrayinarray3 = arrayinarray.flat(Infinity);
// console.log(fix_arrayinarray);
// console.log(fix_arrayinarray2);
// console.log(fix_arrayinarray3);



console.log(Array.isArray("Rahul"))
console.log(Array.isArray(arrayinarray));
console.log(Array.from("Hitesh")); //array from is genrally used to make array of string or set
console.log(Array.from({name:"Rahul"})) //interesting case
 
let score_1 = 100;
let score_2 =200;
let score_3=300;
console.log([score_1,score_2,score_3]);
console.log(Array.of(score_1,score_2,score_3));