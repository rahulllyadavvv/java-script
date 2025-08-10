//reduce method
const mynums=[1,2,3]
const mytotal = mynums.reduce(function(accummulator,currentvalue){
    console.log(`Accumulator values :${accummulator} Current value :${currentvalue}`);
    return accummulator+currentvalue;
},0) //0 is the accumulator initalizer,initial value of accumulator
console.log(mytotal);

//lets try reduce method in arrow fucntion
const total =mynums.reduce((acc,currvalue)=> acc+currvalue,0)
console.log(total)
//different avriations in arrow fucntion
const total2 = mynums.reduce((acc,curval)=>(acc+curval),0)
console.log(total2)

//one more variation
const total3 = mynums.reduce((acc,curval)=>{
    return acc+curval
},0)
console.log(total3)


//trying diff intial value
const total4 = mynums.reduce((acc,curval)=>{
    return acc+curval
},5)
console.log(total4)

///////////
const shopingcart =[
    {
        itemname:"mobile dev course",
        price:5000
    },
    {
        itemname:"data science course",
        price:4000
    },
    {
        itemname:"python course",
        price:2000
    },{
        itemname:"web dev course",
        price:5000
    }

]

//now we are taske to find the total price of the cart 
//approach 1. we can use loop (but its time consuming )
//approach 2 . we will be using reduce method

const totalcartvalue = shopingcart.reduce((acc,item)=>(item.price+acc),0)
console.log(`Total cart value :${totalcartvalue}`);