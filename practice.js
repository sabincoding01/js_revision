let x="sabin";
console.log(x);
console.log(typeof(x));

// object:- collectioon of data of different types

let sabin = {
    name:"sabin",
    height:5.2
};

console.log(sabin);
console.log(typeof(sabin))
console.log(sabin.name) 
console.log(sabin['height'])

//non premitive data type { object array, function}

let student1 ="sabin";
let student2 = student1;
student2="saroj";
console.log(student1);//sabin
console.log(student2);// saroj doesnt affected by reference data type it store address rather than value


// premitive data type { object array, function}

let user1 = {
    name:"sabin",
    height:5.2
};
let user2 = user1;
user2.name="saroj";
console.log(user1);//saroj
console.log(user2)