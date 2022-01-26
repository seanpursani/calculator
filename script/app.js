const buttons = document.querySelectorAll("button"); 
const input = document.querySelector("#input"); 
const interface = document.querySelector(".interface"); 
let numArr = [];
let calculateSum = [];

interface.addEventListener("click", (event) => {
    const calcButton = event.target;
        switch (calcButton.className) {
            case "num": 
                input.innerHTML += calcButton.innerHTML;
                numArr.push(calcButton.innerHTML);
                break;
            case "op":
                // if the most recent value is NaN 
                calculateSum.push(Number(numArr.join(''))); // joining first number
                numArr = []; // clear the number array 
                calculateSum.push(calcButton.innerHTML) // store the operator 
                input.innerHTML = "";
                break;
            case "res":
                numArr = [];
                calculateSum = [];
                input.innerHTML = "";
            case "equals":
                // Can't end on operation HAS to be number UNLESS percent
                // if anything NaN throw error
                calculateSum.push(Number(numArr.join(''))); // join second number 
                console.log(calculateSum);
                let total = calculate(calculateSum);
                input.innerHTML = total;
                numArr = [];
                calculateSum = [];
                
        }
    })
    
const calculate = (arr) => {
    let runningTotal = arr[0];
    for (let i = 1; i< arr.length; i+=2) {
        if (arr[i] === "*") {
            runningTotal = runningTotal * arr[i+1];
        } else if (arr[i] === "%") {
            runningTotal = runningTotal / 100;
            // maybe return
        } else if (arr[i] === "/") {
            runningTotal = runningTotal / arr[i+1];
        } else if (arr[i] === "-") {
            runningTotal = runningTotal - arr[i+1];
        } else {
            runningTotal = runningTotal + arr[i+1];
        }
    return runningTotal;
    }
}