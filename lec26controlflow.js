// <.>,<=,>=,==,===,!=
//difference b/w =,==,===
//= it as sued for assignment ,used to assign value to a avriable 
//== it isa an comaprission operator used to comapre values
//=== it is used to compare value as we as datatype 

if (2=="2"){
    console.log("Executed")
}
if(2==="2"){
    console.log("it wont be executed")
}
if (2!="3"){
    console.log("Executed")
}
const temperature =41;
if (temperature <50){
    console.log(`current temperatur is ${temperature} `)
}
else{
    console.log("Temperature is over 50 ")
}

//userstand scope 

// const score = 200;
// if (score >100){
//     const power ="fly"
//     console.log(`user power ${power}`)
// }
//console.log(`User Power :${power}`) // wont execute power is out of the scope 

//instead of const if we use var then the above line of code will be executed as the scope of variable changes  
//lets see with example
const score = 200;
if (score >100){
    var power ="fly" //var scope is completely global,best practice to use let or const to avoid scope problems
    console.log(`user power ${power}`)
}
console.log(`User Power :${power}`) 

//short hand notation of if 
//implicit scope
const balance =550
if (balance > 500) console.log("Suffecient balance is present");

if (balance >500) console.log("suffecient balance"),console.log(`Available balance ${balance}`) //not a good practice not recommended


//nesting
if (balance <500){
    console.log(`balance less than 500`)
}
else if (balance <800){
    console.log(`blance is less than 800`)

}
else{
    console.log(`less than 1200`)
}


const userLoggedIn = true
const debitcard = true
const loggedinfromgoogle = true
const loggedinfromemail = false
if (userLoggedIn && debitcard && 2==2){
    console.log(`Allow to buy course`);
}
if ( loggedinfromemail || loggedinfromgoogle){
    console.log("User logged In ")
}