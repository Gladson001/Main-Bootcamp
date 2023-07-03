// 1. Comparison of two JSON have the same properties without order:
// let obj1 = {name:"person1", age:5}
// ler obj2 = {age:5 , name:"person1"}

let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

var object = true;

if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (let key in obj1) {
        if (obj1[key] == obj2[key]) {
            continue;
        }
        else {
            object = false;
            break;
        }
    }
}
else {
    object = false;
}

console.log(object);
// output: true


// 2. Use the rest countries Api's url and display of all the country flag in console:

var req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v2/all");
req.send();

req.onload = function () {
    var result = JSON.parse(req.response);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].flags);

    }
}


//3. use of rest countries' Api url and print of all countries names, regions, sub-region and populations.


var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v2/all");
req.send();
req.onload = function () {
    var result = JSON.parse(req.response);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);

    }
}
