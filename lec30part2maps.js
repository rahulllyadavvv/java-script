
//lets se .map method
//we have seee arraymethod 1.foeach (used to to perform side effects 9can modify the curent values in consol log but it cannor return new array)
//.filter - its used to extract out specific data based on condition (it returns a new array)(it cant modify the data)
//.map() is used to transform each item in an array and returns a new array with the same length, where each item has been modified.
const numbers =[1,2,3,4,5,6,7,8,9,10]
const updatednumber=numbers.map((num)=>{
    return num+2;
})
console.log(updatednumber);

//lets try to perform the same thing using for each (the soultion wont be optimal )
let upnum=[]
numbers.forEach((num)=>(upnum.push(num+2)))
console.log(upnum);

///lets see the chaining of methods
const updatedvalue = numbers.map((num)=> num*10).map((num)=>num-2).filter((num)=>num%2 ==0)   //upadted values are passed on to the next method
console.log(updatedvalue);

//lets see chainning in an complex example array having objects
const employees = [
  { name: "Rahul Sharma", age: 25, salary: 45000, role: "Frontend Developer", company: "TechNova" },
  { name: "Anita Mehra", age: 28, salary: 50000, role: "Backend Developer", company: "CodeCraft" },
  { name: "Pradeep Kumar", age: 25, salary: 47000, role: "UI/UX Designer", company: "TechNova" },
  { name: "Sneha Patel", age: 30, salary: 60000, role: "Project Manager", company: "CodeCraft" },
  { name: "Aman Yadav", age: 25, salary: 48000, role: "QA Tester", company: "TechNova" },
  { name: "Riya Kapoor", age: 28, salary: 52000, role: "DevOps Engineer", company: "CodeCraft" },
];
// Question:
// From the array of employees, extract the names (in uppercase) of those who:
// work at TechNova
// are 25 years old
// and earn a salary greater than 46000
// const expectedemployee = employees.filter((employe)=>employe.company==="TechNova" && employe.age ===25 && employe.salary > 46000) //implicit callback arrow funcn
// const finalemploye = expectedemployee.map((employe)=> {
//     return `Name :${employe.name}`
// })
// console.log(expectedemployee);
// console.log(finalemploye);
// let finalfinalemploye=finalemploye.join("\n")  //The .join() method in JavaScript is used to convert an array into a single string, with an optional separator between elements.
// console.log(finalfinalemploye);


///more optimized solution using chaining
const expectedemployee= employees.filter((employee)=>employee.company==="TechNova" && employee.age==25 && employee.salary >46000).map((emplyee)=>emplyee.name.toUpperCase())
console.log(expectedemployee);
const arraytostring = expectedemployee.join("\n");
console.log(arraytostring);