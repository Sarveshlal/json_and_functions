//Problem 0 : Part A (15 mins):
var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}
var totw = 0
cat.weight = 9
cat.name = 'fluffyy';
for(var i in cat.catFriends)
    console.log(cat.catFriends[i].activities)
for(var i in cat.catFriends)
    console.log(cat.catFriends[i].name)
for(var i in cat.catFriends)
    totw = totw + cat.catFriends[i].weight
console.log(totw)

console.log(cat.activities)
for(var i in cat.catFriends)
    console.log(cat.catFriends[i])
cat.catFriends[0].furcolor = "Brown";
cat.catFriends[0].activities.push("active","exiced");
cat.catFriends[1].activities.push("lazy","sad");
console.log(cat.catFriends[0].activities)


//Problem 0 : Part B (15 mins):
var myCar = {
 make: "Bugatti",
 model: "Bugatti La Voiture Noire",
 year: 2019,
 accidents: [
 {
 date: "3/15/2019",
 damage_points: "5000",
 atFaultForAccident: true
 },
 {
 date: "7/4/2022",
 damage_points: "2200",
 atFaultForAccident: true
 },
 {
 date: "6/22/2021",
 damage_points: "7900",
 atFaultForAccident: true
 }
 ]
}

for(var i in myCar.accidents)
    myCar.accidents[i].atFaultForAccident = false;
//console.log(myCar.accidents);
for(var i in myCar.accidents)
    console.log(myCar.accidents[i].date);

//Problem 1 
var obj = {name : "RajiniKanth", 
age : 33,
hasPets : false
};
function printAllValues(obj) {
    var arr = [];
    for(var i in obj)
    {
        //console.log(i)
        var key = i;
        var val = obj[i];
        arr.push(val);
    }
    console.log(arr)
}
printAllValues(obj);

//Problem 2
var obj = {name : "RajiniKanth", 
age : 33,
hasPets : false
};
function printAllkeys(obj) {
    var arr = [];
    for(var i in obj)
    {
        //console.log(i)
        var key = i;
        //var val = obj[i];
        arr.push(key);
    }
    console.log(arr)
}
printAllkeys(obj);

//problrm 3
var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
    var arr=[];
    for(var i in obj)
    {
        var key = i;
        var val = obj[i];
        arr.push([key,val]);
    }
    console.log(arr);
}
convertListToObject(obj);

//Problem 4
var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    var newObject = {};
    newObject[arr[0]] = arr[arr.length - 1];
    return newObject;
}
console.log(transformFirstAndLast(arr));

//problem 5
var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
    var obj = {};
    for(var i in array)
    {
        obj[array[i][0]] =  array[i][1];
    }
    return obj;
}
console.log(fromListToObject(array))

//problem 6
var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    for(var i in array)
    {
        var obj = {}
        for(var j in array[i])
        {
                obj[array[i][j][0]] = array[i][j][1];
        }
        tranformEmployeeList.push(obj);
    }
    console.log(tranformEmployeeList)
}
transformEmployeeData(array);

//problem 7
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};
var testName = "detects that two objects are equal";
function assertObjectsEqual(actual, expected, testName)
{
    if(JSON.stringify(expected) == JSON.stringify(actual))
        console.log("Passed");   
    else
        console.log("FAILED [my test] Expected "+JSON.stringify(expected) + ", but got" + JSON.stringify(actual));
}
assertObjectsEqual(actual, expected, testName)

//problem 8
var securityQuestions = [
 {
 question: "What was your first pet’s name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
]
function chksecurityQuestions(securityQuestions,question,answer) {
    for(var i in securityQuestions)
    {
        if(securityQuestions[0].question === question)
        {
            if(securityQuestions[0].expectedAnswer === answer)
                return true
            else
                return false;
        }
    }     
}
var ques = "What was your first pet’s name?";
var ans  =  "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); 
var ques = "What was your first pet’s name?";
var ans  =  "DufferNutter";
var status1 = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status1);

//problem 9
var students = [
 {name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
 {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
 {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
 {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
 {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
 {name: "Devdas",age: 56} 
 ];
 function returnMinors(arr)
{
	var array = [];
    for(var i in students)
    {
        var keys = i;
        var val = students[i].name;
        if(students[i].age < 20)
        {
            array.push(val);
        }
    }
	return array;
}
console.log(returnMinors(students));