const pi = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(pi)

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);
//////////////////////////////
console.log('//////////////////////////////');
//////////////////////////////////////////////
const chai ={
    name :"properties",
    price :250,
    isavailable : true,
    chaidetails : function(){
        console.log(` CODE FAT GYA \nName : ${this.name}\nPrice : ${this.price}\nIsAvailable : ${this.isavailable}`)

    }
}

console.log(chai);
console.log(chai.name);
chai.chaidetails();
console.log(Object.getOwnPropertyDescriptor(chai));  //will throw output as undefined, chai is an object not an property and its a property descriptor.
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

///we can set the properties of the properties of object
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false, ///////name not getting printed bcs we set it property enumerable:false, that property will not appear in loops like for...in or Object.entries.
    configurable:false,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
chai.name ="newproperties"; 
console.log(chai.name); // now  we can see that  name is not changing as we have set its writable propertie to false
////////////////////////////////////////////////////////////////////////////
///////wrong way/////////////
console.log('//////////////////wrong way(CODE FAT GYA////////////////')
for(let[key,value] of Object.entries(chai)){
    console.log(`${key} : ${value}`)
}



/////correct way ///////////////////
console.log("//////////////handling the code /////////////////")
for (let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
         console.log(`${key} : ${value}`);
    }
   
}

///////name not getting printed bcs we set it property enumerable:false, that property will not appear in loops like for...in or Object.entries.

// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:true,
//     configurable:false
// })


// for(let[key,value] of Object.entries(chai)){
//     if(typeof value !== 'function'){
//         console.log(`${key} : ${value}`);
//     }
// }
////////////////////////////////////////////////////////////////////////