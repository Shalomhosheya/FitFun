var view = document.getElementById("calsection")

$("#BtnCal").on('click', function () {
    console.log("right");
    view.style.display="block"    
});
    
$(".closeBtn").on('click', function () {
    view.style.display="none"
});
$("#CalBtn").on('click', function () {
    var height = $("#exampleFormControlInput3").val();
    var weight = $("#exampleFormControlInput4").val();
    var waist = $("#exampleFormControlInput6").val();
    var neck = $("#exampleFormControlInput5").val();

    maleCal(height, weight, waist,neck);
});
function maleCal(height, weight, waist, neck) {
    // Ensure all inputs are converted to numbers
    height = Number(height);
    waist = Number(waist);
    neck = Number(neck);

    // Calculate Body Density using the provided formula
    var bodyDensity = 1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height);

    // Convert Body Density to Body Fat Percentage using the formula
    var bfp = (495 / bodyDensity) - 450;

    // Set the calculated Body Fat Percentage to the label with id 'percentLabel'
    $("#percentLabel").text(bfp.toFixed(2) + "%");

    // Output the calculated body fat percentage in the console
    console.log("Body Fat Percentage:", bfp);
}



