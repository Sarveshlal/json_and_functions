//problem 1
var num = 10;
function addFive(num) 
{ 
    return num+5;
}
var result = addFive(num);

console.log(result)

//problem 2
var num = 5.5;
function getOpposite(num) {
    if(num>0 && Math.ceil(num) == num)
        return (-num)
    else
        return (-1)
}
var result = getOpposite(num)
console.log(result)

//problem 3
var min = 5;
function toSeconds(min) {
    return min*60;    
}
var secs = toSeconds(min)

//problem 4
var mystr = "5";
function toInteger(mystr) {
    return (parseInt(mystr))    
}
var myint = toInteger(mystr)
console.log(myint)

//problem 5
var myint = -5;
function nextNumber(myint) {
    return myint+1;    
}
var myNextint = nextNumber(myint)
console.log(myNextint)

//problem 6
var arr = [10, 2, 3];
function getFirstElement(arr) {
    return arr[0]    
}
var data = getFirstElement(arr)
console.log(data)

//problem 7
var arr = 2;
function hourToSeconds(arr) {
    return arr*3600
}
var data = hourToSeconds(arr)
console.log(data)

//problem 8
function findPerimeter(num1,num2) {
    return (2*(num1+num2))   
}
var peri = findPerimeter(6,7)
console.log(peri)

//problem 9
function lessThan100(num1,num2) {
    if((num1+num2) < 100)
        return true
    else
        return false
}
var res = lessThan100(22,15)
console.log(res)

//problem 10
function remainder(num1,num2) {
    rem = num1 % num2
    return rem
}
var res = remainder(-9,45)
console.log(res)

//problem 11
function CountAnimals(tur,horse,pigs) {
    total = (tur*2)+(horse*4)+(pigs*4)
    return total
}
var legs = CountAnimals(2,3,5)
console.log(legs)

//problem 12
function frames(num1,num2) {
    return (num1 * (num2*60))
}
var fps = frames(10,25)
console.log(fps)

//problem 13
function divisibleByFive(num1) {
    if(num1%5 === 0)
        return true
    else
        return false
}
var divisible = divisibleByFive(37)
console.log(divisible)

//problem 14
function isEven(num){
    if(num%2 === 0)
        return true
    else
        return false
}
var even = isEven("11h")
console.log(even)

//problem 15
function areBothOdd(num1, num2){
    if((num1%2 !== 0)&&(num2%2!==0))
        return true
    else
        return false
}
var odd = areBothOdd(1,4)
console.log(odd)

//problem 16
function getLengthOfWord(word1){
    if(word1.length>=0)
        return word1.length
    else
        return (-1)
}
var len = getLengthOfWord(9)
console.log(len)

//problem 17
function isSameLength(word1, word2){
    if(word1.length == word2.length)
        return true
    else
        return false
}
var length = isSameLength("guvi","gek");
console.log(length)

//problem 18
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2){
    var x = Math.pow(x2-x1,2)
    var y = Math.pow(y2-y1,2)
    var distance = Math.sqrt(x+y)
    return distance
}

//problem 19
let getNthElement=(arr,i)=>arr[i]
console.log(getNthElement([1, 3, 5], 1));

//problem 20
let getLastElement=(arr)=>arr[arr.length-1]
console.log(getLastElement([1, 2, 3, 4]))

//problem 21
let addProperty=(obj,mykeys)=>{mykeys,true}
console.log(addProperty("obj", "mykey"));

//problem 22
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
    var count= 0,sum = 0;
    for(var i in arr){
        if(arr[i]>0)
            count++
        else
            sum = sum+arr[i]
    }
    var a = []
    a.push(count,sum)
    return a
}
console.log(countPositivesSumNegatives(arr));

//problem 23
var pos = []
function getPositives(ar)
{
    for(var i in ar)
    {
        if(ar[i]>0)
            pos.push(ar[i])
    }
    return pos
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

//problem 24
let powersOfTwo=(num)=>{
    res=[1];
    for(i=1;i<=num;i++){
        res.push(i*2)
    }
    return res;
}
console.log(powersOfTwo(2))

//problem 25
function findMax(ar)
{
    var maxi = ar[0]
    for(var i=1;i<ar.length;i++){
        if(ar[i]>maxi)
            maxi = ar[i]
    }
    return maxi
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

//problem 26
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
  if(n%2!==0){
      return true
      
  }
}

//problem 27
var s = reverseString("JavaScript");
function reverseString(s)
{
    var str = ""
   var data = s.split("")
   for(var i=data.length-1;i>=0;i--)
   {
       str =  str + data[i]
   }
   return str
}
console.log(s)

//problem 28
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 for(let el of ar2)
 {
 result.push(el);
 }
 
 return result;
}

//problem 29
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  let arr=s.split(",")
  sum=0;
  for(i=0;i<arr.length;i++){
       sum=sum+ parseInt(arr[i]);
  }
  return sum
}