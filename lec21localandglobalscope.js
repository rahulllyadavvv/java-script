//{} curly brackets are genrally used to denate an object
//when {} curly brackets are used with an function or if else then it determines the scope


// we should not use var variable in our programs as they dont follow the scope properties which could cause trouble int he program.

//example
var a = 20;
let b=50;


if (true) {
    var a = 200;   // same 'a' as outside — function/global scope
    const b = 30;  // block-scoped
    let c = 40;    // block-scoped
    console.log(`inner a :${a}`);
    console.log(`inner b:${b}`);
    console.log(`inner c:${c}`);
}

console.log(a); // 200
console.log(b);  //prints teh global scope b
//console.log(c);   //will throw an eroor as it searches ofr and global c which is not there