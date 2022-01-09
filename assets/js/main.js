//enabling strict mode
// "use strict";
//     try {
//         let let = 9;
//     }catch (e) {
//         alert("Strict mode error");
//     }

//Use of functions and closure example
function startDemo() {
    let firstName = prompt("Enter first name:", "Not");
    let lastName = prompt("Enter last name:", "Provided");

    function showFullName() {
        alert("Welcome "+firstName+" "+lastName);
    }

    return showFullName();
}
let demo = startDemo();
console.log(demo);


//Prototype example
function Investor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Investor.prototype.email = "Email not set";

function protoDemo() {
    let investorDemo = new Investor(
        prompt("Enter investor's first name"),
        prompt("Enter investor's last name"));
    if (investorDemo.email === "Email not set"){
        investorDemo.email = prompt("Enter investor's email");
    }
    alert(investorDemo.email);
}

//Encapsulation example
class Driver {
    constructor(_name,_rating) {
        let name = _name;
        let rating = _rating;

        this.getDriverName = function() {
            return name;
        }

        this.getDriverRating = function() {
            return rating;
        }
    }

}

function encapsulationDemo() {
    let driver = new Driver(prompt("Enter driver name"),prompt("Rate the driver(1-10)"));

    alert(driver.getDriverName()+"'s rating is "+driver.getDriverRating())
}

//Inheritance example
class Phone {
    constructor(brand) {
        this.phoneName = brand;
    }
    displayBrand(){
        return this.phoneName;
    }
}
class Model extends Phone{
    constructor(brand,model) {
        super(brand);
        this.model = model;
    }
    displayModel() {
        return this.displayBrand() +" "+this.model;
    }
}
function inheritanceDemo() {
    let myPhone = new Model(prompt("Enter phone brand"),prompt("Enter phone model"));
    alert("Your phone is " + myPhone.displayModel());
}




let debts = [
    {id:1, name: "Madeni", amount:1000,},
    {id:2, name: "Kijana", amount:230,},
    {id:3, name: "Boyii", amount:340,},
];
console.log(debts[0].name);

function createDebt(debtId,debtorName,debtAmount){
    debts.push({id:debtId,name:debtorName,amount:debtAmount});
    console.log("Debt added!")
    console.log(debts);
}

//createDebt(40,"Bazeng",100)

function displayDebts(){
    debts.forEach(function(item){
        return console.log(item.name + " owes " + item.amount);
    })
}

//displayDebts();

function updateDebt(id,newAmount){
    let debtObj = debts.find(function(debt){
        if(debt.id ===id)debt.amount = newAmount
    })
    displayDebts()
}

//updateDebt(2,500);


function deleteDebt(id) {
    let deleteIndex = debts.findIndex(function (debt) {
        return debt.id === id;
    });

    debts.splice(deleteIndex,1);
    displayDebts()
}

deleteDebt(3);