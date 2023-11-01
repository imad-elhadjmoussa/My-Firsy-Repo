export class person{
    constructor(firstName,lastName,age){
        this.age=age;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    Display() {
        console.log(`Your Full Name Is : ${this.firstName}  ${this.lastName}
        \nYour Age is : ${this.age}`);
    }
}

function calc(a,b){
    console.log(`The Sum : ${a+b}
    \nThe Substrction : ${a-b}
    \nThe Multeplication : ${a*b}
    \nThe Divition : ${a/b}
    `);
}

export {calc};