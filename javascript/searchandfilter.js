function validateForm() {
    var radios = document.getElementsByName('campus');
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            formValid = true;
            break;
        }
    }

    if (!formValid) {
        alert('Please select a campus');
    }

    return formValid;
}