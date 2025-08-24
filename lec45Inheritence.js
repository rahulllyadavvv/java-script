///////////////inheritence
class studentname{
    constructor(studentname){
        this.studentname = studentname;
    }

    logme(){
        console.log(`student name is ${this.studentname}`);
    }
}

class fulldetails extends studentname{
    constructor(studentname,email,password){
        super(studentname)
        this.email = email
        this.passwoord = password

    }

    addcourse(){
        console.log(`A new course is added by ${this.studentname}`)
    }

}
//Always remember class constructor cannot be invoked without new keyword.
const student1 = new fulldetails("Rahul Yadav","Rahulgooglemeployee@gmail.com","Ry@2345")
student1.addcourse()
console.log(student1);
const student2 = new studentname("Vishwas");
//student2.addcourse();  //class studnetname is not having access to  class fulldetails 
student2.logme()
console.log(student1 instanceof fulldetails);
console.log(student1 instanceof studentname);

