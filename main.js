var gend;
var medicalHis;
var currentMed;


function submited() {
    var firstname = document.forms['submit-form']['firstname'].value;
    //console.log(firstname);

    var lastname = document.forms['submit-form']['lastname'].value;
    //console.log(lastname);

    var nationalElem = document.getElementById('nationals').value;
    //console.log(nationalElem);

    var address = document.forms['submit-form']['address'].value;
    //console.log(address);

    var currentMedicationArea = document.forms['submit-form']['currentMedicationArea'].value;
    //console.log(currentMedicationArea);

    if(firstname == null || lastname == null || nationalElem == null || address == null || currentMedicationArea == null || gend == null || medicalHis == null || currentMed == null) {
        alert("Please Fill All Required Field");
    }
    else {
        console.log("Completed")
    }
}

function genderFunc(value){
    gend = value;
    //console.log(value);
}

function medicalHistory(value) {
    medicalHis = value;
    //console.log(value);
}

function currentMedical(value) {
    currentMed = value;
    //console.log(value);
}

