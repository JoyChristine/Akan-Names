//create array of akan names
let maleNames = ["Kwasi", "Kwadwo","Kwabena"," Kwaku"," Yaw"," Kofi"," Kwame"]
let femaleNames = ["Akosua", "Adwoa","Abenaa","Akua","Yaa","Afua"," Ama"]


//calculate day of the week using given formula
//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//  CC - is the century digits. For example 1989 has CC = 19
//  YY - is the Year digits (1989 has YY = 89)
//  MM -  is the Month
//  DD - is the Day of the month 
//  mod - is the modulus function ( % )
function calculateDay () {
    YEAR = document.getElementById("inputYear").value;
    CC = parseInt(YEAR.slice(0,2));
    YY = parseInt(YEAR.slice(2,4));
    MM = document.getElementById("inputYear").value;
    DD = document.getElementById("inputDay").value;
    DayOfTheWeek = (((CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7;
    console.log("DayOfTheWeek");
    return (Math.floor("DayOfTheWeek"))

}

// An invalid day should be (d<=0) or (d>31)
//An invalid month should be (m<= 0) or (m > 12)  

//the submit button;
//document.getelementbyid("ID_OF_BUTTON");
//addEventListener("click",Function_of_calculated_akan_name)
//


//output should be based on gender
function checkGender() {
    var gender = document.getElementsByName("gender");
    if(gender[0].checked === true){
        var gender = male;
    }else if (gender[1].checked === true){
        var gender = female;
    }else {
        return false
    }
}



