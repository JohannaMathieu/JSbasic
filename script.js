//variables
var userName = "Lucy";

const birthPlace = "Fritzlar";


//some stuff to put in the console
console.log("Hello, World");
console.info(2, 3, 4);
console.warn(userName);
console.log(birthPlace);

//some changing a variable
let myBudget = 0;

myBudget++;

console.log(myBudget); // Should print 1


//add text to string
let hello = "Hello";

hello += ", World!";

console.log(hello);

// "Hello, World!"


// checking and prinding the day to console

const today = new Date().getDay();

switch (today) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednsday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Yoohoo");
        break;
}


myBudget += 2;

console.log(myBudget); // Should print 3


myBudget = myBudget + 1;

console.log(myBudget); // Should print 4


myBudget--;

console.log(myBudget); // Should print 3


myBudget -= 2;

console.log(myBudget); // Should print 1


myBudget = myBudget - 1;

console.log(myBudget); // Should print 0
