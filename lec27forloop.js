//for loop 
//for loop and while loop are called as entery control loops bcs they check the condition before entering the loop.
for(let i=0;i<=10;i++){
    const element =i;
    if (element ==5){
        console.log(`${element} is the best number`)
    }
    console.log(element);

}
for(let i=0; i<=10;i++){
    for(let j=0;j<=10;j++){
        let temp =i*j;
        console.log(`${i}*${j}=${temp}`)
    }
}

let myarray =["flask","superman","batman"]
for(let index =0; index<myarray.length ;index++){
    const element = myarray[index];
    console.log(element)
}

//break and continue
for (let i =0; i<=20;i++){
    if(i==5){
        console.log(`${i} detected`)
        break;
    }
    console.log(i)
}
for (let i =0; i<=20;i++){
    if(i==5){
        console.log(`${i} detected`)
        continue;
    }
    console.log(i)
}