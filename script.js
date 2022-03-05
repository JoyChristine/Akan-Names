//create array of akan names & days of the week
var maleNames = ["Kwasi", "Kwadwo","Kwabena"," Kwaku"," Yaw"," Kofi"," Kwame"];
var femaleNames = ["Akosua", "Adwoa","Abenaa","Akua","Yaa","Afua"," Ama"];
var daysOfWeek = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"];

// main caller func
function checkDayOfWeek (){
    day = calculateDay();
    checkGender();
}

function akanNames() {
    
    var yr = parseInt(document.getElementById("inputYear").value);
    var mnth = parseInt(document.getElementById("inputMonth").value);
    var dy = parseInt(document.getElementById("inputDay").value);
    var century = ((yr -1) / 100 -1);
    var formula = (((century /4)-2*century-1) + ((5*yr/4)) + ((26*(mnth+1)/10)) + dy) % 7;
    var dayResult = Math.floor(formula);


    var male = document.getElementById("gridRadios1").checked;
    var female = document.getElementById("gridRadios2").checked;

// An invalid day should be (d<=0) or (d>31)
//An invalid month should be (m<= 0) or (m > 12)  

    if(yr > 0 && yr <=2022){
        if (mnth > 0 && mnth < 13) {
            if(dy> 0 && dy <32) {
                if(male) {
                    document.getElementById("result").innerHTML = ("You were born on " + daysOfWeek[dayResult] +" " + "&" + " " + "your Akan name is " + " "+ " "+ maleNames[dayResult]);
 
                }else if(female) {
                    
                    document.getElementById("result").innerHTML = ("You were born on " + daysOfWeek[dayResult] + " " + "&" + " " + "your Akan name is " + " "+ " "+ femaleNames[dayResult]);
                }
 
            }else {
                 alert("Input the correct date");
            }
 
        }else {
             alert("Input the correct month");
        }
 
    }else {
         alert("Input year before 2022");
    }
     
}
 





















//calculate day of the week using given formula
//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//  CC - is the century digits. For example 1989 has CC = 19
//  YY - is the Year digits (1989 has YY = 89)
//  MM -  is the Month
//  DD - is the Day of the month 
//  mod - is the modulus function ( % )

// var YEAR = document.getElementById("inputYear").value;
// var CC = parseInt(YEAR.slice(0,2));
// var YY = parseInt(YEAR.slice(2,4));
// var MM = document.getElementById("inputMonth").value;
// var DD = document.getElementById("inputDay").value;
// var DayOfTheWeek = (((CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7;

// function calculateDay () {
//     // YEAR = document.getElementById("inputYear").value;
//     // CC = parseInt(YEAR.slice(0,2));
//     // YY = parseInt(YEAR.slice(2,4));
//     // MM = document.getElementById("inputMonth").value;
//     // DD = document.getElementById("inputDay").value;
//     // DayOfTheWeek = (((CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7;
//     console.log("DayOfTheWeek");
//     return (Math.floor("DayOfTheWeek"))

// }

// An invalid day should be (d<=0) or (d>31)
//An invalid month should be (m<= 0) or (m > 12)  

//the submit button;
//document.getelementbyid("ID_OF_BUTTON");
//addEventListener("click",Function_of_calculated_akan_name)
//

// main caller func
// function checkDayOfWeek (){
//     day = calculateDay();
//     checkGender();
// }
//output should be based on gender 
// function checkGender() {
//     // var male = document.getElementById("gridRadios1").checked;
//     // var female = document.getElementById("gridRadios2").checked;
//     var gen = document.getElementsByName("gender");
//     if(gen[0].checked === true){
//         var gender = male;
//     }else if (gen[1].checked === true){
//         var gender = female;
//     }else {
//         return false;
//     }

//         //SWITCH
//     switch(gender) {
//         case gender = "male":
//         switch(day){
//             case (0 || -0):
//                 document.getElementById("result").innerHTML = "You were born on " + daysOfWeek[0]+ "&" + "Your Akan name is" + maleNames[0];
//             break;
//             case (1 || -1):
//                 document.getElementById("result").innerHTML = "You were born on " + daysOfWeek[1] + "&" + "Your Akan name is" + maleNames[1];
//             break;
//             case (2 || -2):
//                 document.getElementById("result").innerHTML = "You were born on "+ daysOfWeek[2] + "&" + "Your Akan name is" + maleNames[2];
//             break;
//             case (3 || -3):
//                 document.getElementById("result").innerHTML = "You were born on "+ daysOfWeek[3]+ "&" + "Your Akan name is" + maleNames[3];
//             break;
//             case (4 || -4):
//                 document.getElementById("result").innerHTML = "You were born on "+ daysOfWeek[4]+ "&" + "Your Akan name is" + maleNames[4];
//             break;
//             case (5 || -5):
//                 document.getElementById("result").innerHTML = "You were born on "+ daysOfWeek[5]+ "&" + "Your Akan name is" + maleNames[5];
//             break;
//             case (6 || -6):
//                 document.getElementById("result").innerHTML = "You were born on "+ daysOfWeek[6] + "&" + "Your Akan name is" + maleNames[6];
//             break;
//             default:
            

//         }
//         break;

//         case gender = "female":
//         switch(day){
//             case (0 || -0):
//                 document.getElementById("result").innerHTML = "You were born on " + daysOfWeek[0]+ "&" + "Your Akan name is" + femaleNames[0];
//             break;
//             case (1 || -1):
//                 document.getElementById("result").innerHTML = "You were born on " + daysOfWeek[1]+ "&" + "Your Akan name is" + femaleNames[1];
//             break;
//             case (2 || -2):
//                 document.getElementById("result").innerHTML = "You were born on " + daysOfWeek[2]+ "&" + "Your Akan name is" + femaleNames[2];
//             break;
//             case (3 || -3):
//                 document.getElementById("result").innerHTML = "You were born on " + daysOfWeek[3]+ "&" + "Your Akan name is" + femaleNames[3];
//             break;
//             case (4 || -4):
//                 document.getElementById("result").innerHTML = "You were born on " + daysOfWeek[4]+ "&" + "Your Akan name is" + femaleNames[4];
//             break;
//             case (5 || -5):
//                 document.getElementById("result").innerHTML = "You were born on " + daysOfWeek[5]+ "&" + "Your Akan name is" + femaleNames[5];
//             break;
//             case (6 || -6):
//                 document.getElementById("result").innerHTML = "You were born on " + daysOfWeek[6]+ "&" + "Your Akan name is" + femaleNames[6];
//             break;
//             default:

//         }break;
        
//     }
    
    
// }

//OR 
//OTHER WAY OF DOING IT








