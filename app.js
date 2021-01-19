
// my name
let myName = 'Garrett';
let myAge = 21;

// number of states
const numOfStates = 50;

// adds 5 and 4
let sum = 5 + 4;

function sayHello() {
    alert('Hello World!')
};

// sayHello()

function checkAge(name, age) {
    if (age < 21) {
        console.log('Sorry ' + name + ', You arent old enough to view this page!')
    } else {
        console.log("Welcome " + name)
    }
}


checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
checkAge(myName, myAge);

console.log(' ');
const favVeg = ["Asparagus", "carrot", "Corn?", "potato"];


for (i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
};

let myPet = {
    name: "fish",
    breed: 'fish'
};

console.log(' ');

console.log(myPet.name, myPet.breed);

console.log(' ');

let objArray = [
    {
        name: "name1",
        age: 24
    },
    {
        name: "name2",
        age: 13
    },
    {
        name: "name3",
        age: 26
    },
    {
        name: "name4",
        age: 20
    },
    {
        name: "name5",
        age: 99
    }
];


for (i = 0; i < objArray.length; i++) {
    checkAge(objArray[i].name, objArray[i].age)
};

console.log(' ')

function getLength(word) {
    if (word.length % 2 == 0) {
        console.log('The World is Nice and Even!')
    } else {
        console.log('The World is an Odd Place!')
    }
};

getLength('Banana');
getLength('Garrett');
getLength('Ba');
