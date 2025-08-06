//sometimes we assume some things to be true 
//const useremail ="rahulvlogs25@gamil.com"
const useremail =[]
if (useremail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email");
}
//falsy values
//false,0,-0,BigInt ,"",null,NAN,undefined
//truthy values
//all except the falsy values  are truthy values
//some truthy values  "0","false"," ",[],{},fucntion(){}

if(useremail.length===0){
    console.log("Array is empty");
}

const emptyobject ={}
if(Object.keys(emptyobject).length === 0){
    console.log(`object is empty`);
}

//some interesting stuff
// false == 0 (output:true)
//false == '' (output:true)
// 0 == '' (output :true)

//nullish coalescing Operator (??) : null undefined
//very important
let val1;
//val1 = 5 ?? 10 
//val1 =null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 100 //first value will be assigned 



console.log(val1);

//nullish and terninary operator are different

//terniary operator 
//condition ? true :false
const iceprice =70;
iceprice >=80 ? console.log(`iceprice is greater than 80 `):console.log(`price is less than 80`)
