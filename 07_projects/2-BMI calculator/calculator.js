function calculateBMI() {

    let height = document.getElementById("height").value;

    let weight = document.getElementById("weight").value;

    let result = document.getElementById("result");

    // Validation
    if (height === "" || weight === "" || height <= 0 || weight <= 0) {

        result.innerHTML = "Please enter valid values!";

        return;
    }

    // Convert CM into Meter

    height = height / 100;

    // Calculate BMI
    let bmi = (weight / (height * height)).toFixed(2);

    let category;

    // Check BMI Category
    if (bmi < 18.5) {
        category = "Underweight";
    }

    else if (bmi < 25) {
        category = "Normal Weight";
    }

    else {
        category = "Overweight";
    }

    // Display Result
    result.innerHTML =
        "Your BMI is " + bmi +
        "<br>" + category;

}