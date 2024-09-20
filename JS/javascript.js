// Get the gender select element and the view element
var view = document.getElementById("calsection");

$("#BtnCal").on('click', function () {
    console.log("right");
    view.style.display = "block";
});

$(".closeBtn").on('click', function () {
    view.style.display = "none";
});

$("#genderSelect").on('change', function () {
    var selectedGender = $("#genderSelect").val();

    if (selectedGender === "female") {
        $('#hipLenght').css("display", "block"); 
    } else {
        $('#hipLenght').css("display", "none"); 
    }
});

// On clicking the Calculate button
$("#CalBtn").on('click', function () {
    var age = Number($("#exampleFormControlInput2").val()); 
    var height = $("#exampleFormControlInput3").val();
    var weight = $("#exampleFormControlInput4").val();
    var waist = $("#exampleFormControlInput6").val();
    var neck = $("#exampleFormControlInput5").val();
    var hip = $("#exampleFormControlInput7").val(); 

    var selectedGender = $("#genderSelect").val();

    if (selectedGender === "male") {
        $('#hipLenght').css("display", "none");
    }

    if (selectedGender === "male" && age >= 18) {
        maleCal(height, weight, waist, neck);
    } else if (selectedGender === "male" && age <= 17) {
        boyCal(height, weight, waist, neck);
    } else if (selectedGender === "female" && age >= 18) {
        femaleCal(height, weight, waist, neck, hip);
    } else if (selectedGender === "female" && age <= 17) {
        girlCal(height, weight, waist, neck, hip);
    } else {
        alert("Please fill all blanks");
    }
});



// Helper function to calculate BMI
function calculateBMI(height, weight, unit = 'metric') {
    height = Number(height);
    weight = Number(weight);

    if (unit === 'usc') {
        return (weight / (height * height)) * 703;
    } else {
        return weight / ((height / 100) * (height / 100));     }
}

// Helper function to calculate BMI
function calculateBMI(height, weight, unit = 'metric') {
    height = Number(height);
    weight = Number(weight);

    if (unit === 'usc') {
        // For USC units (height in inches, weight in lbs)
        return (weight / (height * height)) * 703;
    } else {
        // For Metric units (height in cm, weight in kg)
        return weight / ((height / 100) * (height / 100)); // Height in cm converted to meters
    }
}

// Male Calculation
function maleCal(height, weight, waist, neck, unit = 'metric') {
    height = Number(height);
    weight = Number(weight);
    waist = Number(waist);
    neck = Number(neck);

    let bfp;

    if (unit === 'usc') {
        // USC formula for males: height in inches, waist and neck in inches
        bfp = 86.010 * Math.log10(waist - neck) 
            - 70.041 * Math.log10(height) 
            + 36.76;
    } else {
        const bodyDensity = 1.0324 
            - 0.19077 * Math.log10(waist - neck) 
            + 0.15456 * Math.log10(height);
        
        bfp = (495 / bodyDensity) - 450;
    }

    $("#percentLabel").text(bfp.toFixed(2) + "%");
    console.log("Male Body Fat Percentage:", bfp);

    const fatMass = (bfp / 100) * weight;
    const leanMass = weight - fatMass;

    $("#fatMassLabel").text(fatMass.toFixed(2) + " kg");
    $("#leanMassLabel").text(leanMass.toFixed(2) + " kg");

    console.log("Fat Mass (FM):", fatMass);
    console.log("Lean Mass (LM):", leanMass);
}

// Female Calculation
function femaleCal(height, weight, waist, neck, hip, unit = 'metric') {
    height = Number(height);
    weight = Number(weight);
    waist = Number(waist);
    neck = Number(neck);
    hip = Number(hip); // hip required for female calculation

    let bfp;

    if (unit === 'usc') {
        bfp = 163.205 * Math.log10(waist + hip - neck) 
            - 97.684 * Math.log10(height) 
            - 78.387;
    } else {
        const bodyDensity = 1.29579 
            - 0.35004 * Math.log10(waist + hip - neck) 
            + 0.22100 * Math.log10(height);
        
        bfp = (495 / bodyDensity) - 450;
    }

    $("#percentLabel").text(bfp.toFixed(2) + "%");
    console.log("Female Body Fat Percentage:", bfp);

    const fatMass = (bfp / 100) * weight;
    const leanMass = weight - fatMass;

    $("#fatMassLabel").text(fatMass.toFixed(2) + " kg");
    $("#leanMassLabel").text(leanMass.toFixed(2) + " kg");

    console.log("Fat Mass (FM):", fatMass);
    console.log("Lean Mass (LM):", leanMass);
}

function boyCal(height, weight, age, unit = 'metric') {
    height = Number(height);
    weight = Number(weight);
    age = Number(age);

    const bmi = calculateBMI(height, weight, unit);
    const bfp = 1.51 * bmi - 0.70 * age - 2.2;

    $("#percentLabel").text(bfp.toFixed(2) + "%");
    console.log("Boy Body Fat Percentage:", bfp);
}

function girlCal(height, weight, age, unit = 'metric') {
    height = Number(height);
    weight = Number(weight);
    age = Number(age);

    const bmi = calculateBMI(height, weight, unit);
    const bfp = 1.51 * bmi - 0.70 * age + 1.4;

    $("#percentLabel").text(bfp.toFixed(2) + "%");
    console.log("Girl Body Fat Percentage:", bfp);
}
