function sum() {
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;
    let num3 = document.getElementById("thirdNumber").value;

    let sum = document.getElementById("result");
    const warning = document.getElementById("warning");

    if (!num1) {
        alert("Podaj pierwszą liczbę")
        return;
    }

    if (!num2) {
        num2 = 1;
    } else if(num2 > 10)
        num2 /= 2;

    if(num3 < 5) {
        warning.style.display = "block";
        warning.style.backgroundColor = "yellow";
    } else if(num3 > 50) {
        warning.style.display = "block";
        warning.style.backgroundColor = "red";
    }

    sum.innerHTML = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
    sum.style.display = "block"
}