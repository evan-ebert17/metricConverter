var selectOptFrom = document.getElementById("compareFrom");
var selectOptTo = document.getElementById("compareTo");
var selectedUni = document.querySelector(".selectedUnit");
var units = document.getElementById("unitSelect");
// var optVal = selectOptFrom.value;
// var metVal = 10**selectOptFrom.value
var convBtn = document.getElementById("convertBtn");
// selectedUni.textContent = units.value;


convBtn.addEventListener('click', function() {
    // alert(selectOptFrom.value);
    // alert(10**selectOptFrom.value)
    alert(selectedUni.innerHTML)
})






//whatever base unit the user selects, have the centi (whatever) section fill out the unit the user has selected.