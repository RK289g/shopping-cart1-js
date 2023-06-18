document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    //console.log(previousCaseNumber);

    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;

    const caseTotal = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotal;

    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalString = phoneTotalElement.innerText;
    phoneTotal = parseInt(phoneTotalString);

    const subTotalElement = document.getElementById('sub-total');
    const subTotal = phoneTotal + caseTotal;
    subTotalElement.innerText = subTotal;

    const taxElement = document.getElementById('tax');
    const taxString = (subTotal * 0.05).toFixed(2);
    const tax = parseFloat(taxString);
    taxElement.innerText = tax;

    const totalElement = document.getElementById('total');
    totalElement.innerText = subTotal + tax;


})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    console.log(previousCaseNumber);

    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;

    const caseTotal = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotal;

    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalString = phoneTotalElement.innerText;
    phoneTotal = parseInt(phoneTotalString);

    const subTotalElement = document.getElementById('sub-total');
    const subTotal = phoneTotal + caseTotal;
    subTotalElement.innerText = subTotal;

    const taxElement = document.getElementById('tax');
    const taxString = (subTotal * 0.05).toFixed(2);
    const tax = parseFloat(taxString);
    taxElement.innerText = tax;

    const totalElement = document.getElementById('total');
    totalElement.innerText = subTotal + tax;
})