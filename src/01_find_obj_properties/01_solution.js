// Code your solution here
let findObjPropsHasOwn = function(object) {
    let properties = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            properties.push(key);
        }
    }
    return properties.join(", ");
}
// let person = new Object();
// person.name = 'John';
// person.age = '23';
// person.city = 'NY';
// console.log(findObjPropsHasOwn(person));

let findObjKeys = function(object){
    let keys = Object.keys(object);
    return keys.join(', ');
}

// let person2 = Object.create(person)
// person2.height = "6'0"
// person2.grade = "A"

// console.log(person2)
// console.log(findObjKeys(person2))