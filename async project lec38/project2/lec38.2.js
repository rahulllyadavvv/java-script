//setinterval
printname= document.getElementById('username');
const start =document.getElementById('start');
const stop = document.getElementById('stop');
let namechnagerId = null;


start.addEventListener('click',()=>{
   if(namechnagerId===null){
    namechnagerId = setInterval(()=>{
    const randomnum = Math.random();
    const myname = `rahul${randomnum}`;
    printname.innerHTML=`${myname}`;
},2000);

}
   
},false);


stop.addEventListener('click',()=>{
    clearInterval(namechnagerId);
    namechnagerId =null;
},false)

