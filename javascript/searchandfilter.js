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
        var errorMessageDiv = document.getElementById('campus-error-message');
        errorMessageDiv.style.display = 'block'; 
        errorMessageDiv.innerHTML = 'Please select a campus';
        return false;
    }else{
        var errorMessageDiv = document.getElementById('campus-error-message');
        errorMessageDiv.style.display = 'none';
        errorMessageDiv.innerHTML = '';
    }

    var email = document.getElementById("email");
    if(email.value!=""){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
        if(!mailformat.test(email.value))
        {          
            alert("You have entered an invalid email address!");
        } 
    }
     
    var cityName = document.getElementById("cityName");
    if(cityName.value!=""){
        var mailformat = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;  
        if(!mailformat.test(cityName.value))
        {          
            alert("You have entered an invalid city name!");
        } 
    }
    return false;
}