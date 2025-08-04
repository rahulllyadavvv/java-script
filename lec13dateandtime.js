// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof(myDate));
// let myNewDate = new Date(2023,0,23,16,3)
// console.log(myNewDate.toLocaleString());
// console.log(myNewDate.toLocaleTimeString());
let NewCreatedDate = new Date("01-22-2025");
let NewCreatedDate2 = new Date("2025-01-14");
console.log(NewCreatedDate2.toLocaleString());
console.log(NewCreatedDate.toLocaleDateString());
// let myTimeStamp =Date.now();
// console.log(myTimeStamp);
// console.log(NewCreatedDate2.getTime());
console.log(Date.now()); //output is in miliseconds
//now we will write to get the tiem in seconds
console.log((Date.now()/1000));
//now to avoid decimal we will use florr (roundingoff)
console.log(Math.floor((Date.now()/1000)));
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(NewCreatedDate.getTime());
console.log(Math.floor(NewCreatedDate.getTime()/1000))
let newDate3 = new Date('2004-12-08');
// console.log(newDate3.getMonth()); //takes indexing of month from zero so the user may get confused so add 1 to it
// console.log(newDate3.getMonth()+1);
// console.log(newDate3.getFullYear());
// console.log(newDate3.getDay());
console.log(newDate3.toLocaleString('default',{ //most impppppppppppppp
    weekday:"long"
}))
console.log(newDate3.toLocaleString('default',{
    weekday:"long"
}));






