// const requesturl ='https://api.github.com/users/rahulllyadavvv'
// const xhr = new XMLHttpRequest();
// xhr.open('GET',requesturl)
// xhr.onreadystatechange= function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState===4){
//         const data =JSON.parse(this.responseText) //this.responsetext is the data from the api which is  in the form of string.
//         //JSON.parse converts the string into JSON object 
//       console.log(data.followers); 
//     }
// }

// xhr.send()

/////////////////project by sir 
const requesturl ='https://api.github.com/users/rahulllyadavvv'
showfollowers = document.getElementById('followers');
profilepic = document.getElementById('profilepic');
const xhr = new XMLHttpRequest();
xhr.open('GET',requesturl)
xhr.onreadystatechange= function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        const data =JSON.parse(this.responseText) //this.responsetext is the data from the api which is  in the form of string.
        //JSON.parse converts the string into JSON object 
      showfollowers.innerHTML = `Followers : ${data.followers}`
      console.log(profilepic.src = data.avatar_url);
    }
}

xhr.send()