var lasya = " manta";

var name = prompt(
    "what is your name"
);
var namecount = name.slice(0,10);

var promptname = prompt("enter your name");

var first_char = promptname.slice(0,1);
 var upperfirst_char = first_char.toUpperCase();


alert(
    upperfirst_char + promptname.slice(1,promptname.length)
);

var firstletter = promptname.slice(0,1);
 var upperfirstletter = firstletter.toUpperCase();

 var remainingletters = promptname.slice(1,promptname.length);

 var lowerremainingletters = remainingletters.toLocaleLowerCase();

 alert(
     upperfirstletter + lowerremainingletters
 );

 
 function modda(){
    var dogage = prompt("what is your age");

    var humanage = (dogage-2)*4+21;
    alert(
        humanage
    );
 }
 modda();
var a = 10;
var b = 20;
 function division(){

    if ((a % 10) == 0 || (b % 10) == 0){
        console.log ("true");

    }
    else{
        console.log ("false");
    }

 }
let age = 18;

switch(true){
    case age<18:
    console.log("child");
    break;
    case  18>age>40:
    console.log("adult");
    break;
    default:
        console.log("old");
}
let days = 0;

switch(days){
     case days==0:
         console.log("Monday");
         break;
    case days==1:
         console.log("Tuesday");
          break;
     case days==2:
         console.log("wedsday");
          break;
    case days==3:
           console.log("Thursday");
           break;         
    case days==4:
          console.log("friday");
          break;  
     default:
         console.log("Friday");       
                     

}
var a = 9;

for(var i = 1; i<=10; i++)
{
    var multiplication = a * i;
    console.log(multiplication);
}
var n = 4520;
function prav(n){

   var a = n.tostring(0,1);

   return a;

}
prav(n);

let a = 10 ;

switch(a){

case 25 || 1:
    console.log("a is equal to 25");
    break;
case 10:
    console.log("a is equal to 10");
    break;
default:
    console.log("a is an integer");
    break;
}

switch(true){
    case a>10:
        console.log("a is greater than 10");
        break;
    case a<10:
        console.log("a is lesser than 10");
        break;
    default:
        console.log("a is equal to ten");        
        break;
}

let m = 10;

for (; m>=20; ){

    console.log(m);
    m++;
}