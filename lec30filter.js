//limitation of foreach it is great for printing and acessing elmnts inside that foreach but thsi doesnt return anyhting ,o it has limition that the value cant be used out of the scope of foreach
//.forEach():
// Purpose: Run a function on each element.

// Return value: undefined

// Use case: When you just want to do something (e.g., log, update UI) for each element and don’t need a new array.



const codinglanguages = ["ruby","java","c++","js","python","c++"]
codinglanguages.forEach((language)=>{
    console.log(language)
})


 
//what if we take it in an variable
//output undefine 
const language = codinglanguages.forEach((language)=>{
    console.log(language)
})
console.log(language);
// What's Happening:
// forEach() is an array method used to iterate over elements.
//It does not return anything useful – it always returns undefined.

//lets try manual return
const language2 = codinglanguages.forEach((language)=>{
    console.log(language)
    return language;
}) 
console.log(language2);
// //still output is undefined
// Even though you're using return language inside the callback, .forEach() ignores the return value of the callback function.
// It doesn't collect or return anything useful. It is designed only for side effects like console.log, not for transforming data.

//we use filters to get a return value 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//.filter():
//it also takes a callback funcn
// Purpose: Extract only the elements that match a condition.

// Return value: A new array with the filtered values.

// Use case: When you want to keep only some elements based on a condition.
// .filter() is primarily designed for arrays in JavaScript. 
// so it only works on values that are actual arrays or array-like objects that explicitly inherit from Array.

const luckynumbers =[1,2,3,4,5,6,7,8,9,10]
// const numbergreaterthan5 =luckynumbers.filter((number)=> number>5) //implicit arrow fucn no return needed
// console.log(numbergreaterthan5);
// console.log(numbergreaterthan5.toString());

const numbergreaterthan5 =luckynumbers.filter((number)=> {   
    return number >5           //explicit arrow fucntion need an return    
})
console.log(numbergreaterthan5);
console.log(numbergreaterthan5.toString());


luckynumbers.forEach(function(number){
    if(number >5){
        console.log(`${number}`)
    }

})

const myluckynumber=[]
luckynumbers.forEach((number)=>{
    if(number == 5){
        myluckynumber.push(number)
    }

})
console.log(`My lucky number is :${myluckynumber.toString()}`)


///////////////////////////////////
const books = [
  {
    bookName: "The Alchemist",
    genre: "Fiction",
    publishYear: 1988,
    edition: "1st",
    price: 350
  },
  {
    bookName: "Clean Code",
    genre: "Programming",
    publishYear: 2008,
    edition: "2nd",
    price: 499
  },
  {
    bookName: "Atomic Habits",
    genre: "Self-help",
    publishYear: 2018,
    edition: "1st",
    price: 420
  },
  {
    bookName: "The Pragmatic Programmer",
    genre: "Programming",
    publishYear: 1999,
    edition: "1st",
    price: 550
  },
  {
    bookName: "Sapiens",
    genre: "History",
    publishYear: 2011,
    edition: "3rd",
    price: 600
  }
];

//ques 1 filter the book having genre programming
const userfilteredbooks =books.filter((book)=>book.genre==="Programming")
console.log(userfilteredbooks);

//let extract the books published after year 2000 and of historycategory;
const booksafter200 = books.filter((book)=>{
    return book. publishYear > 2000 && book.genre==="History";
})
console.log((booksafter200));
// now To display an array of objects as a simple readable string in JavaScript,
//  you can use .map() and .join() to format each object into a string and then combine them.
const bookstring= booksafter200.map((book)=>{
    return `BookName:${book.bookName}\nBook Genre:${book.genre}]\nPublish Year :${book.publishYear}\nPrice:${book.price}`

})
const finalbookstring= bookstring.join("\n");
console.log(finalbookstring);
///////////////////////////////////////////////////

const numbers =[1,2,3,4,5,6,7,8,9,10]
let updatednum =numbers.filter((num)=> num+10);
console.log(updatednum);
//this shows filter is used for extraction of data on the basis of constraints ,it is not used to modify data
// No, the .filter() method should not be used to modify data.
// It is meant to select (or filter out) items from an array based on a condition, not to change them.



