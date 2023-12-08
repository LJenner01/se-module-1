
function Alex(){
    display();
    let answer = findSquare(4);
    let celsius = Fahrenheit(20);
    let Area = measurements(5,6);
    let Circircum = radius1(5);
    let Cirarea = radius2(5);
    let reversed = reversenumber(12357);
    let vowel = countvowel("wording");
    console.log(answer);
    console.log(celsius);
    console.log(Area);
    console.log(Circircum);
    console.log(Cirarea);
    console.log(reversed);
    console.log(vowel);
    console.log(flattenArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    (checkPalindrome("test"));
    (checkPalindrome("radar"));
    console.log(simpleInt(10000,4,3));
    console.log(genRandom(1,60));
    console.log(getFactorial(7));
    console.log(letterCount('I want this apple.','a'));
}
// Q1
function display() {
    console.log("Hello from Alex");
}
// Q2
function findSquare(a){
    return a*a;
}
// Q3
function Fahrenheit(cel) {
    return (cel*9/5)+32;
}
// Q4
function measurements(a,b){
    return (a*b);
}
// Q5
function radius1(a){
return (2*Math.PI*a);
}
function radius2(a){
    return (a*Math.PI*a);
}
// Q6
function reversenumber(rnum){
var remain = 0;
while (rnum != 0){
    remain = remain * 10;
    remain = remain + rnum%10;
    rnum = Math.trunc(rnum/10);
}
return remain;
}
// Q7
function countvowel(str){
    var number=0
    str= str.toLowerCase();
        for (var i=0; i < str.length; i++){
            if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
                number++;}
        }
    return number;
}
// Q8
function flattenArr(arr){
    return arr.reduce((result, array) => result.concat(array));
}
// Q9
function checkPalindrome(str){
    let reveresed = str.split('').reverse().join('');

    if ( str === reveresed){
        return true;
    }
    else{
        return false;
    }
}
// Q10
function simpleInt(principle, rate, time) {
    let amount = principle + principle*time*rate;
    return amount; 
  }
// Q12
function genRandom(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}
// Q13
function getFactorial(num) {
    if(num==0 || num==1){
      return 1;
    }
    else{
        return num*getFactorial(num-1);
    }
  }
// Q16
function letterCount(word,letter){
    var number=0;
    word=word.toLowerCase();
    for(i=0;i<word.length;i++){
        if(word.charAt(i)==letter){
            number++;
        }
    }
    return number;
}

module.exports = {findSquare,checkPalindrome,letterCount};