//lets practice promises 
const mypromise = new Promise(function (resolve,reject){
    let isuserAllowed = true;
    if(isuserAllowed === true){
        resolve([{Name:"Rahul",Age:20,Occupation:"SDE",Company:"Google"}])
    }
    else{
        reject(`Access Denied`)
    }
})
mypromise.then((dataarray)=>{
    console.log(`User Details:\nName:${dataarray[0].Name}\nAge:${dataarray[0].Age}\nRole:${dataarray[0].Occupation}\nCompany Name:${dataarray[0].Company}`);
})
mypromise.catch((error)=>{
    console.log(`Unfortunately ${error} has Occurred`)

})
///////////////////////////////////////////////////

// istead of .then and .catch we can also use async and await to handel the promises 
//but the problem with async and await is they are bad with error handling so we use try and catch with them to fix this issue
async function usepromisse() {
    try{
        const result = await mypromise;
        console.log(result);
    }
    catch(error){
        console.log(`${error} Occurred`);
    }
    
}
usepromisse()


/////////////////////////// fetch////////////////////
//fetch()method starts the process of fetching a resource from the network ,returning a promise which is fulfiled once the response  is available.
///////////////////network request///////////////////
async function getuserdata(){
    try{
        const userdata = await fetch('https://api.github.com/users/rahulllyadavvv');
        const usableuserdata = await userdata.json();
        console.log(usableuserdata);
    }
    catch(error){
        console.log(`Unfortunately Error:${error} Occurred`)
    }
}
getuserdata()

fetch('https://api.github.com/users/rahulllyadavvv')
.then((response)=>{
    return response
}).then(()=>{
    console.log(response)
}).catch((error)=>{
    console.log(`Error:${error}`)
})
