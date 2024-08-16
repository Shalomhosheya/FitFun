var view = document.getElementById("calsection")

$("#BtnCal").on('click', function () {
    console.log("right");
    view.style.display="block"    
});
    
$(".closeBtn").on('click', function () {
    view.style.display="none"
});