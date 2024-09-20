// Get the gender select element and the view element
var view = document.getElementById("calsection");

$("#BtnCal").on('click', function () {
    console.log("right");
    view.style.display = "block";
});

$(".closeBtn").on('click', function () {
    view.style.display = "none";
});

// On clicking the Calculate button
$("#CalBtn").on('click', function () {
    var height = $("#exampleFormControlInput3").val();
    var weight = $("#exampleFormControlInput4").val();
    var waist = $("#exampleFormControlInput6").val();
    var neck = $("#exampleFormControlInput5").val();

    // Get the selected gender from the dropdown
    var selectedGender = $("#genderSelect").val();

    // Check the selected gender and call the appropriate method
    if (selectedGender === "male") {
        maleCal(height, weight, waist, neck);
    } else if (selectedGender === "female") {
        femaleCal(height, weight, waist, neck);
    } else {
        alert("Please select a gender.");
    }
});

// Helper function to calculate BMI
function calculateBMI(height, weight, unit = 'metric') {
    height = Number(height);
    weight = Number(weight);

    if (unit === 'usc') {
        // For USC units
        return (weight / (height * height)) * 703;
    } else {
        // For Metric units
        return weight / ((height / 100) * (height / 100)); // Height in cm converted to meters
    }
}

// Male Calculation
function maleCal(height, weight, age, unit = 'metric') {
    height = Number(height);
    weight = Number(weight);
    age = Number(age);

    // Calculate BMI
    const bmi = calculateBMI(height, weight, unit);

    // Body fat percentage for adult males
    const bfp = 1.20 * bmi + 0.23 * age - 16.2;

    // Display calculated Body Fat Percentage
    $("#percentLabel").text(bfp.toFixed(2) + "%");
    console.log("Male Body Fat Percentage:", bfp);

    // Calculate Fat Mass (FM) and Lean Mass (LM)
    const fatMass = (bfp / 100) * weight;
    const leanMass = weight - fatMass;

    // Optionally display FM and LM in the UI
    $("#fatMassLabel").text(fatMass.toFixed(2) + " kg or lbs");
    $("#leanMassLabel").text(leanMass.toFixed(2) + " kg or lbs");

    console.log("Fat Mass (FM):", fatMass);
    console.log("Lean Mass (LM):", leanMass);
}

// Female Calculation
function femaleCal(height, weight, age, unit = 'metric') {
    height = Number(height);
    weight = Number(weight);
    age = Number(age);

    // Calculate BMI
    const bmi = calculateBMI(height, weight, unit);

    // Body fat percentage for adult females
    const bfp = 1.20 * bmi + 0.23 * age - 5.4;

    // Display calculated Body Fat Percentage
    $("#percentLabel").text(bfp.toFixed(2) + "%");
    console.log("Female Body Fat Percentage:", bfp);

    // Calculate Fat Mass (FM) and Lean Mass (LM)
    const fatMass = (bfp / 100) * weight;
    const leanMass = weight - fatMass;

    // Optionally display FM and LM in the UI
    $("#fatMassLabel").text(fatMass.toFixed(2) + " kg or lbs");
    $("#leanMassLabel").text(leanMass.toFixed(2) + " kg or lbs");

    console.log("Fat Mass (FM):", fatMass);
    console.log("Lean Mass (LM):", leanMass);
}

// Body fat percentage for boys
function boyCal(height, weight, age, unit = 'metric') {
    height = Number(height);
    weight = Number(weight);
    age = Number(age);

    const bmi = calculateBMI(height, weight, unit);
    const bfp = 1.51 * bmi - 0.70 * age - 2.2;

    $("#percentLabel").text(bfp.toFixed(2) + "%");
    console.log("Boy Body Fat Percentage:", bfp);
}

// Body fat percentage for girls
function girlCal(height, weight, age, unit = 'metric') {
    height = Number(height);
    weight = Number(weight);
    age = Number(age);

    const bmi = calculateBMI(height, weight, unit);
    const bfp = 1.51 * bmi - 0.70 * age + 1.4;

    $("#percentLabel").text(bfp.toFixed(2) + "%");
    console.log("Girl Body Fat Percentage:", bfp);
}
