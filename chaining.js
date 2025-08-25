//complex real-world example using .map(), .filter(), and .join() chained together 
const employees = [
  { name: "Rahul", age: 25, salary: 75000, role: "Developer", company: "Google" },
  { name: "Amit", age: 30, salary: 68000, role: "Manager", company: "Amazon" },
  { name: "Priya", age: 28, salary: 80000, role: "Designer", company: "Google" },
  { name: "Riya", age: 24, salary: 60000, role: "Analyst", company: "Google" },
  { name: "John", age: 35, salary: 90000, role: "Architect", company: "Microsoft" }
];

/////////////////question/////////////
// You have a list of employees, and you want to:

// Filter out employees from the company "Google"

// Only include those with salary > ₹70,000

// Extract just their names and roles

// Display them in a readable string like:
// "Rahul (Developer), Priya (Designer), ..."
const output =employees.filter((employe)=>{return employe.company==="Google" && employe.salary >70000}).map((employe)=>{return `Name:${employe.name} Age:${employe.age} Role:${employe.role} Salary:${employe.salary*3}`}).join("\n");

console.log(output)



////////////////////////ques 2///////////////////////////
const orders = [
  {
    userId: 1,
    status: 'delivered',
    products: [
      { name: 'Shirt', category: 'clothing', price: 500, quantity: 2 },
      { name: 'Jeans', category: 'clothing', price: 1200, quantity: 1 }
    ]
  },
  {
    userId: 2,
    status: 'cancelled',
    products: [
      { name: 'Laptop', category: 'electronics', price: 50000, quantity: 1 }
    ]
  },
  {
    userId: 1,
    status: 'delivered',
    products: [
      { name: 'Shoes', category: 'footwear', price: 2000, quantity: 1 }
    ]
  }
];

// Tasks:
// Filter only delivered orders
// Extract all products from those orders
// Compute the total revenue using .reduce()
const cartitems = orders.filter((item)=>item.status==="delivered").map((item)=>item.products[0])
console.log(cartitems)
const cartvalue = cartitems.reduce((acc,item)=>acc+item.price,0);
console.log(cartvalue);