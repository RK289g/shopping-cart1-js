document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumberfield = document.getElementById('phone-input-field');
    phoneNumberString = phoneNumberfield.value;
    previousPhoneNumber = parseInt(phoneNumberString);

    newPhoneNubmer = previousPhoneNumber + 1;
    phoneNumberfield.innerText = newPhoneNubmer;
    phoneNumberfield.value = newPhoneNubmer;

    const phoneTotal = newPhoneNubmer * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotal;

    const caseTotalElement = document.getElementById('case-total');
    const caseTotalString = caseTotalElement.innerText;
    caseTotal = parseInt(caseTotalString);

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

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneNumberfield = document.getElementById('phone-input-field');
    phoneNumberString = phoneNumberfield.value;
    previousPhoneNumber = parseInt(phoneNumberString);

    newPhoneNubmer = previousPhoneNumber - 1;
    phoneNumberfield.innerText = newPhoneNubmer;
    phoneNumberfield.value = newPhoneNubmer;

    const phoneTotal = newPhoneNubmer * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotal;

    const caseTotalElement = document.getElementById('case-total');
    const caseTotalString = caseTotalElement.innerText;
    caseTotal = parseInt(caseTotalString);

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