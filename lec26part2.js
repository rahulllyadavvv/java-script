//switch
//switch syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 12;

switch (month) {
  case 1:
    console.log("You were born in January");
    break;
  case 2:
    console.log("You were born in February");
    break;
  case 12:
    console.log("You were born in December");
    break;
  default:
    console.log("You are not born in January, February, or December");
    break;
}
const birthmonth = "jan"

switch (birthmonth) {
  case "jan":
    console.log("You were born in January");
    break;
  case "feb":
    console.log("You were born in February");
    break;
  case "dec":
    console.log("You were born in December");
    break;
  default:
    console.log("You are not born in January, February, or December");
    break;
}



