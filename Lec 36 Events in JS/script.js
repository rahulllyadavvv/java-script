const img1 = document.getElementById('img1');
const images = document.getElementById('imageList');
// img1.onclick = (e) => {
//     alert("First image is clicked");
// }
//instead of directly using on click we should use event listerners (it allows propogation);
//code below

// img1.addEventListener('click',(e)=>{
//     alert("img1 is clicked");
//     //console.log(e);

// },false)
// images.addEventListener('click',(e)=>{
//     alert("An image is clicked");
// })

//theory below

// event propogation has two context 1.Event bubelling 2.Event Capturing (event propagation means  sequence /flow of execution of event)
//by default its bubelling(false) (inner element to outter element)
//so if  we click of imge 1 two events will be initated ,but as bubelling will occur and firstly the inner element event will be
//executed and then the outer elment event will be executed
//true(capturing mode ) in capturing mode the event listner propogates from outter element to the inner element.

//let see the capturing mode 
// img1.addEventListener('click',(e)=>{
//     alert("img1 is clicked");
//     //console.log(e);

// },true)
// images.addEventListener('click',(e)=>{
//     alert("An image is clicked");
// },true)

//we can also stop the event propogation   
//only stops the event from traveling to other elements, not from running the current element’s own listener.
// Key point:
// If the child’s listener is in capturing phase, you cannot “stop it” from a parent because it runs after the parent’s capture handler anyway.
// If you want the parent to stop it, put the child listener in bubbling phase (false) and the parent in capturing phase (true).
// img1.addEventListener('click',(e)=>{
//     alert("img1 is clicked");
//     e.stopPropagation(); 
//     //console.log(e);

// },false)
// images.addEventListener('click',(e)=>{
//     alert("An image is clicked");
// },false)

// document.getElementById('googleLink').addEventListener('click',(e)=>{
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("Google link is clicked");
// },false)

//let try to remove the pic by clicking on it 
document.querySelector('#imageList').addEventListener('click',(e)=>{
    console.log(e.target.parentNode);
    elementtoremove = e.target.parentNode;
    elementtoremove.remove(); 

},false)

//i we want only images to be removed

document.querySelector('#imageList').addEventListener('click',(e)=>{
    if(e.target === 'IMG'){
        event.target.parentNode.remove()
    }

},false)

