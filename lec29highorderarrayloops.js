const arr =[1,2,3,4,5]
for (const num  of arr) {
    console.log(num);   
}

const myname = "Rahul Yadav";
for (const namechar of myname) {
    if(namechar === " "){
        continue;
    }
    else{
    console.log(namechar);
}
}
// const myname = "Rahul Yadav";
// for (const namechar of myname) {
//     if(namechar === " "){
//         break;
//     }
//     else{
//     console.log(namechar);
// }}



//map object holds key-value pairs and remembers the original insertion order of the keys.
//values should be unique
//order also remains the same
const map = new Map()
map.set('IN',"India")
map.set("USA","United States Of America")
console.log(map)


for (const key of map) {
    console.log(key);   
}

for(const [key,value] of map ){
    console.log(`key:${key} value:${value}`);
}
//forof can be used with object as objects are not itterable
// const mygames ={
//     game1:"NFS",
//     game2:"Spiderman"
// }    
// for (const [game,gamename] of mygames) {
//     console.log(game,gamename)
    
// }

//now lets see how to iterate over the objects
//(forin) loop is used to iterate over the objects
const codinglanguages={
    cpp:"c++",
    js:"Javascript",
    py:"python"
}
for (const key in codinglanguages) {
    console.log(`key:${key} value:${codinglanguages[key]}`);
}
//lets try forin loop on arrays
const programminglanguages=["c++","java","python","c"]
for (const language in programminglanguages){
    console.log(programminglanguages[language]);
    
}//(for off) loop direct value utha ta hai
//(for in) loop  key utha tha hai 

const map2 = new Map()
map.set('cpp','C++')
map.set('js','javascript')
map.set('py','python')

for (const element of map2) {
    console.log(element);
    
}
for (const key in map2) {
    console.log(key);   //no output bcs  map is not itterable no key is there
}