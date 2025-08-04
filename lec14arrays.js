const myArr =[0,1,3,5,2]
const myHeroes =["Shaktiman","naagraj","Papa","me"]
const myArr2 = new Array(20,30,40,5080)
console.log(myArr2[1])
myArr2.push(3);
console.log(myArr2); //adds the element at the end of the array 
myArr2.pop(); //removes the last element
console.log(myArr2);
myArr.unshift(2);  //unshift add the element in the start and shifts the remaining element by 1
console.log(myArr);
myArr.shift()
console.log(myArr);
// console.log(myArr.includes(2));
// console.log(myArr.indexOf(5));
// console.log(myArr.sort());
// console.log(myArr2.reverse());
console.log(Math.min(1,2,3,4));
//join is used to convert array into the string
console.log(myArr.join());
mynewarray3= myArr2.join();
console.log(mynewarray3);
//slice vs splice 
//slice is used to extrace the elemnt form an  array(startrange,endrange) the end rnage is not included int he result
//in slice the orginal array in not manipulated,no changes to the original array
//splice- In splice the original array is manipulated the ranges included nd the portion is removed from the original array.
// splice(2, 3)

// Modifies the original array.

// Starts at index 2 (element 3) and removes 3 elements

console.log(myArr.slice(1,3));
console.log(myArr);
console.log(myArr.splice(2,3));
console.log(myArr);