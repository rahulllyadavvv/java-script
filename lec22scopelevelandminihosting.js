//lets understand scope in more details
//lets see scoping when function is inside a function

function one (){
    let myname="rahul";
    function two(){
        let mysecondname="yadavji";
        console.log(myname) //can be accessed as it inside the scope of function one (child function can acees the variables of the parent funcn)
    }
 //console.log(mysecondname); //scope issue outside the scoep of function two ,parent canot acess the variable of child
    two()  
}
one()


//another example
if (true){
    const username="Rahul"
    if(username === "Rahul"){
        const website ="youtube"
        console.log(`${username} ${website}`)
    }
    // console.log(website);
}
//console.log(username);

//nesting in if condition
if(true){
    const username ="Rahul"
    if(username === "Rahul"){
        const hibbie="Coding";
        console.log(`${username} has a hobie of ${hibbie}`)
    }
    //console.log(hibbie);//out of scope of inner if
}
//console.log(username); //out of scope of if 

/////////INTERESTING/////////////////////
//we will see two diff ways of declaration of function.
//Method 1
// function addone (num){
//     return num+1
// }
// console.log(addone(1))

// //Method 2
// const addtwo = function(num){ //declared a function and also holding it in a variable
//     return num+2
// }
// console.log(addtwo(5))

//what is the difference lets se 
//if we delare our fucntion in the premetive it allows to use the argument/callign satemnt to used befor its declaration
//while when we are declaring and holding the func in ana variable it gives error if we call teh argument statemnt before its declaration.
//lets see with an example
//case 1 

console.log(addone(4)); //giving the fucntion call and argument before the declaration of the function 
function addone(num){
    return num+1
}




// console.log(addtwo(2)) //this wil give error ReferenceError: Cannot access 'addtwo' before initialization
// const addtwo = function (num){
//     return addtwo+2
// }
