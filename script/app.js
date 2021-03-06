const buttons = document.querySelectorAll("button"); 
const input = document.querySelector("#input"); 
const interface = document.querySelector(".interface"); 
let numArr = [];
let calculateSum = [];


interface.addEventListener("click", (event) => {
    const calcButton = event.target;
        switch (calcButton.className) {
            case "num": 
                input.innerHTML = "";
                input.innerHTML += calcButton.innerHTML;
                numArr.push(calcButton.innerHTML);
                break;
            case "op":
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
                calculateSum.push(Number(numArr.join(''))); // join second number 
                let total = calculate(calculateSum);
                input.innerHTML = total;
                numArr = [];
                calculateSum = [];
                
        }
    })
    

const calculate = (arr) => { 

    // Prevent INFINITY e.g. 6 / = infinity, instead return 6;
    // e.g. [6, /] ----> Returns 6
    if (arr.length === 3 && arr[1] === "÷" && arr[2] === 0) {
        return arr[0];
    }  

    // Prevent e.g. 58 * = 0 so instead it = 58;
    if (arr.length === 3 && arr[1] === "*" && arr[2] === 0) {
        return arr[0];
    }  
    
    // Give MULTIPLY and DIVIDE precedence by calculating them first 
    // e.g. [(2, *, 2), +, (2, /, 2), -, (2, *, 2)] ---> [4, +, 1, -, 4]
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] === "*") {
            let total = 0
            total = arr[i-1] * arr[i+1];
            arr.splice(i-1, 3, total)
            i = 0; // reset index to Zero
        } else if (arr[i] === "÷") {
            let total = 0
            total = arr[i-1] / arr[i+1];
            arr.splice(i-1, 3, total)
            i = 0; 
        } else if (arr[i] === "%") {
            let total = 0
            total = arr[i-1] / 100;
            arr.splice(i-1, 3, total)
            i = 0; 
        }
    }

    // Do the +/- calculations to get total 
    let runningTotal = arr[0];
    for (let i = 1; i< arr.length; i+=2) {
        if (arr[i] === "+") {
            runningTotal = runningTotal + arr[i+1];
        } else if (arr[i] === "-") {
            runningTotal = runningTotal - arr[i+1];
        } 
    }


    if (runningTotal.toString().length === 4) {
        return runningTotal.toFixed(2);
    } else {
        return runningTotal;
    }
    

}
