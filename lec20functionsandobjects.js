//array revision
// arr1=[2,3,[4,5],6]
// console.log(arr1.flat(2));
// arr2=[9,25]
// mergedarray=[...arr1.flat(2),...arr2]
// console.log(mergedarray);

////////////////////
//   .... is called rest as well as spread operator
//it is used in cases like whever we want to design a cart we dont no of prouducts user may add and we have to sum up the values ,
//  while desiging a function for unpredictable no of parameters we use the rest operator


function calculatecarttotal(...productvalues){
    return productvalues
}
productprices=calculatecarttotal(200,400,600)
console.log(productprices);


//case 2 imp for interviews

function calculatecartotal(product1,product2,...productvalues){
    return `product1 value ${product1} product2 value ${product2} remaining values ${productvalues}`
}
console.log(calculatecartotal(200,400,600,800,1000));

//passing objetct into an fucntion
// const user={
//     name:"Rahul",
//     age:20,
//     email:"rahulvlogs25@gamil.com"
// }

// function userdetails(randomuser){
//     return`Username: ${randomuser.name} User_age: ${randomuser.age} User_email: ${randomuser.email}`
// }

// console.log(userdetails(user));

//lets see what happens if the details are mis match we will chnage the spelling of age and will se what kind o eroor we will get

// const user={
//     name:"Rahul",
//     age:20,
//     email:"rahulvlogs25@gamil.com"
// }

// function userdetails(randomuser){
//     return`Username: ${randomuser.name} User_age: ${randomuser.ae} User_email: ${randomuser.email}`
// }

// console.log(userdetails(user));

//we can also direct pass the obejct as an argument


function userdetails(randomuser){
    return`Username: ${randomuser.name} User_age: ${randomuser.age} User_email: ${randomuser.email}`
}

console.log(userdetails({
    name:"Rahul",
    age:20,
    email:"rahulvlogs25@gmail.com",
}))

//similarly we can also pass arrays in teh fucntions
const mynewarray =[200,400,600]
function findsecondvalue(anyarray){
    return`The second value of the array is ${anyarray[1]}`

}

console.log(findsecondvalue(mynewarray));

//we can also directly pass the array as an argument in the fucntion 
function findsecondvalue(anyarray){
    return`The second value of the array is ${anyarray[1]}`

}

console.log(findsecondvalue([200,50,600,800,1000]))


