// thoery:
// .forEach():
// Purpose: Run a function on each element.

// Return value: undefined

// Use case: When you just want to do something (e.g., log, update UI) for each element and don’t need a new array.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const coding =["js","ruby","java","pyhton","cpp"]
coding.forEach(function (item){
    console.log(item);
})
//.foreach on array
//.foreach takes callback function (function without name)

//arrow callback fucntion
coding.forEach((item)=>{
    console.log(item)
})

////in depth explore
function printtext(val){
    console.log(val);
}
coding.forEach(printtext);
//.foreach (in array) not just only hold item of array it also has index ,complete array 
coding.forEach((item,index,arr)=>{
   // console.log(`${item} ${index} [${arr}]`);
    console.log(item,index,arr);
})

//lets try foreach on array holding objects
const codinglanguageinfo =[
    {
        name:"c++",
        year:2012
    },
    {
        name:"python",
        year:2015
    },
    {
        name:"js",
        year:2011
    }
]

codinglanguageinfo.forEach((item)=>{
    console.log(`${item.name} : ${item.year}`)

})
//let stry another example
const UsersDetails =[
    {
        name:"Shobit",
        age:20,
        Skill:"c++"
    },
    {
        name:"Mohit",
        age:21,
        Skill:"Python"
    }
]

UsersDetails.forEach((item)=>{
    console.log(`Name :${item.name}\nAge:${item.age}\nSkill:${item.Skill}`)
})
    

