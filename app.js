/////////////////////////Chapter 21-25/////////////////////////////////////////////

1.// var a = prompt ("Enter Your First Name");
// var b = prompt ("Enter Your Last Name");
// fullName = a + " " + b ;
// alert ("Greeting" + " " + fullName );


2.// var str = prompt ("Enter your Favourite Phone");
// var numChars = str.length ;
// document.write ("My Favourite Phone is :" + str + " <br> " + "Lenght of String:" + str.length);

3.// var text = "Pakistani";
// var index = text.indexOf ('n');
// document.write ( "String :" + text + "<br>" + "Index of 'n':" + index );

5.// var str = "pakistani";
// var char = str.charAt(3);
// document.write ( "String :" + str + "<br>" + "Character at Index 3:" + str.charAt(3));

6.// var a = prompt ("Enter Your First Name");
// var b = prompt ("Enter Your Last Name");
// var fullName = a.concat(b);
// alert ("Greeting" + " " + fullName );

7.//  var text = "Hyderabad"
//  var indxNum = text.indexOf ('Hyder') ;
//  var firstText = text.slice (0 ,indxNum);
//  var replacingText = 'Islam';
//  var thirdText = text.slice (indxNum+5)
//  document.write("City" + text + "<br>" + "After replacement is :" + firstText + replacingText + thirdText );

8.// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newText = message.replace(/and/g, "&");
// document.write (newText);

9.// var a = prompt ("Enter User Input");
// newCase = a.toUpperCase();
// document.write ( "User Input :" +  a + "<br>" + "Uppercase is :" + newCase  ); 



