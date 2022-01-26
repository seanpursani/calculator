calculator = {
    buttons: document.querySelectorAll("button"), // Calc Buttons
    input: document.querySelectorAll(".input"), // A Node List
    eventInterface: document.querySelector(".interface").addEventListener("click", (event) => {
        const calcButton = event.target;
        switch (calcButton.className) {
            case "num": 
                input.innerHTML += calcButton.innerHTML;
                num.push(Number(calcButton.innerHTML));
                console.log(currCalculation);
                break;
            case "op":
                // joining first number
                num.join('');
                // clear the array 
                // store the operator 
                input.innerHTML = "";
                currCalculation.push(calcButton.innerHTML);
                console.log(currCalculation);
                break;
            case "res":
                currCalculation = [];
                input.innerHTML = "";
                console.log(currCalculation);
            case "equals":
                // join second number 
                // do maths 
                if (currCalculation.length > 0) {
                }
        }
    })
}

let currCalculation = [];
let num1 = [];
