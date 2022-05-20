function getAge(arrayAge) {
    var newAraayAge = [];
    for (var i = 0; i < arrayAge.length; i++) {
        if (arrayAge[i] > 20) {
            newAraayAge.push(arrayAge[i]);

        }
    } return newAraayAge;
}
getAge([2, 55, 88, 3, 99]);


function getArraynumber(array) {

    var newarray = [];
    for (var i = 0; i < array.length; i++) {
        var newarrays = array[i] + "." + i;
        newarray.push(newarrays);
    }
    return newarray;
}
getArraynumber(["one","two","three"])



function getArrayWithIndex(array) {
    let arrayWithIndex = [];
    for (let i = 0; i < array.length; i++) {
        let withIndex = array[i] + "." + i;
        arrayWithIndex.push(withIndex)

    }
    return arrayWithIndex;
}

console.log(getArrayWithIndex(['one', 'two', 'three']));


function getNewRrrayWithEven(array) {
    var evenarray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenarray.push("even");

        }
        else {
            evenarray.push(array[i]);
        }
    } return evenarray;

}
getNewRrrayWithEven([1, 2, 3, 4, 5, 6]);



function logNumbers() {
var num1 = +prompt("num1")
var num2 = +prompt("num2")
console.log(num1,num2);

}
logNumbers()


function logNumbers(num1, num2) {

    if (num1 + num2 >= 13) {
        console.log("bar-mitzva");
    }
    if (num1 + num2 == 12) {
        console.log("bat-mitzva");
    }
    else {
        console.log("kid");
    }

}
logNumbers(22,2)



function getNameAge(firsrname, lastsname, age, number) {
    if (age > 18) {
        for (var i = 0; i < number; i++) {
            console.log(firsrname, lastsname);

        }

    }
    else{
        console.log(firsrname, lastsname);

    }

}
getNameAge("shlomo", "hailo", 17, 3);


function logjs() {
    for (var i = 0; i < 1000; i++) {
        console.log("javascript is not JAVA");
    }
}
logjs()


function printame(firstname, number) {
    for (var i = 0; i < number; i++){
        console.log(firstname);
    }

}
printame(prompt("enter name"),+prompt("enter number"))



function getNanmberFromUserAndPrint(firsrname, lastsname, email, age, number) {
    console.log(firsrname, lastsname, email, age);
    if (age > 18){
        for (var i = 0.; i < number; i++){
        console.log(firsrname, lastsname, email, age);
        }
    }

}
getNanmberFromUserAndPrint(prompt("enter name"), prompt("enter last name"), prompt("enter email"), +prompt("emter age"), +prompt("enter number"))


function getMyName(number) {

    for (var i = 0; i < number; i++) {
        firsname = prompt("enetr name")
        if (firsname == "shlomo") {
            console.log("hi boss + your name");
        }
        else {
            console.log("no entry");
        }
    }
}
getMyName(+prompt("eneterr number"))


function getTwoNumber(num1, num2) {
    for (var i = 0; i < num1; i++) {
        for (var i = 0; i < num2; i++) {

        }
    }
    console.log(num1 * num2);
}

getTwoNumber(+prompt("enter num1"), +prompt("enter num2"))


function getFiveNumber(array) {
    for (var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
getFiveNumber([5, 4, 5, 3, 2])


function printArrayNames(array){
    for(var i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
printArrayNames(["shlomo","hailo","shlomo","hailo"])

function getEightNanber(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            console.log(array[i]);
        }
    }

}
getEightNanber([22, 88, 33, 55, 99, 66, 44, 77])


function getSevenNmber(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            console.log(array[i]);
        }
    }
}
getSevenNmber([7, 4, 5, 9, 7, 6, 5])


function nambersAndWord(array) {
    var motnumberarray = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string' ) {  
            motnumberarray.push("not_number")
        } else {
            motnumberarray.push(array[i])
        }

    };
    console.log(motnumberarray);
}
nambersAndWord([6, "af", 2, "sac", 3, "nj", "jk"])




function numberFromUser() {
    var num1 = +prompt("num1");
    var num2 = +prompt("num2");
    var num3 = +prompt("num3");

    if (num3 > num2 && num1 < num2){
        console.log("סדר עולה");
    }
    if (num3 < num2 && num1 > num2){
        console.log("סדר יורד");
    }
    else{
        console.log("אין סדר");
    }
}
numberFromUser()


function getString(mystring) {

for(var i=0;i<mystring.length;i++){
    console.log(mystring[i]);
}
}
getString("shlomo");

function getNaanString(mystring) {
    var newstring = [];
    for (var i = 0; i < mystring.length; i++) {
        if ([i] % 2 == 0){
            newstring.push(2)
        }
        else{
            newstring.push(mystring[i])
        }
    }console.log(newstring);
}
getNaanString("shlomo")


function getFirstName(firsname) {


        if (firsname[0] == "A") {
            console.log("hello");
        }
        else {
            console.log("bey");
        }

}
getFirstName((prompt("enter name")))


function getLastName(lastsname) {


    if (lastsname[- 1] == "E") {
        console.log("yes");
    }
    else {
        console.log("no");
    }
}
getLastName((prompt("last name")))


function getStrintApp(samestring) {
    return samestring.toUpperCase();
}
getStrintApp("shlomo")


function moveFromStringToNUM(stringnumbers) {
  
    console.log(parseInt(stringnumbers));
}
moveFromStringToNUM(("1,22,33"))

