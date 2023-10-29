document.addEventListener("DOMContentLoaded", function () {

    const tipForm = document.getElementById("tipForm");
    const billTotal = document.getElementById("billTotal");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipSlider = document.getElementById("tipSlider");
    const tipAmount = document.getElementById("tipAmount");
    const totalWithTip = document.getElementById("totalWithTip");

    tipForm.addEventListener("input", function () {
        const bill = parseFloat(billTotal.value);
        const percentage = tipSlider.value;
        if (isNaN(bill)) {
            alert("Please enter a valid number for the Bill Total.");
            tipPercentage.value = "";
            tipAmount.value = "";
            totalWithTip.value = "";
            return;
        }

        const tip = (bill * percentage) / 100;
        const total = bill + tip;

        tipPercentage.value = percentage + "%";
        tipAmount.value = tip.toFixed(2);
        totalWithTip.value = total.toFixed(2);
    });

    const container = document.getElementById('colorChangeContainer');
    function changeColor() {
  // Generate a random color in hexadecimal format
    const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  // Apply the new color
    container.style.backgroundColor = randomColor;
    }
  // Change the color every 3 seconds (3000 milliseconds)
    setInterval(changeColor, 3000);

});
