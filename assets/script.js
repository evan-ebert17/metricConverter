var selectOptFrom = document.getElementById("compareFrom");
var selectOptTo = document.getElementById("compareTo");
var selectedUni = document.querySelector(".selectedUnit");
var textFrom = document.getElementById("convertFrom")
var textTo = document.getElementById("convertTo")
var units = document.getElementById("unitSelect");
// var optVal = selectOptFrom.value;
// var metVal = 10**selectOptFrom.value
var convBtn = document.getElementById("convertBtn");
// selectedUni.textContent = units.value;


convBtn.addEventListener('click', function () {
    //take value, make that the exponent
    //when clicked, turns the other thing into the exponent of that form.
    if (textFrom.value == "" || isNaN(textFrom.value)) {
        alert("Please type a number into the left-hand box before converting.")
    } else {
        //subtract value from value to get amount to move over
        if(selectOptFrom.value < 0) {
            var exponentGiveNeg = selectOptFrom + selectOptTo;
            textTo.value = 10**exponentGiveNeg;
        } else if(selectOptFrom.value && selectOptTo.value > 0){
            var exponentGivePos = selectOptFrom - selectOptTo;
            textTo.value = 10**exponentGivePos;
        }
        console.log(textTo.value);
    }
})






//whatever base unit the user selects, have the centi (whatever) section fill out the unit the user has selected.