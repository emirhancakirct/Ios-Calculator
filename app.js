let buttonsContainer = document.querySelector(".buttons-container");
let secondayDis = document.querySelector(".secondary-display");
let primaryDis = document.querySelector(".primary-display input");
let operator = "";
let number1 = "";
let number2 = "";
let result;


buttonsContainer.addEventListener('click', (t) => {

    if (t.target.classList.contains("number")) {
        if (operator.length === 0) {
            number1 += t.target.innerHTML;
            secondayDis.innerHTML = number1;
            primaryDis.value = number1;

        } else {
            number2 += t.target.innerHTML;
            secondayDis.innerHTML = `${number1} ${operator} ${number2}`; 
            primaryDis.value = generalCalc(number1, number2, operator);

        }

    }

    if ((t.target.classList.contains("operator") || (t.target.classList.contains("percent"))) && !t.target.classList.contains("equal")) {

        if (operator.length !== 0) {
            result = generalCalc(number1, number2, operator);
            number1 = result;
            number2 = "";
            operator = "";
        }
        operator = t.target.innerHTML;
        if (t.target.innerHTML === "x" || t.target.innerHTML === "÷" || t.target.innerHTML === "%") {
            secondayDis.innerHTML = `(${secondayDis.innerHTML})`; 
        }
        secondayDis.innerHTML += ` ${operator}`;
        primaryDis.value = "";
    }

  
    if (t.target.classList.contains("ac") || t.target.classList.contains("pm") || t.target.classList.contains("equal")) {
        operator = "";

        switch (t.target.innerHTML) {
            case "AC":
                number1 = "";
                number2 = "";
                secondayDis.innerHTML = "";
                primaryDis.value = "";
                break;
            case "=":
                number1 = primaryDis.value;
                number2 = "";
                secondayDis.innerHTML = `${number1}`;
                primaryDis.value = `${number1}`;
                number2 = "";
                break;
            case "±":
                number1 = -Number(primaryDis.value);
                number2 = "";
                secondayDis.innerHTML = `${number1}`;
                primaryDis.value = `${number1}`;
                number2 = "";
                break;
            default:
                break;
        }
    }

});

let generalCalc = (number1, number2, operator) =>{
    number1 = Number(number1);
    number2 = Number(number2);

    switch (operator) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "x":
            return number1 * number2;
        case "÷":
            return number1 / number2;
        case "%":
            return number1 % number2;
        default:
            return;
    }
}