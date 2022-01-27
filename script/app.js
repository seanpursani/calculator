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
                let total = calculate(calculateSum);
                input.innerHTML = total;
                numArr = [];
                calculateSum = [];
                
        }
    })
    

const calculate = (arr) => { 

    // Prevent INFINITY e.g. 6 / = INFINITY instead return 6;
    if (arr.length === 3 && arr[1] === "/" && arr[2] === 0) {
        return arr[0];
    }  
    
    // Give mulitply or dive special precedence
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] === "*") {
            let total = 0
            total = arr[i-1] * arr[i+1];
            console.log(arr[i-1], arr[i], arr[i+1])
            arr.splice(i-1, 3, total)
            console.log(arr);
        } else if (arr[i] === "/") {
            let total = 0
            total = arr[i-1] / arr[i+1];
            console.log(arr[i-1], arr[i], arr[i+1])
            arr.splice(i-1, 3, total)
            console.log(arr);
        }
    }

    let runningTotal = arr[0];
    for (let i = 1; i< arr.length; i+=2) {
        if (arr[i] === "+") {
            runningTotal = runningTotal + arr[i+1];
        } else if (arr[i] === "-") {
            runningTotal = runningTotal - arr[i+1];
        }
    }
    return runningTotal;
    
}
