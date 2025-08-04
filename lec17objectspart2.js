//singelton objects
// how objects can be declared via constructor
const newObject = new Object() //singelton object
const tinderUser ={} //non singelton object

tinderUser.name="Rahul Yadav";
tinderUser.id ="25ry";
tinderUser.age=25;
tinderUser.isSingle=true;
console.log(tinderUser)
console.log(tinderUser.isSingle);

//object nesting
const objectnesting ={
    name:"rahul",
    nestedobject:{
        id:"insideObject",
        secondlayernestedobject:{
            id:"Hi i am second layed nested object"
        }

    }
}
console.log(objectnesting.nestedobject.secondlayernestedobject);
console.log(objectnesting.nestedobject.secondlayernestedobject.id);


//combining two objects
const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"
}
// const obj3 = Object.assign({},obj1,obj2); //combines the obj1 and obj2 and returns a new object
// console.log(obj3);


//const Obj3 = {obj1,obj2}// wrong approach
//Object.assign static method copies all enumerable own properties(basically elements) from one or more  source object to a taregt object.it returns the modified taregt Object.
//simply Object.assign merges the source in the target
//so we take and empty object as  target and all other as source so we get all the elemnts of the source objects in the empty object whoch is convenient
const target={ a:1,b:2};
const source ={b:4,c:5,d:6};
//const returntargetobject = Object.assign(target,source);
// console.log(target);
// console.log(returntargetobject);
// console.log(target === returntargetobject);

//performing the same exmaple using an empty obeject as target object.
// const returntargetobject = Object.assign({},target,source);
// console.log(returntargetobject);
// in industry we dont even use assign operator we will be using the spread operator;
const obj3={...target,...source};
console.log(obj3);
const users =[
    {
        id:1,
        email:"vicky@gamil.com"
    },
    {},
    {},
]
console.log(users[0].email);
console.log(Object.keys(users[0]));
console.log(Object.values(users[0]));
const object4={
    id:"abcd",
    name:"Rahul Yadav",
    age:20
}
console.log(Object.keys(object4));
console.log(Object.values(object4));
console.log(Object.entries(object4));
console.log(object4.hasOwnProperty("id"));
console.log(object4.hasOwnProperty("email"));