14.// var arr = ["Cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("Welcome to ABC Bakery. What do you want to order?");
// var available = false;

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === user) {
//         document.write(user + " is <strong>available</strong> at index " + arr.indexOf(user) + " in our bakery.");
//         available = true;
//     }
// }

// if (!available) {
//     document.write("We are sorry. " + user + " is <strong>not available</strong> in our bakery.");
// }

11.// var char = prompt("Enter User Input");
// var firstChar = char.slice(0, 1);
// var otherChars = char.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var newChar = firstChar + otherChars;
// document.write("User Input :" + char + "<br>" + "Title case :" + newChar );

17.// var a = prompt ("Enter User Input");
// var res = a.charAt(a.length-1);
// document.write("User Input:" + a + "<br>" + "Last character Of input:" + res);



8.// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// alert("Message: " + message + "\n" + "After replacement: " + newMessage);

9.// var str = "472";
// var strNumb = Number(str);
// alert("Value: " + str + "\n" + "Type: " + typeof (str) + "\n" + "Value: " + strNumb + "\n" + "Type: " + typeof (strNumb));

12.// var num = 35.36;
// var numToString = num.toString();
// var newText = numToString.replace(".", "");
// alert("Number: " + num + "\n" + "Result: " + newText);

13.// var userName = prompt("Write your Username");
// for (i = 0; i < userName.length; i++) {
//     if (userName.charAt(i + 1) === "@" || userName.charAt(i + 1) === "." || userName.charAt(i + 1) === "," || userName.charAt(i + 1) === "!") {
//         alert("Please Enter a Valid Username");
//     }
// }

15.// var inpuPass = prompt("What's your Password?");
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var temp = false;
// for (var i = 0; i < inpuPass.length; i++) {
//     if (inpuPass.slice(0, 1) === numbers[i]) {
//         alert("Entered Password: " + inpuPass + "\n" + "Password can not start with a number. Please Enter a valid Password");
//         temp = true;
//         break;
//     } else if (inpuPass.length < 6) {
//         alert("Entered Password: " + inpuPass + "\n" + "Password must at least 6 characters long. Please Enter a valid Password");
//         temp = true;
//         break;
//     }
// }
// if (temp === false) {
//     alert("Your password has been saved. Thank You!");
// }

16.// var myWindow = window.open();
// var university = "University of Karachi";
// var splitted = university.split("");
// for (var i = 0; i < splitted.length; i++) {
//     myWindow.document.write("Index No. " + i + " is " + splitted[i]);
// }

18.// var text = ("The quick brown fox jumps over the lazy dog");
// var temp = 0;
// for (var i = 0; i < text.length; i++) {
//     if ((text.slice(i, i + 3)).toLowerCase() === "the") {
//         temp++
//     }
// }
// alert("Text: " + text + "\n" + "There are " + temp + " occurrence(s) of word 'the' ");

4.// var str = "Hello World";
// var strIndex = str.lastIndexOf('l');
// alert("String: " + str + "\n" + "Index of 'l': " + strIndex);


////////////////////////Chapter 26-30/////////////////////////////////////////////

7.// var temp = false;
// var userInput = prompt("Enter your weight in kilograms");
// for (var i = 0; i < userInput.length; i++) {
//     if (userInput.slice(i, i + 4) === " kgs") {
//         userInput = userInput.slice(0, i) + " kilograms";
//         temp = true;
//         break;
//     } else if (userInput.slice(i, i + 3) === "kgs") {
//         userInput = userInput.slice(0, i) + " kilograms";
//         temp = true;
//         break;
//     } else if (userInput.slice(i, i + 10) === " kilograms") {
//         temp = true;
//         break;
//     } else if (userInput.slice(i, i + 9) === "kilograms") {
//         userInput = userInput.slice(0, i) + " kilograms";
//         temp = true;
//         break;
//     }
// }
// if (temp === false) {
//     userInput = userInput + " kilograms";
// }
// alert("The weight of user is " + userInput);



4.// var randomNumber = Math.random();
// randomNumber = Math.ceil(randomNumber * 6);
// alert("random dice value is: " + randomNumber);

5.// var randomNumber = Math.random();
// randomNumber = Math.ceil(randomNumber * 2);
// var coinToss = ["Error", "Tails", "Heads"];
// alert(randomNumber + "\nrandom coin value is: " + coinToss[randomNumber]);


1.// var scoreAvg = prompt ("Enter Number");
// var numberOfStars = Math.round(scoreAvg);
// scoreAvg1 = Math.round(scoreAvg);
// var numberOfStars = Math.ceil(scoreAvg);
// scoreAvg2 = Math.ceil(scoreAvg);
// var numberOfStars = Math.floor(scoreAvg);
// scoreAvg3 = Math.floor(scoreAvg);
// document.write("Number :" + scoreAvg + "<br>" + "Roundoff :" + scoreAvg1 + "<br>" +  "Ceil :" + scoreAvg2 + "<br>" +  "Floor :" + scoreAvg3   )

2.// var scoreAvg = prompt ("Enter Number");
//  var numberOfStars = Math.round(scoreAvg);
//  scoreAvg1 = Math.round(scoreAvg);
//  var numberOfStars = Math.ceil(scoreAvg);
//  scoreAvg2 = Math.ceil(scoreAvg);
//  var numberOfStars = Math.floor(scoreAvg);
//  scoreAvg3 = Math.floor(scoreAvg);
//  document.write("Number :" + scoreAvg + "<br>" + "Roundoff :" + scoreAvg1 + "<br>" +  "Ceil :" + scoreAvg2 + "<br>" +  "Floor :" + scoreAvg3   )

// var input = prompt ("Enter Your weight in kgs");
// var input1 = parseFloat(input);
// document.write("The Weight of User is" + input1 +" Kilograms");

8.//   var a = prompt("Enter Number Between 1 and 10");
//   if (a <= 10) {
//    alert("Congratulations")
//   }
//   else  {
//       alert("Try again")
//   }

3.// var a = -4;
// newValue = Math.abs(a);
// alert("The absolute value of -4 is " + newValue)

6.// var a ;
// value = Math.random(a);
// for (a=0; a <= 100 ;a++){
// document.write("Random value Between 1 and 100 is  " + newvalue)
// break;
// }


////////////////////////Chapter 31-34/////////////////////////////////////////////

1.// var a = new Date();
// document.write(a);

13.//    var age = prompt("Enter your age :");
// age = parseInt(age);
// var birth_day_year = 2018 - age;
// alert("Your age is :" + age);
// alert("Your Birthday year is : " + birth_day_year)

    14.// var a =  "ABC" ;
    // var b = "June";
    // var numberOfunits = "410" ;
    // var chargesPerunit = "16";
    // netAmountpayable =  numberOfunits * chargesPerunit ;
    // var latePaymentsurcharge = "350" ;
    // grossAmountpayable = +netAmountpayable+ +latePaymentsurcharge ;
    // document.write("KE Electric Bill" + "<br>" +"Customer Name :" + a + "<br>" + "Current Month :" + b + "<br>" + "Units :" + numberOfunits + "<br>" + "Charges Per Unit : " + chargesPerunit + "<br>" + "Net Amount Payable (Within Due Date) :" + netAmountpayable + "<br>" +" Late Payment Surcharge :" + latePaymentsurcharge + "<br>" + "Gross Amount Payable (After Due Date) :" + grossAmountpayable );
     
    4.// // var a = prompt("Enter Day");
    // // switch(a){
    // //  case "Saturday":
    // //  alert("Its Fun Day");
    //     break;
    // //  case "Sunday ":
    // //      alert("Its Fun Day");
    //      break;
    // //     default:
    // //         alert("Try again"); 
    // //     }

    3.// var a = prompt("Enter Full Day");
    //      switch(a){
    //      case "saturday":
    //      alert("Today is sat");
    //      break;
    //       case "sunday ":
    //       alert("Today is sun");
    //        break ;
    //       case "monday ":
    //       alert("Today is mon");
    //       break;
    //       case "tuesday ":
    //       alert("Today is tues");
    //       break;
    //       case "wednesday ":
    //       alert("Today is wed");
    //       break;
    //       case "thursday ":
    //       alert("Today is thurs");
    //       break;
    //       case "friday ":
    //       alert("Today is fri");
    //       break;
         
    //   }
    
   5. // var a = prompt("Enter date ");
    // if (a <= 16){
    //     alert("Last days of the month");
    // }
    // else{
    //     alert("First fifteen days of the month");
    // }

7.//     var currentDate = new Date();
//    var time = currentDate.getHours();
//    if (time < 12) {
//        alert("It's AM");
//    } else {
//        alert("It's PM");
//    }

12.// var newDate = new Date();
// var yearBack = new Date();
// var currentYear = newDate.getFullYear();
// currentYear = currentYear - 100;
// yearBack.setFullYear(currentYear)
// alert("Current Date: " + newDate + "\n" + "100 years back, it was " + yearBack);
  
10.// var refDate = new Date("December 5, 2015 22:50:16");
// var beginDate = new Date("January 1, 2015");
// var refDateMilli = refDate.getTime();
// var beginDateMilli = beginDate.getTime();
// var milliDiff = refDateMilli - beginDateMilli;
// var secCalc = Math.ceil(milliDiff / 1000 / 60);
// alert(secCalc + " seconds had passed since begining of 2015");

9.// var newDate = new Date();
// var firstRamzanDate = new Date("June 18, 2015");
// var newDateMilli = newDate.getTime();
// var firstRamzanDateMilli = firstRamzanDate.getTime();
// var milliDiff = newDateMilli - firstRamzanDateMilli;
// var daysCalc = Math.ceil(milliDiff / 1000 / 60 / 60 / 24);
// alert(daysCalc + " days have passed since 1st Ramzan, 2015");

8.// var laterDate = new Date("December 31, 2020");
// alert("Later date: " + laterDate);

6.// var currentDate = new Date();
// var milliSeconds = currentDate.getTime();
// alert("Current Date: " + currentDate + "\n" + "Elapsed milliseconds since January 1, 1970: " + milliSeconds + "\n" + "Elapsed minutes since January 1, 1970: " + milliSeconds / 1000 / 60);

2.// var currentDate = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var month = currentDate.getMonth();
// for (var i = 0; i < months.length; i++) {
//     if (i === month) {
//         alert("Current Month: " + months[i]);
//         break;
//     }
// }


////////////////////////Chapter 35-38/////////////////////////////////////////////
    
    2.// var a = prompt ("Enter Your First Name");
    //  var b = prompt ("Enter Your Last Name");
    //  function name(a,b) {
    //      return a+b;
        
    //  }
    //  document.write("Greeting" + "   "+ name(a,b))

    3.//  var input1 = prompt("Enter 1st Number ");
    //  var input2 = prompt("Enter 2nd Number");
    //   function num( input1 , input2 ) {
    //        return input1 + input2 ;
    
    //   }
   
    //    document.write(num(+input1,+input2))
 
1.// function currentTime() {
//     var date = new Date()
//     var CurrentDate = date.getDate();
//     var CurrentTime = date.getTime();
//     alert("Current Date is: " + CurrentDate);
//     alert("Current Time is: " + CurrentTime);
// }

4.//     var num1 = prompt("Enter 1st Number ");
//     var opr = prompt ("Enter Operator");
//     var  num2 = prompt("Enter 2nd Number ");
//     function calc(num1,opr,num2) {
//      if (opr == "+"){
//          return +num1 + +num2;

//      }
//      else if(opr == "-"){
//         return num1-num2;

//     }
//    else if (opr == "*"){
//         return num1*num2;

//     }
//     else {
//         return "Incorrect Operator";
//     }
//         }
//         alert(calc(num1,opr,num2))

11.//  var char = prompt("Enter Text");
//  var firstChar = char.slice(0, 1);
//   var otherChars = char.slice(1);
//   firstChar = firstChar.toUpperCase();
//   otherChars = otherChars.toLowerCase();
//   var newChar = firstChar + otherChars;
//   function title() {
//      return firstChar + otherChars;
//   } 
//   document.write("User Input :" + char + "<br>" + "Output :" + title(firstChar , otherChars ));

6.// function factorial(x) {
//     if (x === 0) {
//         return 1;
//     }
//     return x * factorial(x - 1);
// }
// alert(factorial(5));

5.// var num = parseInt(prompt("Enter a number:"));
// function sumOfSquare(num) {
//     var sum = 0;
//     for (var i = 0; i <= num; i++) {
//         sum = i * i;
//     }
//     alert("The sum of squares " + num + " is " + sum);
// }
// sumOfSquare(num);