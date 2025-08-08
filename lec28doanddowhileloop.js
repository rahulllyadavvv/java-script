//while loop is called as entry control loop as it checks the condition before netering the loop.
//do while loop is called as exit control loop since it ensure that loop body is executed at least once before checking the condition.

let index =0
while(index <=10){
    console.log(`value of index is ${index}`)
    index =index+2;
}

let myArray =['flash','batman','superman']
let i =0;
while (i<myArray.length) {
    console.log(`Value ${i+1} : ${myArray[i]}`)
    i++;

}
let score =1; //try score =11
do {
    console.log(`Score is ${score}`);
    score ++;
    
}while(score <=10);