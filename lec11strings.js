const name="rahul"
const age =20
console.log("Hello !!! my self " + name +" and i am "+age+" years old")
console.log(`hello my name is ${name} and my age is ${age}`)
const newname = new String("Rohit")
console.log(newname[0])
console.log(newname.toUpperCase());
console.log(newname.charAt[0]);
console.log(newname.indexOf('i'));
const newname2 =name.substring(0,4)
console.log(newname2.toUpperCase());
const slicedname = name.slice(-4,-1)
console.log(slicedname)
//the difference b/w substring and slice is slice allows negative indexing while substring doesnt allow negative values
// substring(): If the startIndex is greater than the endIndex, substring() automatically swaps the two arguments before extracting the substring. This ensures a valid substring is always returned.
// slice(): If the startIndex is greater than the endIndex, slice() returns an empty string ("") because it does not swap the arguments.
// Examples:
coursename=" bachelors in technology "
coursename.trim();
console.log(coursename)
console.log(coursename.trim()) //trim() remove th empty space from the start and end of the string

const url ="https://hites.com/hitesh%20choudhary"
console.log(url)
console.log(url.replace('%20','-'))
console.log(url.includes("rahul"))
console.log(url.includes('https'))
console.log(url.split(':')); //the argument passed in spits are seprator and limit but in this case we are only passing the seprator 