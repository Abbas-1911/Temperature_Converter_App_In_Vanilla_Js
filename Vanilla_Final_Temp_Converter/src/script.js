document.addEventListener("DOMContentLoaded", () => {
    const tempInput = document.getElementById("tempInput");
    const unitSelect = document.getElementById("unitSelect");

    const convertTemperature = () => {
        let value = parseFloat(tempInput.value);
        let fromUnit = unitSelect.value;

        if (isNaN(value)) {
            document.getElementById("celsiusResult").innerHTML = `Celsius: -- °C`;
            document.getElementById("fahrenheitResult").innerHTML = `Fahrenheit: -- °F`;
            document.getElementById("kelvinResult").innerHTML = `Kelvin: -- K`;
            return;
        }

        const convert = (val, from, to) => {
            if (from === to) return val;

            let celsius;
            if (from === "C") celsius = val;
            else if (from === "F") celsius = (val - 32) * (5 / 9);
            else if (from === "K") celsius = val - 273.15;

            if (to === "C") return celsius;
            if (to === "F") return celsius * (9 / 5) + 32;
            if (to === "K") return celsius + 273.15;
        };

        document.getElementById("celsiusResult").innerHTML = `Celsius: ${convert(value, fromUnit, "C").toFixed(2)} °C`;
        document.getElementById("fahrenheitResult").innerHTML = `Fahrenheit: ${convert(value, fromUnit, "F").toFixed(2)} °F`;
        document.getElementById("kelvinResult").innerHTML = `Kelvin: ${convert(value, fromUnit, "K").toFixed(2)} K`;
    };

    tempInput.addEventListener("input", convertTemperature);
    unitSelect.addEventListener("change", convertTemperature);
});
