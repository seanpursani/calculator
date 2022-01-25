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
        }
        // if (currCalculation[-1] === "=") {
        //     const sum = currCalculation.map((num) => {
        //         if (num == Number) parseInt(num);
        //     })
        //     console.log(sum);
        // }
    })
}

const currCalculation = [];
console.log(currCalculation);