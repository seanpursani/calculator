calculator = {
    buttons: document.querySelectorAll("button"), // Calc Buttons
    input: document.querySelectorAll(".input"), // A Node List
    eventInterface: document.querySelector(".interface").addEventListener("click", (event) => {
        const calcButton = event.target;
        switch (calcButton.className) {
            case "num": 
                input.innerHTML += calcButton.innerHTML;
                currCalculation.push(calcButton.innerHTML);
                break;
            case "op":
                input.innerHTML = "";
                currCalculation.push(calcButton.innerHTML);
                break;
            case "res":
                currCalculation = [];
                input.innerHTML = "";
            case "equals":
                if (currCalculation.length > 0) {
                    let numArr = currCalculation.map((num) => (num == Number) ? Number(num));
                    console.log(numArr);
                }
        }
    })
}

let currCalculation = [];