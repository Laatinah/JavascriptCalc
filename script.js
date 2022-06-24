const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));

const operation = prompt("Enter operation (+, -, /, *)");

let result = 0;
if (isNaN(num1)|| isNaN(num2)){
  alert("Wrong input! Please click button below and enter data again" )
}else {
  if ( operation == "+"){
    result = num1 + num2;
  }else if (operation == "-"){
    result = num1 - num2;
  }else if (operation == "/"){
    result = num1 / num2;
  }else if (operation == "*"){
    result = num1 * num2;
  }
  alert (num1 + operation + num2 + "=" + result);
}

function runCalcAgain() {
  const num1 = parseFloat(prompt("Enter first number: "));
  const num2 = parseFloat(prompt("Enter second number: "));
  
  const operation = prompt("Enter operation (+, -, /, *)");
  
  let result = 0;
  if (isNaN(num1)|| isNaN(num2)){
  alert("Wrong input! Please click button below and enter data again" )
  }else {
    if ( operation == "+"){
      result = num1 + num2;
    }else if (operation == "-"){
      result = num1 - num2;
    }else if (operation == "/"){
      result = num1 / num2;
    }else if (operation == "*"){
      result = num1 * num2;
    }
    alert (num1 + operation + num2 + "=" + result);
  }
}