const start = document.getElementById('start');
const stop = document.getElementById('stop');
let bgstatus = null;

const bggenrator = function(){
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}
start.addEventListener('click',()=>{
    if(bgstatus===null){
      bgstatus =  setInterval(()=>{
            document.body.style.background=bggenrator();
        },2000)
        
    }

},false)

stop.addEventListener('click',()=>{
    if(bgstatus !=null){
    clearInterval(bgstatus);
    bgstatus=null;}
})