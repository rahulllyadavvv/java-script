//Promise is an object in javascript that tells the result of an asynchronous operation that will finish in the future.
//fetch method starts the process of fetching a resource from the network.

const promiseone = new  Promise(function(resolve,reject){   //resolve connects with .then
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})
promiseone.then(function(){
    console.log("Promise Consumed");

})


/////////////////////////
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    },2000)

}).then(function(){
    console.log("Async 2 resolved");
})

/////////////////////////////////////
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Rahul",email:"rahulvlogs25@gamil.com",Mobileno:9256473823,Course:"B.tech"})
    },2000)
})
promise3.then(function(userinfo){
    console.log(userinfo)
    console.log(`${userinfo.username}`);

})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username:"Rahul Yadav",password:"1234",email:"rahulvlogs25@gmail.com"});
        }
        else{
            reject("Eroor :Something Went wrong");
        }
    },2000)
})
promisefour.then((user)=>{
    console.log(user);
    console.log(user.username);
    return user.password;
}).then((userpassowrd)=>{    //(chaining)it will the value returned by the previous then
    console.log(`${userpassowrd}`)
}).catch((eroor)=>{
    console.log(`${eroor}`)
}).finally(()=>{ //it will be always executed
    console.log("The promise is either resolved or rejected");
})



const promisefive = new Promise(function(resolve,reject){
    setTimeout(()=>{
       let error = false;
       if(!error){
         resolve({name:"Rahul",email:"rahulvlogs25@gmail.com",Mobileno:9256473823})
       }
       else{
        reject("something went wrong");
       }
    },2000)

})
//apart from resolve and reject ,we can handel the promises by async and await
//  async function consumepromisefive() {
//     const response = await promisefive  //await promisefive - await will take  whatever the result provided by  promisfive.
//     console.log(response);   
//  }
//  consumepromisefive()

 //the problem will async and await  is they cannot directly handel the errors.
//check by your own by making the the let eroor = trur in promis five
//we can use try and catch to resolve this problem
//code below
// async function consumepromisefive() {
//     try{
//         const response = await promisefive;
//         console.log(response)
//     } catch(error){
//         console.log(error);
//     }
    
// }
//fetch method - network request 
//await (waits for the response and takes the data)
//data from the server comes in string //so we need to convert into object to extract the data 
// async function getallusers(){
//     try{
//         const response = await fetch('https://api.github.com/users/rahulllyadavvv');
//        // console.log(response)
//         const data = await response.json() //response .json() also take time in conversion so we will use await
//         console.log(data);    
//     }
//     catch(error){
//         console.log(`E: ${error}`);
//     }
// }
// getallusers()


///////////////////
fetch('https://api.github.com/users/rahulllyadavvv')
.then((response)=>{
    return response.json()
}).then((responsedata)=>console.log(responsedata))
.catch((error)=>console.log(error))