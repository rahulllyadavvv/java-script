//object destructuring
const course ={
    coursename :"js in hindi",
    instructor:"Rahul Yadav",
    "Course Price" :2000,
}
console.log(course["Course Price"]);
console.log(course.coursename);

//now lets say if i have to print the course name for three times 
//then i have to write it again and again for three times.
//insteadd we will be using object destructuring 

//syntax
// const {keyname} = objectname
// console.log(keyname)

const{coursename} = course;
console.log(coursename);
//we can also call the key by soem anothe diff name of our choice
const{coursename :cname}=course;
console.log(cname);
//not just object array can be also destructured


//API  //api are simply the values comming from the backend earlier the values used to come in xml structure but nowadays JSON format is used 
//ARI are called via json
//json looks like this
// {
//     coursename: "js in hindi",
//     price:5000
// }
//its simply an object without any name
//sometimes the api is also recived in the format of array and the array holds alot of objects in it
// [
//     {},
//     {},
//     {},
//     {}
// ]