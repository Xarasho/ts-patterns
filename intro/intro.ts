// First Order functions are functions that can be treated as a variable
// This variable can store a function, execute it and can be sent as a parameter to other functions
function sum(a: number, b: number):number {
    return a+b;
}

let res = sum(1,2)
console.log(res);

const fsum = sum;
res = fsum(5,6);
console.log(res);

// A Superior order function is every function that can receive functions as parameters
function operation(fn: any, a: number, b: number){
    console.log("Doing something");
    console.log(fn(a,b));
}

operation(sum, 10, 20);

// Arrow function (anonymous function)
operation((a: number,b: number)=>a*b, 5, 5)
operation((a: number,b: number)=>{
    let c = a + b;
    return c*2;
}, 1, 2)

// forEach
const names = ["Kenny", "Zeus", "Hades"];
names.forEach((name)=>console.log(name));
names.forEach((name)=>console.log(name.toUpperCase())); 
console.log(names); // forEach is an immutable method
names.sort();
console.log(names); // sort is a mutable method

// map
const namesUpper = names.map((name)=>name.toUpperCase());
console.log(namesUpper); // Returns a new array

// reduce
const numbers = [5,4,7,1,10];
const total = numbers.reduce((acc, number)=> acc + number, 0)
console.log(total);

// OOP
// classes
class Drink {
    private name: string;
    // name: string;

    constructor(name: string) {
        this.name = name;
    }

    info(): string {
        return "The drink is: " + this.name;
    }
}

// functional
interface Drink2 {
    name:string;
    info():string;
}

function createDrink2(name: string): Drink2{
    return {
        name: name,
        info: function() {
        return "The drink is: " + this.name;
        }
    };
}


const drink = new Drink("water");
console.log(drink.info());  

const drink2: Drink2 = createDrink2("soda");
console.log(drink2.info());

// Interfaces
interface Product {
    price: number;
    getPrice(): string;
}

// Interface Implementation
class Snack implements Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return `The price is $ ${this.price}`;
    }
} 


// Inheritance
class Beer extends Drink implements Product {
    private alcohol: number;
    price: number;
    
    constructor(name: string, alcohol: number, price: number) {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }
    
    info(): string {
        return super.info() + " " + this.alcohol;
    }

    getPrice(): string {
        return `$ ${this.price}`;
    }
}

const beer = new Beer("Amstel", 4.0, 17.5);
console.log(beer.info());
console.log(beer.getPrice());

const products: Product[] = [
    new Beer("Corona", 4.5, 13),
    new Snack("Chips", 5.50),
    new Beer("Heineken", 5, 12),
];

function getPrices(items: Product[]) {
    for (const item of items) {
        console.log(item.getPrice())
    }
} 

getPrices(products);