const printname = document.getElementById('username')
const saymyname = function(){
    printname.innerHTML="Hi Rahul";
}
const changename = function(){
    printname.innerHTML="Hi Shobit";
}
saymyname();
const changeme= setTimeout(changename,5000);
stoptimeout = document.getElementById('stop');
stoptimeout.addEventListener('click',function(e){
    clearTimeout(changeme);
    console.log("function executed")
},false)