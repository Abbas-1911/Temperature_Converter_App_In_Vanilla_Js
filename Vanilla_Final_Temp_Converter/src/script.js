function convertTemperature() {
    let temperature = document.getElementById("temperature").value;
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let resultText = document.getElementById("resultText");

    if (temperature === "" || isNaN(temperature)) {
        resultText.textContent = "Invalid Input";
        return;
    }

    let temp = parseFloat(temperature);
    let result = temp;

    // Convert to Celsius first
    if (fromUnit === "F") {
        result = (temp - 32) * 5 / 9;
    } else if (fromUnit === "K") {
        result = temp - 273.15;
    }

    // Convert from Celsius to target unit
    if (toUnit === "F") {
        result = (result * 9 / 5) + 32;
    } else if (toUnit === "K") {
        result = result + 273.15;
    }

    // Display result with 2 decimal places
    resultText.textContent = `Result: ${result.toFixed(2)} °${toUnit}`;
}
