// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let numA = Number(prompt("Enter the numer:?"));
if(numA % 2 === 0){
  alert(`numer is even`);
  }else{
    alert(`numer is Odd`)
  }

  
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number(prompt("Emter the first number:"))
let num2 = Number(prompt("Enter the second number "))
if(num1 > num2){
  alert(`${num1} is max`);
  }else{
    alert(`${num2} is max`);
  }

// 3. Convert the above code using`?` terniary operator
num1 > num2 ? alert(`${num1} is max`) : alert(`${num2} is max`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/


let housename = prompt("Enter the house name:?")

if(housename === "stark"){
  alert(`Winter is coming`);
}else if(housename === "lannister"){
  alert(`A lannister always pays his debt`);
}else{
  alert("All men must die");
}


// 5. Convert the above code using`?` terniary operator
housename === "stark" ?   alert(`Winter is coming`) : housename === "lannister" ?   alert(`A lannister always pays his debt`) :   alert("All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthName = prompt("Enter the name of the month :?")

switch(monthName){
  case "January":
    alert("number of days is 31");
    break;
    case "February":
      alert("number of days is 28");
      break;
      case "March":
        alert("number of days is 30");
        break;
        case "April":
          alert("number of days is 31");
          break;
          case "May":
            alert("number of days is 31");
            break;
            case "June":
              alert("number of days is 31");
              break;
              case "July":
                alert("number of days is 31");
                break;
                case "August":
                  alert("number of days is 31");
                  break;
                  case "September":
                    alert("number of days is 31");
                    break;
                    case "October":
                      alert("number of days is 30");
                      break;
                      case "November":
                        alert("number of days is 30");
                        break;
                        case "December":
                          alert("number of days is 30");
                          break;
                          default:
                            alert("Not a valid input!");
}



/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("Enter the salary of the user:"));
switch (true){
  case salary <= 20000:
     tax = (salary * 10) / 100;
     inHandAmount = salary - tax;
    alert(`your inhand  amount is ${inHandAmount}`);
    break;

  case salary <= 40000:
      tax = (salary * 20) / 100;
      inHandAmount = salary - tax;
     alert(`your in had amount is ${inHandAmount}`);
     break;

  case salary > 50000:
       tax = (salary * 30) / 100;
       inHandAmount = salary - tax;
      alert(`your in hand amount is ${inHandAmount}`);
      break;
      default:
        alert("Not a valid input!")
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("Enter yourr marks:"))
if (marks > 100) {
  alert(`Marks cam't be greater than 100`);
}else if(marks > 80 && marks < 100){
  alert(`Grade A`);
} else if(marks > 50 && marks < 80){
alert(`Grade B`);
} else if(marks > 30 && marks < 50){
  alert(`Grade C`);
} else if(marks > 0){
  alert("Grade D");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let condition = prompt("What is the weather outside?")
if(sunny){
  alert(`Wear a T-shirt`);
}else if(rainy){
  alert(`Don't forget to take your raincoat`);
}else if(hot){
  alert(`Get a hanky`);
}else if(freezing){
  alert(`Get your sweater on`);
} 